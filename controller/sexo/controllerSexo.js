/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD da TABELA SEXO.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.1
 ***************************************************************************************/

const MESSAGE = require('../../modulo/config.js')
const sexoDAO = require('../../model/DAO/sexoUsuario')

//============================== INSERIR ==============================
const inserirSexo = async function (sexo, contentType) {
    try {
        if (contentType === 'application/json') {
            if (!sexo.sexo || sexo.sexo.length > 15) {
                return MESSAGE.ERROR_REQUIRED_FIELDS
            }

            let resultSexo = await sexoDAO.insertSexoUsuario(sexo)

            if (resultSexo) {
                return {
                    status_code: 201,
                    message: "Registro de sexo criado com sucesso",
                    sexo: resultSexo
                }
            }
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }
        return MESSAGE.ERROR_CONTENT_TYPE
    } catch (error) {
        console.error("Erro inserirSexo:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== ATUALIZAR ==============================
const atualizarSexo = async function (sexo, id, contentType) {
    try {
        if (contentType === 'application/json') {
            if (!sexo.sexo || sexo.sexo.length > 15 || !id || isNaN(id) || id <= 0) {
                return MESSAGE.ERROR_REQUIRED_FIELDS
            }

            let resultSexo = await buscarSexo(parseInt(id))
            if (resultSexo.status_code === 200) {
                let updated = await sexoDAO.updateSexoUsuario(sexo, parseInt(id))
                if (updated) {
                    return {
                        status_code: 200,
                        message: "Registro atualizado com sucesso",
                        sexo: sexo
                    }
                }
                return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
            }
            return resultSexo
        }
        return MESSAGE.ERROR_CONTENT_TYPE
    } catch (error) {
        console.error("Erro atualizarSexo:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== DELETAR ==============================
const excluirSexo = async function (id) {
    try {
        if (!id || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        let resultSexo = await buscarSexo(parseInt(id))
        if (resultSexo.status_code === 200) {
            let deleted = await sexoDAO.deleteSexoUsuario(parseInt(id))
            return deleted ? MESSAGE.SUCCESS_DELETE_ITEM : MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }
        return resultSexo
    } catch (error) {
        console.error("Erro excluirSexo:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== LISTAR TODOS ==============================
const listarSexo = async function () {
    try {
        let resultSexo = await sexoDAO.selectAllSexoUsuario()
        if (resultSexo) {
            return {
                status: true,
                status_code: 200,
                items: resultSexo.length,
                sexo: resultSexo
            }
        }
        return MESSAGE.ERROR_NOT_FOUND
    } catch (error) {
        console.error("Erro listarSexo:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== BUSCAR POR ID ==============================
const buscarSexo = async function (id) {
    try {
        if (!id || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        let resultSexo = await sexoDAO.selectByIdSexoUsuario(parseInt(id))
        if (resultSexo) {
            return {
                status: true,
                status_code: 200,
                sexo: resultSexo
            }
        }
        return MESSAGE.ERROR_NOT_FOUND
    } catch (error) {
        console.error("Erro buscarSexo:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== BUSCAR POR NOME ==============================
const buscarSexoPorNome = async function (nome) {
    try {
        if (!nome) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        let resultSexo = await sexoDAO.selectByNomeSexoUsuario(nome)
        if (resultSexo) {
            return {
                status: true,
                status_code: 200,
                items: resultSexo.length,
                sexo: resultSexo
            }
        }
        return MESSAGE.ERROR_NOT_FOUND
    } catch (error) {
        console.error("Erro buscarSexoPorNome:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirSexo,
    atualizarSexo,
    excluirSexo,
    listarSexo,
    buscarSexo,
    buscarSexoPorNome
}