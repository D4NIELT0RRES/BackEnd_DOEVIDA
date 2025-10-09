/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD da TABELA TELEFONE.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.1
 ***************************************************************************************/

const MESSAGE = require('../../modulo/config.js')
const telefoneDAO = require('../../model/DAO/telefone')

//Inserir um novo telefone
const inserirTelefone = async function(telefone, contentType) {
    try {
        if(contentType === 'application/json') {
            if(
                !telefone.tipo   || telefone.tipo.length > 30 ||
                !telefone.numero || telefone.numero.length > 15
            ) {
                return MESSAGE.ERROR_REQUIRED_FIELDS
            }

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
        return MESSAGE.ERROR_CONTENT_TYPE
    } catch(error) {
        console.error("Erro inserirTelefone:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Atualizar um telefone existente
const atualizarTelefone = async function(telefone, id, contentType) {
    try {
        if(contentType === 'application/json') {
            if(
                !telefone.tipo   || telefone.tipo.length > 30 ||
                !telefone.numero || telefone.numero.length > 15 ||
                !id || isNaN(id) || id <= 0
            ) {
                return MESSAGE.ERROR_REQUIRED_FIELDS
            }

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
        return MESSAGE.ERROR_CONTENT_TYPE
    } catch(error) {
        console.error("Erro atualizarTelefone:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Deletar um telefone pelo ID
const excluirTelefone = async function(id) {
    try {
        if(!id || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        let resultTelefone = await buscarTelefone(parseInt(id))
        if(resultTelefone.status_code === 200) {
            let deleted = await telefoneDAO.deleteTelefone(parseInt(id))
            return deleted ? MESSAGE.SUCCESS_DELETE_ITEM : MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }
        return resultTelefone
    } catch(error) {
        console.error("Erro excluirTelefone:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Listar todos os telefones
const listarTelefone = async function() {
    try {
        let dadosTelefone = {}
        let resultTelefone = await telefoneDAO.selectAllTelefone()

        if(resultTelefone) {
            dadosTelefone.status = true
            dadosTelefone.status_code = 200
            dadosTelefone.items = resultTelefone.length
            dadosTelefone.telefone = resultTelefone
            return dadosTelefone
        } else {
            return MESSAGE.ERROR_NOT_FOUND
        }
    } catch(error) {
        console.error("Erro listarTelefone:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar telefone pelo ID
const buscarTelefone = async function(id) {
    try {
        if(!id || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        let resultTelefone = await telefoneDAO.selectByIdTelefone(parseInt(id))
        if(resultTelefone) {
            return {
                status: true,
                status_code: 200,
                telefone: resultTelefone
            }
        }
        return MESSAGE.ERROR_NOT_FOUND
    } catch(error) {
        console.error("Erro buscarTelefone:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar telefone pelo número
const buscarTelefonePorNumero = async function(numero) {
    try {
        if(!numero || numero.length > 15) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        let resultTelefone = await telefoneDAO.selectByNumeroTelefone(numero)
        if(resultTelefone) {
            return {
                status: true,
                status_code: 200,
                telefone: resultTelefone
            }
        }
        return MESSAGE.ERROR_NOT_FOUND
    } catch(error) {
        console.error("Erro buscarTelefonePorNumero:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar telefone pelo tipo
const buscarTelefonePorTipo = async function(tipo) {
    try {
        if(!tipo || tipo.length > 30) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        let resultTelefone = await telefoneDAO.selectByTipoTelefone(tipo)
        if(resultTelefone) {
            return {
                status: true,
                status_code: 200,
                telefone: resultTelefone
            }
        }
        return MESSAGE.ERROR_NOT_FOUND
    } catch(error) {
        console.error("Erro buscarTelefonePorTipo:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirTelefone,
    atualizarTelefone,
    excluirTelefone,
    listarTelefone,
    buscarTelefone,
    buscarTelefonePorNumero,
    buscarTelefonePorTipo
}