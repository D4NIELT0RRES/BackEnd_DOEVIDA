/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD do USUÁRIO.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.1
 ***************************************************************************************/

const MESSAGE = require('../../modulo/config.js')
const usuarioDAO = require('../../model/DAO/usuario.js')
const controllerBancoSangue = require('../banco_sangue/controllerBancoSangue.js')
const controllerSexo = require('../sexo/controllerSexo.js')

//Inserir novo usuário
const inserirUsuario = async function(usuario, contentType){
    try{
        if(contentType !== 'application/json'){
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if(!usuario.nome || usuario.nome.length > 70 ||
           !usuario.email || usuario.email.length > 100 ||
           !usuario.senha || usuario.senha.length > 10 ||
           !usuario.cpf || usuario.cpf.length > 15 ||
           !usuario.cep || usuario.cep.length > 10 ||
           !usuario.data_nascimento ||
           !usuario.id_banco_sangue || isNaN(usuario.id_banco_sangue) || usuario.id_banco_sangue <= 0 ||
           !usuario.id_sexo || isNaN(usuario.id_sexo) || usuario.id_sexo <= 0
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        //Valida se o banco de sangue existe
        const bancoExistente = await controllerBancoSangue.buscarBancoSangue(usuario.id_banco_sangue)
        if(!bancoExistente || bancoExistente.status_code !== 200){
            return { status_code: 404, message: "Banco de sangue não encontrado" }
        }

        //Valida se o sexo existe
        const sexoExistente = await controllerSexo.buscarSexo(usuario.id_sexo)
        if(!sexoExistente || sexoExistente.status_code !== 200){
            return { status_code: 404, message: "Sexo não encontrado" }
        }

        const resultUsuario = await usuarioDAO.insertUsuario(usuario)
        if(resultUsuario){
            return {
                status_code: 201,
                message: "Usuário criado com sucesso",
                usuario: resultUsuario
            }
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

    }catch(error){
        console.error("Erro inserirUsuario:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Atualizar usuário
const atualizarUsuario = async function(usuario, id, contentType){
    try{
        if(contentType !== 'application/json'){
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if(!usuario.nome || usuario.nome.length > 70 ||
           !usuario.email || usuario.email.length > 100 ||
           !usuario.senha || usuario.senha.length > 10 ||
           !usuario.cpf || usuario.cpf.length > 15 ||
           !usuario.cep || usuario.cep.length > 10 ||
           !usuario.data_nascimento ||
           !usuario.id_banco_sangue || isNaN(usuario.id_banco_sangue) || usuario.id_banco_sangue <= 0 ||
           !usuario.id_sexo || isNaN(usuario.id_sexo) || usuario.id_sexo <= 0 ||
           !id || isNaN(id) || id <= 0
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const usuarioExistente = await usuarioDAO.selectByIdUsuario(parseInt(id))
        if(!usuarioExistente || usuarioExistente.length === 0){
            return MESSAGE.ERROR_NOT_FOUND
        }

        //Valida chaves estrangeiras
        const bancoExistente = await controllerBancoSangue.buscarBancoSangue(usuario.id_banco_sangue)
        if(!bancoExistente || bancoExistente.status_code !== 200){
            return { status_code: 404, message: "Banco de sangue não encontrado" }
        }

        const sexoExistente = await controllerSexo.buscarSexo(usuario.id_sexo)
        if(!sexoExistente || sexoExistente.status_code !== 200){
            return { status_code: 404, message: "Sexo não encontrado" }
        }

        const result = await usuarioDAO.updateUsuario(usuario, parseInt(id))
        if(result){
            return MESSAGE.SUCCESS_UPDATE_ITEM
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

    }catch(error){
        console.error("Erro atualizarUsuario:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Excluir usuário
const excluirUsuario = async function(id){
    try{
        if(!id || isNaN(id) || id <= 0){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const usuarioExistente = await usuarioDAO.selectByIdUsuario(parseInt(id))
        if(!usuarioExistente || usuarioExistente.length === 0){
            return MESSAGE.ERROR_NOT_FOUND
        }

        const result = await usuarioDAO.deleteUsuario(parseInt(id))
        if(result){
            return MESSAGE.SUCCESS_DELETE_ITEM
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

    }catch(error){
        console.error("Erro excluirUsuario:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Listar usuários
const listarUsuario = async function(){
    try{
        let resultUsuario = await usuarioDAO.selectAllUsuario()
        if(!resultUsuario || typeof(resultUsuario) !== 'object' || resultUsuario.length === 0){
            return MESSAGE.ERROR_NOT_FOUND
        }

        const arrayUsuarios = []
        for(const item of resultUsuario){
            const banco = await controllerBancoSangue.buscarBancoSangue(item.id_banco_sangue)
            item.banco_sangue = banco?.banco_sangue || null

            const sexo = await controllerSexo.buscarSexo(item.id_sexo)
            item.sexo = sexo?.sexo || null

            delete item.id_banco_sangue
            delete item.id_sexo

            arrayUsuarios.push(item)
        }

        return {
            status: true,
            status_code: 200,
            items: arrayUsuarios.length,
            usuarios: arrayUsuarios
        }

    }catch(error){
        console.error("Erro listarUsuario:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar usuário por ID
const buscarUsuario = async function(id){
    try{
        if(!id || isNaN(id) || id <= 0){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const resultUsuario = await usuarioDAO.selectByIdUsuario(parseInt(id))
        if(!resultUsuario || resultUsuario.length === 0){
            return MESSAGE.ERROR_NOT_FOUND
        }

        const usuario = resultUsuario[0]
        const banco = await controllerBancoSangue.buscarBancoSangue(usuario.id_banco_sangue)
        usuario.banco_sangue = banco?.banco_sangue || null

        const sexo = await controllerSexo.buscarSexo(usuario.id_sexo)
        usuario.sexo = sexo?.sexo || null

        delete usuario.id_banco_sangue
        delete usuario.id_sexo

        return {
            status: true,
            status_code: 200,
            usuario
        }

    }catch(error){
        console.error("Erro buscarUsuario:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirUsuario,
    atualizarUsuario,
    excluirUsuario,
    listarUsuario,
    buscarUsuario
}
