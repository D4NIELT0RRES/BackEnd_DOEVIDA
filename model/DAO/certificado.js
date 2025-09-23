/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a CERTIFICADO no BANCO DE DADOS.
 * DATA: 22/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.1
 ***************************************************************************************/

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//============================== INSERIR ==============================
const insertCertificado = async function (certificado) {
    try {
        let sql = `INSERT INTO tbl_certificado (
                        titulo,
                        organizacao,
                        data_emissao
                    ) VALUES (
                        '${certificado.titulo}',
                        '${certificado.organizacao}',
                        '${certificado.data_emissao}'
                    );`

        let result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            let sqlSelect = `SELECT * FROM tbl_certificado 
                             WHERE titulo = '${certificado.titulo}' 
                               AND organizacao = '${certificado.organizacao}' 
                             ORDER BY id DESC LIMIT 1`
            let criado = await prisma.$queryRawUnsafe(sqlSelect)
            return criado[0]   // Retorna apenas o registro criado
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== ATUALIZAR ==============================
const updateCertificado = async function (certificado) {
    try {
        let sql = `UPDATE tbl_certificado SET 
                        titulo = '${certificado.titulo}',
                        organizacao = '${certificado.organizacao}',
                        data_emissao = '${certificado.data_emissao}'
                   WHERE id = ${certificado.id}`

        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== DELETAR ==============================
const deleteCertificado = async function (id) {
    try {
        let sql = `DELETE FROM tbl_certificado WHERE id = ${id}`
        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== LISTAR TODOS ==============================
const selectAllCertificado = async function () {
    try {
        let sql = `SELECT * FROM tbl_certificado ORDER BY id ASC`
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR ID ==============================
const selectByIdCertificado = async function (id) {
    try {
        let sql = `SELECT * FROM tbl_certificado WHERE id = ${id}`
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result[0] : false   // Retorna apenas o registro encontrado
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR TÍTULO ==============================
const selectByTituloCertificado = async function (titulo) {
    try {
        let sql = `SELECT * FROM tbl_certificado WHERE titulo = '${titulo}'`
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR ORGANIZAÇÃO ==============================
const selectByOrganizacaoCertificado = async function (organizacao) {
    try {
        let sql = `SELECT * FROM tbl_certificado WHERE organizacao = '${organizacao}'`
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result : false
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = {
    insertCertificado,
    updateCertificado,
    deleteCertificado,
    selectAllCertificado,
    selectByIdCertificado,
    selectByTituloCertificado,
    selectByOrganizacaoCertificado
}