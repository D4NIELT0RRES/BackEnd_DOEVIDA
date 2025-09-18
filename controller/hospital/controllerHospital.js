/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD do HOSPITAL.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

const MESSAGE = require('../../modulo/config.js')
const hospitalDAO = require('../../model/DAO/hospital.js')
const controllerAgendamento = require('../agendamento/controllerAgendamento.js')

//Inserir novo hospital
const inserirHospital = async function(hospital, contentType){
    try{
        if(contentType !== 'application/json'){
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if(!hospital.nome || hospital.nome.length > 70 ||
           !hospital.email || hospital.email.length > 100 ||
           !hospital.senha || hospital.senha.length > 20 ||
           !hospital.cnpj || hospital.cnpj.length > 20 ||
           !hospital.crm ||
           !hospital.cep || hospital.cep.length > 10 ||
           !hospital.telefone ||
           !hospital.capacidade_maxima || isNaN(hospital.capacidade_maxima) || hospital.capacidade_maxima <= 0 ||
           !hospital.convenios ||
           !hospital.horario_abertura ||
           !hospital.horario_fechamento ||
           !hospital.foto
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        //Valida se o agendamento existe, se informado
        if(hospital.id_agendamento){
            const agendamentoExistente = await controllerAgendamento.buscarAgendamento(hospital.id_agendamento)
            if(!agendamentoExistente || agendamentoExistente.status_code !== 200){
                return { status_code: 404, message: "Agendamento não encontrado" }
            }
        }

        const resultHospital = await hospitalDAO.insertHospital(hospital)
        if(resultHospital){
            return {
                status_code: 201,
                message: "Hospital criado com sucesso",
                hospital: resultHospital
            }
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

    }catch(error){
        console.error("Erro inserirHospital:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Atualizar hospital
const atualizarHospital = async function(hospital, id, contentType){
    try{
        if(contentType !== 'application/json'){
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if(!hospital.nome || hospital.nome.length > 70 ||
           !hospital.email || hospital.email.length > 100 ||
           !hospital.senha || hospital.senha.length > 20 ||
           !hospital.cnpj || hospital.cnpj.length > 20 ||
           !hospital.crm ||
           !hospital.cep || hospital.cep.length > 10 ||
           !hospital.telefone ||
           !hospital.capacidade_maxima || isNaN(hospital.capacidade_maxima) || hospital.capacidade_maxima <= 0 ||
           !hospital.convenios ||
           !hospital.horario_abertura ||
           !hospital.horario_fechamento ||
           !hospital.foto ||
           !id || isNaN(id) || id <= 0
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const hospitalExistente = await hospitalDAO.selectByIdHospital(parseInt(id))
        if(!hospitalExistente || hospitalExistente.length === 0){
            return MESSAGE.ERROR_NOT_FOUND
        }

        //Valida chave estrangeira id_agendamento
        if(hospital.id_agendamento){
            const agendamentoExistente = await controllerAgendamento.buscarAgendamento(hospital.id_agendamento)
            if(!agendamentoExistente || agendamentoExistente.status_code !== 200){
                return { status_code: 404, message: "Agendamento não encontrado" }
            }
        }

        const result = await hospitalDAO.updateHospital(hospital, parseInt(id))
        if(result){
            return MESSAGE.SUCCESS_UPDATE_ITEM
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

    }catch(error){
        console.error("Erro atualizarHospital:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Excluir hospital
const excluirHospital = async function(id){
    try{
        if(!id || isNaN(id) || id <= 0){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const hospitalExistente = await hospitalDAO.selectByIdHospital(parseInt(id))
        if(!hospitalExistente || hospitalExistente.length === 0){
            return MESSAGE.ERROR_NOT_FOUND
        }

        const result = await hospitalDAO.deleteHospital(parseInt(id))
        if(result){
            return MESSAGE.SUCCESS_DELETE_ITEM
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

    }catch(error){
        console.error("Erro excluirHospital:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Listar hospitais
const listarHospital = async function(){
    try{
        const resultHospital = await hospitalDAO.selectAllHospital()
        if(!resultHospital || typeof(resultHospital) !== 'object' || resultHospital.length === 0){
            return MESSAGE.ERROR_NOT_FOUND
        }

        const arrayHospitais = []
        for(const item of resultHospital){
            //Se houver agendamento vinculado, busca os dados completos
            if(item.id_agendamento){
                const agendamento = await controllerAgendamento.buscarAgendamento(item.id_agendamento)
                item.agendamento = agendamento?.agendamento || null
            } else {
                item.agendamento = null
            }

            delete item.id_agendamento
            arrayHospitais.push(item)
        }

        return {
            status: true,
            status_code: 200,
            items: arrayHospitais.length,
            hospitais: arrayHospitais
        }

    }catch(error){
        console.error("Erro listarHospital:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar hospital por ID
const buscarHospital = async function(id){
    try{
        if(!id || isNaN(id) || id <= 0){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const resultHospital = await hospitalDAO.selectByIdHospital(parseInt(id))
        if(!resultHospital || resultHospital.length === 0){
            return MESSAGE.ERROR_NOT_FOUND
        }

        const hospital = resultHospital[0]
        if(hospital.id_agendamento){
            const agendamento = await controllerAgendamento.buscarAgendamento(hospital.id_agendamento)
            hospital.agendamento = agendamento?.agendamento || null
        } else {
            hospital.agendamento = null
        }

        delete hospital.id_agendamento

        return {
            status: true,
            status_code: 200,
            hospital
        }

    }catch(error){
        console.error("Erro buscarHospital:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirHospital,
    atualizarHospital,
    excluirHospital,
    listarHospital,
    buscarHospital
}
