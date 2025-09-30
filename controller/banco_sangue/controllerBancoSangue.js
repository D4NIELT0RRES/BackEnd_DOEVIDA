/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD do BANCO DE SANGUE.
 * DATA: 22/09/2025
 * AUTOR: Daniel Torres
 * Versão: 2.0 (ajustada para id_tipo_sanguineo + id_hospital)
 ***************************************************************************************/

const MESSAGE = require('../../modulo/config.js')
const bancoSangueDAO = require('../../model/DAO/banco_sangue')

//============================== INSERIR ==============================
const inserirBancoSangue = async function (bancoSangue, contentType) {
    try {
        if (contentType == 'application/json') {
            if (
                !bancoSangue.id_hospital || isNaN(bancoSangue.id_hospital) ||
                !bancoSangue.id_tipo_sanguineo || isNaN(bancoSangue.id_tipo_sanguineo) ||
                bancoSangue.quantidade === undefined || isNaN(bancoSangue.quantidade)
            ) {
                return MESSAGE.ERROR_REQUIRED_FIELDS
            } else {
                let result = await bancoSangueDAO.insertBancoSangue(bancoSangue)
                if (result) {
                    return {
                        status_code: 201,
                        message: "Banco de sangue criado com sucesso",
                        banco_sangue: result
                    }
                } else {
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        console.log("Erro inserirBancoSangue:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== ATUALIZAR ==============================
const atualizarBancoSangue = async function (bancoSangue, id, contentType) {
    try {
        if (contentType == 'application/json') {
            if (
                !bancoSangue.id_hospital || isNaN(bancoSangue.id_hospital) ||
                !bancoSangue.id_tipo_sanguineo || isNaN(bancoSangue.id_tipo_sanguineo) ||
                bancoSangue.quantidade === undefined || isNaN(bancoSangue.quantidade) ||
                !id || isNaN(id) || id <= 0
            ) {
                return MESSAGE.ERROR_REQUIRED_FIELDS
            } else {
                let registro = await buscarBancoSangue(parseInt(id))
                if (registro.status_code == 200) {
                    let result = await bancoSangueDAO.updateBancoSangue(bancoSangue, parseInt(id))
                    if (result) {
                        return {
                            status_code: 200,
                            message: "Banco de sangue atualizado com sucesso"
                        }
                    } else {
                        return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                    }
                } else {
                    return MESSAGE.ERROR_NOT_FOUND
                }
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        console.log("Erro atualizarBancoSangue:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== DELETAR ==============================
const excluirBancoSangue = async function (id) {
    try {
        if (!id || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        } else {
            let registro = await buscarBancoSangue(parseInt(id))
            if (registro.status_code == 200) {
                let result = await bancoSangueDAO.deleteBancoSangue(parseInt(id))
                return result ? MESSAGE.SUCCESS_DELETE_ITEM : MESSAGE.ERROR_INTERNAL_SERVER_MODEL
            } else {
                return MESSAGE.ERROR_NOT_FOUND
            }
        }
    } catch (error) {
        console.log("Erro excluirBancoSangue:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== LISTAR TODOS ==============================
const listarBancoSangue = async function () {
    try {
        let result = await bancoSangueDAO.selectAllBancoSangue()
        if (result && typeof result == 'object') {
            if (result.length > 0) {
                return {
                    status: true,
                    status_code: 200,
                    items: result.length,
                    banco_sangue: result
                }
            } else {
                return MESSAGE.ERROR_NOT_FOUND
            }
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch (error) {
        console.log("Erro listarBancoSangue:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== BUSCAR POR ID ==============================
const buscarBancoSangue = async function (id) {
    try {
        if (!id || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        } else {
            let result = await bancoSangueDAO.selectByIdBancoSangue(parseInt(id))
            if (result && typeof result == 'object') {
                return {
                    status: true,
                    status_code: 200,
                    banco_sangue: result
                }
            } else {
                return MESSAGE.ERROR_NOT_FOUND
            }
        }
    } catch (error) {
        console.log("Erro buscarBancoSangue:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== BUSCAR POR TIPO SANGUÍNEO ==============================
const buscarBancoSanguePorTipo = async function (id_tipo) {
    try {
        if (!id_tipo || isNaN(id_tipo)) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        } else {
            let result = await bancoSangueDAO.selectByTipoSanguineo(parseInt(id_tipo))
            if (result && typeof result == 'object') {
                if (result.length > 0) {
                    return {
                        status: true,
                        status_code: 200,
                        banco_sangue: result
                    }
                } else {
                    return MESSAGE.ERROR_NOT_FOUND
                }
            } else {
                return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
            }
        }
    } catch (error) {
        console.log("Erro buscarBancoSanguePorTipo:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
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
