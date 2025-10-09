/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD da TABELA DOAÇÃO.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.1 (Correções de consistência)
 ***************************************************************************************/

const MESSAGE = require('../../modulo/config.js')
const doacaoDAO = require('../../model/DAO/doacao')

//Inserir nova doação
const inserirDoacao = async function(doacao, contentType) {
    try {
        if(contentType === 'application/json') {
            if(!doacao.data || !doacao.foto || doacao.foto.length > 255) {
                return MESSAGE.ERROR_REQUIRED_FIELDS
            } 
            
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
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE
        }
    } catch(error) {
        console.error("Erro inserirDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Atualizar doação
const atualizarDoacao = async function(doacao, id, contentType) {
    try {
        if(contentType === 'application/json') {
            if(!doacao.data || !doacao.foto || doacao.foto.length > 255 || !id || isNaN(id) || id <= 0) {
                return MESSAGE.ERROR_REQUIRED_FIELDS
            } 
            
            let resultDoacao = await buscarDoacao(parseInt(id))
            if(resultDoacao.status_code === 200) {
                let updated = await doacaoDAO.updateDoacao(doacao, parseInt(id))
                if(updated) {
                    let doacaoAtualizada = {...doacao, id: parseInt(id)}
                    return {
                        status_code: 200,
                        message: "Doação atualizada com sucesso",
                        doacao: doacaoAtualizada
                    }
                } else {
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                }
            } else {
                return resultDoacao
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE
        }
    } catch(error) {
        console.error("Erro atualizarDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Deletar doação
const excluirDoacao = async function(id) {
    try {
        if(!id || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        } 
        
        let resultDoacao = await buscarDoacao(parseInt(id))
        if(resultDoacao.status_code === 200) {
            let deleted = await doacaoDAO.deleteDoacao(parseInt(id))
            return deleted ? MESSAGE.SUCCESS_DELETE_ITEM : MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        } else {
            return resultDoacao
        }
    } catch(error) {
        console.error("Erro excluirDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Listar todas as doações
const listarDoacao = async function() {
    try {
        let resultDoacao = await doacaoDAO.selectAllDoacao()
        if(resultDoacao) {
            return {
                status: true,
                status_code: 200,
                items: resultDoacao.length,
                doacao: resultDoacao
            }
        } else {
            return MESSAGE.ERROR_NOT_FOUND
        }
    } catch(error) {
        console.error("Erro listarDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar doação pelo ID
const buscarDoacao = async function(id) {
    try {
        if(!id || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }
        
        let resultDoacao = await doacaoDAO.selectByIdDoacao(parseInt(id))
        if(resultDoacao) {
            return {
                status: true,
                status_code: 200,
                doacao: resultDoacao
            }
        } else {
            return MESSAGE.ERROR_NOT_FOUND
        }
    } catch(error) {
        console.error("Erro buscarDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Histórico de doações do usuário
const historicoDoacao = async function(idUsuario) {
    try {
        if(!idUsuario || isNaN(idUsuario) || idUsuario <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }
        
        let resultDoacao = await doacaoDAO.historicoDoacao(parseInt(idUsuario))
        if(resultDoacao) {
            return {
                status: true,
                status_code: 200,
                items: resultDoacao.length,
                doacoes: resultDoacao
            }
        } else {
            return MESSAGE.ERROR_NOT_FOUND
        }
    } catch(error) {
        console.error("Erro historicoDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirDoacao,
    atualizarDoacao,
    excluirDoacao,
    listarDoacao,
    buscarDoacao,
    historicoDoacao
}
