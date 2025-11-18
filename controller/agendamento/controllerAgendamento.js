/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD do AGENDAMENTO.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.1
 ***************************************************************************************/

const MESSAGE = require('../../modulo/config.js')
const agendamentoDAO = require('../../model/DAO/agendamento.js')
const controllerUsuario = require('../usuario/controllerUsuario.js')
const controllerDoacao = require('../doacao/controllerDoacao.js')
const controllerHospital = require('../hospital/controllerHospital.js')

//Inserir um novo agendamento
const inserirAgendamento = async function(agendamento, contentType){
    try{
        if(contentType !== 'application/json'){
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if(!agendamento.status      || agendamento.status.length > 50 ||
           !agendamento.data        ||
           !agendamento.hora        ||
           !agendamento.id_usuario  || isNaN(agendamento.id_usuario)  || agendamento.id_usuario  <= 0 ||
           !agendamento.id_doacao   || isNaN(agendamento.id_doacao)   || agendamento.id_doacao   <= 0 ||
           !agendamento.id_hospital || isNaN(agendamento.id_hospital) || agendamento.id_hospital <= 0
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const usuarioExistente = await controllerUsuario.buscarUsuario(agendamento.id_usuario)
        if(!usuarioExistente || usuarioExistente.status_code !== 200){
            return { status_code: 404, message: "Usuário não encontrado" }
        }

        const doacaoExistente = await controllerDoacao.buscarDoacao(agendamento.id_doacao)
        if(!doacaoExistente || doacaoExistente.status_code !== 200){
            return { status_code: 404, message: "Doação não encontrada" }
        }

        const hospitalExistente = await controllerHospital.buscarHospital(agendamento.id_hospital)
        if(!hospitalExistente || hospitalExistente.status_code !== 200){
            return { status_code: 404, message: "Hospital não encontrado" }
        }

        // Verificar disponibilidade de vagas
        const disponibilidade = await agendamentoDAO.verificarDisponibilidade(
            agendamento.data,
            agendamento.hora,
            agendamento.id_hospital
        )
        if(!disponibilidade.disponivel){
            return { status_code: 409, message: "Horário indisponível no hospital", ...disponibilidade }
        }

        const resultAgendamento = await agendamentoDAO.insertAgendamento(agendamento)
        if(resultAgendamento){
            return {
                status_code: 201,
                message: "Agendamento criado com sucesso",
                agendamento: resultAgendamento
            }
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

    }catch(error){
        console.error("Erro inserirAgendamento:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Atualizar um agendamento existente pelo ID
const atualizarAgendamento = async function(agendamento, id, contentType){
    try{
        console.log('🔍 [BACKEND] Dados recebidos:', JSON.stringify(agendamento, null, 2));
        console.log('🔍 [BACKEND] ID:', id);
        console.log('🔍 [BACKEND] Content-Type:', contentType);
        
        if(contentType !== 'application/json'){
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if(!agendamento.status      || agendamento.status.length > 50 ||
           !agendamento.data        ||
           !agendamento.hora        ||
           !agendamento.id_usuario  || isNaN(agendamento.id_usuario)  || agendamento.id_usuario  <= 0 ||
           !agendamento.id_hospital || isNaN(agendamento.id_hospital) || agendamento.id_hospital <= 0 ||
           !id                      || isNaN(id)                      || id <= 0
        ){
            console.error('❌ [BACKEND] Validação falhou:', {
                status: agendamento.status,
                data: agendamento.data,
                hora: agendamento.hora,
                id_usuario: agendamento.id_usuario,
                id_hospital: agendamento.id_hospital,
                id: id
            });
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }
        
        // id_doacao é opcional - se fornecido, validar
        if(agendamento.id_doacao !== undefined && agendamento.id_doacao !== null){
            if(isNaN(agendamento.id_doacao) || agendamento.id_doacao <= 0){
                console.error('❌ [BACKEND] id_doacao inválido:', agendamento.id_doacao);
                return MESSAGE.ERROR_REQUIRED_FIELDS
            }
        }
        
        console.log('✅ [BACKEND] Validação passou!');

        const agendamentoExistente = await agendamentoDAO.selectByIdAgendamento(parseInt(id))
        if(!agendamentoExistente){
            return MESSAGE.ERROR_NOT_FOUND
        }

        agendamento.id = parseInt(id)
        const result = await agendamentoDAO.updateAgendamento(agendamento)
        if(result){
            return {
                status_code: 200,
                message: "Agendamento atualizado com sucesso",
                agendamento: result
            }
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

    }catch(error){
        console.error("Erro atualizarAgendamento:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Deletar um agendamento pelo ID
const excluirAgendamento = async function(id){
    try{
        if(!id || isNaN(id) || id <= 0){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const agendamentoExistente = await agendamentoDAO.selectByIdAgendamento(parseInt(id))
        if(!agendamentoExistente){
            return MESSAGE.ERROR_NOT_FOUND
        }

        const result = await agendamentoDAO.deleteAgendamento(parseInt(id))
        if(result){
            return MESSAGE.SUCCESS_DELETE_ITEM
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

    }catch(error){
        console.error("Erro excluirAgendamento:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Listar todos os agendamentos
const listarAgendamento = async function(){
    try{
        const resultAgendamento = await agendamentoDAO.selectAllAgendamento()
        if(!resultAgendamento || resultAgendamento.length === 0){
            return MESSAGE.ERROR_NOT_FOUND
        }

        return {
            status: true,
            status_code: 200,
            items: resultAgendamento.length,
            agendamentos: resultAgendamento
        }

    }catch(error){
        console.error("Erro listarAgendamento:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar agendamento pelo ID
const buscarAgendamento = async function(id){
    try{
        if(!id || isNaN(id) || id <= 0){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const agendamento = await agendamentoDAO.selectByIdAgendamento(parseInt(id))
        if(!agendamento){
            return MESSAGE.ERROR_NOT_FOUND
        }

        return {
            status: true,
            status_code: 200,
            agendamento
        }

    }catch(error){
        console.error("Erro buscarAgendamento:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar agendamentos pelo status
const buscarAgendamentoPorStatus = async function(status){
    try{
        if(!status) return MESSAGE.ERROR_REQUIRED_FIELDS

        const result = await agendamentoDAO.selectByStatusAgendamento(status)
        if(!result || result.length === 0){
            return MESSAGE.ERROR_NOT_FOUND
        }

        return {
            status: true,
            status_code: 200,
            items: result.length,
            agendamentos: result
        }
    }catch(error){
        console.error("Erro buscarAgendamentoPorStatus:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar agendamento pelo usuário
const buscarAgendamentoPorUsuario = async function(id_usuario){
    try{
        if(!id_usuario || isNaN(id_usuario)) return MESSAGE.ERROR_REQUIRED_FIELDS

        const result = await agendamentoDAO.selectByUsuarioAgendamento(parseInt(id_usuario))
        if(!result || result.length === 0){
            return MESSAGE.ERROR_NOT_FOUND
        }

        return {
            status: true,
            status_code: 200,
            items: result.length,
            agendamentos: result
        }
    }catch(error){
        console.error("Erro buscarAgendamentoPorUsuario:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar agendamento pela doação
const buscarAgendamentoPorDoacao = async function(id_doacao){
    try{
        if(!id_doacao || isNaN(id_doacao)) return MESSAGE.ERROR_REQUIRED_FIELDS

        const result = await agendamentoDAO.selectByDoacaoAgendamento(parseInt(id_doacao))
        if(!result || result.length === 0){
            return MESSAGE.ERROR_NOT_FOUND
        }

        return {
            status: true,
            status_code: 200,
            items: result.length,
            agendamentos: result
        }
    }catch(error){
        console.error("Erro buscarAgendamentoPorDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar agendamento pelo hospital
const buscarAgendamentoPorHospital = async function(id_hospital){
    try{
        if(!id_hospital || isNaN(id_hospital)) return MESSAGE.ERROR_REQUIRED_FIELDS

        const result = await agendamentoDAO.selectByHospitalAgendamento(parseInt(id_hospital))
        if(!result || result.length === 0){
            return MESSAGE.ERROR_NOT_FOUND
        }

        return {
            status: true,
            status_code: 200,
            items: result.length,
            agendamentos: result
        }
    }catch(error){
        console.error("Erro buscarAgendamentoPorHospital:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar agendamento pela data
const buscarAgendamentoPorData = async function(data){
    try{
        if(!data) return MESSAGE.ERROR_REQUIRED_FIELDS

        const result = await agendamentoDAO.selectByDataAgendamento(data)
        if(!result || result.length === 0){
            return MESSAGE.ERROR_NOT_FOUND
        }

        return {
            status: true,
            status_code: 200,
            items: result.length,
            agendamentos: result
        }
    }catch(error){
        console.error("Erro buscarAgendamentoPorData:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Verificar disponibilidade
const verificarDisponibilidade = async function(data, hora, id_hospital){
    try{
        if(!data || !hora || !id_hospital || isNaN(id_hospital)){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const disponibilidade = await agendamentoDAO.verificarDisponibilidade(data, hora, parseInt(id_hospital))
        if(disponibilidade === false){
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

        return {
            status: true,
            status_code: 200,
            ...disponibilidade
        }
    }catch(error){
        console.error("Erro verificarDisponibilidade:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Listar dias disponíveis
const listarDiasDisponiveis = async function(hospitalId, mes, slotMinutos = 60){
    try{
        // Validação de parâmetros
        if(!hospitalId || isNaN(hospitalId) || hospitalId <= 0){
            return {
                status: false,
                status_code: 400,
                message: "ID do hospital inválido"
            }
        }

        if(!mes || !/^\d{4}-\d{2}$/.test(mes)){
            return {
                status: false,
                status_code: 400,
                message: "Formato do mês inválido. Use YYYY-MM"
            }
        }

        if(slotMinutos && (isNaN(slotMinutos) || slotMinutos <= 0)){
            return {
                status: false,
                status_code: 400,
                message: "Slot de minutos deve ser um número positivo"
            }
        }

        // Verificar se hospital existe
        const hospitalExistente = await controllerHospital.buscarHospital(hospitalId)
        if(!hospitalExistente || hospitalExistente.status_code !== 200){
            return {
                status: false,
                status_code: 404,
                message: "Hospital não encontrado"
            }
        }

        const diasDisponiveis = await agendamentoDAO.selectDiasDisponiveis(parseInt(hospitalId), mes, parseInt(slotMinutos))
        
        if(diasDisponiveis === false){
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

        return {
            status: true,
            status_code: 200,
            hospitalId: parseInt(hospitalId),
            mes: mes,
            slotMinutos: parseInt(slotMinutos),
            diasDisponiveis: diasDisponiveis
        }

    }catch(error){
        console.error("Erro listarDiasDisponiveis:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Listar horários do dia
const listarHorariosDoDia = async function(hospitalId, data, slotMinutos = 60, todos = false){
    try{
        // Validação de parâmetros
        if(!hospitalId || isNaN(hospitalId) || hospitalId <= 0){
            return {
                status: false,
                status_code: 400,
                message: "ID do hospital inválido"
            }
        }

        if(!data || !/^\d{4}-\d{2}-\d{2}$/.test(data)){
            return {
                status: false,
                status_code: 400,
                message: "Formato da data inválido. Use YYYY-MM-DD"
            }
        }

        if(slotMinutos && (isNaN(slotMinutos) || slotMinutos <= 0)){
            return {
                status: false,
                status_code: 400,
                message: "Slot de minutos deve ser um número positivo"
            }
        }

        // Verificar se hospital existe
        const hospitalExistente = await controllerHospital.buscarHospital(hospitalId)
        if(!hospitalExistente || hospitalExistente.status_code !== 200){
            return {
                status: false,
                status_code: 404,
                message: "Hospital não encontrado"
            }
        }

        const horarios = await agendamentoDAO.selectHorariosDoDia(
            parseInt(hospitalId), 
            data, 
            parseInt(slotMinutos), 
            todos
        )
        
        if(horarios === false){
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

        return {
            status: true,
            status_code: 200,
            hospitalId: parseInt(hospitalId),
            data: data,
            slotMinutos: parseInt(slotMinutos),
            horarios: horarios
        }

    }catch(error){
        console.error("Erro listarHorariosDoDia:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Criar um agendamento
const criarAgendamento = async function(dadosAgendamento, contentType, userId){
    try{
        if(contentType !== 'application/json'){
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if(!userId || isNaN(userId) || userId <= 0){
            return {
                status: false,
                status_code: 401,
                message: "Usuário não autenticado"
            }
        }

        if(!dadosAgendamento.id_hospital || isNaN(dadosAgendamento.id_hospital) || dadosAgendamento.id_hospital <= 0 ||
           !dadosAgendamento.data || !/^\d{4}-\d{2}-\d{2}$/.test(dadosAgendamento.data) ||
           !dadosAgendamento.hora || !/^\d{2}:\d{2}:\d{2}$/.test(dadosAgendamento.hora)
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const resultado = await agendamentoDAO.insertAgendamentoTx(
            parseInt(userId),
            parseInt(dadosAgendamento.id_hospital),
            dadosAgendamento.data,
            dadosAgendamento.hora
        )

        if(resultado === false){
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

        // Tratar erros específicos
        if(resultado.error){
            switch(resultado.error){
                case 'HOSPITAL_NOT_FOUND':
                    return {
                        status: false,
                        status_code: 404,
                        message: "Hospital não encontrado"
                    }
                case 'DATA_PASSADA':
                    return {
                        status: false,
                        status_code: 400,
                        message: "Não é possível agendar para data passada"
                    }
                case 'HORA_PASSADA':
                    return {
                        status: false,
                        status_code: 400,
                        message: "Não é possível agendar para horário passado"
                    }
                case 'FORA_HORARIO_FUNCIONAMENTO':
                    return {
                        status: false,
                        status_code: 400,
                        message: "Horário fora do funcionamento do hospital"
                    }
                case 'SEM_VAGAS':
                    return {
                        status: false,
                        status_code: 409,
                        message: "Não há vagas disponíveis para este horário"
                    }
                default:
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
            }
        }

        return {
            status: true,
            status_code: 201,
            message: "Agendamento criado com sucesso",
            agendamento: resultado
        }

    }catch(error){
        console.error("Erro criarAgendamento:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Listar meus agendamentos
const listarMeusAgendamentos = async function(userId, futuros = false){
    try{
        if(!userId || isNaN(userId) || userId <= 0){
            return {
                status: false,
                status_code: 401,
                message: "Usuário não autenticado"
            }
        }

        const agendamentos = await agendamentoDAO.selectAgendamentosDoUsuario(parseInt(userId), futuros)
        
        if(agendamentos === false){
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

        if(!agendamentos || agendamentos.length === 0){
            return {
                status: true,
                status_code: 200,
                message: "Nenhum agendamento encontrado",
                agendamentos: []
            }
        }

        return {
            status: true,
            status_code: 200,
            items: agendamentos.length,
            agendamentos: agendamentos
        }

    }catch(error){
        console.error("Erro listarMeusAgendamentos:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Cancelar meu agendamento
const cancelarMeuAgendamento = async function(agendamentoId, userId){
    try{
        if(!agendamentoId || isNaN(agendamentoId) || agendamentoId <= 0){
            return {
                status: false,
                status_code: 400,
                message: "ID do agendamento inválido"
            }
        }

        if(!userId || isNaN(userId) || userId <= 0){
            return {
                status: false,
                status_code: 401,
                message: "Usuário não autenticado"
            }
        }

        const resultado = await agendamentoDAO.deleteAgendamentoDoUsuario(parseInt(agendamentoId), parseInt(userId))
        
        if(resultado === false){
            return {
                status: false,
                status_code: 404,
                message: "Agendamento não encontrado ou não pertence ao usuário"
            }
        }

        return {
            status: true,
            status_code: 200,
            message: "Agendamento cancelado com sucesso"
        }

    }catch(error){
        console.error("Erro cancelarMeuAgendamento:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirAgendamento,
    atualizarAgendamento,
    excluirAgendamento,
    listarAgendamento,
    buscarAgendamento,
    buscarAgendamentoPorStatus,
    buscarAgendamentoPorUsuario,
    buscarAgendamentoPorDoacao,
    buscarAgendamentoPorHospital,
    buscarAgendamentoPorData,
    verificarDisponibilidade,
    listarDiasDisponiveis,
    listarHorariosDoDia,
    criarAgendamento,
    listarMeusAgendamentos,
    cancelarMeuAgendamento
}
