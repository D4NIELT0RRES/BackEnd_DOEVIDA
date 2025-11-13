# 🔑 Como Gerar Nova Senha de App do Gmail

## ⚠️ Seu problema: Gmail revogou/expirou a senha de app antiga

**Erro atual:**
```
Invalid login: 535-5.7.8 Username and Password not accepted
```

Isso significa que o Google não está mais aceitando a senha `ifzv wjjl stzt geqd` que você tinha.

---

## ✅ Solução: Gerar Nova Senha de App (2 minutos)

### Passo 1: Verificar se tem Verificação em 2 Etapas Ativada

1. Acesse: https://myaccount.google.com/security
2. Role até **"Como fazer login no Google"**
3. Verifique se **"Verificação em duas etapas"** está **ATIVADA**
4. Se NÃO estiver:
   - Clique em **"Verificação em duas etapas"**
   - Clique em **"Começar"**
   - Siga os passos para ativar (SMS ou app Authenticator)

### Passo 2: Gerar Senha de App

1. Acesse: **https://myaccount.google.com/apppasswords**
   
   OU
   
2. Vá em: https://myaccount.google.com/security
3. Role até **"Como fazer login no Google"**
4. Clique em **"Senhas de app"**

### Passo 3: Criar a Senha

1. Se pedir, faça login novamente com sua senha do Gmail
2. Na tela "Senhas de app":
   - **Selecionar app**: Escolha **"Outro (nome personalizado)"**
   - Digite: `DoeVida Backend`
   - Clique em **"Gerar"**
3. O Google vai gerar uma senha de 16 caracteres tipo: `xxxx xxxx xxxx xxxx`
4. **COPIE ESSA SENHA AGORA** (ela só aparece uma vez!)

### Passo 4: Atualizar o .env

Abra o arquivo `.env` e substitua a senha antiga:

```env
EMAIL_USER=doevida306@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
```

⚠️ **Cole a senha COM os espaços** ou sem espaços, ambos funcionam.

### Passo 5: Testar

```bash
# Reinicie o servidor
# Ctrl+C para parar
node app.js

# Em outro terminal, teste:
node scripts/test_send_email.js doevida306@gmail.com
```

---

## 🤔 Por que isso aconteceu?

O Google periodicamente:
- Revoga senhas de app antigas por segurança
- Bloqueia acesso se detectar login suspeito
- Desativa senhas não usadas por um tempo

É normal precisar regenerar de tempos em tempos.

---

## 💡 Alternativa (Recomendada para Produção)

Se isso continuar acontecendo, **migre para SendGrid**:
- Não expira
- Mais confiável
- Grátis até 100 emails/dia
- Funciona melhor no Azure

Já deixei tudo preparado! Basta seguir o `SENDGRID_SETUP.md` quando quiser migrar.

---

## ✅ Checklist

- [ ] Acessar https://myaccount.google.com/apppasswords
- [ ] Gerar nova senha de app
- [ ] Copiar a senha gerada
- [ ] Colar no `.env` substituindo a antiga
- [ ] Reiniciar o servidor
- [ ] Testar com `node scripts/test_send_email.js`

---

**Tempo estimado:** 2 minutos ⏱️
