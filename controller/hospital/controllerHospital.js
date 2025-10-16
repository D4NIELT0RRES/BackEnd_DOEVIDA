/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD do HOSPITAL.
 * DATA: 22/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.2
 ***************************************************************************************/

const MESSAGE = require('../../modulo/config.js')
const hospitalDAO = require('../../model/DAO/hospital.js')

//Inserir novo hospital
const inserirHospital = async function (hospital, contentType) {
    try {
        if (contentType !== 'application/json') {
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if (
            !hospital.nome || hospital.nome.length > 70 ||
            !hospital.email || hospital.email.length > 100 ||
            !hospital.senha || hospital.senha.length > 255 ||
            !hospital.cnpj || hospital.cnpj.length > 20 ||
            !hospital.crm ||
            !hospital.cep || hospital.cep.length > 10 ||
            !hospital.telefone ||
            !hospital.capacidade_maxima || isNaN(hospital.capacidade_maxima) || hospital.capacidade_maxima <= 0 ||
            !hospital.convenios ||
            !hospital.horario_abertura ||
            !hospital.horario_fechamento ||
            !hospital.foto
        ) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const resultHospital = await hospitalDAO.insertHospital(hospital)
        if (resultHospital) {
            return {
                status_code: 201,
                message: "Hospital criado com sucesso",
                hospital: resultHospital
            }
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch (error) {
        console.error("Erro inserirHospital:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Atualizar hospital
const atualizarHospital = async function (hospital, id, contentType) {
    try {
        if (contentType !== 'application/json') {
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if (
            !id || isNaN(id) || id <= 0 ||
            !hospital.nome || hospital.nome.length > 70 ||
            !hospital.email || hospital.email.length > 100 ||
            !hospital.senha || hospital.senha.length > 255 ||
            !hospital.cnpj || hospital.cnpj.length > 20 ||
            !hospital.crm ||
            !hospital.cep || hospital.cep.length > 10 ||
            !hospital.telefone ||
            !hospital.capacidade_maxima || isNaN(hospital.capacidade_maxima) || hospital.capacidade_maxima <= 0 ||
            !hospital.convenios ||
            !hospital.horario_abertura ||
            !hospital.horario_fechamento ||
            !hospital.foto
        ) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const hospitalExistente = await hospitalDAO.selectByIdHospital(parseInt(id))
        if (!hospitalExistente) {
            return MESSAGE.ERROR_NOT_FOUND
        }

        const result = await hospitalDAO.updateHospital(hospital, parseInt(id))
        if (result) {
            return {
                status_code: 200,
                message: "Hospital atualizado com sucesso",
                hospital: { ...hospital, id: parseInt(id) }
            }
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch (error) {
        console.error("Erro atualizarHospital:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Excluir hospital
const excluirHospital = async function (id) {
    try {
        if (!id || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const hospitalExistente = await hospitalDAO.selectByIdHospital(parseInt(id))
        if (!hospitalExistente) {
            return MESSAGE.ERROR_NOT_FOUND
        }

        const result = await hospitalDAO.deleteHospital(parseInt(id))
        return result ? MESSAGE.SUCCESS_DELETE_ITEM : MESSAGE.ERROR_INTERNAL_SERVER_MODEL
    } catch (error) {
        console.error("Erro excluirHospital:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Listar hospitais
const listarHospital = async function () {
    try {
        const resultHospital = await hospitalDAO.selectAllHospital()
        if (!resultHospital) {
            return MESSAGE.ERROR_NOT_FOUND
        }

        return {
            status: true,
            status_code: 200,
            items: resultHospital.length,
            hospitais: resultHospital
        }
    } catch (error) {
        console.error("Erro listarHospital:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar hospital por ID
const buscarHospital = async function (id) {
    try {
        if (!id || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const resultHospital = await hospitalDAO.selectByIdHospital(parseInt(id))
        if (!resultHospital) {
            return MESSAGE.ERROR_NOT_FOUND
        }

        return {
            status: true,
            status_code: 200,
            hospital: resultHospital
        }
    } catch (error) {
        console.error("Erro buscarHospital:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar hospital por email
const buscarPorEmail = async function (email) {
    try {
        if (!email || email.length > 100) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const resultHospital = await hospitalDAO.selectByEmailHospital(email)
        if (!resultHospital) {
            return MESSAGE.ERROR_NOT_FOUND
        }

        return {
            status: true,
            status_code: 200,
            hospital: resultHospital
        }
    } catch (error) {
        console.error("Erro buscarPorEmail:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar hospital por CNPJ
const buscarPorCnpj = async function (cnpj) {
    try {
        if (!cnpj || cnpj.length > 20) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const resultHospital = await hospitalDAO.selectByCnpjHospital(cnpj)
        if (!resultHospital) {
            return MESSAGE.ERROR_NOT_FOUND
        }

        return {
            status: true,
            status_code: 200,
            hospital: resultHospital
        }
    } catch (error) {
        console.error("Erro buscarPorCnpj:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Upload de imagem para hospital
const uploadImagemHospital = async function (req) {
    try {
        if (!req.imageUrl) {
            return {
                status_code: 400,
                message: "Nenhuma imagem foi processada"
            }
        }

        return {
            status_code: 200,
            message: "Imagem processada com sucesso",
            image_url: req.imageUrl,
            filename: req.processedFile.filename,
            size: req.processedFile.size
        }
    } catch (error) {
        console.error("Erro uploadImagemHospital:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirHospital,
    atualizarHospital,
    excluirHospital,
    listarHospital,
    buscarHospital,
    buscarPorEmail,
    buscarPorCnpj,
    uploadImagemHospital
}