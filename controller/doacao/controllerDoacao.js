/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD da TABELA DOAÇÃO.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

//Import do arquivo de configuração para a mensagem e status code
const MESSAGE = require('../../modulo/config.js')

//Import do DAO para realizar um CRUD no banco de dados
const doacaoDAO = require('../../model/DAO/doacao')

//Função para inserir uma nova doação
const inserirDoacao = async function(doacao, contentType) {
    try {
        if(contentType === 'application/json') {
            if(doacao.data === undefined || doacao.data === '' || doacao.data === null ||
               doacao.foto === undefined || doacao.foto === '' || doacao.foto === null || doacao.foto.length > 255) {
                return MESSAGE.ERROR_REQUIRED_FIELDS // 400
            } else {
                //Encaminha os dados para o DAO
                let resultDoacao = await doacaoDAO.insertDoacao(doacao)

                if(resultDoacao) {
                    return {
                        status_code: 201,
                        message: "Doação registrada com sucesso",
                        doacao: resultDoacao
                    }
                } else {
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE // 415
        }
    } catch(error) {
        console.error("Erro inserirDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER // 500
    }
}

//Função para atualizar uma doação
const atualizarDoacao = async function(doacao, id, contentType) {
    try {
        if(contentType === 'application/json') {
            if(doacao.data === undefined || doacao.data === '' || doacao.data === null ||
               doacao.foto === undefined || doacao.foto === '' || doacao.foto === null || doacao.foto.length > 255 ||
               id === undefined || id === '' || id === null || isNaN(id) || id <= 0) {
                return MESSAGE.ERROR_REQUIRED_FIELDS
            } else {
                let resultDoacao = await buscarDoacao(parseInt(id))
                if(resultDoacao.status_code === 200) {
                    let updated = await doacaoDAO.updateDoacao(doacao, parseInt(id))
                    if(updated) {
                        return {
                            status_code: 200,
                            message: "Doação atualizada com sucesso",
                            doacao: doacao
                        }
                    } else {
                        return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                    }
                } else {
                    return resultDoacao
                }
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE
        }
    } catch(error) {
        console.error("Erro atualizarDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função para deletar uma doação
const excluirDoacao = async function(id) {
    try {
        if(id === undefined || id === '' || id === null || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        } else {
            let resultDoacao = await buscarDoacao(parseInt(id))
            if(resultDoacao.status_code === 200) {
                let deleted = await doacaoDAO.deleteDoacao(parseInt(id))
                if(deleted) {
                    return MESSAGE.SUCCESS_DELETE_ITEM
                } else {
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                }
            } else {
                return resultDoacao
            }
        }
    } catch(error) {
        console.error("Erro excluirDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função para listar todas as doações
const listarDoacao = async function() {
    try {
        let dadosDoacao = {}
        let resultDoacao = await doacaoDAO.selectAllDoacao()

        if(resultDoacao !== false && typeof(resultDoacao) === 'object') {
            if(resultDoacao.length > 0) {
                dadosDoacao.status = true
                dadosDoacao.status_code = 200
                dadosDoacao.items = resultDoacao.length
                dadosDoacao.doacao = resultDoacao
                return dadosDoacao
            } else {
                return MESSAGE.ERROR_NOT_FOUND
            }
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch(error) {
        console.error("Erro listarDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função para buscar doação pelo ID
const buscarDoacao = async function(id) {
    try {
        if(id === undefined || id === '' || id === null || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        } else {
            let dadosDoacao = {}
            let resultDoacao = await doacaoDAO.selectByIdDoacao(parseInt(id))
            if(resultDoacao !== false && typeof(resultDoacao) === 'object') {
                if(resultDoacao.length > 0) {
                    dadosDoacao.status = true
                    dadosDoacao.status_code = 200
                    dadosDoacao.doacao = resultDoacao[0]
                    return dadosDoacao
                } else {
                    return MESSAGE.ERROR_NOT_FOUND
                }
            } else {
                return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
            }
        }
    } catch(error) {
        console.error("Erro buscarDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirDoacao,
    atualizarDoacao,
    excluirDoacao,
    listarDoacao,
    buscarDoacao
}
