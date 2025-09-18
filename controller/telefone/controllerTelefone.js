/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD da TABELA TELEFONE.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

//Import do arquivo de configuração para a mensagem e status code
const MESSAGE = require('../../modulo/config.js')

//Import do DAO para realizar um CRUD no banco de dados
const telefoneDAO = require('../../model/DAO/telefone')

//Função para inserir um novo telefone
const inserirTelefone = async function(telefone, contentType) {
    try {
        if(contentType === 'application/json') {
            if(telefone.tipo === undefined || telefone.tipo === '' || telefone.tipo === null || telefone.tipo.length > 30 ||
               telefone.numero === undefined || telefone.numero === '' || telefone.numero === null || telefone.numero.length > 15) {
                return MESSAGE.ERROR_REQUIRED_FIELDS // 400
            } else {
                //Encaminha os dados para o DAO
                let resultTelefone = await telefoneDAO.insertTelefone(telefone)

                if(resultTelefone) {
                    return {
                        status_code: 201,
                        message: "Telefone registrado com sucesso",
                        telefone: resultTelefone
                    }
                } else {
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE // 415
        }
    } catch(error) {
        console.error("Erro inserirTelefone:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER // 500
    }
}

//Função para atualizar um telefone
const atualizarTelefone = async function(telefone, id, contentType) {
    try {
        if(contentType === 'application/json') {
            if(telefone.tipo === undefined || telefone.tipo === '' || telefone.tipo === null || telefone.tipo.length > 30 ||
               telefone.numero === undefined || telefone.numero === '' || telefone.numero === null || telefone.numero.length > 15 ||
               id === undefined || id === '' || id === null || isNaN(id) || id <= 0) {
                return MESSAGE.ERROR_REQUIRED_FIELDS
            } else {
                let resultTelefone = await buscarTelefone(parseInt(id))
                if(resultTelefone.status_code === 200) {
                    let updated = await telefoneDAO.updateTelefone(telefone, parseInt(id))
                    if(updated) {
                        return {
                            status_code: 200,
                            message: "Telefone atualizado com sucesso",
                            telefone: telefone
                        }
                    } else {
                        return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                    }
                } else {
                    return resultTelefone
                }
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE
        }
    } catch(error) {
        console.error("Erro atualizarTelefone:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função para deletar um telefone
const excluirTelefone = async function(id) {
    try {
        if(id === undefined || id === '' || id === null || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        } else {
            let resultTelefone = await buscarTelefone(parseInt(id))
            if(resultTelefone.status_code === 200) {
                let deleted = await telefoneDAO.deleteTelefone(parseInt(id))
                if(deleted) {
                    return MESSAGE.SUCCESS_DELETE_ITEM
                } else {
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                }
            } else {
                return resultTelefone
            }
        }
    } catch(error) {
        console.error("Erro excluirTelefone:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função para listar todos os telefones
const listarTelefone = async function() {
    try {
        let dadosTelefone = {}
        let resultTelefone = await telefoneDAO.selectAllTelefone()

        if(resultTelefone !== false && typeof(resultTelefone) === 'object') {
            if(resultTelefone.length > 0) {
                dadosTelefone.status = true
                dadosTelefone.status_code = 200
                dadosTelefone.items = resultTelefone.length
                dadosTelefone.telefone = resultTelefone
                return dadosTelefone
            } else {
                return MESSAGE.ERROR_NOT_FOUND
            }
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch(error) {
        console.error("Erro listarTelefone:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função para buscar telefone pelo ID
const buscarTelefone = async function(id) {
    try {
        if(id === undefined || id === '' || id === null || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        } else {
            let dadosTelefone = {}
            let resultTelefone = await telefoneDAO.selectByIdTelefone(parseInt(id))
            if(resultTelefone !== false && typeof(resultTelefone) === 'object') {
                if(resultTelefone.length > 0) {
                    dadosTelefone.status = true
                    dadosTelefone.status_code = 200
                    dadosTelefone.telefone = resultTelefone[0]
                    return dadosTelefone
                } else {
                    return MESSAGE.ERROR_NOT_FOUND
                }
            } else {
                return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
            }
        }
    } catch(error) {
        console.error("Erro buscarTelefone:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirTelefone,
    atualizarTelefone,
    excluirTelefone,
    listarTelefone,
    buscarTelefone
}
