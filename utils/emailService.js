const nodemailer = require('nodemailer')

// Configuração do transporte de e-mail usando nodemailer
const transporter = nodemailer.createTransport({
  // Configurações do serviço de e-mail
  host: process.env.EMAIL_HOST,
  // Definição da porta
  port: process.env.EMAIL_PORT,
  // Configuração de segurança
  secure: false,
  // Autenticação
  auth: {
    // Credenciais do e-mail
    user: process.env.EMAIL_USER,
    // Senha do e-mail
    pass: process.env.EMAIL_PASS
  }
})

// Verificação da conexão com o serviço de e-mail
const enviarEmail = async (to, subject, text, html) => {
  try {
    // Envio do e-mail
    const info = await transporter.sendMail({
      // Configuração do e-mail
      from: `"DoeVida" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html
    })
    console.log("E-mail enviado:", info.messageId)
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error)
  }
}

module.exports = { enviarEmail }