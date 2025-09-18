/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD do AGENDAMENTO.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

const MESSAGE = require('../../modulo/config.js')
const agendamentoDAO = require('../../model/DAO/agendamento.js')
const controllerUsuario = require('../usuario/controllerUsuario.js')
const controllerDoacao = require('../doacao/controllerDoacao.js')

//Inserir novo agendamento
const inserirAgendamento = async function(agendamento, contentType){
    try{
        if(contentType !== 'application/json'){
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if(!agendamento.status || agendamento.status.length > 50 ||
           !agendamento.data ||
           !agendamento.hora ||
           !agendamento.id_usuario || isNaN(agendamento.id_usuario) || agendamento.id_usuario <= 0 ||
           !agendamento.id_doacao || isNaN(agendamento.id_doacao) || agendamento.id_doacao <= 0
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        //Valida se o usuário existe
        const usuarioExistente = await controllerUsuario.buscarUsuario(agendamento.id_usuario)
        if(!usuarioExistente || usuarioExistente.status_code !== 200){
            return { status_code: 404, message: "Usuário não encontrado" }
        }

        //Valida se a doação existe
        const doacaoExistente = await controllerDoacao.buscarDoacao(agendamento.id_doacao)
        if(!doacaoExistente || doacaoExistente.status_code !== 200){
            return { status_code: 404, message: "Doação não encontrada" }
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

//Atualizar agendamento
const atualizarAgendamento = async function(agendamento, id, contentType){
    try{
        if(contentType !== 'application/json'){
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if(!agendamento.status || agendamento.status.length > 50 ||
           !agendamento.data ||
           !agendamento.hora ||
           !agendamento.id_usuario || isNaN(agendamento.id_usuario) || agendamento.id_usuario <= 0 ||
           !agendamento.id_doacao || isNaN(agendamento.id_doacao) || agendamento.id_doacao <= 0 ||
           !id || isNaN(id) || id <= 0
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const agendamentoExistente = await agendamentoDAO.selectByIdAgendamento(parseInt(id))
        if(!agendamentoExistente || agendamentoExistente.length === 0){
            return MESSAGE.ERROR_NOT_FOUND
        }

        //Valida chaves estrangeiras
        const usuarioExistente = await controllerUsuario.buscarUsuario(agendamento.id_usuario)
        if(!usuarioExistente || usuarioExistente.status_code !== 200){
            return { status_code: 404, message: "Usuário não encontrado" }
        }

        const doacaoExistente = await controllerDoacao.buscarDoacao(agendamento.id_doacao)
        if(!doacaoExistente || doacaoExistente.status_code !== 200){
            return { status_code: 404, message: "Doação não encontrada" }
        }

        const result = await agendamentoDAO.updateAgendamento(agendamento, parseInt(id))
        if(result){
            return MESSAGE.SUCCESS_UPDATE_ITEM
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

    }catch(error){
        console.error("Erro atualizarAgendamento:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Excluir agendamento
const excluirAgendamento = async function(id){
    try{
        if(!id || isNaN(id) || id <= 0){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const agendamentoExistente = await agendamentoDAO.selectByIdAgendamento(parseInt(id))
        if(!agendamentoExistente || agendamentoExistente.length === 0){
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

//Listar agendamentos
const listarAgendamento = async function(){
    try{
        const resultAgendamento = await agendamentoDAO.selectAllAgendamento()
        if(!resultAgendamento || typeof(resultAgendamento) !== 'object' || resultAgendamento.length === 0){
            return MESSAGE.ERROR_NOT_FOUND
        }

        const arrayAgendamentos = []
        for(const item of resultAgendamento){
            const usuario = await controllerUsuario.buscarUsuario(item.id_usuario)
            item.usuario = usuario?.usuario || null

            const doacao = await controllerDoacao.buscarDoacao(item.id_doacao)
            item.doacao = doacao?.doacao || null

            delete item.id_usuario
            delete item.id_doacao

            arrayAgendamentos.push(item)
        }

        return {
            status: true,
            status_code: 200,
            items: arrayAgendamentos.length,
            agendamentos: arrayAgendamentos
        }

    }catch(error){
        console.error("Erro listarAgendamento:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar agendamento por ID
const buscarAgendamento = async function(id){
    try{
        if(!id || isNaN(id) || id <= 0){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const resultAgendamento = await agendamentoDAO.selectByIdAgendamento(parseInt(id))
        if(!resultAgendamento || resultAgendamento.length === 0){
            return MESSAGE.ERROR_NOT_FOUND
        }

        const agendamento = resultAgendamento[0]
        const usuario = await controllerUsuario.buscarUsuario(agendamento.id_usuario)
        agendamento.usuario = usuario?.usuario || null

        const doacao = await controllerDoacao.buscarDoacao(agendamento.id_doacao)
        agendamento.doacao = doacao?.doacao || null

        delete agendamento.id_usuario
        delete agendamento.id_doacao

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

module.exports = {
    inserirAgendamento,
    atualizarAgendamento,
    excluirAgendamento,
    listarAgendamento,
    buscarAgendamento
}
