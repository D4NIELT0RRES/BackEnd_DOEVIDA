/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD da TABELA CERTIFICADO.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

//Import do arquivo de configuração para a mensagem e status code
const MESSAGE = require('../../modulo/config.js')

//Import do DAO para realizar um CRUD no banco de dados
const certificadoDAO = require('../../model/DAO/certificado')

//Função para inserir um novo certificado
const inserirCertificado = async function(certificado, contentType) {
    try {
        if(contentType === 'application/json') {
            if(certificado.titulo === undefined || certificado.titulo === '' || certificado.titulo === null || certificado.titulo.length > 50 ||
               certificado.organizacao === undefined || certificado.organizacao === '' || certificado.organizacao === null || certificado.organizacao.length > 60 ||
               certificado.data_emissao === undefined || certificado.data_emissao === '' || certificado.data_emissao === null) {
                return MESSAGE.ERROR_REQUIRED_FIELDS // 400
            } else {
                //Encaminha os dados para o DAO
                let resultCertificado = await certificadoDAO.insertCertificado(certificado)

                if(resultCertificado) {
                    return {
                        status_code: 201,
                        message: "Certificado registrado com sucesso",
                        certificado: resultCertificado
                    }
                } else {
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE // 415
        }
    } catch(error) {
        console.error("Erro inserirCertificado:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER // 500
    }
}

//Função para atualizar um certificado
const atualizarCertificado = async function(certificado, id, contentType) {
    try {
        if(contentType === 'application/json') {
            if(certificado.titulo === undefined || certificado.titulo === '' || certificado.titulo === null || certificado.titulo.length > 50 ||
               certificado.organizacao === undefined || certificado.organizacao === '' || certificado.organizacao === null || certificado.organizacao.length > 60 ||
               certificado.data_emissao === undefined || certificado.data_emissao === '' || certificado.data_emissao === null ||
               id === undefined || id === '' || id === null || isNaN(id) || id <= 0) {
                return MESSAGE.ERROR_REQUIRED_FIELDS
            } else {
                let resultCertificado = await buscarCertificado(parseInt(id))
                if(resultCertificado.status_code === 200) {
                    let updated = await certificadoDAO.updateCertificado(certificado, parseInt(id))
                    if(updated) {
                        return {
                            status_code: 200,
                            message: "Certificado atualizado com sucesso",
                            certificado: certificado
                        }
                    } else {
                        return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                    }
                } else {
                    return resultCertificado
                }
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE
        }
    } catch(error) {
        console.error("Erro atualizarCertificado:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função para deletar um certificado
const excluirCertificado = async function(id) {
    try {
        if(id === undefined || id === '' || id === null || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        } else {
            let resultCertificado = await buscarCertificado(parseInt(id))
            if(resultCertificado.status_code === 200) {
                let deleted = await certificadoDAO.deleteCertificado(parseInt(id))
                if(deleted) {
                    return MESSAGE.SUCCESS_DELETE_ITEM
                } else {
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                }
            } else {
                return resultCertificado
            }
        }
    } catch(error) {
        console.error("Erro excluirCertificado:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função para listar todos os certificados
const listarCertificado = async function() {
    try {
        let dadosCertificado = {}
        let resultCertificado = await certificadoDAO.selectAllCertificado()

        if(resultCertificado !== false && typeof(resultCertificado) === 'object') {
            if(resultCertificado.length > 0) {
                dadosCertificado.status = true
                dadosCertificado.status_code = 200
                dadosCertificado.items = resultCertificado.length
                dadosCertificado.certificado = resultCertificado
                return dadosCertificado
            } else {
                return MESSAGE.ERROR_NOT_FOUND
            }
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch(error) {
        console.error("Erro listarCertificado:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função para buscar certificado pelo ID
const buscarCertificado = async function(id) {
    try {
        if(id === undefined || id === '' || id === null || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        } else {
            let dadosCertificado = {}
            let resultCertificado = await certificadoDAO.selectByIdCertificado(parseInt(id))
            if(resultCertificado !== false && typeof(resultCertificado) === 'object') {
                if(resultCertificado.length > 0) {
                    dadosCertificado.status = true
                    dadosCertificado.status_code = 200
                    dadosCertificado.certificado = resultCertificado[0]
                    return dadosCertificado
                } else {
                    return MESSAGE.ERROR_NOT_FOUND
                }
            } else {
                return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
            }
        }
    } catch(error) {
        console.error("Erro buscarCertificado:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirCertificado,
    atualizarCertificado,
    excluirCertificado,
    listarCertificado,
    buscarCertificado
}
