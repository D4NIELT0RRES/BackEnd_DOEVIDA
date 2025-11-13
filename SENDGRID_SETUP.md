# 📧 Configuração do SendGrid para Envio de E-mails

## Por que migrar para SendGrid?

- ✅ **100% GRÁTIS** até 100 emails/dia (suficiente para recuperação de senha)
- ✅ **Funciona perfeitamente no Azure** (sem problemas de porta SMTP)
- ✅ **Mais confiável** que Gmail SMTP
- ✅ **Configuração rápida** (5 minutos)
- ✅ **Não expira** como senhas de app do Gmail

---

## 🚀 Passo 1: Criar Conta no SendGrid

1. Acesse: **https://signup.sendgrid.com/**
2. Preencha os dados:
   - Email: `doevida306@gmail.com` (pode usar o mesmo Gmail)
   - Password: crie uma senha segura
   - First Name / Last Name
3. Clique em **Create Account**
4. Verifique seu email e confirme a conta

---

## 🔑 Passo 2: Criar API Key

1. Faça login em: **https://app.sendgrid.com/**
2. No menu lateral esquerdo, vá em:
   ```
   Settings → API Keys
   ```
3. Clique no botão **"Create API Key"**
4. Configure:
   - **API Key Name**: `DoeVida-Backend`
   - **API Key Permissions**: Selecione **"Full Access"**
5. Clique em **"Create & View"**
6. **COPIE A API KEY AGORA** (ela só aparece uma vez!)
   - Formato: `SG.xxxxxxxxxxxxxxxxxxxxx.yyyyyyyyyyyyyyyyyyyyyyyyyyyy`

---

## ⚙️ Passo 3: Verificar Remetente (Sender Identity)

⚠️ **IMPORTANTE**: SendGrid exige que você verifique o email que vai ENVIAR os emails.

### Opção A: Verificar Email Único (Mais Rápido)

1. No menu lateral, vá em:
   ```
   Settings → Sender Authentication → Verify a Single Sender
   ```
2. Clique em **"Get Started"**
3. Preencha o formulário:
   - **From Name**: `Doe Vida`
   - **From Email Address**: `doevida306@gmail.com`
   - **Reply To**: `doevida306@gmail.com`
   - **Company Address**: (endereço qualquer)
   - **Nickname**: `DoeVida`
4. Clique em **"Create"**
5. Você receberá um email no `doevida306@gmail.com`
6. **Abra o email e clique no link de verificação**
7. ✅ Pronto! O email está verificado

### Opção B: Autenticação de Domínio (Mais Profissional)

Se você tiver um domínio próprio (ex: `doevida.com.br`), pode configurar DNS records.
Mas para começar, use a **Opção A** acima.

---

## 🔧 Passo 4: Configurar no Projeto

Abra o arquivo `.env` e atualize:

```env
# Configuração de E-mail (SendGrid)
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxx.yyyyyyyyyyyyyyyyyyyyyyyyyyyy
EMAIL_FROM=doevida306@gmail.com
```

**Substitua**:
- `SG.xxxxx...` pela API Key que você copiou no Passo 2
- `doevida306@gmail.com` pelo email que você verificou no Passo 3

---

## ✅ Passo 5: Testar Envio

Execute o script de teste:

```bash
node scripts/test_send_email.js doevida306@gmail.com
```

Se tudo estiver correto, você verá:
```
✅ SendGrid configurado com sucesso
✅ Email de recuperação enviado para: doevida306@gmail.com
SendGrid Response Status: 202
Teste de envio concluído com sucesso
```

---

## 🔍 Verificar Envios no SendGrid

1. Acesse: **https://app.sendgrid.com/email_activity**
2. Você verá todos os emails enviados, status de entrega, aberturas, etc.

---

## 🐛 Problemas Comuns

### Erro: "SENDGRID_API_KEY não configurado"
- Certifique-se de que copiou a API Key corretamente no `.env`
- Reinicie o servidor Node.js após alterar o `.env`

### Erro: "The from address does not match a verified Sender Identity"
- Você não verificou o email remetente no Passo 3
- Vá em **Settings → Sender Authentication** e verifique

### Erro: "403 Forbidden"
- A API Key pode não ter permissões suficientes
- Crie uma nova API Key com **Full Access**

### Email não chegou
- Verifique a caixa de SPAM
- Vá em **Email Activity** no SendGrid para ver o status

---

## 📱 Configurar no Azure (Produção)

Quando fizer deploy no Azure, adicione as variáveis de ambiente:

**Azure App Service**:
1. Vá em: **Configuration → Application settings**
2. Adicione:
   - Name: `SENDGRID_API_KEY` | Value: `SG.xxx...`
   - Name: `EMAIL_FROM` | Value: `doevida306@gmail.com`
3. Clique em **Save** e **Restart**

---

## 🎉 Pronto!

Agora seu sistema de recuperação de senha está usando SendGrid e funcionará perfeitamente tanto localmente quanto na Azure!

**Dúvidas?** Consulte a documentação oficial: https://docs.sendgrid.com/

---

**Código já migrado e pronto para usar!** ✅
