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

//Inserir um novo usuário
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

        // Verificar se CPF já existe (se informado)
        if (dadosUsuario.cpf) {
            const cpfExistente = await usuarioDAO.selectByCpfUsuario(dadosUsuario.cpf)
            if (cpfExistente) {
                return {
                    status: false,
                    status_code: 409,
                    message: "CPF já cadastrado no sistema"
                }
            }
        }

        // Verificar se email já existe
        const emailExistente = await usuarioDAO.selectByEmailUsuario(dadosUsuario.email)
        if (emailExistente) {
            return {
                status: false,
                status_code: 409,
                message: "Email já cadastrado no sistema"
            }
        }

        // Busca de endereço via CEP, se informado
        if(dadosUsuario.cep){
            const dadosEndereco = await viaCep.buscarCep(dadosUsuario.cep)
            if(dadosEndereco.erro){
                // Log do erro mas não impede o cadastro
                console.warn("Erro ao buscar CEP, continuando cadastro sem dados de endereço:", dadosEndereco.message)
                // Remove o CEP inválido para não salvar no banco
                dadosUsuario.cep = null
            } else {
                dadosUsuario.logradouro = dadosEndereco.logradouro
                dadosUsuario.bairro = dadosEndereco.bairro
                dadosUsuario.localidade = dadosEndereco.localidade
                dadosUsuario.uf = dadosEndereco.uf
            }
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

//Atualizar um usuário existente
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

        // SEMPRE preservar senha_hash existente (não permitir atualização de senha por este endpoint)
        dadosUsuario.senha_hash = usuarioExistente.senha_hash

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

//Deletar um usuário pelo ID
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

//Listar todos os usuários
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

//Buscar usuário pelo ID
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

//Login de um usuário
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

//Complementar dados do usuário logado
const complementarDadosUsuario = async function(dadosComplementares, userId, contentType){
    try{
        if(String(contentType).toLowerCase() !== 'application/json'){
            return MESSAGE.ERROR_CONTENT_TYPE
        }

        if (!userId || isNaN(userId)) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        const usuarioExistente = await usuarioDAO.selectByIdUsuario(parseInt(userId))
        if (!usuarioExistente) {
            return MESSAGE.ERROR_NOT_FOUND
        }

        // Validações específicas para os campos complementares
        if (dadosComplementares.cpf && String(dadosComplementares.cpf).length > 15) {
            return { status: false, status_code: 400, message: "CPF inválido" }
        }

        if (dadosComplementares.cep && String(dadosComplementares.cep).length > 10) {
            return { status: false, status_code: 400, message: "CEP inválido" }
        }

        if (dadosComplementares.data_nascimento && isNaN(Date.parse(dadosComplementares.data_nascimento))) {
            return { status: false, status_code: 400, message: "Data de nascimento inválida" }
        }

        // Verificar se CPF já existe para outro usuário
        if (dadosComplementares.cpf) {
            const cpfExistente = await usuarioDAO.selectByCpfUsuario(dadosComplementares.cpf)
            if (cpfExistente && cpfExistente.id !== parseInt(userId)) {
                return {
                    status: false,
                    status_code: 409,
                    message: "CPF já cadastrado para outro usuário"
                }
            }
        }

        // Busca de endereço via CEP, se informado
        if(dadosComplementares.cep){
            const dadosEndereco = await viaCep.buscarCep(dadosComplementares.cep)
            if(dadosEndereco.erro){
                return { status: false, status_code: 400, message: dadosEndereco.message }
            }
            dadosComplementares.logradouro = dadosEndereco.logradouro
            dadosComplementares.bairro = dadosEndereco.bairro
            dadosComplementares.localidade = dadosEndereco.localidade
            dadosComplementares.uf = dadosEndereco.uf
        }

        // Preparar dados para atualização (mantém dados existentes)
        const dadosParaAtualizar = {
            ...usuarioExistente,
            ...dadosComplementares,
            id: parseInt(userId)
        }

        const usuarioAtualizado = await usuarioDAO.updateUsuario(dadosParaAtualizar)

        if(usuarioAtualizado){
            // Remove senha_hash da resposta
            const { senha_hash, ...usuarioSemSenha } = usuarioAtualizado;
            
            return {
                status: true,
                status_code: 200,
                message: "Dados complementares atualizados com sucesso",
                usuario: usuarioSemSenha
            }
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }

    }catch(error){
        console.error("Erro no controller complementarDadosUsuario:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}


module.exports = {
    inserirUsuario,
    atualizarUsuario,
    excluirUsuario,
    listarUsuarios,
    buscarUsuario,
    loginUsuario,
    complementarDadosUsuario
}