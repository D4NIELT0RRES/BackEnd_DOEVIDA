/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a DOAÇÕES no BANCO DE DADOS.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.1
 ***************************************************************************************/

// Import da biblioteca do prisma client para executar scripts no BD
const { PrismaClient } = require('@prisma/client')

// Instancia da classe do prisma client
const prisma = new PrismaClient()

//============================== INSERIR ==============================
const insertDoacao = async function (doacao) {
    try {
        let sql = `
            INSERT INTO tbl_doacao (
                data,
                observacao,
                foto
            ) VALUES (
                '${doacao.data}',
                '${doacao.observacao}',
                '${doacao.foto}'
            );
        `

        let result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            // Buscar a última doação inserida
            let sqlSelect = `
                SELECT * FROM tbl_doacao
                WHERE data = '${doacao.data}'
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
const updateDoacao = async function (doacao, id) {
    try {
        let sql = `
            UPDATE tbl_doacao 
            SET data        = '${doacao.data}',
                observacao  = '${doacao.observacao}',
                foto        = '${doacao.foto}'
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
const deleteDoacao = async function (id) {
    try {
        let sql = `
            DELETE FROM tbl_doacao 
            WHERE id = ${id};
        `

        let result = await prisma.$executeRawUnsafe(sql)

        return result ? true : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== LISTAR TODAS ==============================
const selectAllDoacao = async function () {
    try {
        let sql = `SELECT * FROM tbl_doacao ORDER BY id ASC`

        let result = await prisma.$queryRawUnsafe(sql)

        return result.length > 0 ? result : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR ID ==============================
const selectByIdDoacao = async function (id) {
    try {
        let sql = `
            SELECT * FROM tbl_doacao 
            WHERE id = ${id};
        `

        let result = await prisma.$queryRawUnsafe(sql)

        return result.length > 0 ? result[0] : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== HISTÓRICO DE DOAÇÕES ==============================
const historicoDoacao = async function (id_usuario) {
    try {
        let sql = `
            SELECT 
                d.*,
                h.nome as nome_hospital,
                a.data as data_agendamento,
                a.status as status_agendamento
            FROM tbl_doacao d
            INNER JOIN tbl_agendamento a ON d.id = a.id_doacao
            INNER JOIN tbl_hospital h ON a.id_hospital = h.id
            WHERE a.id_usuario = ${id_usuario}
            ORDER BY d.data DESC`
        
        let result = await prisma.$queryRawUnsafe(sql)
        return result
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== VERIFICAR COMPATIBILIDADE ==============================
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
