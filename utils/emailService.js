const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

const enviarEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
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