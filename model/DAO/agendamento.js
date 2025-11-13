/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a AGENDAMENTO no BANCO DE DADOS.
 * DATA: 22/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.4
 ***************************************************************************************/

const { PrismaClient } = require('../../prisma/generated/client')
const prisma = new PrismaClient()

//Insere um novo agendamento
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
                        ${agendamento.id_usuario},
                        ${agendamento.id_doacao},
                        ${agendamento.id_hospital}
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

//Atualiza um agendamento
const updateAgendamento = async function (agendamento) {
    try {
        if (!agendamento.id) return false  // Garante que não atualiza sem ID

        let sql = `UPDATE tbl_agendamento SET 
                        status = '${agendamento.status}',
                        data = '${agendamento.data}',
                        hora = '${agendamento.hora}',
                        id_usuario = ${agendamento.id_usuario},
                        id_doacao = ${agendamento.id_doacao},
                        id_hospital = ${agendamento.id_hospital}
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

//Exclui um agendamento por ID
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

//Listar todos os agendamentos
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

//Listar agendamento por ID
const selectByIdAgendamento = async function (id) {
    try {
        if (!id) return false
        let sql = `SELECT * FROM tbl_agendamento WHERE id = ${id}`
        let result = await prisma.$queryRawUnsafe(sql)
        return result[0] || false
    } catch (error) {
        console.log(error)
        return false
    }
}

//Listar agendamentos por status
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

        // Observação: mantenho o mesmo uso de $queryRawUnsafe com parâmetro conforme seu original
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

//Listar agendamentos por usuário
const selectByUsuarioAgendamento = async function (id_usuario) {
    try {
        let sql = `SELECT 
                        a.id,
                        a.status,
                        a.data,
                        a.hora,
                        a.id_usuario,
                        a.id_doacao,
                        a.id_hospital,
                        h.nome as nome_hospital
                   FROM tbl_agendamento a
                   INNER JOIN tbl_hospital h ON a.id_hospital = h.id
                   WHERE a.id_usuario = ${id_usuario}
                   ORDER BY a.data DESC, a.hora DESC`
        let result = await prisma.$queryRawUnsafe(sql)
        return result
    } catch (error) {
        console.log(error)
        return false
    }
}

//Listar agendamentos por doação
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

//Buscar por hospital por agendamento
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

//Listar agendamentos por data, com detalhes do usuário, doação e hospital
const selectByDataAgendamento = async function (data) {
    try {
        let sql = `
            SELECT 
                a.id,
                a.data,
                a.hora,
                a.status,

                u.nome AS usuario_nome,
                u.email AS usuario_email,
                u.cpf AS usuario_cpf,
                u.cep AS usuario_cep,
                u.tipo_sanguineo AS usuario_tipo_sanguineo,
                u.data_nascimento AS usuario_data_nascimento,
                u.foto_perfil AS usuario_foto,

                d.data AS doacao_data,
                d.observacao AS doacao_observacao,
                d.foto AS doacao_foto,

                h.nome AS hospital_nome,
                h.email AS hospital_email,
                h.cnpj AS hospital_cnpj,
                h.telefone AS hospital_telefone,
                h.capacidade_maxima AS hospital_capacidade

            FROM tbl_agendamento a
            LEFT JOIN tbl_usuario u ON a.id_usuario = u.id
            LEFT JOIN tbl_doacao d ON a.id_doacao = d.id
            LEFT JOIN tbl_hospital h ON a.id_hospital = h.id
            WHERE a.data = '${data}'
            ORDER BY a.hora ASC
        `
        let result = await prisma.$queryRawUnsafe(sql)
        return result
    } catch (error) {
        console.log(error)
        return false
    }
}

//Verificar disponibilidade de agendamento em um horário específico
const verificarDisponibilidade = async function (data, hora, id_hospital) {
    try {
        let sql = `SELECT COUNT(*) as total 
                   FROM tbl_agendamento 
                   WHERE data = '${data}' 
                   AND hora = '${hora}' 
                   AND id_hospital = ${id_hospital}`
        
        let result = await prisma.$queryRawUnsafe(sql)
        
        // Buscar capacidade máxima do hospital
        let sqlHospital = `SELECT capacidade_maxima 
                          FROM tbl_hospital 
                          WHERE id = ${id_hospital}`
        
        let hospitalInfo = await prisma.$queryRawUnsafe(sqlHospital)
        
        return {
            disponivel: result[0].total < hospitalInfo[0].capacidade_maxima,
            vagas_restantes: hospitalInfo[0].capacidade_maxima - result[0].total
        }
    } catch (error) {
        console.log(error)
        return false
    }
}

//Listar dias disponíveis no mês para agendamento
const selectDiasDisponiveis = async function (hospitalId, anoMes, slotMinutos = 60) {
    try {
        // Buscar informações do hospital
        let sqlHospital = `SELECT capacidade_maxima, horario_abertura, horario_fechamento 
                          FROM tbl_hospital 
                          WHERE id = ${hospitalId}`
        
        let hospitalInfo = await prisma.$queryRawUnsafe(sqlHospital)
        
        if (!hospitalInfo || hospitalInfo.length === 0) {
            return false
        }
        
        const { capacidade_maxima, horario_abertura, horario_fechamento } = hospitalInfo[0]
        
        // Gerar datas do mês (apenas dias futuros)
        const hoje = new Date()
        const [ano, mes] = anoMes.split('-')
        const ultimoDiaMes = new Date(ano, mes, 0).getDate()
        
        const diasDisponiveis = []
        
        for (let dia = 1; dia <= ultimoDiaMes; dia++) {
            const dataAtual = new Date(ano, mes - 1, dia)
            
            // Pular dias passados
            const hojeSemHora = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate())
            if (dataAtual < hojeSemHora) continue
            
            const dataStr = dataAtual.toISOString().split('T')[0]
            
            // Extrair horário do formato DateTime ISO - conversão direta
            const horaAberturaStr = horario_abertura.toISOString().substring(11, 19) // Extrai HH:MM:SS
            const horaFechamentoStr = horario_fechamento.toISOString().substring(11, 19) // Extrai HH:MM:SS
            
            const [horaAbertura, minutoAbertura] = horaAberturaStr.split(':').map(Number)
            const [horaFechamento, minutoFechamento] = horaFechamentoStr.split(':').map(Number)
            
            let temVagaNodia = false
            
            // Iterar pelos slots do dia
            for (let hora = horaAbertura; hora < horaFechamento; hora++) {
                for (let minuto = 0; minuto < 60; minuto += slotMinutos) {
                    // Se é a última hora, verificar se não passou do horário de fechamento
                    if (hora === horaFechamento - 1 && minuto >= minutoFechamento) break
                    
                    const horaStr = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}:00`
                    
                    // Se é hoje, pular horários passados
                    if (dataAtual.toDateString() === hoje.toDateString()) {
                        const agora = new Date()
                        const horarioSlot = new Date(`${dataStr}T${horaStr}`)
                        if (horarioSlot <= agora) continue
                    }
                    
                    // Verificar disponibilidade do slot
                    let sqlCount = `SELECT COUNT(*) as total 
                                   FROM tbl_agendamento 
                                   WHERE data = '${dataStr}' 
                                   AND hora = '${horaStr}' 
                                   AND id_hospital = ${hospitalId}`
                    
                    let countResult = await prisma.$queryRawUnsafe(sqlCount)
                    const totalAgendamentos = Number(countResult[0].total) // Converter BigInt para Number
                    
                    if (totalAgendamentos < capacidade_maxima) {
                        temVagaNodia = true
                        break
                    }
                }
                if (temVagaNodia) break
            }
            
            if (temVagaNodia) {
                diasDisponiveis.push(dataStr)
            }
        }
        
        return diasDisponiveis
        
    } catch (error) {
        console.log(error)
        return false
    }
}

//Listar horários disponíveis em um dia específico para agendamento
const selectHorariosDoDia = async function (hospitalId, data, slotMinutos = 60, retornarTodos = false) {
    try {
        // Buscar informações do hospital
        let sqlHospital = `SELECT capacidade_maxima, horario_abertura, horario_fechamento 
                          FROM tbl_hospital 
                          WHERE id = ${hospitalId}`
        
        let hospitalInfo = await prisma.$queryRawUnsafe(sqlHospital)
        
        if (!hospitalInfo || hospitalInfo.length === 0) {
            return false
        }
        
        const { capacidade_maxima, horario_abertura, horario_fechamento } = hospitalInfo[0]
        
        const horarios = []
        const hoje = new Date()
        const dataSlot = new Date(data)
        
        // Extrair horário do formato DateTime ISO - conversão direta
        const horaAberturaStr = horario_abertura.toISOString().substring(11, 19) // Extrai HH:MM:SS
        const horaFechamentoStr = horario_fechamento.toISOString().substring(11, 19) // Extrai HH:MM:SS
        
        const [horaAbertura, minutoAbertura] = horaAberturaStr.split(':').map(Number)
        const [horaFechamento, minutoFechamento] = horaFechamentoStr.split(':').map(Number)
        
        // Iterar pelos slots do dia
        for (let hora = horaAbertura; hora < horaFechamento; hora++) {
            for (let minuto = 0; minuto < 60; minuto += slotMinutos) {
                // Se é a última hora, verificar se não passou do horário de fechamento
                if (hora === horaFechamento - 1 && minuto >= minutoFechamento) break
                
                const horaStr = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}:00`
                
                // Se é hoje, pular horários passados
                if (dataSlot.toDateString() === hoje.toDateString()) {
                    const horarioSlot = new Date(`${data}T${horaStr}`)
                    if (horarioSlot <= hoje) continue
                }
                
                // Contar agendamentos existentes
                let sqlCount = `SELECT COUNT(*) as total 
                               FROM tbl_agendamento 
                               WHERE data = '${data}' 
                               AND hora = '${horaStr}' 
                               AND id_hospital = ${hospitalId}`
                
                let countResult = await prisma.$queryRawUnsafe(sqlCount)
                const totalAgendamentos = Number(countResult[0].total) // Converter BigInt para Number
                const vagas = capacidade_maxima - totalAgendamentos
                
                // Adicionar horário baseado no parâmetro retornarTodos
                if (retornarTodos || vagas > 0) {
                    horarios.push({
                        hora: horaStr,
                        vagas: vagas
                    })
                }
            }
        }
        
        return horarios
        
    } catch (error) {
        console.log(error)
        return false
    }
}

//Listar agendamento com transação para evitar overbooking
const insertAgendamentoTx = async function (userId, hospitalId, data, hora) {
    try {
        return await prisma.$transaction(async (tx) => {
            // 1. Verificar se hospital existe e obter dados
            let sqlHospital = `SELECT id, capacidade_maxima, horario_abertura, horario_fechamento 
                              FROM tbl_hospital 
                              WHERE id = ${hospitalId}`
            
            let hospitalInfo = await tx.$queryRawUnsafe(sqlHospital)
            
            if (!hospitalInfo || hospitalInfo.length === 0) {
                throw new Error('HOSPITAL_NOT_FOUND')
            }
            
            const { capacidade_maxima, horario_abertura, horario_fechamento } = hospitalInfo[0]
            
            // 2. Validar data e hora
            const hoje = new Date()
            const dataAgendamento = new Date(data)
            const horaAgendamento = new Date(`1970-01-01T${hora}`)
            const horaAbertura = new Date(`1970-01-01T${horario_abertura}`)
            const horaFechamento = new Date(`1970-01-01T${horario_fechamento}`)
            
            // Validar se data não é passada
            if (dataAgendamento < hoje.setHours(0, 0, 0, 0)) {
                throw new Error('DATA_PASSADA')
            }
            
            // Se é hoje, validar se hora é futura
            if (dataAgendamento.toDateString() === hoje.toDateString()) {
                const agendamentoCompleto = new Date(`${data}T${hora}`)
                if (agendamentoCompleto <= new Date()) {
                    throw new Error('HORA_PASSADA')
                }
            }
            
            // Validar se hora está dentro do horário de funcionamento
            if (horaAgendamento < horaAbertura || horaAgendamento >= horaFechamento) {
                throw new Error('FORA_HORARIO_FUNCIONAMENTO')
            }
            
            // 3. Lock ordenado - selecionar hospital para padronizar ordem de bloqueio
            await tx.$queryRawUnsafe(`SELECT id FROM tbl_hospital WHERE id = ${hospitalId} FOR UPDATE`)
            
            // 4. Recontar agendamentos para evitar overbooking
            let sqlCount = `SELECT COUNT(*) as total 
                           FROM tbl_agendamento 
                           WHERE data = '${data}' 
                           AND hora = '${hora}' 
                           AND id_hospital = ${hospitalId}`
            
            let countResult = await tx.$queryRawUnsafe(sqlCount)
            const totalAgendamentos = Number(countResult[0].total) // Converter BigInt para Number
            
            if (totalAgendamentos >= capacidade_maxima) {
                throw new Error('SEM_VAGAS')
            }
            
            // 5. Inserir agendamento
            let sqlInsert = `INSERT INTO tbl_agendamento (
                                status, data, hora, id_usuario, id_hospital
                             ) VALUES (
                                'Agendado', '${data}', '${hora}', ${userId}, ${hospitalId}
                             )`
            
            await tx.$executeRawUnsafe(sqlInsert)
            
            // 6. Buscar agendamento criado
            let sqlSelect = `SELECT * FROM tbl_agendamento 
                            WHERE data = '${data}' 
                            AND hora = '${hora}' 
                            AND id_usuario = ${userId}
                            AND id_hospital = ${hospitalId}
                            ORDER BY id DESC LIMIT 1`
            
            let agendamentoCriado = await tx.$queryRawUnsafe(sqlSelect)
            
            return agendamentoCriado[0]
        })
        
    } catch (error) {
        console.log(error)
        
        // Retornar erros específicos
        if (error.message === 'HOSPITAL_NOT_FOUND') return { error: 'HOSPITAL_NOT_FOUND' }
        if (error.message === 'DATA_PASSADA') return { error: 'DATA_PASSADA' }
        if (error.message === 'HORA_PASSADA') return { error: 'HORA_PASSADA' }
        if (error.message === 'FORA_HORARIO_FUNCIONAMENTO') return { error: 'FORA_HORARIO_FUNCIONAMENTO' }
        if (error.message === 'SEM_VAGAS') return { error: 'SEM_VAGAS' }
        
        return false
    }
}

//Listar agendamentos de um usuário, com opção de filtrar apenas futuros
const selectAgendamentosDoUsuario = async function (userId, somenteFuturos = false) {
    try {
        let whereClause = `WHERE a.id_usuario = ${userId}`
        
        if (somenteFuturos) {
            const hoje = new Date().toISOString().split('T')[0]
            const agora = new Date().toTimeString().split(' ')[0]
            
            whereClause += ` AND (a.data > '${hoje}' OR (a.data = '${hoje}' AND a.hora >= '${agora}'))`
        }
        
        let sql = `
            SELECT 
                a.id,
                a.status,
                a.data,
                a.hora,
                h.nome as hospital_nome,
                h.email as hospital_email,
                h.telefone as hospital_telefone,
                h.cep as hospital_cep
            FROM tbl_agendamento a
            LEFT JOIN tbl_hospital h ON a.id_hospital = h.id
            ${whereClause}
            ORDER BY a.data ASC, a.hora ASC
        `
        
        let result = await prisma.$queryRawUnsafe(sql)
        return result
        
    } catch (error) {
        console.log(error)
        return false
    }
}

//Deletar agendamento de um usuário, garantindo que pertence a ele
const deleteAgendamentoDoUsuario = async function (agendamentoId, userId) {
    try {
        // Verificar se agendamento existe e pertence ao usuário
        let sqlVerify = `SELECT id FROM tbl_agendamento 
                        WHERE id = ${agendamentoId} 
                        AND id_usuario = ${userId}`
        
        let agendamento = await prisma.$queryRawUnsafe(sqlVerify)
        
        if (!agendamento || agendamento.length === 0) {
            return false
        }
        
        // Deletar agendamento
        let sqlDelete = `DELETE FROM tbl_agendamento 
                        WHERE id = ${agendamentoId} 
                        AND id_usuario = ${userId}`
        
        let result = await prisma.$executeRawUnsafe(sqlDelete)
        return result > 0
        
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
    selectByHospitalAgendamento,
    selectByDataAgendamento,
    verificarDisponibilidade,
    selectDiasDisponiveis,
    selectHorariosDoDia,
    insertAgendamentoTx,
    selectAgendamentosDoUsuario,
    deleteAgendamentoDoUsuario
}
