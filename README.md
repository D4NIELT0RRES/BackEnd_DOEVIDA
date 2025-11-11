# 🩸 DOE VIDA - Backend API

Sistema de gerenciamento de doação de sangue desenvolvido para TCC. API RESTful profissional construída com Node.js, Express e MySQL.

## 📋 Índice

- [Características](#características)
- [Tecnologias](#tecnologias)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Executando](#executando)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Endpoints da API](#endpoints-da-api)
- [Segurança](#segurança)
- [Performance](#performance)

## ✨ Características

- ✅ **Autenticação JWT** - Sistema seguro de autenticação com tokens
- ✅ **Rate Limiting** - Proteção contra abuso de requisições
- ✅ **Validação de Dados** - Validação robusta com express-validator
- ✅ **Sanitização XSS** - Proteção contra ataques XSS
- ✅ **SQL Injection Protection** - Queries preparadas com Prisma ORM
- ✅ **Compressão Gzip** - Respostas comprimidas para melhor performance
- ✅ **Headers de Segurança** - Helmet.js configurado
- ✅ **Logging Estruturado** - Sistema de logs para monitoramento
- ✅ **Upload de Imagens** - Processamento e otimização com Sharp
- ✅ **Recuperação de Senha** - Sistema de código via email
- ✅ **Health Check** - Endpoint para monitoramento

## 🛠 Tecnologias

- **Node.js** v18+
- **Express** v4.19 - Framework web
- **Prisma** v6.18 - ORM para MySQL
- **MySQL** - Banco de dados
- **JWT** - Autenticação
- **Bcrypt** - Hash de senhas
- **Helmet** - Headers de segurança
- **Express Rate Limit** - Controle de requisições
- **Express Validator** - Validação de dados
- **Sharp** - Processamento de imagens
- **Nodemailer** - Envio de emails
- **Compression** - Compressão gzip

## 📦 Requisitos

- Node.js v18 ou superior
- MySQL 8.0 ou superior
- npm ou yarn

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/BackEnd_DOEVIDA.git
cd BackEnd_DOEVIDA
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

Execute o script SQL localizado em `database/script.sql` no seu MySQL:

```bash
mysql -u seu_usuario -p < database/script.sql
```

### 4. Configure o Prisma

```bash
npx prisma generate
npx prisma db push
```

## ⚙️ Configuração

### Arquivo .env

Copie o arquivo `.env.example` para `.env` e configure as variáveis:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
# Banco de Dados
DATABASE_URL="mysql://usuario:senha@localhost:3306/db_doevida_tcc"

# JWT
JWT_SECRET="sua_chave_super_secreta_aqui"
JWT_EXPIRES="24h"

# Email (Gmail recomendado)
EMAIL_USER="seuemail@gmail.com"
EMAIL_PASS="sua_senha_de_app"

# Servidor
PORT=8080
NODE_ENV="development"

# Rate Limiting
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=100

# CORS
CORS_ORIGIN="http://localhost:3000,http://localhost:5173"
```

### Configuração do Email

Para Gmail:
1. Ative a verificação em duas etapas
2. Gere uma "senha de app" em [myaccount.google.com/security](https://myaccount.google.com/security)
3. Use a senha de app no `.env`

## 🎯 Executando

### Desenvolvimento

```bash
npm run dev
```

### Produção

```bash
npm start
```

A API estará disponível em `http://localhost:8080`

### Health Check

Verifique se a API está funcionando:

```bash
curl http://localhost:8080/health
```

## 📁 Estrutura do Projeto

```
BackEnd_DOEVIDA/
├── controller/          # Lógica de negócio
│   ├── usuario/
│   ├── agendamento/
│   ├── hospital/
│   └── ...
├── model/
│   └── DAO/            # Acesso ao banco de dados
├── middleware/         # Middlewares customizados
│   ├── auth.js        # Autenticação JWT
│   ├── validator.js   # Validações
│   ├── sanitize.js    # Sanitização XSS
│   ├── rateLimiter.js # Rate limiting
│   ├── logger.js      # Sistema de logs
│   └── upload.js      # Upload de imagens
├── service/           # Serviços externos
│   └── emailService.js
├── prisma/
│   └── schema.prisma  # Schema do banco
├── uploads/           # Arquivos enviados
├── logs/              # Arquivos de log
├── app.js             # Configuração principal
└── package.json
```

## 🔌 Endpoints da API

### Autenticação

```http
POST /v1/doevida/login
POST /v1/doevida/usuarios
GET  /v1/doevida/perfil (autenticado)
```

### Usuários

```http
GET    /v1/doevida/usuario
GET    /v1/doevida/usuario/:id
PUT    /v1/doevida/usuario/:id
DELETE /v1/doevida/usuario/:id
PATCH  /v1/doevida/usuarios/me/complemento (autenticado)
```

### Agendamentos

```http
GET    /v1/doevida/agendamento
POST   /v1/doevida/agendamento (autenticado)
GET    /v1/doevida/agendamento/:id
PUT    /v1/doevida/agendamento/:id
DELETE /v1/doevida/agendamento/:id (autenticado)
GET    /v1/doevida/agendamento/me (autenticado)
```

### Hospitais

```http
GET    /v1/doevida/hospital
POST   /v1/doevida/hospital
GET    /v1/doevida/hospital/:id
PUT    /v1/doevida/hospital/:id
DELETE /v1/doevida/hospital/:id
GET    /v1/doevida/hospital/:id/dias-disponiveis
GET    /v1/doevida/hospital/:id/horarios
```

### Recuperação de Senha

```http
POST /v1/doevida/recuperar-senha
POST /v1/doevida/redefinir-senha
```

### Outros

```http
GET /v1/doevida/banco-sangue
GET /v1/doevida/doacao
GET /v1/doevida/certificado
GET /v1/doevida/sexo-usuario
GET /v1/doevida/tipo-sanguineo
```

## 🔒 Segurança

### Implementações de Segurança

1. **Autenticação JWT** - Tokens com expiração configurável
2. **Rate Limiting** - Limites por endpoint:
   - Geral: 100 req/minuto
   - Login: 5 tentativas/15min
   - Cadastro: 3 req/hora
   - Agendamento: 10 req/hora
3. **Helmet.js** - Headers de segurança HTTP
4. **CORS** - Configuração restrita de origens
5. **Validação** - Todos os inputs validados e sanitizados
6. **SQL Injection** - Prevenção com Prisma ORM
7. **XSS Protection** - Sanitização de strings
8. **Bcrypt** - Hash seguro de senhas (10 rounds)

### Boas Práticas

- ✅ Senhas nunca retornadas nas respostas
- ✅ Validação server-side em todos os endpoints
- ✅ Logs estruturados para auditoria
- ✅ Tratamento adequado de erros
- ✅ Timeouts configurados
- ✅ Conexões de banco otimizadas

## ⚡ Performance

### Otimizações Implementadas

1. **Compressão Gzip** - Reduz tamanho das respostas
2. **Prisma ORM** - Queries otimizadas e connection pooling
3. **Imagens Otimizadas** - Sharp converte para WebP
4. **Caching de Preflight** - CORS com maxAge de 24h
5. **Timeout Configurado** - 10s para APIs externas
6. **Logs Assíncronos** - Não bloqueiam requisições

### Teste de Carga

A API foi testada e suporta:
- ✅ 1000+ requisições/minuto
- ✅ Tempo de resposta < 100ms (endpoints simples)
- ✅ Uploads de até 10MB

## 📊 Monitoramento

### Logs

Os logs são salvos em `logs/` no formato:

```
logs/
└── 2025-11-10.log
```

Cada log contém:
- Timestamp
- Nível (ERROR, WARN, INFO, DEBUG)
- Mensagem
- Metadata (IP, user-agent, etc)

### Health Check

```bash
GET /health
```

Retorna:
```json
{
  "status": "OK",
  "timestamp": "2025-11-10T12:00:00.000Z",
  "uptime": 3600,
  "environment": "production"
}
```

## 🐛 Debug

### Modo Development

```bash
NODE_ENV=development npm start
```

Exibe:
- Logs detalhados no console
- Stack traces completos
- Mensagens de erro verbosas

### Modo Production

```bash
NODE_ENV=production npm start
```

Comportamento:
- Logs estruturados apenas em arquivo
- Mensagens de erro genéricas
- Performance otimizada

## 📝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais (TCC).

## 👤 Autor

**Daniel Torres**
- GitHub: [@D4NIELT0RRES](https://github.com/D4NIELT0RRES)

## 🙏 Agradecimentos

- SENAI - Instituição de ensino
- Professores orientadores
- Comunidade open source

---

**⚠️ Importante:** Lembre-se de nunca commitar o arquivo `.env` com credenciais reais!
