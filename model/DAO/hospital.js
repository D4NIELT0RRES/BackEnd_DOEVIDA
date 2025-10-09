/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a HOSPITAL no BANCO DE DADOS.
 * DATA: 22/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.2
 ***************************************************************************************/

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//Inserir um novo hospital
const insertHospital = async function (hospital) {
    try {
        let sql = `INSERT INTO tbl_hospital(
                        nome,
                        email,
                        senha,
                        cnpj,
                        crm,
                        cep,
                        telefone,
                        capacidade_maxima,
                        convenios,
                        horario_abertura,
                        horario_fechamento,
                        foto,
                        complemento
                    ) VALUES (
                        '${hospital.nome}',
                        '${hospital.email}',
                        '${hospital.senha}',
                        '${hospital.cnpj}',
                        '${hospital.crm}',
                        '${hospital.cep}',
                        '${hospital.telefone}',
                        ${hospital.capacidade_maxima},
                        '${hospital.convenios}',
                        '${hospital.horario_abertura}',
                        '${hospital.horario_fechamento}',
                        '${hospital.foto}',
                        ${hospital.complemento ? `'${hospital.complemento}'` : 'NULL'}
                    );`

        let result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            let sqlSelect = `SELECT * FROM tbl_hospital WHERE email = '${hospital.email}' ORDER BY id DESC LIMIT 1`
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

//Atualizar um hospital existente pelo ID
const updateHospital = async function (hospital, id) {
    try {
        let sql = `UPDATE tbl_hospital SET
                        nome              = '${hospital.nome}',
                        email             = '${hospital.email}',
                        senha             = '${hospital.senha}',
                        cnpj              = '${hospital.cnpj}',
                        crm               = '${hospital.crm}',
                        cep               = '${hospital.cep}',
                        telefone          = '${hospital.telefone}',
                        capacidade_maxima = ${hospital.capacidade_maxima},
                        convenios         = '${hospital.convenios}',
                        horario_abertura  = '${hospital.horario_abertura}',
                        horario_fechamento= '${hospital.horario_fechamento}',
                        foto              = '${hospital.foto}',
                        complemento       = ${hospital.complemento ? `'${hospital.complemento}'` : 'NULL'}
                    WHERE id = ${id}`

        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//Deletar um hospital pelo ID
const deleteHospital = async function (id) {
    try {
        let sql = `DELETE FROM tbl_hospital WHERE id = ${id}`
        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//Listar todos os hospitais
const selectAllHospital = async function () {
    try {
        let sql = `SELECT * FROM tbl_hospital ORDER BY id ASC`
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//Listar hospital por ID
const selectByIdHospital = async function (id) {
    try {
        let sql = `SELECT * FROM tbl_hospital WHERE id = ${id}`
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result[0] : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//Listar hospital por email
const selectByEmailHospital = async function (email) {
    try {
        let sql = `SELECT * FROM tbl_hospital WHERE email = '${email}'`
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result[0] : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//Listar hospital por CNPJ
const selectByCnpjHospital = async function (cnpj) {
    try {
        let sql = `SELECT * FROM tbl_hospital WHERE cnpj = '${cnpj}'`
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result[0] : false
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = {
    insertHospital,
    updateHospital,
    deleteHospital,
    selectAllHospital,
    selectByIdHospital,
    selectByEmailHospital,
    selectByCnpjHospital
}