/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD da TABELA SEXO.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

//Import do arquivo de configuração para a mensagem e status code
const MESSAGE = require('../../modulo/config.js')

//Import do DAO para realizar um CRUD no banco de dados
const sexoDAO = require('../../model/DAO/sexoUsuario')

//Função para inserir um novo registro de sexo
const inserirSexo = async function (sexo, contentType) {
    try {
        if(contentType === 'application/json') {
            if(sexo.sexo === undefined || sexo.sexo === '' || sexo.sexo === null || sexo.sexo.length > 15) {
                return MESSAGE.ERROR_REQUIRED_FIELDS // 400
            } else {
                //Encaminha os dados para o DAO
                let resultSexo = await sexoDAO.insertSexoUsuario(sexo)

                if(resultSexo) {
                    return {
                        status_code: 201,
                        message: "Registro de sexo criado com sucesso",
                        sexo: resultSexo
                    }
                } else {
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE // 415
        }
    } catch(error) {
        console.error("Erro inserirSexo:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER // 500
    }
}

//Função para atualizar um registro de sexo
const atualizarSexo = async function(sexo, id, contentType) {
    try {
        if(contentType === 'application/json') {
            if(sexo.sexo === undefined || sexo.sexo === '' || sexo.sexo === null || sexo.sexo.length > 15 ||
               id === undefined || id === '' || id === null || isNaN(id) || id <= 0) {
                return MESSAGE.ERROR_REQUIRED_FIELDS
            } else {
                let resultSexo = await buscarSexo(parseInt(id))
                if(resultSexo.status_code === 200) {
                    let updated = await sexoDAO.updateSexoUsuario(sexo, parseInt(id))
                    if(updated) {
                        return {
                            status_code: 200,
                            message: "Registro atualizado com sucesso",
                            sexo: sexo
                        }
                    } else {
                        return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                    }
                } else {
                    return resultSexo
                }
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE
        }
    } catch(error) {
        console.error("Erro atualizarSexo:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função para deletar um registro
const excluirSexo = async function(id) {
    try {
        if(id === undefined || id === '' || id === null || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        } else {
            let resultSexo = await buscarSexo(parseInt(id))
            if(resultSexo.status_code === 200) {
                let deleted = await sexoDAO.deleteSexoUsuario(parseInt(id))
                if(deleted) {
                    return MESSAGE.SUCCESS_DELETE_ITEM
                } else {
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                }
            } else {
                return resultSexo
            }
        }
    } catch(error) {
        console.error("Erro excluirSexo:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função para listar todos os registros
const listarSexo = async function() {
    try {
        let dadosSexo = {}
        let resultSexo = await sexoDAO.selectAllSexoUsuario()

        if(resultSexo !== false && typeof(resultSexo) === 'object') {
            if(resultSexo.length > 0) {
                dadosSexo.status = true
                dadosSexo.status_code = 200
                dadosSexo.items = resultSexo.length
                dadosSexo.sexo = resultSexo
                return dadosSexo
            } else {
                return MESSAGE.ERROR_NOT_FOUND
            }
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch(error) {
        console.error("Erro listarSexo:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função para buscar registro pelo ID
const buscarSexo = async function(id) {
    try {
        if(id === undefined || id === '' || id === null || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        } else {
            let dadosSexo = {}
            let resultSexo = await sexoDAO.selectByIdSexoUsuario(parseInt(id))
            if(resultSexo) {
                dadosSexo.status = true
                dadosSexo.status_code = 200
                dadosSexo.sexo = resultSexo
                return dadosSexo
            } else {
                return MESSAGE.ERROR_NOT_FOUND
            }
        }
    } catch(error) {
        console.error("Erro buscarSexo:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar sexo por nome
const buscarSexoPorNome = async function(nome) {
    try {
        if(nome === undefined || nome === '' || nome === null) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        } else {
            let dadosSexo = {}
            let resultSexo = await sexoDAO.selectByNomeSexoUsuario(nome)
            if(resultSexo) {
                dadosSexo.status = true
                dadosSexo.status_code = 200
                dadosSexo.items = resultSexo.length
                dadosSexo.sexo = resultSexo
                return dadosSexo
            } else {
                return MESSAGE.ERROR_NOT_FOUND
            }
        }
    } catch(error) {
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
