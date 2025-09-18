/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD do BANCO DE SANGUE.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

//Import do arquivo de configuração para a mensagem e status code
const MESSAGE = require('../../modulo/config.js')

//Import do DAO para realizar um CRUD no banco de dados
const bancoSangueDAO = require('../../model/DAO/bancoSangue')

//Função para inserir um novo registro de sangue
const inserirBancoSangue = async function (banco, contentType) {
    try {
        if(contentType === 'application/json') {
            if(banco.tipo_sanguineo === undefined || banco.tipo_sanguineo === '' || banco.tipo_sanguineo === null || banco.tipo_sanguineo.length > 5 ||
               banco.quantidade === undefined || banco.quantidade === '' || banco.quantidade === null || banco.quantidade.length > 5) {
                return MESSAGE.ERROR_REQUIRED_FIELDS // 400
            } else {
                //Encaminha os dados para o DAO
                let resultBanco = await bancoSangueDAO.insertBancoSangue(banco)

                if(resultBanco) {
                    return {
                        status_code: 201,
                        message: "Registro de sangue criado com sucesso",
                        banco: resultBanco
                    }
                } else {
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE // 415
        }
    } catch(error) {
        console.error("Erro inserirBancoSangue:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER // 500
    }
}

//Função para atualizar um registro de sangue
const atualizarBancoSangue = async function(banco, id, contentType) {
    try {
        if(contentType === 'application/json') {
            if(banco.tipo_sanguineo === undefined || banco.tipo_sanguineo === '' || banco.tipo_sanguineo === null || banco.tipo_sanguineo.length > 5 ||
               banco.quantidade === undefined || banco.quantidade === '' || banco.quantidade === null || banco.quantidade.length > 5 ||
               id === undefined || id === '' || id === null || isNaN(id) || id <= 0) {
                return MESSAGE.ERROR_REQUIRED_FIELDS
            } else {
                let resultBanco = await buscarBancoSangue(parseInt(id))
                if(resultBanco.status_code === 200) {
                    let updated = await bancoSangueDAO.updateBancoSangue(banco, parseInt(id))
                    if(updated) {
                        return {
                            status_code: 200,
                            message: "Registro atualizado com sucesso",
                            banco: banco
                        }
                    } else {
                        return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                    }
                } else {
                    return resultBanco
                }
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE
        }
    } catch(error) {
        console.error("Erro atualizarBancoSangue:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função para deletar um registro
const excluirBancoSangue = async function(id) {
    try {
        if(id === undefined || id === '' || id === null || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        } else {
            let resultBanco = await buscarBancoSangue(parseInt(id))
            if(resultBanco.status_code === 200) {
                let deleted = await bancoSangueDAO.deleteBancoSangue(parseInt(id))
                if(deleted) {
                    return MESSAGE.SUCCESS_DELETE_ITEM
                } else {
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                }
            } else {
                return resultBanco
            }
        }
    } catch(error) {
        console.error("Erro excluirBancoSangue:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função para listar todos os registros
const listarBancoSangue = async function() {
    try {
        let dadosBanco = {}
        let resultBanco = await bancoSangueDAO.selectAllBancoSangue()

        if(resultBanco !== false && typeof(resultBanco) === 'object') {
            if(resultBanco.length > 0) {
                dadosBanco.status = true
                dadosBanco.status_code = 200
                dadosBanco.items = resultBanco.length
                dadosBanco.banco = resultBanco
                return dadosBanco
            } else {
                return MESSAGE.ERROR_NOT_FOUND
            }
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch(error) {
        console.error("Erro listarBancoSangue:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função para buscar registro pelo ID
const buscarBancoSangue = async function(id) {
    try {
        if(id === undefined || id === '' || id === null || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        } else {
            let dadosBanco = {}
            let resultBanco = await bancoSangueDAO.selectByIdBancoSangue(parseInt(id))
            if(resultBanco !== false && typeof(resultBanco) === 'object') {
                if(resultBanco.length > 0) {
                    dadosBanco.status = true
                    dadosBanco.status_code = 200
                    dadosBanco.banco = resultBanco[0]
                    return dadosBanco
                } else {
                    return MESSAGE.ERROR_NOT_FOUND
                }
            } else {
                return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
            }
        }
    } catch(error) {
        console.error("Erro buscarBancoSangue:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirBancoSangue,
    atualizarBancoSangue,
    excluirBancoSangue,
    listarBancoSangue,
    buscarBancoSangue
}
