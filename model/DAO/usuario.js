/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a USUÁRIO no BANCO DE DADOS.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.1
 ***************************************************************************************/

// Import da biblioteca do prisma client para executar scripts no BD
const { PrismaClient } = require('@prisma/client')

// Instancia da classe do prisma client
const prisma = new PrismaClient()

//============================== INSERIR ==============================
const insertUsuario = async function (usuario) {
    try {
        let sql = `
            INSERT INTO tbl_usuario (
                nome,
                email,
                senha,
                cpf,
                cep,
                data_nascimento,
                foto_perfil,
                id_banco_sangue,
                id_sexo
            ) VALUES (
                '${usuario.nome}',
                '${usuario.email}',
                '${usuario.senha}',
                '${usuario.cpf}',
                '${usuario.cep}',
                '${usuario.data_nascimento}',
                '${usuario.foto_perfil || ''}',
                ${usuario.id_banco_sangue || null},
                ${usuario.id_sexo || null}
            );
        `

        let result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            // Buscar o último usuário inserido com base no e-mail
            let sqlSelect = `
                SELECT * FROM tbl_usuario
                WHERE email = '${usuario.email}'
                ORDER BY id DESC
                LIMIT 1
            `
            let criado = await prisma.$queryRawUnsafe(sqlSelect)
            return criado.length > 0 ? criado[0] : false
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== ATUALIZAR ==============================
const updateUsuario = async function (usuario) {
    try {
        let sql = `
            UPDATE tbl_usuario 
            SET nome             = '${usuario.nome}',
                email            = '${usuario.email}',
                senha            = '${usuario.senha}',
                cpf              = '${usuario.cpf}',
                cep              = '${usuario.cep}',
                data_nascimento  = '${usuario.data_nascimento}',
                foto_perfil      = '${usuario.foto_perfil || ''}',
                id_banco_sangue  = ${usuario.id_banco_sangue || null},
                id_sexo          = ${usuario.id_sexo || null}
            WHERE id = ${usuario.id};
        `

        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== DELETAR ==============================
const deleteUsuario = async function (id) {
    try {
        let sql = `DELETE FROM tbl_usuario WHERE id = ${id}`
        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== LISTAR TODOS ==============================
const selectAllUsuario = async function () {
    try {
        let sql = `SELECT * FROM tbl_usuario ORDER BY id ASC`
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR ID ==============================
const selectByIdUsuario = async function (id) {
    try {
        let sql = `SELECT * FROM tbl_usuario WHERE id = ${id}`
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result[0] : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR EMAIL ==============================
const selectByEmailUsuario = async function (email) {
    try {
        let sql = `SELECT * FROM tbl_usuario WHERE email = '${email}'`
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result[0] : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR NOME ==============================
const selectByNomeUsuario = async function (nome) {
    try {
        let sql = `SELECT * FROM tbl_usuario WHERE nome LIKE '%${nome}%'`
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result : false
    } catch (error) {
        console.log(error)
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
    selectByNomeUsuario
}
