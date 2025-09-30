/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD do USUÁRIO.
 * DATA: 28/09/2025 (ajustado 29/09/2025)
 * AUTOR: Daniel Torres
 * Versão: 1.4
 ***************************************************************************************/

const MESSAGE = require('../../modulo/config.js')
const usuarioDAO = require('../../model/DAO/usuario.js')
const controllerSexo = require('../sexo/controllerSexo.js')
const viaCep = require('../../viaCep.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



//============================== INSERIR ==============================
const inserirUsuario = async function(usuario, contentType){
    try{
        if(contentType !== 'application/json'){
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if (
            !usuario.nome || usuario.nome.length > 70 ||
            !usuario.email || usuario.email.length > 100 ||
            !usuario.senha || usuario.senha.length < 8 || usuario.senha.length > 255 ||
            (usuario.cpf && usuario.cpf.length > 15) ||
            (usuario.cep && usuario.cep.length > 10) ||
            (usuario.data_nascimento && isNaN(Date.parse(usuario.data_nascimento))) ||
            (usuario.id_tipo_sanguineo && (isNaN(usuario.id_tipo_sanguineo) || usuario.id_tipo_sanguineo <= 0)) || 
            (usuario.foto_perfil && usuario.foto_perfil.length > 255) ||
            !usuario.id_sexo || isNaN(usuario.id_sexo) || usuario.id_sexo <= 0
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        // Só busca endereço se houver CEP
        if(usuario.cep){
            const dadosEndereco = await viaCep.buscarCep(usuario.cep)
            if(dadosEndereco.erro){
                return { status: false, status_code: 400, message: dadosEndereco.message }
            } else {
                usuario.logradouro = dadosEndereco.logradouro
                usuario.bairro = dadosEndereco.bairro
                usuario.localidade = dadosEndereco.localidade
                usuario.uf = dadosEndereco.uf
            }
        }

        if(usuario.numero && usuario.numero.length > 20){
            return { status: false, status_code: 400, message: "Número do endereço inválido" }
        }

        const sexoExistente = await controllerSexo.buscarSexo(usuario.id_sexo)
        if(!sexoExistente || sexoExistente.status_code !== 200){
            return { status_code: 404, message: "Sexo não encontrado" }
        }

        // Gera hash da senha antes de salvar
        const hash = await bcrypt.hash(usuario.senha, 10)

        const usuarioDB = {
            ...usuario,
            senha_hash: hash
        }

        delete usuarioDB.senha
        delete usuarioDB.confirmar_senha
        delete usuarioDB.undefined

        if(!usuarioDB.logradouro) usuarioDB.logradouro = null
        if(!usuarioDB.id_sexo) usuarioDB.id_sexo = null
        if(!usuarioDB.id_tipo_sanguineo) usuarioDB.id_tipo_sanguineo = null

        const resultUsuario = await usuarioDAO.insertUsuario(usuarioDB)
        if(resultUsuario){
            return {
                status: true,
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
           !usuario.senha_hash || usuario.senha_hash.length > 255 ||
           (usuario.cpf && usuario.cpf.length > 15) ||
           (usuario.cep && usuario.cep.length > 10) ||
           (usuario.data_nascimento && isNaN(Date.parse(usuario.data_nascimento))) ||
           !usuario.id_tipo_sanguineo || isNaN(usuario.id_tipo_sanguineo) || usuario.id_tipo_sanguineo <= 0 ||
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
        return result ? MESSAGE.SUCCESS_UPDATE_ITEM : MESSAGE.ERROR_INTERNAL_SERVER_MODEL

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
                tipo_sanguineo: item.tipo_sanguineo_nome,
                nome_sexo: undefined,
                tipo_sanguineo_nome: undefined
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
            tipo_sanguineo: resultUsuario.tipo_sanguineo_nome,
            nome_sexo: undefined,
            tipo_sanguineo_nome: undefined
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

//============================== BUSCAR POR EMAIL ==============================
const buscarUsuarioEmail = async function(email){
    try{
        if(!email || email.length > 120){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const resultUsuario = await usuarioDAO.selectByEmailUsuario(email)
        if(!resultUsuario){
            return MESSAGE.ERROR_NOT_FOUND
        }

        const usuario = {
            ...resultUsuario,
            sexo: resultUsuario.nome_sexo,
            tipo_sanguineo: resultUsuario.tipo_sanguineo_nome,
            nome_sexo: undefined,
            tipo_sanguineo_nome: undefined
        }

        return {
            status: true,
            status_code: 200,
            usuario
        }

    }catch(error){
        console.error("Erro buscarUsuarioEmail:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== BUSCAR POR NOME ==============================
const buscarUsuarioNome = async function(nome){
    try{
        if(!nome || nome.length > 100){
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const resultUsuario = await usuarioDAO.selectByNomeUsuario(nome)
        if(!resultUsuario){
            return MESSAGE.ERROR_NOT_FOUND
        }

        const arrayUsuarios = resultUsuario.map(item => {
            return {
                ...item,
                sexo: item.nome_sexo,
                tipo_sanguineo: item.tipo_sanguineo_nome,
                nome_sexo: undefined,
                tipo_sanguineo_nome: undefined
            }
        })

        return {
            status: true,
            status_code: 200,
            items: arrayUsuarios.length,
            usuarios: arrayUsuarios
        }

    }catch(error){
        console.error("Erro buscarUsuarioNome:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//============================== LOGIN ==============================
const loginUsuario = async function (usuario, contentType) {
    try {
        if (contentType !== 'application/json') {
            return { status: false, status_code: 415, message: "Content-Type inválido" }
        }

        if (!usuario.email || !usuario.senha) {
            return { status: false, status_code: 400, message: "Email e senha obrigatórios" }
        }

        const dadosUsuario = await usuarioDAO.selectByEmailUsuario(usuario.email)

        if (!dadosUsuario) {
            return { status: false, status_code: 401, message: "Usuário não encontrado" }
        }

        const senhaCorreta = await bcrypt.compare(usuario.senha, dadosUsuario.senha_hash)
        if (!senhaCorreta) {
            return { status: false, status_code: 401, message: "Senha incorreta" }
        }

        const token = jwt.sign(
            {
                id: dadosUsuario.id,
                nome: dadosUsuario.nome,
                email: dadosUsuario.email
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES || '1h' }
        )

        // sucesso
        return {
            status: true,
            status_code: 200,
            message: "Login realizado com sucesso!",
            token,
            usuario: {
                id: dadosUsuario.id,
                nome: dadosUsuario.nome,
                email: dadosUsuario.email,
                cpf: dadosUsuario.cpf,
                cep: dadosUsuario.cep,
                tipo_sanguineo: dadosUsuario.tipo_sanguineo_nome,
                data_nascimento: dadosUsuario.data_nascimento,
                foto_perfil: dadosUsuario.foto_perfil,
                sexo: dadosUsuario.nome_sexo
            }
        };
    } catch (error) {
        console.error("Erro no loginUsuario:", error);
        return {
            status: false,
            status_code: 500,
            message: "Erro interno no servidor"
        };
    }
};

const cadastrarUsuario = async function (usuario, contentType) {
    try {
        if (contentType !== 'application/json') {
            return MESSAGE.ERROR_CONTENT_TYPE;
        }

        // Validação mínima (nome, email e senha obrigatórios)
        if (!usuario.nome || !usuario.email || !usuario.senha || !usuario.confirmar_senha) {
            return { status: false, status_code: 400, message: "Campos obrigatórios não preenchidos" };
        }

        // Confere se as senhas coincidem
        if (usuario.senha !== usuario.confirmar_senha) {
            return { status: false, status_code: 400, message: "As senhas não coincidem" };
        }

        // Gera hash da senha
        const hash = await bcrypt.hash(usuario.senha, 10);

        // Monta objeto final para inserir no banco
        const usuarioDB = {
            nome: usuario.nome,
            email: usuario.email,
            senha_hash: hash,
            cpf: usuario.cpf || null,
            cep: usuario.cep || null,
            numero: usuario.numero || null,
            data_nascimento: usuario.data_nascimento || null,
            id_banco_sangue: usuario.id_banco_sangue || null,
            foto_perfil: usuario.foto_perfil || null,
            id_sexo: usuario.id_sexo || null
        };

        const novoUsuario = await usuarioDAO.insertUsuario(usuarioDB);

        if (!novoUsuario) {
            return { status: false, status_code: 500, message: "Erro ao cadastrar usuário" };
        }

        return {
            status: true,
            status_code: 201,
            message: "Usuário criado com sucesso",
            usuario: novoUsuario
        };
    } catch (error) {
        console.error("Erro no cadastrarUsuario:", error);
        return { status: false, status_code: 500, message: "Erro interno no servidor" };
    }
};

module.exports = {
    inserirUsuario,
    atualizarUsuario,
    excluirUsuario,
    listarUsuario,
    buscarUsuario,
    buscarUsuarioEmail,
    buscarUsuarioNome,
    loginUsuario
}