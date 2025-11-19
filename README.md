# 🩸 DOE VIDA - Backend API

> **API em Produção:** https://doevida.azurewebsites.net

Sistema de gerenciamento de doação de sangue desenvolvido para TCC. API RESTful construída com Node.js, Express, Prisma e MySQL hospedada na Azure.

## 🚀 Quick Start

### **API Base URL**
```
https://doevida.azurewebsites.net
```

### **Endpoints Principais**
```
POST   /v1/doevida/login          - Login
POST   /v1/doevida/usuarios       - Cadastro
GET    /v1/doevida/hospital       - Listar hospitais
GET    /v1/doevida/agendamento    - Listar agendamentos
```

### **Testar API**
```bash
curl https://doevida.azurewebsites.net/v1/doevida/hospital
```

---

## 📋 Índice

- [Tecnologias](#tecnologias)
- [Desenvolvimento Local](#desenvolvimento-local)
- [Deploy Azure](#deploy-azure)
- [Endpoints da API](#endpoints-da-api)
- [Estrutura do Projeto](#estrutura-do-projeto)

## 🛠 Tecnologias

| Categoria | Tecnologia | Versão |
|-----------|------------|--------|
| **Runtime** | Node.js | 20 LTS |
| **Framework** | Express | 5.1 |
| **ORM** | Prisma | 6.16 |
| **Banco de Dados** | MySQL | 8.0 |
| **Autenticação** | JWT + Bcrypt | - |
| **Cloud** | Azure App Service | - |
| **CI/CD** | GitHub Actions | - |

---

## 💻 Desenvolvimento Local

### **1. Clone e Instale**
```bash
git clone https://github.com/D4NIELT0RRES/BackEnd_DOEVIDA.git
cd BackEnd_DOEVIDA
npm install
```

### **2. Configure .env**
```env
DATABASE_URL="mysql://user:pass@localhost:3306/db_doevida_tcc?sslaccept=strict"
JWT_SECRET="sua_chave_secreta"
JWT_EXPIRES="1h"
EMAIL_USER="seuemail@gmail.com"
EMAIL_PASS="senha_app_gmail"
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
```

### **3. Setup Prisma**
```bash
npx prisma generate
npx prisma db push
```

### **4. Execute**
```bash
npm start
# API rodando em http://localhost:8080
```

---

## ☁️ Deploy Azure

### **Informações do Deploy**

**App Service:** `doevida`  
**URL:** https://doevida.azurewebsites.net  
**Region:** Canada Central  
**Runtime:** Node 20 LTS  
**Deploy:** Automático via GitHub Actions

### **Variáveis de Ambiente (Azure)**

Configure em `App Service > Configuration > Application Settings`:

```
DATABASE_URL = mysql://user:pass@server.mysql.database.azure.com:3306/db?sslaccept=strict
JWT_SECRET = [sua_chave]
JWT_EXPIRES = 1h
EMAIL_USER = [seu_email]
EMAIL_PASS = [senha_app]
EMAIL_HOST = smtp.gmail.com
EMAIL_PORT = 587
NODE_ENV = production
SCM_DO_BUILD_DURING_DEPLOYMENT = true
WEBSITE_RUN_FROM_PACKAGE = 0
```

### **Deploy Automático**

Todo `git push` na branch `main` faz deploy automático via GitHub Actions.

```bash
git add .
git commit -m "feat: nova funcionalidade"
git push origin main
# Deploy automático inicia
```

### **Monitorar Deploy**

- **Portal Azure:** App Service > Deployment Center
- **GitHub:** Repository > Actions
- **Logs:** App Service > Log stream

## 📁 Estrutura do Projeto

```
BackEnd_DOEVIDA/
├── .github/workflows/     # CI/CD GitHub Actions
├── controller/            # Lógica de negócio
├── model/DAO/            # Acesso ao banco (Prisma)
├── middleware/           # Autenticação, validação, etc
├── service/              # Email service
├── prisma/               # Schema e migrations
├── uploads/              # Arquivos enviados
├── app.js                # Servidor Express
└── package.json
```

## 📡 Endpoints da API

### **Autenticação**
```http
POST /v1/doevida/login          # Login usuário/hospital
POST /v1/doevida/usuarios       # Cadastro usuário
```

### **Usuários**
```http
GET    /v1/doevida/usuario         # Listar todos
GET    /v1/doevida/usuario/:id     # Buscar por ID
PUT    /v1/doevida/usuario/:id     # Atualizar
DELETE /v1/doevida/usuario/:id     # Deletar
```

### **Hospitais**
```http
GET    /v1/doevida/hospital                        # Listar todos
GET    /v1/doevida/hospital/:id                    # Buscar por ID
GET    /v1/doevida/hospital/:id/dias-disponiveis   # Dias disponíveis
GET    /v1/doevida/hospital/:id/horarios           # Horários disponíveis
```

### **Agendamentos**
```http
GET    /v1/doevida/agendamento        # Listar todos
POST   /v1/doevida/agendamento        # Criar (autenticado)
GET    /v1/doevida/agendamento/:id    # Buscar por ID
PUT    /v1/doevida/agendamento/:id    # Atualizar
DELETE /v1/doevida/agendamento/:id    # Cancelar
```

### **Outros Recursos**
```http
GET /v1/doevida/banco-sangue      # Estoque de sangue
GET /v1/doevida/tipo-sanguineo    # Tipos sanguíneos
GET /v1/doevida/sexo-usuario      # Sexos cadastrados
POST /v1/doevida/recuperar-senha  # Enviar código
POST /v1/doevida/redefinir-senha  # Alterar senha
```

**📚 Documentação Completa:** Veja `API_EXAMPLES.md`

---

## 🔒 Segurança

- ✅ **JWT Authentication** - Tokens com expiração de 1h
- ✅ **Bcrypt** - Hash de senhas (10 rounds)
- ✅ **Rate Limiting** - Proteção contra abuso
- ✅ **Helmet.js** - Headers de segurança
- ✅ **Prisma ORM** - Prevenção SQL Injection
- ✅ **CORS** configurado
- ✅ **Input Validation** com express-validator

---

## 👤 Autor

**Daniel Torres**  
GitHub: [@D4NIELT0RRES](https://github.com/D4NIELT0RRES)  
Projeto: TCC SENAI 2025

---

## 📝 Notas Importantes

⚠️ **Nunca commite o arquivo `.env`**  
⚠️ **Use HTTPS em produção**  
⚠️ **Configure SSL no MySQL** (`?sslaccept=strict`)
