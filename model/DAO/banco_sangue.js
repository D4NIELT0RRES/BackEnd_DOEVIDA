/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a BANCO DE SANGUE no BANCO DE DADOS.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

// Import da biblioteca do prisma client para executar scripts no BD
const { PrismaClient } = require('@prisma/client')

// Instancia da classe do prisma client
const prisma = new PrismaClient()

//============================== INSERIR ==============================
const insertBancoSangue = async function (bancoSangue) {
    try {
        let sql = `
            INSERT INTO tbl_banco_sangue (
                tipo_sanguineo,
                quantidade
            ) VALUES (
                '${bancoSangue.tipo_sanguineo}',
                '${bancoSangue.quantidade}'
            );`

        let result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            // Retorna o último registro inserido (pegar ID recém criado)
            let sqlSelect = `
                SELECT * 
                FROM tbl_banco_sangue 
                WHERE tipo_sanguineo = '${bancoSangue.tipo_sanguineo}' 
                ORDER BY id DESC 
                LIMIT 1`
            let criado = await prisma.$queryRawUnsafe(sqlSelect)
            return criado[0]
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== ATUALIZAR ==============================
const updateBancoSangue = async function (bancoSangue, id) {
    try {
        let sql = `
            UPDATE tbl_banco_sangue 
            SET 
                tipo_sanguineo = '${bancoSangue.tipo_sanguineo}',
                quantidade     = '${bancoSangue.quantidade}'
            WHERE id = ${id}`

        let result = await prisma.$executeRawUnsafe(sql)

        return result > 0
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== DELETAR ==============================
const deleteBancoSangue = async function (id) {
    try {
        let sql = `DELETE FROM tbl_banco_sangue WHERE id = ${id}`

        let result = await prisma.$executeRawUnsafe(sql)

        return result > 0
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== LISTAR TODOS ==============================
const selectAllBancoSangue = async function () {
    try {
        let sql = `SELECT * FROM tbl_banco_sangue`

        let result = await prisma.$queryRawUnsafe(sql)

        return (result && result.length > 0) ? result : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR ID ==============================
const selectByIdBancoSangue = async function (id) {
    try {
        let sql = `SELECT * FROM tbl_banco_sangue WHERE id = ${id}`

        let result = await prisma.$queryRawUnsafe(sql)

        return (result && result.length > 0) ? result[0] : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR TIPO SANGUÍNEO ==============================
const selectByTipoSanguineo = async function (tipo) {
    try {
        let sql = `SELECT * FROM tbl_banco_sangue WHERE tipo_sanguineo = '${tipo}'`

        let result = await prisma.$queryRawUnsafe(sql)

        return (result && result.length > 0) ? result : false
    } catch (error) {
        console.log(error)
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
