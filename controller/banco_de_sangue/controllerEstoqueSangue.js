/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD do BANCO DE SANGUE.
 * DATA: 22/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

//Import do arquivo de configuração para a mensagem e status code
const MESSAGE = require('../../modulo/config.js')

//Import do DAO para realizar um CRUD no banco de dados
const bancoSangueDAO = require('../../model/DAO/banco_sangue')

//Inserir um novo banco de sangue
const inserirBancoSangue = async function(bancoSangue, contentType){
    try{
        if(contentType == 'application/json'){
            if(
                bancoSangue.tipo_sanguineo == undefined || bancoSangue.tipo_sanguineo == '' || bancoSangue.tipo_sanguineo == null || bancoSangue.tipo_sanguineo.length > 5 ||
                bancoSangue.quantidade     == undefined || bancoSangue.quantidade     == '' || bancoSangue.quantidade     == null || isNaN(bancoSangue.quantidade)
            ){
                return MESSAGE.ERROR_REQUIRED_FIELDS // 400
            }else{
                let result = await bancoSangueDAO.insertBancoSangue(bancoSangue)
                if(result){
                    return {
                        status_code: 201,
                        message: "Banco de sangue criado com sucesso",
                        banco_sangue: result
                    }
                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        }else{
            return MESSAGE.ERROR_CONTENT_TYPE // 415
        }
    }catch(error){
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER // 500
    }
}

//Atualizar um banco de sangue existente pelo ID
const atualizarBancoSangue = async function(bancoSangue, id, contentType){
    try{
        if(contentType == 'application/json'){
            if(
                bancoSangue.tipo_sanguineo == undefined || bancoSangue.tipo_sanguineo == '' || bancoSangue.tipo_sanguineo == null || bancoSangue.tipo_sanguineo.length > 5 ||
                bancoSangue.quantidade     == undefined || bancoSangue.quantidade     == '' || bancoSangue.quantidade     == null || isNaN(bancoSangue.quantidade) ||
                id == undefined || id == '' || id == null || isNaN(id) || id <= 0
            ){
                return MESSAGE.ERROR_REQUIRED_FIELDS // 400
            }else{
                let registro = await buscarBancoSangue(parseInt(id))
                if(registro.status_code == 200){
                    let result = await bancoSangueDAO.updateBancoSangue(bancoSangue, parseInt(id))
                    if(result){
                        return {
                            status_code: 200,
                            message: "Banco de sangue atualizado com sucesso"
                        }
                    }else{
                        return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                    }
                }else{
                    return MESSAGE.ERROR_NOT_FOUND // 404
                }
            }
        }else{
            return MESSAGE.ERROR_CONTENT_TYPE // 415
        }
    }catch(error){
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER // 500
    }
}

//Deletar um banco de sangue pelo ID
const excluirBancoSangue = async function(id){
    try{
        if(id == undefined || id == '' || id == null || isNaN(id) || id <= 0){
            return MESSAGE.ERROR_REQUIRED_FIELDS // 400
        }else{
            let registro = await buscarBancoSangue(parseInt(id))
            if(registro.status_code == 200){
                let result = await bancoSangueDAO.deleteBancoSangue(parseInt(id))
                if(result){
                    return MESSAGE.SUCCESS_DELETE_ITEM
                }else{
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                }
            }else{
                return MESSAGE.ERROR_NOT_FOUND // 404
            }
        }
    }catch(error){
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER // 500
    }
}

//Listar todos os bancos de sangue
const listarBancoSangue = async function(){
    try{
        let dadosBanco = {}
        let result = await bancoSangueDAO.selectAllBancoSangue()
        if(result != false && typeof(result) == 'object'){
            if(result.length > 0){
                dadosBanco.status = true
                dadosBanco.status_code = 200
                dadosBanco.items = result.length
                dadosBanco.banco_sangue = result
                return dadosBanco
            }else{
                return MESSAGE.ERROR_NOT_FOUND // 404
            }
        }else{
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL // 500
        }
    }catch(error){
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER // 500
    }
}

//Buscar banco de sangue pelo ID
const buscarBancoSangue = async function(id){
    try{
        if(id == undefined || id == '' || id == null || isNaN(id) || id <= 0){
            return MESSAGE.ERROR_REQUIRED_FIELDS // 400
        }else{
            let dadosBanco = {}
            let result = await bancoSangueDAO.selectByIdBancoSangue(parseInt(id))
            if(result && typeof(result) == 'object'){
                dadosBanco.status = true
                dadosBanco.status_code = 200
                dadosBanco.banco_sangue = result
                return dadosBanco
            }else{
                return MESSAGE.ERROR_NOT_FOUND // 404
            }
        }
    }catch(error){
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER // 500
    }
}

//Buscar banco de sangue pelo tipo sanguíneo
const buscarBancoSanguePorTipo = async function(tipo){
    try{
        if(tipo == undefined || tipo == '' || tipo == null || tipo.length > 5){
            return MESSAGE.ERROR_REQUIRED_FIELDS // 400
        }else{
            let dadosBanco = {}
            let result = await bancoSangueDAO.selectByTipoSanguineo(tipo)
            if(result && typeof(result) == 'object'){
                if(result.length > 0){
                    dadosBanco.status = true
                    dadosBanco.status_code = 200
                    dadosBanco.banco_sangue = result
                    return dadosBanco
                }else{
                    return MESSAGE.ERROR_NOT_FOUND // 404
                }
            }else{
                return MESSAGE.ERROR_INTERNAL_SERVER_MODEL // 500
            }
        }
    }catch(error){
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER // 500
    }
}

module.exports = {
    inserirBancoSangue,
    atualizarBancoSangue,
    excluirBancoSangue,
    listarBancoSangue,
    buscarBancoSangue,
    buscarBancoSanguePorTipo
}