/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD do USUÁRIO.
 * DATA: 28/09/2025 (ajustado 30/09/2025)
 * AUTOR: Daniel Torres
 * Versão: 2.0 (Refatorado com DAO)
 ***************************************************************************************/

const MESSAGE = require('../../modulo/config.js')
const usuarioDAO = require('../../model/DAO/usuario.js')
const viaCep = require('../../viaCep.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//============================== INSERIR ==============================
const inserirUsuario = async function(dadosUsuario, contentType){
    try{
        if(String(contentType).toLowerCase() !== 'application/json'){
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if (
            !dadosUsuario.nome  || dadosUsuario.nome.length  > 70  ||
            !dadosUsuario.email || dadosUsuario.email.length > 100 ||
            !dadosUsuario.senha || dadosUsuario.senha.length < 8   || dadosUsuario.senha.length > 255 ||
            !dadosUsuario.id_sexo || isNaN(dadosUsuario.id_sexo)
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        // Validações de campos opcionais
        if (
            (dadosUsuario.cpf && String(dadosUsuario.cpf).length > 15) ||
            (dadosUsuario.cep && String(dadosUsuario.cep).length > 10) ||
            (dadosUsuario.data_nascimento && isNaN(Date.parse(dadosUsuario.data_nascimento))) ||
            (dadosUsuario.id_tipo_sanguineo && isNaN(dadosUsuario.id_tipo_sanguineo)) || 
            (dadosUsuario.foto_perfil && dadosUsuario.foto_perfil.length > 255)
        ) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        // Busca de endereço via CEP, se informado
        if(dadosUsuario.cep){
            const dadosEndereco = await viaCep.buscarCep(dadosUsuario.cep)
            if(dadosEndereco.erro){
                return { status: false, status_code: 400, message: dadosEndereco.message }
            }
            dadosUsuario.logradouro = dadosEndereco.logradouro
            dadosUsuario.bairro = dadosEndereco.bairro
            dadosUsuario.localidade = dadosEndereco.localidade
            dadosUsuario.uf = dadosEndereco.uf
        }

        // Gera hash da senha
        dadosUsuario.senha_hash = await bcrypt.hash(dadosUsuario.senha, 10)

        const usuarioCriado = await usuarioDAO.insertUsuario(dadosUsuario)

        if(usuarioCriado){
            return {
                status: true,
                status_code: 201,
                message: "Usuário criado com sucesso",
                usuario: usuarioCriado
            }
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

    }catch(error){
        console.error("Erro no controller inserirUsuario:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== ATUALIZAR ==============================
const atualizarUsuario = async function(dadosUsuario, idUsuario, contentType){
    try{
        if(String(contentType).toLowerCase() !== 'application/json'){
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if (!idUsuario || isNaN(idUsuario)) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        // Validações de campos obrigatórios
        if (
            !dadosUsuario.nome  || dadosUsuario.nome.length  > 70  ||
            !dadosUsuario.email || dadosUsuario.email.length > 100 ||
            !dadosUsuario.id_sexo || isNaN(dadosUsuario.id_sexo)
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const usuarioExistente = await usuarioDAO.selectByIdUsuario(parseInt(idUsuario))
        if (!usuarioExistente) {
            return MESSAGE.ERROR_NOT_FOUND
        }

        // Busca de endereço via CEP, se informado
        if(dadosUsuario.cep){
            const dadosEndereco = await viaCep.buscarCep(dadosUsuario.cep)
            if(dadosEndereco.erro){
                return { status: false, status_code: 400, message: dadosEndereco.message }
            }
            dadosUsuario.logradouro = dadosEndereco.logradouro
            dadosUsuario.bairro = dadosEndereco.bairro
            dadosUsuario.localidade = dadosEndereco.localidade
            dadosUsuario.uf = dadosEndereco.uf
        }

        dadosUsuario.id = parseInt(idUsuario)
        const usuarioAtualizado = await usuarioDAO.updateUsuario(dadosUsuario)

        if(usuarioAtualizado){
            return {
                status: true,
                status_code: 200,
                message: "Usuário atualizado com sucesso",
                usuario: usuarioAtualizado
            }
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

    }catch(error){
        console.error("Erro no controller atualizarUsuario:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}


//============================== EXCLUIR ==============================
const excluirUsuario = async function(idUsuario){
    try{
        if(!idUsuario || isNaN(idUsuario)){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const usuario = await usuarioDAO.selectByIdUsuario(parseInt(idUsuario))
        if(!usuario){
            return MESSAGE.ERROR_NOT_FOUND
        }

        const resultado = await usuarioDAO.deleteUsuario(parseInt(idUsuario))
        
        if(resultado){
            return MESSAGE.SUCCESS_DELETE_ITEM
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

    }catch(error){
        console.error("Erro no controller excluirUsuario:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== LISTAR TODOS ==============================
const listarUsuarios = async function(){
    try{
        const usuarios = await usuarioDAO.selectAllUsuario()

        if(usuarios && usuarios.length > 0){
            return { 
                status: true, 
                status_code: 200, 
                quantidade: usuarios.length, 
                usuarios: usuarios 
            }
        } else {
            return MESSAGE.ERROR_NOT_FOUND
        }

    }catch(error){
        console.error("Erro no controller listarUsuarios:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}


//============================== BUSCAR POR ID ==============================
const buscarUsuario = async function(idUsuario){
    try{
        if(!idUsuario || isNaN(idUsuario)){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const usuario = await usuarioDAO.selectByIdUsuario(parseInt(idUsuario))

        if(usuario){
            return { 
                status: true, 
                status_code: 200, 
                usuario: usuario 
            }
        } else {
            return MESSAGE.ERROR_NOT_FOUND
        }

    }catch(error){
        console.error("Erro no controller buscarUsuario:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== LOGIN ==============================
const loginUsuario = async function (dadosLogin, contentType) {
    try {
        if (String(contentType).toLowerCase() !== 'application/json') {
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if (!dadosLogin.email || !dadosLogin.senha) {
            return { status: false, status_code: 400, message: "Email e senha são obrigatórios." }
        }

        const usuario = await usuarioDAO.selectByEmailUsuario(dadosLogin.email.toLowerCase())

        if (!usuario) {
            return { status: false, status_code: 401, message: "Usuário ou senha inválidos." }
        }

        const senhaCorreta = await bcrypt.compare(dadosLogin.senha, usuario.senha_hash)
        if (!senhaCorreta) {
            return { status: false, status_code: 401, message: "Usuário ou senha inválidos." }
        }

        const payload = { id: usuario.id, nome: usuario.nome, email: usuario.email }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES || '1h' })

        // Retorna o token e os dados do usuário (sem a senha)
        const { senha_hash, ...usuarioSemSenha } = usuario;

        return {
            status: true,
            status_code: 200,
            message: "Login realizado com sucesso",
            token,
            usuario: usuarioSemSenha
        };
    } catch (error) {
        console.error("Erro no controller loginUsuario:", error);
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
};


module.exports = {
    inserirUsuario,
    atualizarUsuario,
    excluirUsuario,
    listarUsuarios,
    buscarUsuario,
    loginUsuario
}