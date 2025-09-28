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

//============================== INSERIR ==============================
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

//============================== ATUALIZAR ==============================
const atualizarAgendamento = async function(agendamento, id, contentType){
    try{
        if(contentType !== 'application/json'){
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if(!agendamento.status      || agendamento.status.length > 50 ||
           !agendamento.data        ||
           !agendamento.hora        ||
           !agendamento.id_usuario  || isNaN(agendamento.id_usuario)  || agendamento.id_usuario  <= 0 ||
           !agendamento.id_doacao   || isNaN(agendamento.id_doacao)   || agendamento.id_doacao   <= 0 ||
           !agendamento.id_hospital || isNaN(agendamento.id_hospital) || agendamento.id_hospital <= 0 ||
           !id                      || isNaN(id)                      || id <= 0
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

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

//============================== DELETAR ==============================
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

//============================== LISTAR TODOS ==============================
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

//============================== BUSCAR POR ID ==============================
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

//============================== BUSCAR POR STATUS ==============================
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

//============================== BUSCAR POR USUÁRIO ==============================
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

//============================== BUSCAR POR DOAÇÃO ==============================
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

//============================== BUSCAR POR HOSPITAL ==============================
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

//============================== BUSCAR POR DATA ==============================
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

//============================== VERIFICAR DISPONIBILIDADE ==============================
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
    verificarDisponibilidade
}
