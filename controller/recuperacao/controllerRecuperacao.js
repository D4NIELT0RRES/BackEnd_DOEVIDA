/***************************************************************************************
 * OBJETIVO: Controller responsável pela recuperação de senha dos usuários.
 * DATA: 30/09/2025
 * AUTOR: Daniel Torres
 * Versão: 2.0 (Integrado com envio de email)
 ***************************************************************************************/

const { PrismaClient } = require('../../prisma/generated/client')
const prisma = new PrismaClient()
const MESSAGE = require('../../modulo/config.js')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const emailService = require('../../service/emailService.js')

//Solicitar recuperação de senha
const solicitarRecuperacao = async function(email, contentType) {
    try {
        if (String(contentType).toLowerCase() !== 'application/json') {
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if (!email || !email.includes('@')) {
            return { status: false, status_code: 400, message: "Email válido é obrigatório" }
        }

        // Buscar usuário pelo email
        const usuario = await prisma.tbl_usuario.findUnique({
            where: { email: email.toLowerCase() },
            select: { id: true, nome: true, email: true }
        })

        if (!usuario) {
            // Por segurança, retornamos sucesso mesmo se o email não existir
            return {
                status: true,
                status_code: 200,
                message: "Se o email existir em nossa base, você receberá as instruções de recuperação"
            }
        }

        // Gerar código de 6 dígitos
        const codigo = crypto.randomInt(100000, 999999).toString()

        // Limpar códigos antigos deste usuário
        await prisma.tbl_recuperacao_senha.deleteMany({
            where: { id_usuario: usuario.id }
        })

        // Criar novo registro de recuperação
        await prisma.tbl_recuperacao_senha.create({
            data: {
                id_usuario: usuario.id,
                codigo: codigo,
                usado: false
            }
        })

        // Enviar email com o código
        const resultadoEmail = await emailService.enviarEmailRecuperacao(
            usuario.email, 
            usuario.nome, 
            codigo
        )

        if (!resultadoEmail.sucesso) {
            console.error('Erro no envio do email:', resultadoEmail.erro)
            return {
                status: false,
                status_code: 500,
                message: "Erro interno. Tente novamente mais tarde."
            }
        }

        return {
            status: true,
            status_code: 200,
            message: "Código de recuperação enviado para seu email"
        }

    } catch (error) {
        console.error("Erro no controller solicitarRecuperacao:", error)
        return {
            status: false,
            status_code: 500,
            message: "Erro interno no servidor"
        }
    }
}

//Redefinir senha
const redefinirSenha = async function(codigo, novaSenha, contentType) {
    try {
        if (String(contentType).toLowerCase() !== 'application/json') {
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if (!codigo || !novaSenha) {
            return { status: false, status_code: 400, message: "Código e nova senha são obrigatórios" }
        }

        if (novaSenha.length < 8) {
            return { status: false, status_code: 400, message: "A nova senha deve ter pelo menos 8 caracteres" }
        }

        // Buscar código de recuperação válido (não usado e criado há menos de 15 minutos)
        const recuperacao = await prisma.tbl_recuperacao_senha.findFirst({
            where: {
                codigo: codigo,
                usado: false,
                criado_em: {
                    gte: new Date(Date.now() - 15 * 60 * 1000) // 15 minutos atrás
                }
            },
            include: {
                tbl_usuario: { select: { id: true, nome: true, email: true } }
            }
        })

        if (!recuperacao) {
            return {
                status: false,
                status_code: 400,
                message: "Código inválido ou expirado"
            }
        }

        // Gerar hash da nova senha
        const senhaHash = await bcrypt.hash(novaSenha, 10)

        // Atualizar senha do usuário
        await prisma.tbl_usuario.update({
            where: { id: recuperacao.id_usuario },
            data: { senha_hash: senhaHash }
        })

        // Marcar código como usado
        await prisma.tbl_recuperacao_senha.update({
            where: { id: recuperacao.id },
            data: { usado: true }
        })

        return {
            status: true,
            status_code: 200,
            message: "Senha redefinida com sucesso"
        }

    } catch (error) {
        console.error("Erro no controller redefinirSenha:", error)
        return {
            status: false,
            status_code: 500,
            message: "Erro interno no servidor"
        }
    }
}

module.exports = {
    solicitarRecuperacao,
    redefinirSenha
}
