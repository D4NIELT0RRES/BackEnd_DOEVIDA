/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a TELEFONE no BANCO DE DADOS.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.1
 ***************************************************************************************/

// Import da biblioteca do prisma client para executar scripts no BD
const { PrismaClient } = require('@prisma/client')

// Instancia da classe do prisma client
const prisma = new PrismaClient()

//============================== INSERIR ==============================
const insertTelefone = async function (telefone) {
    try {
        let sql = `
            INSERT INTO tbl_telefone (
                tipo,
                numero
            ) VALUES (
                '${telefone.tipo}',
                '${telefone.numero}'
            );
        `

        let result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            // Buscar o último telefone inserido
            let sqlSelect = `
                SELECT * FROM tbl_telefone
                WHERE numero = '${telefone.numero}'
                ORDER BY id DESC LIMIT 1
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
const updateTelefone = async function (telefone) {
    try {
        let sql = `
            UPDATE tbl_telefone 
            SET tipo   = '${telefone.tipo}',
                numero = '${telefone.numero}'
            WHERE id = ${telefone.id};
        `

        let result = await prisma.$executeRawUnsafe(sql)

        return result ? true : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== DELETAR ==============================
const deleteTelefone = async function (id) {
    try {
        let sql = `
            DELETE FROM tbl_telefone 
            WHERE id = ${id};
        `

        let result = await prisma.$executeRawUnsafe(sql)

        return result ? true : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== LISTAR TODOS ==============================
const selectAllTelefone = async function () {
    try {
        let sql = `SELECT * FROM tbl_telefone ORDER BY id ASC`

        let result = await prisma.$queryRawUnsafe(sql)

        return result.length > 0 ? result : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR ID ==============================
const selectByIdTelefone = async function (id) {
    try {
        let sql = `
            SELECT * FROM tbl_telefone 
            WHERE id = ${id};
        `

        let result = await prisma.$queryRawUnsafe(sql)

        return result.length > 0 ? result[0] : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR NÚMERO ==============================
const selectByNumeroTelefone = async function (numero) {
    try {
        let sql = `
            SELECT * FROM tbl_telefone 
            WHERE numero = '${numero}';
        `

        let result = await prisma.$queryRawUnsafe(sql)

        return result.length > 0 ? result : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR TIPO ==============================
const selectByTipoTelefone = async function (tipo) {
    try {
        let sql = `
            SELECT * FROM tbl_telefone 
            WHERE tipo = '${tipo}';
        `

        let result = await prisma.$queryRawUnsafe(sql)

        return result.length > 0 ? result : false
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = {
    insertTelefone,
    updateTelefone,
    deleteTelefone,
    selectAllTelefone,
    selectByIdTelefone,
    selectByNumeroTelefone,
    selectByTipoTelefone
}
