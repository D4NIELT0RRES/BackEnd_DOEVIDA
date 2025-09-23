/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a AGENDAMENTO no BANCO DE DADOS.
 * DATA: 22/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.4
 ***************************************************************************************/

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//============================== INSERIR ==============================
const insertAgendamento = async function (agendamento) {
    try {
        let sql = `INSERT INTO tbl_agendamento (
                        status,
                        data,
                        hora,
                        id_usuario,
                        id_doacao,
                        id_hospital
                    ) VALUES (
                        '${agendamento.status}',
                        '${agendamento.data}',
                        '${agendamento.hora}',
                        ${agendamento.id_usuario || null},
                        ${agendamento.id_doacao || null},
                        ${agendamento.id_hospital || null}
                    )`

        let result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            let sqlSelect = `SELECT * FROM tbl_agendamento 
                             WHERE data = '${agendamento.data}' 
                               AND hora = '${agendamento.hora}' 
                             ORDER BY id DESC LIMIT 1`
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
const updateAgendamento = async function (agendamento) {
    try {
        if (!agendamento.id) return false  // Garante que não atualiza sem ID

        let sql = `UPDATE tbl_agendamento SET 
                        status = '${agendamento.status}',
                        data = '${agendamento.data}',
                        hora = '${agendamento.hora}',
                        id_usuario = ${agendamento.id_usuario || null},
                        id_doacao = ${agendamento.id_doacao || null},
                        id_hospital = ${agendamento.id_hospital || null}
                   WHERE id = ${agendamento.id}`

        let result = await prisma.$executeRawUnsafe(sql)
        if (result) {
            let sqlSelect = `SELECT * FROM tbl_agendamento WHERE id = ${agendamento.id}`
            let atualizado = await prisma.$queryRawUnsafe(sqlSelect)
            return atualizado[0]
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== DELETAR ==============================
const deleteAgendamento = async function (id) {
    try {
        if (!id) return false
        let sql = `DELETE FROM tbl_agendamento WHERE id = ${id}`
        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== LISTAR TODOS ==============================
const selectAllAgendamento = async function () {
    try {
        let sql = `SELECT * FROM tbl_agendamento ORDER BY data ASC, hora ASC`
        let result = await prisma.$queryRawUnsafe(sql)
        return result
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR ID ==============================
const selectByIdAgendamento = async function (id) {
    try {
        if (!id) return false
        let sql = `SELECT * FROM tbl_agendamento WHERE id = ${id}`
        let result = await prisma.$queryRawUnsafe(sql)
        return result[0]
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR STATUS ==============================
const selectByStatusAgendamento = async function (status) {
    try {
        // Validar se o status é válido
        const statusValidos = ['Agendado', 'Em espera', 'Concluído'];
        if (!statusValidos.includes(status)) {
            return false;
        }

        let sql = `
            SELECT 
                a.*,
                JSON_OBJECT(
                    'id', u.id,
                    'nome', u.nome,
                    'email', u.email,
                    'senha', u.senha,
                    'cpf', u.cpf,
                    'cep', u.cep,
                    'tipo_sanguineo', u.tipo_sanguineo,
                    'data_nascimento', u.data_nascimento,
                    'foto_perfil', u.foto_perfil,
                    'data_criacao', u.data_criacao,
                    'data_atualizacao', u.data_atualizacao
                ) as usuario,
                JSON_OBJECT(
                    'id', d.id,
                    'data', d.data,
                    'observacao', d.observacao,
                    'foto', d.foto
                ) as doacao,
                JSON_OBJECT(
                    'id', h.id,
                    'nome', h.nome,
                    'email', h.email,
                    'senha', h.senha,
                    'cnpj', h.cnpj,
                    'crm', h.crm,
                    'cep', h.cep,
                    'telefone', h.telefone,
                    'capacidade_maxima', h.capacidade_maxima,
                    'convenios', h.convenios,
                    'horario_abertura', h.horario_abertura,
                    'horario_fechamento', h.horario_fechamento,
                    'foto', h.foto,
                    'complemento', h.complemento
                ) as hospital
            FROM tbl_agendamento a
            LEFT JOIN tbl_usuario u ON a.id_usuario = u.id
            LEFT JOIN tbl_doacao d ON a.id_doacao = d.id
            LEFT JOIN tbl_hospital h ON a.id_hospital = h.id
            WHERE a.status = ?
            ORDER BY a.data ASC, a.hora ASC`;

        let result = await prisma.$queryRawUnsafe(sql, status);

        // Converter as strings JSON em objetos
        result = result.map(row => ({
            ...row,
            usuario: typeof row.usuario === 'string' ? JSON.parse(row.usuario) : row.usuario,
            doacao: typeof row.doacao === 'string' ? JSON.parse(row.doacao) : row.doacao,
            hospital: typeof row.hospital === 'string' ? JSON.parse(row.hospital) : row.hospital
        }));

        return result;
    } catch (error) {
        console.log(error);
        return false;
    }
}

//============================== BUSCAR POR USUÁRIO ==============================
const selectByUsuarioAgendamento = async function (id_usuario) {
    try {
        let sql = `SELECT * FROM tbl_agendamento WHERE id_usuario = ${id_usuario}`
        let result = await prisma.$queryRawUnsafe(sql)
        return result
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR DOAÇÃO ==============================
const selectByDoacaoAgendamento = async function (id_doacao) {
    try {
        let sql = `SELECT * FROM tbl_agendamento WHERE id_doacao = ${id_doacao}`
        let result = await prisma.$queryRawUnsafe(sql)
        return result
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR HOSPITAL ==============================
const selectByHospitalAgendamento = async function (id_hospital) {
    try {
        let sql = `SELECT * FROM tbl_agendamento WHERE id_hospital = ${id_hospital}`
        let result = await prisma.$queryRawUnsafe(sql)
        return result
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = {
    insertAgendamento,
    updateAgendamento,
    deleteAgendamento,
    selectAllAgendamento,
    selectByIdAgendamento,
    selectByStatusAgendamento,
    selectByUsuarioAgendamento,
    selectByDoacaoAgendamento,
    selectByHospitalAgendamento
}