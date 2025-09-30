const usuarioDAO = require('../../model/DAO/usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { enviarEmail } = require('../../utils/emailService') // ajuste também


// Solicitar recuperação de senha
const solicitarRecuperacao = async (email) => {
  try {
    const usuario = await usuarioDAO.selectByEmailUsuario(email)
    if (!usuario) {
      return { status_code: 404, message: "Usuário não encontrado" }
    }

    // 🔑 Gerar token JWT só para recuperação de senha
    const tokenRecuperacao = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: "15m" } // expira em 15 minutos
    )

    // Enviar e-mail com link contendo o token
    const link = `http://localhost:3000/redefinir-senha?token=${tokenRecuperacao}`

    await enviarEmail(
      usuario.email,
      "Recuperação de Senha - DoeVida",
      `Olá ${usuario.nome}, acesse o link para redefinir sua senha: ${link}`,
      `<p>Olá <b>${usuario.nome}</b>,</p>
       <p>Clique no link abaixo para redefinir sua senha (expira em 15 minutos):</p>
       <a href="${link}">${link}</a>`
    )

    return { status_code: 200, message: "E-mail de recuperação enviado" }
  } catch (err) {
    console.error("Erro solicitarRecuperacao:", err)
    return { status_code: 500, message: "Erro interno" }
  }
}


// Redefinir senha
const redefinirSenha = async (token, novaSenha) => {
  try {
    // 🔎 Validar o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const idUsuario = decoded.id

    // Gerar hash da nova senha
    const senhaHash = await bcrypt.hash(novaSenha, 10)

    // Atualizar no banco
    const updateSenha = await usuarioDAO.updateSenha(idUsuario, senhaHash)
    if (!updateSenha) {
      return { status_code: 500, message: "Erro ao atualizar senha" }
    }

    return { status_code: 200, message: "Senha redefinida com sucesso!" }
  } catch (err) {
    console.error("Erro redefinirSenha:", err)
    return { status_code: 400, message: "Token inválido ou expirado" }
  }
}


module.exports = {
  solicitarRecuperacao,
  redefinirSenha
}
