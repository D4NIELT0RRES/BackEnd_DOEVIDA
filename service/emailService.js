/***************************************************************************************
 * OBJETIVO: Serviço responsável pelo envio de emails (recuperação de senha, etc.)
 * DATA: 30/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

const nodemailer = require('nodemailer')

//Configuração do transportador de email
const createTransporter = () => {
    // Detecta o provedor baseado no EMAIL_USER (quem ENVIA), não no destinatário
    const emailUser = process.env.EMAIL_USER
    if (!emailUser) {
        throw new Error('EMAIL_USER não configurado no arquivo .env')
    }
    
    const domain = emailUser.split('@')[1].toLowerCase()
    
    let config = {
        auth: {
            user: emailUser,
            pass: process.env.EMAIL_PASS
        }
    }

    // Configurações específicas por provedor do REMETENTE
    if (domain.includes('gmail')) {
        config.service = 'gmail'
    } else if (domain.includes('hotmail') || domain.includes('live')) {
        config.service = 'hotmail'
    } else if (domain.includes('outlook')) {
        config.service = 'hotmail' // Outlook usa as mesmas configurações do Hotmail
    } else if (domain.includes('yahoo')) {
        config.service = 'yahoo'
    } else {
        // Configuração manual para outros provedores
        config.host = 'smtp.gmail.com' // Fallback para Gmail
        config.port = 587
        config.secure = false
        delete config.service
    }

    console.log(`Configurando email do remetente: ${config.service || 'manual'} (${domain})`)
    
    return nodemailer.createTransport(config)
}

//Envia email de recuperação de senha
const enviarEmailRecuperacao = async (email, nomeUsuario, codigo) => {
    try {
        const transporter = createTransporter()

        const htmlTemplate = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Recuperação de Senha - Doe Vida</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    line-height: 1.6; 
                    color: #333; 
                    background-color: #f4f4f4; 
                    margin: 0; 
                    padding: 20px; 
                }
                .container { 
                    max-width: 600px; 
                    margin: 0 auto; 
                    background: white; 
                    padding: 20px; 
                    border-radius: 10px; 
                    box-shadow: 0 0 10px rgba(0,0,0,0.1); 
                }
                .header { 
                    background: #e74c3c; 
                    color: white; 
                    padding: 20px; 
                    text-align: center; 
                    border-radius: 10px 10px 0 0; 
                    margin: -20px -20px 20px -20px; 
                }
                .codigo { 
                    background: #f8f9fa; 
                    border: 2px dashed #e74c3c; 
                    padding: 20px; 
                    text-align: center; 
                    font-size: 24px; 
                    font-weight: bold; 
                    color: #e74c3c; 
                    margin: 20px 0; 
                    border-radius: 5px; 
                }
                .footer { 
                    margin-top: 30px; 
                    padding-top: 20px; 
                    border-top: 1px solid #eee; 
                    font-size: 12px; 
                    color: #666; 
                    text-align: center; 
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🩸 Doe Vida</h1>
                    <p>Recuperação de Senha</p>
                </div>
                
                <h2>Olá, ${nomeUsuario}!</h2>
                
                <p>Você solicitou a recuperação da sua senha. Use o código abaixo para redefinir sua senha:</p>
                
                <div class="codigo">
                    ${codigo}
                </div>
                
                <p><strong>⚠️ Importante:</strong></p>
                <ul>
                    <li>Este código é válido por <strong>15 minutos</strong></li>
                    <li>Use o código apenas uma vez</li>
                    <li>Se você não solicitou esta recuperação, ignore este email</li>
                </ul>
                
                <p>Para redefinir sua senha, acesse o aplicativo Doe Vida e insira o código acima quando solicitado.</p>
                
                <div class="footer">
                    <p>Este é um email automático, não responda a esta mensagem.</p>
                    <p><strong>Doe Vida</strong> - Salvando vidas através da doação de sangue</p>
                </div>
            </div>
        </body>
        </html>
        `

        const mailOptions = {
            from: `"Doe Vida" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: '🩸 Doe Vida - Código de Recuperação de Senha',
            html: htmlTemplate
        }

        const info = await transporter.sendMail(mailOptions)
        
        console.log(`Email de recuperação enviado para: ${email}`)
        console.log(`Message ID: ${info.messageId}`)
        
        return {
            sucesso: true,
            messageId: info.messageId,
            message: 'Email enviado com sucesso'
        }

    } catch (error) {
        console.error('Erro ao enviar email de recuperação:', error)
        return {
            sucesso: false,
            erro: error.message,
            message: 'Erro ao enviar email'
        }
    }
}

module.exports = {
    enviarEmailRecuperacao
}