/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a TIPO SANGUÍNEO no BANCO DE DADOS.
 * DATA: 30/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

const { PrismaClient } = require('../../prisma/generated/client')
const prisma = new PrismaClient()

//Insere um novo tipo sanguíneo
const insertTipoSanguineo = async function (tipo) {
    try {
        let sql = `
            INSERT INTO tbl_tipo_sanguineo (tipo)
            VALUES ('${tipo}')`

        let result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            let sqlSelect = `
                SELECT * FROM tbl_tipo_sanguineo
                WHERE tipo = '${tipo}'
                ORDER BY id DESC LIMIT 1`
            let criado = await prisma.$queryRawUnsafe(sqlSelect)
            return criado[0]
        } else {
            return false
        }
    } catch (error) {
        console.log("Erro insertTipoSanguineo:", error)
        return false
    }
}

//Atualizar um tipo sanguíneo existente pelo ID
const updateTipoSanguineo = async function (id, tipo) {
    try {
        let sql = `
            UPDATE tbl_tipo_sanguineo
            SET tipo = '${tipo}'
            WHERE id = ${id}`

        let result = await prisma.$executeRawUnsafe(sql)
        return result > 0
    } catch (error) {
        console.log("Erro updateTipoSanguineo:", error)
        return false
    }
}

//Deletar um tipo sanguíneo pelo ID
const deleteTipoSanguineo = async function (id) {
    try {
        let sql = `DELETE FROM tbl_tipo_sanguineo WHERE id = ${id}`
        let result = await prisma.$executeRawUnsafe(sql)
        return result > 0
    } catch (error) {
        console.log("Erro deleteTipoSanguineo:", error)
        return false
    }
}

//Listar todos os tipos sanguíneos
const selectAllTipos = async function () {
    try {
        let sql = `SELECT * FROM tbl_tipo_sanguineo ORDER BY id ASC`
        let result = await prisma.$queryRawUnsafe(sql)
        return (result && result.length > 0) ? result : false
    } catch (error) {
        console.log("Erro selectAllTipos:", error)
        return false
    }
}

//Listar tipo sanguíneo por ID
const selectByIdTipo = async function (id) {
    try {
        let sql = `SELECT * FROM tbl_tipo_sanguineo WHERE id = ${id}`
        let result = await prisma.$queryRawUnsafe(sql)
        return (result && result.length > 0) ? result[0] : false
    } catch (error) {
        console.log("Erro selectByIdTipo:", error)
        return false
    }
}

module.exports = {
    insertTipoSanguineo,
    updateTipoSanguineo,
    deleteTipoSanguineo,
    selectAllTipos,
    selectByIdTipo
}
