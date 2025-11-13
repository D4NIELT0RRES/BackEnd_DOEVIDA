/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a BANCO DE SANGUE no BANCO DE DADOS.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 2.0 (ajustado para usar id_tipo_sanguineo + id_hospital)
 ***************************************************************************************/

const { PrismaClient } = require('../../prisma/generated/client')
const prisma = new PrismaClient()

//Inserir um novo banco de sangue
const insertBancoSangue = async function (bancoSangue) {
    try {
        let sql = `
            INSERT INTO tbl_banco_sangue (
                id_hospital,
                id_tipo_sanguineo,
                quantidade
            ) VALUES (
                ${bancoSangue.id_hospital},
                ${bancoSangue.id_tipo_sanguineo},
                ${bancoSangue.quantidade}
            );`

        let result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            let sqlSelect = `
                SELECT bs.*, ts.tipo, h.nome as hospital
                FROM tbl_banco_sangue bs
                INNER JOIN tbl_tipo_sanguineo ts ON bs.id_tipo_sanguineo = ts.id
                INNER JOIN tbl_hospital h ON bs.id_hospital = h.id
                ORDER BY bs.id DESC
                LIMIT 1`
            let criado = await prisma.$queryRawUnsafe(sqlSelect)
            return criado[0]
        } else {
            return false
        }
    } catch (error) {
        console.log("Erro insertBancoSangue:", error)
        return false
    }
}

//Atualizar um banco de sangue existente pelo ID
const updateBancoSangue = async function (bancoSangue, id) {
    try {
        let sql = `
            UPDATE tbl_banco_sangue 
            SET 
                id_hospital       = ${bancoSangue.id_hospital},
                id_tipo_sanguineo = ${bancoSangue.id_tipo_sanguineo},
                quantidade        = ${bancoSangue.quantidade}
            WHERE id = ${id}`

        let result = await prisma.$executeRawUnsafe(sql)
        return result > 0
    } catch (error) {
        console.log("Erro updateBancoSangue:", error)
        return false
    }
}

//Deletar um banco de sangue pelo ID
const deleteBancoSangue = async function (id) {
    try {
        let sql = `DELETE FROM tbl_banco_sangue WHERE id = ${id}`
        let result = await prisma.$executeRawUnsafe(sql)
        return result > 0
    } catch (error) {
        console.log("Erro deleteBancoSangue:", error)
        return false
    }
}

//Listar todos os bancos de sangue
const selectAllBancoSangue = async function () {
    try {
        let sql = `
            SELECT bs.*, ts.tipo, h.nome as hospital
            FROM tbl_banco_sangue bs
            INNER JOIN tbl_tipo_sanguineo ts ON bs.id_tipo_sanguineo = ts.id
            INNER JOIN tbl_hospital h ON bs.id_hospital = h.id`

        let result = await prisma.$queryRawUnsafe(sql)
        return (result && result.length > 0) ? result : false
    } catch (error) {
        console.log("Erro selectAllBancoSangue:", error)
        return false
    }
}

//Listar banco de sangue por ID
const selectByIdBancoSangue = async function (id) {
    try {
        let sql = `
            SELECT bs.*, ts.tipo, h.nome as hospital
            FROM tbl_banco_sangue bs
            INNER JOIN tbl_tipo_sanguineo ts ON bs.id_tipo_sanguineo = ts.id
            INNER JOIN tbl_hospital h ON bs.id_hospital = h.id
            WHERE bs.id = ${id}`

        let result = await prisma.$queryRawUnsafe(sql)
        return (result && result.length > 0) ? result[0] : false
    } catch (error) {
        console.log("Erro selectByIdBancoSangue:", error)
        return false
    }
}

//Listar banco de sangue por tipo sanguíneo
const selectByTipoSanguineo = async function (id_tipo) {
    try {
        let sql = `
            SELECT bs.*, ts.tipo, h.nome as hospital
            FROM tbl_banco_sangue bs
            INNER JOIN tbl_tipo_sanguineo ts ON bs.id_tipo_sanguineo = ts.id
            INNER JOIN tbl_hospital h ON bs.id_hospital = h.id
            WHERE bs.id_tipo_sanguineo = ${id_tipo}`

        let result = await prisma.$queryRawUnsafe(sql)
        return (result && result.length > 0) ? result : false
    } catch (error) {
        console.log("Erro selectByTipoSanguineo:", error)
        return false
    }
}

module.exports = {
    insertBancoSangue,
    updateBancoSangue,
    deleteBancoSangue,
    selectAllBancoSangue,
    selectByIdBancoSangue,
    selectByTipoSanguineo
}
