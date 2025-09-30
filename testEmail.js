require('dotenv').config()
const { enviarEmail } = require('./utils/emailService')

enviarEmail(
  "dgt1407@gmail.com",
  "Teste de E-mail - DoeVida",
  "Este é um teste em texto puro",
  "<h1>Este é um teste em HTML</h1><p>Se chegou, tá funcionando 🎉</p>"
)
