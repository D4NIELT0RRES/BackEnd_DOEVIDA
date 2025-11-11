/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a USUÁRIO no BANCO DE DADOS.
 * DATA: 18/09/2025 (ajustado 28/09/2025)
 * AUTOR: Daniel Torres
 * Versão: 1.3 (corrigido JOINs e nomes das tabelas/colunas)
 ***************************************************************************************/

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//Inserir um novo usuário
const insertUsuario = async function (usuario) {
    try {
        // Usar Prisma ORM com prepared statements - previne SQL Injection
        const result = await prisma.tbl_usuario.create({
            data: {
                nome: usuario.nome,
                email: usuario.email,
                senha_hash: usuario.senha_hash,
                cpf: usuario.cpf || null,
                cep: usuario.cep || null,
                data_nascimento: usuario.data_nascimento || null,
                id_tipo_sanguineo: usuario.id_tipo_sanguineo || null,
                logradouro: usuario.logradouro || null,
                bairro: usuario.bairro || null,
                localidade: usuario.localidade || null,
                uf: usuario.uf || null,
                numero: usuario.numero || null,
                id_sexo: usuario.id_sexo || null,
                foto_perfil: usuario.foto_perfil || null
            },
            include: {
                sexo: {
                    select: { sexo: true }
                },
                tbl_tipo_sanguineo: {
                    select: { tipo: true }
                }
            }
        })

        if (result) {
            // Retornar no formato esperado
            return {
                id: result.id,
                nome: result.nome,
                email: result.email,
                senha_hash: result.senha_hash,
                cpf: result.cpf,
                cep: result.cep,
                tipo_sanguineo_nome: result.tbl_tipo_sanguineo?.tipo || null,
                data_nascimento: result.data_nascimento,
                foto_perfil: result.foto_perfil,
                data_criacao: result.data_criacao,
                data_atualizacao: result.data_atualizacao,
                logradouro: result.logradouro,
                bairro: result.bairro,
                localidade: result.localidade,
                uf: result.uf,
                numero: result.numero,
                nome_sexo: result.sexo?.sexo || null
            }
        }
        
        return false

    } catch (error) {
        console.error("Erro na DAO insertUsuario:", error);
        return false;
    }
};


//Atualizar um usuário existente pelo ID
const updateUsuario = async function (usuario) {
    try {
        // Usar Prisma ORM - previne SQL Injection
        const result = await prisma.tbl_usuario.update({
            where: { id: usuario.id },
            data: {
                nome: usuario.nome,
                email: usuario.email,
                senha_hash: usuario.senha_hash,
                cpf: usuario.cpf || null,
                cep: usuario.cep || null,
                logradouro: usuario.logradouro || null,
                bairro: usuario.bairro || null,
                localidade: usuario.localidade || null,
                uf: usuario.uf || null,
                numero: usuario.numero || null,
                data_nascimento: usuario.data_nascimento || null,
                foto_perfil: usuario.foto_perfil || null,
                id_tipo_sanguineo: usuario.id_tipo_sanguineo || null,
                id_sexo: usuario.id_sexo || null
            },
            include: {
                sexo: { select: { sexo: true } },
                tbl_tipo_sanguineo: { select: { tipo: true } }
            }
        })

        if (result) {
            return {
                id: result.id,
                nome: result.nome,
                email: result.email,
                senha_hash: result.senha_hash,
                cpf: result.cpf,
                cep: result.cep,
                tipo_sanguineo_nome: result.tbl_tipo_sanguineo?.tipo || null,
                data_nascimento: result.data_nascimento,
                foto_perfil: result.foto_perfil,
                data_criacao: result.data_criacao,
                data_atualizacao: result.data_atualizacao,
                logradouro: result.logradouro,
                bairro: result.bairro,
                localidade: result.localidade,
                uf: result.uf,
                numero: result.numero,
                nome_sexo: result.sexo?.sexo || null
            }
        }
        
        return false
    } catch (error) {
        console.error("Erro na DAO updateUsuario:", error)
        return false
    }
}

// Atualizar senha do usuário
const updateSenha = async (idUsuario, senhaHash) => {
    try {
        // Usar Prisma ORM - previne SQL Injection
        const result = await prisma.tbl_usuario.update({
            where: { id: idUsuario },
            data: { senha_hash: senhaHash }
        })
        return result ? true : false
    } catch (error) {
        console.error("ERRO updateSenha:", error)
        return false
    }
}

//Deletar um usuário pelo ID
const deleteUsuario = async function (id) {
    try {
        // Usar Prisma ORM - previne SQL Injection
        const result = await prisma.tbl_usuario.delete({
            where: { id: id }
        })
        return result ? true : false
    } catch (error) {
        console.error("Erro na DAO deleteUsuario:", error)
        return false
    }
}

//Listar todos os usuários
const selectAllUsuario = async function () {
    try {
        // Usar Prisma ORM - previne SQL Injection e tem melhor performance
        const result = await prisma.tbl_usuario.findMany({
            include: {
                sexo: { select: { sexo: true } },
                tbl_tipo_sanguineo: { select: { tipo: true } }
            },
            orderBy: { id: 'asc' }
        })

        if (result && result.length > 0) {
            return result.map(u => ({
                id: u.id,
                nome: u.nome,
                email: u.email,
                senha_hash: u.senha_hash,
                cpf: u.cpf,
                cep: u.cep,
                logradouro: u.logradouro,
                bairro: u.bairro,
                localidade: u.localidade,
                uf: u.uf,
                numero: u.numero,
                tipo_sanguineo_nome: u.tbl_tipo_sanguineo?.tipo || null,
                data_nascimento: u.data_nascimento,
                foto_perfil: u.foto_perfil,
                data_criacao: u.data_criacao,
                data_atualizacao: u.data_atualizacao,
                nome_sexo: u.sexo?.sexo || null
            }))
        }
        
        return false
    } catch (error) {
        console.error("Erro na DAO selectAllUsuario:", error)
        return false
    }
}

//Buscar usuário pelo ID
const selectByIdUsuario = async function (id) {
    try {
        // Usar Prisma ORM - previne SQL Injection
        const result = await prisma.tbl_usuario.findUnique({
            where: { id: id },
            include: {
                sexo: { select: { sexo: true } },
                tbl_tipo_sanguineo: { select: { tipo: true } }
            }
        })

        if (result) {
            return {
                id: result.id,
                nome: result.nome,
                email: result.email,
                senha_hash: result.senha_hash,
                cpf: result.cpf,
                cep: result.cep,
                tipo_sanguineo_nome: result.tbl_tipo_sanguineo?.tipo || null,
                data_nascimento: result.data_nascimento,
                foto_perfil: result.foto_perfil,
                data_criacao: result.data_criacao,
                data_atualizacao: result.data_atualizacao,
                nome_sexo: result.sexo?.sexo || null
            }
        }
        
        return false
    } catch (error) {
        console.error("Erro na DAO selectByIdUsuario:", error)
        return false
    }
}

//Buscar usuário pelo email
const selectByEmailUsuario = async function (email) {
    try {
        // Usar Prisma ORM - previne SQL Injection
        const result = await prisma.tbl_usuario.findUnique({
            where: { email: email },
            include: {
                sexo: { select: { sexo: true } },
                tbl_tipo_sanguineo: { select: { tipo: true } }
            }
        })

        if (result) {
            return {
                id: result.id,
                nome: result.nome,
                email: result.email,
                senha_hash: result.senha_hash,
                cpf: result.cpf,
                cep: result.cep,
                tipo_sanguineo_nome: result.tbl_tipo_sanguineo?.tipo || null,
                data_nascimento: result.data_nascimento,
                foto_perfil: result.foto_perfil,
                data_criacao: result.data_criacao,
                data_atualizacao: result.data_atualizacao,
                nome_sexo: result.sexo?.sexo || null
            }
        }
        
        return false
    } catch (error) {
        console.error("Erro na DAO selectByEmailUsuario:", error)
        return false
    }
}

//Buscar usuário pelo NOME
const selectByNomeUsuario = async function (nome) {
    try {
        // Usar Prisma ORM - previne SQL Injection
        const result = await prisma.tbl_usuario.findMany({
            where: {
                nome: {
                    contains: nome
                }
            },
            include: {
                sexo: { select: { sexo: true } },
                tbl_tipo_sanguineo: { select: { tipo: true } }
            }
        })

        if (result && result.length > 0) {
            return result.map(u => ({
                id: u.id,
                nome: u.nome,
                email: u.email,
                senha_hash: u.senha_hash,
                cpf: u.cpf,
                cep: u.cep,
                tipo_sanguineo_nome: u.tbl_tipo_sanguineo?.tipo || null,
                data_nascimento: u.data_nascimento,
                foto_perfil: u.foto_perfil,
                data_criacao: u.data_criacao,
                data_atualizacao: u.data_atualizacao,
                nome_sexo: u.sexo?.sexo || null
            }))
        }
        
        return false
    } catch (error) {
        console.error("Erro na DAO selectByNomeUsuario:", error)
        return false
    }
}

//Buscar usuário pelo CPF
const selectByCpfUsuario = async function (cpf) {
    try {
        // Usar Prisma ORM - previne SQL Injection
        const result = await prisma.tbl_usuario.findUnique({
            where: { cpf: cpf },
            select: {
                id: true,
                nome: true,
                email: true,
                cpf: true
            }
        })

        return result || false
    } catch (error) {
        console.error("Erro na DAO selectByCpfUsuario:", error)
        return false
    }
}

//Fazer login do usuário (por email ou nome) - FUNÇÃO OBSOLETA, não deve ser usada
// O login agora é feito por email apenas no controller usando selectByEmailUsuario
const loginUsuario = async function (dadosLogin) {
    try {
        // Esta função não deve mais ser usada - mantida apenas para compatibilidade
        // O controller agora usa bcrypt.compare diretamente
        console.warn("loginUsuario DAO está obsoleto - use selectByEmailUsuario no controller")
        return false
    } catch(error){
        console.error("Erro na DAO loginUsuario:", error)
        return false   
    }
}

module.exports = {
    insertUsuario,
    updateUsuario,
    deleteUsuario,
    selectAllUsuario,
    selectByIdUsuario,
    selectByEmailUsuario,
    selectByNomeUsuario,
    selectByCpfUsuario,
    loginUsuario,
    updateSenha
}
