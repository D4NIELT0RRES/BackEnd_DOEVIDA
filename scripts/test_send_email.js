/*
 * Script de teste para envio de e-mail (executar localmente)
 * Uso:
 *   node scripts/test_send_email.js destinatario@exemplo.com
 *
 * Certifique-se de ter as variáveis de ambiente configuradas:
 *   EMAIL_USER, EMAIL_PASS (ou EMAIL_HOST/EMAIL_PORT conforme necessário)
 */

// Carregar variáveis de ambiente do .env PRIMEIRO
require('dotenv').config()

const emailService = require('../service/emailService')

const to = process.argv[2]
if (!to) {
  console.error('Use: node scripts/test_send_email.js destinatario@exemplo.com')
  process.exit(1)
}

;(async () => {
  try {
    // Nome fictício e código para teste
    const nome = 'Teste'
    const codigo = '123456'

    const result = await emailService.enviarEmailRecuperacao(to, nome, codigo)

    if (result.sucesso) {
      console.log('Teste de envio concluído com sucesso:', result)
      process.exit(0)
    } else {
      console.error('Falha no teste de envio:', result)
      process.exit(2)
    }

  } catch (err) {
    console.error('Erro inesperado no teste de envio:', err)
    process.exit(3)
  }
})()
