/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD do USUÁRIO.
 * DATA: 22/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.2
 ***************************************************************************************/

const MESSAGE = require('../../modulo/config.js')
const usuarioDAO = require('../../model/DAO/usuario.js')
const controllerSexo = require('../sexo/controllerSexo.js')

//============================== INSERIR ==============================
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
           !usuario.tipo_sanguineo || usuario.tipo_sanguineo.length > 3 ||
           !usuario.id_sexo || isNaN(usuario.id_sexo) || usuario.id_sexo <= 0
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS
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

//============================== ATUALIZAR ==============================
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
           !usuario.tipo_sanguineo || usuario.tipo_sanguineo.length > 5 ||
           !usuario.id_sexo || isNaN(usuario.id_sexo) || usuario.id_sexo <= 0 ||
           !id || isNaN(id) || id <= 0
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const usuarioExistente = await usuarioDAO.selectByIdUsuario(parseInt(id))
        if(!usuarioExistente){
            return MESSAGE.ERROR_NOT_FOUND
        }

        const sexoExistente = await controllerSexo.buscarSexo(usuario.id_sexo)
        if(!sexoExistente || sexoExistente.status_code !== 200){
            return { status_code: 404, message: "Sexo não encontrado" }
        }

        usuario.id = parseInt(id)
        const result = await usuarioDAO.updateUsuario(usuario)
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

//============================== EXCLUIR ==============================
const excluirUsuario = async function(id){
    try{
        if(!id || isNaN(id) || id <= 0){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const usuarioExistente = await usuarioDAO.selectByIdUsuario(parseInt(id))
        if(!usuarioExistente){
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

//============================== LISTAR ==============================
const listarUsuario = async function(){
    try{
        let resultUsuario = await usuarioDAO.selectAllUsuario()
        if(!resultUsuario){
            return MESSAGE.ERROR_NOT_FOUND
        }

        const arrayUsuarios = resultUsuario.map(item => {
            return {
                ...item,
                sexo: item.nome_sexo,
                nome_sexo: undefined
            }
        })

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

//============================== BUSCAR POR ID ==============================
const buscarUsuario = async function(id){
    try{
        if(!id || isNaN(id) || id <= 0){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const resultUsuario = await usuarioDAO.selectByIdUsuario(parseInt(id))
        if(!resultUsuario){
            return MESSAGE.ERROR_NOT_FOUND
        }

        const usuario = {
            ...resultUsuario,
            sexo: resultUsuario.nome_sexo,
            nome_sexo: undefined
        }

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