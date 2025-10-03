/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD do USUÁRIO.
 * DATA: 28/09/2025 (ajustado 30/09/2025)
 * AUTOR: Daniel Torres
 * Versão: 2.0 (Refatorado com Prisma ORM)
 ***************************************************************************************/

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const MESSAGE = require('../../modulo/config.js')
const viaCep = require('../../viaCep.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//============================== INSERIR ==============================
const inserirUsuario = async function(dadosUsuario, contentType){
    try{
        if(String(contentType).toLowerCase() !== 'application/json'){
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if (
            !dadosUsuario.nome  || dadosUsuario.nome.length  > 70  ||
            !dadosUsuario.email || dadosUsuario.email.length > 100 ||
            !dadosUsuario.senha || dadosUsuario.senha.length < 8   || dadosUsuario.senha.length > 255 ||
            !dadosUsuario.id_sexo || isNaN(dadosUsuario.id_sexo)
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        // Validações de campos opcionais
        if (
            (dadosUsuario.cpf && String(dadosUsuario.cpf).length > 15) ||
            (dadosUsuario.cep && String(dadosUsuario.cep).length > 10) ||
            (dadosUsuario.data_nascimento && isNaN(Date.parse(dadosUsuario.data_nascimento))) ||
            (dadosUsuario.id_tipo_sanguineo && isNaN(dadosUsuario.id_tipo_sanguineo)) || 
            (dadosUsuario.foto_perfil && dadosUsuario.foto_perfil.length > 255)
        ) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        // Busca de endereço via CEP, se informado
        if(dadosUsuario.cep){
            const dadosEndereco = await viaCep.buscarCep(dadosUsuario.cep)
            if(dadosEndereco.erro){
                return { status: false, status_code: 400, message: dadosEndereco.message }
            }
            dadosUsuario.logradouro = dadosEndereco.logradouro
            dadosUsuario.bairro = dadosEndereco.bairro
            dadosUsuario.localidade = dadosEndereco.localidade
            dadosUsuario.uf = dadosEndereco.uf
        }

        // Gera hash da senha
        const senhaHash = await bcrypt.hash(dadosUsuario.senha, 10)

        // Monta o objeto para o Prisma
        const novoUsuario = {
            nome: dadosUsuario.nome,
            email: dadosUsuario.email.toLowerCase(),
            senha_hash: senhaHash,
            cpf: dadosUsuario.cpf,
            cep: dadosUsuario.cep,
            logradouro: dadosUsuario.logradouro,
            bairro: dadosUsuario.bairro,
            localidade: dadosUsuario.localidade,
            uf: dadosUsuario.uf,
            numero: dadosUsuario.numero,
            data_nascimento: dadosUsuario.data_nascimento ? new Date(dadosUsuario.data_nascimento) : null,
            foto_perfil: dadosUsuario.foto_perfil,
            id_sexo: Number(dadosUsuario.id_sexo),
            id_tipo_sanguineo: dadosUsuario.id_tipo_sanguineo ? Number(dadosUsuario.id_tipo_sanguineo) : null
        }

        const usuarioCriado = await prisma.tbl_usuario.create({
            data: novoUsuario,
            select: {
                id: true,
                nome: true,
                email: true,
                cpf: true,
                cep: true,
                data_nascimento: true,
                foto_perfil: true,
                sexo: { select: { sexo: true } },
                tipo_sanguineo: { select: { tipo: true } }
            }
        })

        return {
            status: true,
            status_code: 201,
            message: "Usuário criado com sucesso",
            usuario: usuarioCriado
        }

    }catch(error){
        console.error("Erro no controller inserirUsuario:", error)
        if (error.code === 'P2002') { // Erro de campo único duplicado
            return { status: false, status_code: 409, message: `Erro: ${error.meta.target.join(', ')} já está em uso.` }
        }
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== ATUALIZAR ==============================
const atualizarUsuario = async function(dadosUsuario, idUsuario, contentType){
    try{
        if(String(contentType).toLowerCase() !== 'application/json'){
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if (!idUsuario || isNaN(idUsuario)) {
            return MESSAGE.ERROR_INVALID_ID
        }

        // Validações de campos obrigatórios
        if (
            !dadosUsuario.nome  || dadosUsuario.nome.length  > 70  ||
            !dadosUsuario.email || dadosUsuario.email.length > 100 ||
            !dadosUsuario.id_sexo || isNaN(dadosUsuario.id_sexo)
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const usuarioAtual = await prisma.tbl_usuario.findUnique({ where: { id: Number(idUsuario) }})
        if (!usuarioAtual) {
            return MESSAGE.ERROR_NOT_FOUND
        }

        // Busca de endereço via CEP, se informado
        if(dadosUsuario.cep && dadosUsuario.cep !== usuarioAtual.cep){
            const dadosEndereco = await viaCep.buscarCep(dadosUsuario.cep)
            if(dadosEndereco.erro){
                return { status: false, status_code: 400, message: dadosEndereco.message }
            }
            dadosUsuario.logradouro = dadosEndereco.logradouro
            dadosUsuario.bairro = dadosEndereco.bairro
            dadosUsuario.localidade = dadosEndereco.localidade
            dadosUsuario.uf = dadosEndereco.uf
        }

        // Monta o objeto para o Prisma
        const dadosUpdate = {
            nome: dadosUsuario.nome,
            email: dadosUsuario.email.toLowerCase(),
            cpf: dadosUsuario.cpf,
            cep: dadosUsuario.cep,
            logradouro: dadosUsuario.logradouro,
            bairro: dadosUsuario.bairro,
            localidade: dadosUsuario.localidade,
            uf: dadosUsuario.uf,
            numero: dadosUsuario.numero,
            data_nascimento: dadosUsuario.data_nascimento ? new Date(dadosUsuario.data_nascimento) : null,
            foto_perfil: dadosUsuario.foto_perfil,
            id_sexo: Number(dadosUsuario.id_sexo),
            id_tipo_sanguineo: dadosUsuario.id_tipo_sanguineo ? Number(dadosUsuario.id_tipo_sanguineo) : null
        }

        const usuarioAtualizado = await prisma.tbl_usuario.update({
            where: { id: Number(idUsuario) },
            data: dadosUpdate,
            select: {
                id: true,
                nome: true,
                email: true,
                // ... outros campos que desejar retornar
            }
        })

        return {
            status: true,
            status_code: 200,
            message: MESSAGE.SUCCESS_UPDATE_ITEM.message,
            usuario: usuarioAtualizado
        }

    }catch(error){
        console.error("Erro no controller atualizarUsuario:", error)
        if (error.code === 'P2002') {
            return { status: false, status_code: 409, message: `Erro: ${error.meta.target.join(', ')} já está em uso.` }
        }
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}


//============================== EXCLUIR ==============================
const excluirUsuario = async function(idUsuario){
    try{
        if(!idUsuario || isNaN(idUsuario)){
            return MESSAGE.ERROR_INVALID_ID
        }

        const usuario = await prisma.tbl_usuario.findUnique({ where: { id: Number(idUsuario) }})
        if(!usuario){
            return MESSAGE.ERROR_NOT_FOUND
        }

        await prisma.tbl_usuario.delete({ where: { id: Number(idUsuario) }})
        
        return MESSAGE.SUCCESS_DELETE_ITEM

    }catch(error){
        console.error("Erro no controller excluirUsuario:", error)
        // Tratar erros de restrição de chave estrangeira, se necessário
        if (error.code === 'P2003') {
            return { status: false, status_code: 409, message: "Não é possível excluir o usuário pois ele está associado a outros registros." }
        }
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== LISTAR TODOS ==============================
const listarUsuarios = async function(){
    try{
        const usuarios = await prisma.tbl_usuario.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                cpf: true,
                cep: true,
                logradouro: true,
                bairro: true,
                localidade: true,
                uf: true,
                numero: true,
                data_nascimento: true,
                foto_perfil: true,
                sexo: { select: { sexo: true } },
                tipo_sanguineo: { select: { tipo: true } }
            }
        })

        if(usuarios && usuarios.length > 0){
            return { status: true, status_code: 200, quantidade: usuarios.length, usuarios: usuarios }
        } else {
            return MESSAGE.ERROR_NOT_FOUND
        }

    }catch(error){
        console.error("Erro no controller listarUsuarios:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}


//============================== BUSCAR POR ID ==============================
const buscarUsuario = async function(idUsuario){
    try{
        if(!idUsuario || isNaN(idUsuario)){
            return MESSAGE.ERROR_INVALID_ID
        }

        const usuario = await prisma.tbl_usuario.findUnique({
            where: { id: Number(idUsuario) },
            select: {
                id: true,
                nome: true,
                email: true,
                cpf: true,
                cep: true,
                logradouro: true,
                bairro: true,
                localidade: true,
                uf: true,
                numero: true,
                data_nascimento: true,
                foto_perfil: true,
                sexo: { select: { id: true, sexo: true } },
                tipo_sanguineo: { select: { id: true, tipo: true } }
            }
        })

        if(usuario){
            return { status: true, status_code: 200, usuario: usuario }
        } else {
            return MESSAGE.ERROR_NOT_FOUND
        }

    }catch(error){
        console.error("Erro no controller buscarUsuario:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== LOGIN ==============================
const loginUsuario = async function (dadosLogin, contentType) {
    try {
        if (String(contentType).toLowerCase() !== 'application/json') {
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if (!dadosLogin.email || !dadosLogin.senha) {
            return { status: false, status_code: 400, message: "Email e senha são obrigatórios." }
        }

        const usuario = await prisma.tbl_usuario.findUnique({
            where: { email: dadosLogin.email.toLowerCase() }
        })

        if (!usuario) {
            return { status: false, status_code: 401, message: "Usuário ou senha inválidos." }
        }

        const senhaCorreta = await bcrypt.compare(dadosLogin.senha, usuario.senha_hash)
        if (!senhaCorreta) {
            return { status: false, status_code: 401, message: "Usuário ou senha inválidos." }
        }

        const payload = { id: usuario.id, nome: usuario.nome, email: usuario.email }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES || '1h' })

        // Retorna o token e os dados do usuário (sem a senha)
        const { senha_hash, ...usuarioSemSenha } = usuario;

        return {
            status: true,
            status_code: 200,
            message: "Login bem-sucedido!",
            token,
            usuario: usuarioSemSenha
        };
    } catch (error) {
        console.error("Erro no controller loginUsuario:", error);
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
};


module.exports = {
    inserirUsuario,
    atualizarUsuario,
    excluirUsuario,
    listarUsuarios,
    buscarUsuario,
    loginUsuario
}