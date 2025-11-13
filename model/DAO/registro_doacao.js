/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a REGISTRO DE DOAÇÕES no BANCO DE DADOS.
 * DATA: 11/11/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//Insere um novo registro de doação baseado no agendamento
const insertRegistroDoacao = async function (registroDoacao) {
    try {
        // Escapar strings para evitar SQL injection
        const escaparString = (str) => str ? str.replace(/'/g, "''") : null
        
        const localDoacao = escaparString(registroDoacao.local_doacao)
        const observacao = registroDoacao.observacao ? escaparString(registroDoacao.observacao) : null
        const fotoComprovante = registroDoacao.foto_comprovante ? escaparString(registroDoacao.foto_comprovante) : null

        let sql = `
            INSERT INTO tbl_registro_doacao (
                id_agendamento,
                id_usuario,
                id_hospital,
                data_doacao,
                local_doacao,
                observacao,
                foto_comprovante
            ) VALUES (
                ${registroDoacao.id_agendamento ? registroDoacao.id_agendamento : 'NULL'},
                ${registroDoacao.id_usuario},
                ${registroDoacao.id_hospital},
                '${registroDoacao.data_doacao}',
                '${localDoacao}',
                ${observacao ? `'${observacao}'` : 'NULL'},
                ${fotoComprovante ? `'${fotoComprovante}'` : 'NULL'}
            );
        `

        console.log('📝 SQL INSERT:', sql)
        let result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            // Buscar o registro recém criado
            let sqlSelect = `
                SELECT 
                    rd.*,
                    u.nome AS nome_usuario,
                    h.nome AS nome_hospital
                FROM tbl_registro_doacao rd
                INNER JOIN tbl_usuario u ON rd.id_usuario = u.id
                INNER JOIN tbl_hospital h ON rd.id_hospital = h.id
                WHERE rd.id_usuario = ${registroDoacao.id_usuario}
                ORDER BY rd.id DESC LIMIT 1;
            `
            let criado = await prisma.$queryRawUnsafe(sqlSelect)
            return criado.length > 0 ? criado[0] : false
        } else {
            return false
        }
    } catch (error) {
        console.error("❌ Erro insertRegistroDoacao:", error)
        console.error("Dados recebidos:", registroDoacao)
        return false
    }
}

//Atualizar um registro de doação existente pelo ID
const updateRegistroDoacao = async function (registroDoacao, id) {
    try {
        let sql = `
            UPDATE tbl_registro_doacao 
            SET 
                observacao = ${registroDoacao.observacao ? `'${registroDoacao.observacao}'` : 'NULL'},
                foto_comprovante = ${registroDoacao.foto_comprovante ? `'${registroDoacao.foto_comprovante}'` : 'NULL'}
            WHERE id = ${id};
        `

        let result = await prisma.$executeRawUnsafe(sql)
        return result > 0
    } catch (error) {
        console.error("Erro updateRegistroDoacao:", error)
        return false
    }
}

//Deletar um registro de doação existente pelo ID
const deleteRegistroDoacao = async function (id) {
    try {
        let sql = `DELETE FROM tbl_registro_doacao WHERE id = ${id};`
        let result = await prisma.$executeRawUnsafe(sql)
        return result > 0
    } catch (error) {
        console.error("Erro deleteRegistroDoacao:", error)
        return false
    }
}

//Listar todos os registros de doação
const selectAllRegistroDoacao = async function () {
    try {
        let sql = `
            SELECT 
                rd.*,
                u.nome AS nome_usuario,
                u.email AS email_usuario,
                h.nome AS nome_hospital,
                h.telefone AS telefone_hospital,
                a.status AS status_agendamento
            FROM tbl_registro_doacao rd
            INNER JOIN tbl_usuario u ON rd.id_usuario = u.id
            INNER JOIN tbl_hospital h ON rd.id_hospital = h.id
            LEFT JOIN tbl_agendamento a ON rd.id_agendamento = a.id
            ORDER BY rd.data_registro DESC;
        `
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result : false
    } catch (error) {
        console.error("Erro selectAllRegistroDoacao:", error)
        return false
    }
}

//Listar registro de doação por ID
const selectByIdRegistroDoacao = async function (id) {
    try {
        let sql = `
            SELECT 
                rd.*,
                u.nome AS nome_usuario,
                u.email AS email_usuario,
                h.nome AS nome_hospital,
                h.telefone AS telefone_hospital,
                a.status AS status_agendamento,
                a.hora AS hora_agendamento
            FROM tbl_registro_doacao rd
            INNER JOIN tbl_usuario u ON rd.id_usuario = u.id
            INNER JOIN tbl_hospital h ON rd.id_hospital = h.id
            LEFT JOIN tbl_agendamento a ON rd.id_agendamento = a.id
            WHERE rd.id = ${id};
        `
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result[0] : false
    } catch (error) {
        console.error("Erro selectByIdRegistroDoacao:", error)
        return false
    }
}

//Listar registro de doação por ID do agendamento
const selectByIdAgendamento = async function (id_agendamento) {
    try {
        let sql = `
            SELECT 
                rd.*,
                u.nome AS nome_usuario,
                h.nome AS nome_hospital
            FROM tbl_registro_doacao rd
            INNER JOIN tbl_usuario u ON rd.id_usuario = u.id
            INNER JOIN tbl_hospital h ON rd.id_hospital = h.id
            WHERE rd.id_agendamento = ${id_agendamento};
        `
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result[0] : false
    } catch (error) {
        console.error("Erro selectByIdAgendamento:", error)
        return false
    }
}

//Histórico de registros de doação do usuário
const historicoRegistroDoacao = async function (id_usuario) {
    try {
        let sql = `
            SELECT 
                rd.*,
                h.nome AS nome_hospital,
                h.foto AS foto_hospital,
                a.status AS status_agendamento
            FROM tbl_registro_doacao rd
            INNER JOIN tbl_hospital h ON rd.id_hospital = h.id
            LEFT JOIN tbl_agendamento a ON rd.id_agendamento = a.id
            WHERE rd.id_usuario = ${id_usuario}
            ORDER BY rd.data_doacao DESC;
        `
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result : false
    } catch (error) {
        console.error("Erro historicoRegistroDoacao:", error)
        return false
    }
}

//Buscar dados automáticos do agendamento para preencher o registro
const getDadosAgendamento = async function (id_agendamento, id_usuario) {
    try {
        let sql = `
            SELECT 
                a.id AS id_agendamento,
                a.data AS data_doacao,
                a.id_usuario,
                a.id_hospital,
                h.nome AS local_doacao,
                h.cep,
                a.status
            FROM tbl_agendamento a
            INNER JOIN tbl_hospital h ON a.id_hospital = h.id
            WHERE a.id = ${id_agendamento} 
            AND a.id_usuario = ${id_usuario}
            AND a.status = 'Concluído';
        `
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result[0] : false
    } catch (error) {
        console.error("Erro getDadosAgendamento:", error)
        return false
    }
}

module.exports = {
    insertRegistroDoacao,
    updateRegistroDoacao,
    deleteRegistroDoacao,
    selectAllRegistroDoacao,
    selectByIdRegistroDoacao,
    selectByIdAgendamento,
    historicoRegistroDoacao,
    getDadosAgendamento
}
