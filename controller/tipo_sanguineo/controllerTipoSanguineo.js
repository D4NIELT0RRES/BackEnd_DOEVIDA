/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD de TIPO SANGUÍNEO.
 * DATA: 30/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

const MESSAGE = require('../../modulo/config.js')
const tipoSanguineoDAO = require('../../model/DAO/tipo_sanguineo')

//============================== INSERIR ==============================
const inserirTipoSanguineo = async function (dados, contentType) {
    try {
        if (contentType === 'application/json') {
            if (!dados.tipo || dados.tipo.length > 5) {
                return MESSAGE.ERROR_REQUIRED_FIELDS
            } else {
                let result = await tipoSanguineoDAO.insertTipoSanguineo(dados.tipo)
                if (result) {
                    return {
                        status_code: 201,
                        message: "Tipo sanguíneo criado com sucesso",
                        tipo_sanguineo: result
                    }
                } else {
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        console.log("Erro inserirTipoSanguineo:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== ATUALIZAR ==============================
const atualizarTipoSanguineo = async function (id, dados, contentType) {
    try {
        if (contentType === 'application/json') {
            if (!id || isNaN(id) || !dados.tipo || dados.tipo.length > 5) {
                return MESSAGE.ERROR_REQUIRED_FIELDS
            } else {
                let registro = await buscarTipoSanguineo(id)
                if (registro.status_code === 200) {
                    let result = await tipoSanguineoDAO.updateTipoSanguineo(parseInt(id), dados.tipo)
                    return result
                        ? { status_code: 200, message: "Tipo sanguíneo atualizado com sucesso" }
                        : MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                } else {
                    return MESSAGE.ERROR_NOT_FOUND
                }
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        console.log("Erro atualizarTipoSanguineo:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== DELETAR ==============================
const excluirTipoSanguineo = async function (id) {
    try {
        if (!id || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        } else {
            let registro = await buscarTipoSanguineo(id)
            if (registro.status_code === 200) {
                let result = await tipoSanguineoDAO.deleteTipoSanguineo(parseInt(id))
                return result ? MESSAGE.SUCCESS_DELETE_ITEM : MESSAGE.ERROR_INTERNAL_SERVER_MODEL
            } else {
                return MESSAGE.ERROR_NOT_FOUND
            }
        }
    } catch (error) {
        console.log("Erro excluirTipoSanguineo:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== LISTAR TODOS ==============================
const listarTiposSanguineos = async function () {
    try {
        let result = await tipoSanguineoDAO.selectAllTipos()
        if (result && typeof result === 'object') {
            if (result.length > 0) {
                return {
                    status: true,
                    status_code: 200,
                    items: result.length,
                    tipos: result
                }
            } else {
                return MESSAGE.ERROR_NOT_FOUND
            }
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch (error) {
        console.log("Erro listarTiposSanguineos:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== BUSCAR POR ID ==============================
const buscarTipoSanguineo = async function (id) {
    try {
        if (!id || isNaN(id)) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        } else {
            let result = await tipoSanguineoDAO.selectByIdTipo(parseInt(id))
            if (result && typeof result === 'object') {
                return {
                    status: true,
                    status_code: 200,
                    tipo_sanguineo: result
                }
            } else {
                return MESSAGE.ERROR_NOT_FOUND
            }
        }
    } catch (error) {
        console.log("Erro buscarTipoSanguineo:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirTipoSanguineo,
    atualizarTipoSanguineo,
    excluirTipoSanguineo,
    listarTiposSanguineos,
    buscarTipoSanguineo
}
