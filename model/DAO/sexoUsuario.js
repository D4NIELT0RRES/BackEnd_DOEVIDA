/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a SEXO USUÁRIO no BANCO DE DADOS.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.3
 ***************************************************************************************/

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//============================== INSERIR ==============================
const insertSexoUsuario = async function (sexoUsuario) {
    try {
        let sql = `
            INSERT INTO tbl_sexo (sexo)
            VALUES ('${sexoUsuario.sexo}');
        `

        let result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            let sqlSelect = `
                SELECT * FROM tbl_sexo 
                WHERE sexo = '${sexoUsuario.sexo}' 
                ORDER BY id DESC LIMIT 1
            `
            let criado = await prisma.$queryRawUnsafe(sqlSelect)
            return criado.length > 0 ? criado[0] : false
        }
        return false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== ATUALIZAR ==============================
const updateSexoUsuario = async function (sexoUsuario, id) {
    try {
        let sql = `
            UPDATE tbl_sexo 
            SET sexo = '${sexoUsuario.sexo}'
            WHERE id = ${id};
        `

        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== DELETAR ==============================
const deleteSexoUsuario = async function (id) {
    try {
        let sql = `DELETE FROM tbl_sexo WHERE id = ${id};`
        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== LISTAR TODOS ==============================
const selectAllSexoUsuario = async function () {
    try {
        let sql = `SELECT * FROM tbl_sexo ORDER BY id ASC`
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR ID ==============================
const selectByIdSexoUsuario = async function (id) {
    try {
        let sql = `SELECT * FROM tbl_sexo WHERE id = ${id};`
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result[0] : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR NOME ==============================
const selectByNomeSexoUsuario = async function (nome) {
    try {
        let sql = `SELECT * FROM tbl_sexo WHERE sexo = '${nome}';`
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result : false
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = {
    insertSexoUsuario,
    updateSexoUsuario,
    deleteSexoUsuario,
    selectAllSexoUsuario,
    selectByIdSexoUsuario,
    selectByNomeSexoUsuario
}