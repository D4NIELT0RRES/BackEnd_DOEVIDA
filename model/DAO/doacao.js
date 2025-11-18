/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a DOAÇÕES no BANCO DE DADOS.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.2 (Correções de consistência)
 ***************************************************************************************/

const { PrismaClient } = require('../../prisma/generated/client')
const prisma = new PrismaClient()

//Insere uma nova doação
const insertDoacao = async function (doacao) {
    try {
        let sql = `
            INSERT INTO tbl_doacao (
                data,
                observacao,
                foto
            ) VALUES (
                '${doacao.data}',
                ${doacao.observacao ? `'${doacao.observacao}'` : 'NULL'},
                ${doacao.foto ? `'${doacao.foto}'` : 'NULL'}
            );
        `

        let result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            // Buscar a última doação inserida
            let sqlSelect = `
                SELECT * FROM tbl_doacao
                WHERE data = '${doacao.data}'
                ORDER BY id DESC LIMIT 1;
            `
            let criado = await prisma.$queryRawUnsafe(sqlSelect)
            return criado.length > 0 ? criado[0] : false
        } else {
            return false
        }
    } catch (error) {
        console.error("Erro insertDoacao:", error)
        return false
    }
}

//Atualizar uma doação existente pelo ID
const updateDoacao = async function (doacao, id) {
    try {
        let sql = `
            UPDATE tbl_doacao 
            SET 
                data        = '${doacao.data}',
                observacao  = ${doacao.observacao ? `'${doacao.observacao}'` : 'NULL'},
                foto        = ${doacao.foto ? `'${doacao.foto}'` : 'NULL'}
            WHERE id = ${id};
        `

        let result = await prisma.$executeRawUnsafe(sql)
        return result > 0
    } catch (error) {
        console.error("Erro updateDoacao:", error)
        return false
    }
}

//Deletar uma doação existente pelo ID
const deleteDoacao = async function (id) {
    try {
        let sql = `DELETE FROM tbl_doacao WHERE id = ${id};`
        let result = await prisma.$executeRawUnsafe(sql)
        return result > 0
    } catch (error) {
        console.error("Erro deleteDoacao:", error)
        return false
    }
}

//Listar todas as doações
const selectAllDoacao = async function () {
    try {
        let sql = `SELECT * FROM tbl_doacao ORDER BY id ASC;`
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result : false
    } catch (error) {
        console.error("Erro selectAllDoacao:", error)
        return false
    }
}

//Listar doação por ID
const selectByIdDoacao = async function (id) {
    try {
        let sql = `SELECT * FROM tbl_doacao WHERE id = ${id};`
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result[0] : false
    } catch (error) {
        console.error("Erro selectByIdDoacao:", error)
        return false
    }
}

//Listar doação por ID do usuário
const historicoDoacao = async function (id_usuario) {
    try {
        let sql = `
            SELECT 
                d.*,
                h.nome AS nome_hospital,
                a.data AS data_agendamento,
                a.status AS status_agendamento
            FROM tbl_doacao d
            INNER JOIN tbl_agendamento a ON d.id = a.id_doacao
            INNER JOIN tbl_hospital h ON a.id_hospital = h.id
            WHERE a.id_usuario = ${id_usuario}
            ORDER BY d.data DESC;
        `
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result : false
    } catch (error) {
        console.error("Erro historicoDoacao:", error)
        return false
    }
}

//Verificar compatibilidade entre tipos sanguíneos
const verificarCompatibilidade = async function (tipo_doador, tipo_receptor) {
    const compatibilidade = {
        'A+': ['A+', 'AB+'],
        'A-': ['A+', 'A-', 'AB+', 'AB-'],
        'B+': ['B+', 'AB+'],
        'B-': ['B+', 'B-', 'AB+', 'AB-'],
        'AB+': ['AB+'],
        'AB-': ['AB+', 'AB-'],
        'O+': ['A+', 'B+', 'AB+', 'O+'],
        'O-': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    }

    return {
        compativel: compatibilidade[tipo_doador]?.includes(tipo_receptor) || false,
        pode_doar_para: compatibilidade[tipo_doador] || [],
        pode_receber_de: Object.entries(compatibilidade)
            .filter(([_, receptores]) => receptores.includes(tipo_doador))
            .map(([tipo]) => tipo)
    }
}

module.exports = {
    insertDoacao,
    updateDoacao,
    deleteDoacao,
    selectAllDoacao,
    selectByIdDoacao,
    historicoDoacao,
    verificarCompatibilidade
}
