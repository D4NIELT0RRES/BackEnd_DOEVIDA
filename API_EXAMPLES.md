# 📚 DOE VIDA API - Guia de Exemplos

Este guia contém exemplos práticos de como usar cada endpoint da API.

## 📋 Índice

- [Autenticação](#autenticação)
- [Usuários](#usuários)
- [Agendamentos](#agendamentos)
- [Hospitais](#hospitais)
- [Recuperação de Senha](#recuperação-de-senha)
- [Códigos de Status](#códigos-de-status)

---

## 🔐 Autenticação

### Cadastrar Usuário

```bash
POST http://localhost:8080/v1/doevida/usuario
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@email.com",
  "senha": "senha123456",
  "id_sexo": 1,
  "cpf": "12345678901",
  "data_nascimento": "1990-01-15",
  "id_tipo_sanguineo": 1
}
```

**Resposta (201):**
```json
{
  "status": true,
  "status_code": 201,
  "message": "Usuário criado com sucesso",
  "usuario": {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com",
    "cpf": "12345678901",
    "tipo_sanguineo_nome": "A+",
    "nome_sexo": "Masculino"
  }
}
```

### Login

```bash
POST http://localhost:8080/v1/doevida/login
Content-Type: application/json

{
  "email": "joao@email.com",
  "senha": "senha123456"
}
```

**Resposta (200):**
```json
{
  "status": true,
  "status_code": 200,
  "message": "Login realizado com sucesso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "usuario": {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com"
  }
}
```

### Obter Perfil (Autenticado)

```bash
GET http://localhost:8080/v1/doevida/perfil
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Resposta (200):**
```json
{
  "status": true,
  "status_code": 200,
  "message": "Acesso liberado!",
  "usuario": {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com"
  }
}
```

---

## 👤 Usuários

### Listar Todos os Usuários

```bash
GET http://localhost:8080/v1/doevida/usuario
```

**Resposta (200):**
```json
{
  "status": true,
  "status_code": 200,
  "quantidade": 2,
  "usuarios": [
    {
      "id": 1,
      "nome": "João Silva",
      "email": "joao@email.com",
      "tipo_sanguineo_nome": "A+",
      "nome_sexo": "Masculino"
    }
  ]
}
```

### Buscar Usuário por ID

```bash
GET http://localhost:8080/v1/doevida/usuario/1
```

### Atualizar Usuário

```bash
PUT http://localhost:8080/v1/doevida/usuario/1
Content-Type: application/json

{
  "nome": "João Silva Santos",
  "email": "joao@email.com",
  "id_sexo": 1,
  "cep": "01310100",
  "numero": "123"
}
```

### Complementar Dados (Autenticado)

```bash
PATCH http://localhost:8080/v1/doevida/usuarios/me/complemento
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "cpf": "12345678901",
  "cep": "01310100",
  "numero": "123",
  "data_nascimento": "1990-01-15",
  "id_tipo_sanguineo": 1
}
```

---

## 📅 Agendamentos

### Criar Agendamento (Autenticado)

```bash
POST http://localhost:8080/v1/doevida/agendamento
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "id_hospital": 1,
  "data": "2025-12-15",
  "hora": "10:00:00"
}
```

**Resposta (201):**
```json
{
  "status": true,
  "status_code": 201,
  "message": "Agendamento criado com sucesso",
  "agendamento": {
    "id": 1,
    "status": "Agendado",
    "data": "2025-12-15",
    "hora": "10:00:00",
    "id_usuario": 1,
    "id_hospital": 1
  }
}
```

### Listar Meus Agendamentos (Autenticado)

```bash
GET http://localhost:8080/v1/doevida/agendamento/me
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Listar Apenas Agendamentos Futuros

```bash
GET http://localhost:8080/v1/doevida/agendamento/me?futuros=1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Cancelar Agendamento (Autenticado)

```bash
DELETE http://localhost:8080/v1/doevida/agendamento/1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Resposta (200):**
```json
{
  "status": true,
  "status_code": 200,
  "message": "Agendamento cancelado com sucesso"
}
```

### Verificar Disponibilidade

```bash
GET http://localhost:8080/v1/agendamento/disponibilidade?data=2025-12-15&hora=10:00:00&id_hospital=1
```

**Resposta (200):**
```json
{
  "status": true,
  "status_code": 200,
  "disponivel": true,
  "vagas_restantes": 8
}
```

---

## 🏥 Hospitais

### Listar Hospitais

```bash
GET http://localhost:8080/v1/doevida/hospital
```

**Resposta (200):**
```json
{
  "status": true,
  "status_code": 200,
  "quantidade": 2,
  "hospitais": [
    {
      "id": 1,
      "nome": "Hospital Santa Casa",
      "email": "contato@santacasa.com",
      "cnpj": "12345678000199",
      "telefone": "11987654321",
      "cep": "01310100",
      "capacidade_maxima": 10,
      "horario_abertura": "08:00:00",
      "horario_fechamento": "18:00:00"
    }
  ]
}
```

### Buscar Hospital por ID

```bash
GET http://localhost:8080/v1/doevida/hospital/1
```

### Listar Dias Disponíveis de um Hospital

```bash
GET http://localhost:8080/v1/doevida/hospital/1/dias-disponiveis?mes=2025-12&slot=60
```

**Resposta (200):**
```json
{
  "status": true,
  "status_code": 200,
  "hospitalId": 1,
  "mes": "2025-12",
  "slotMinutos": 60,
  "diasDisponiveis": [
    "2025-12-15",
    "2025-12-16",
    "2025-12-17"
  ]
}
```

### Listar Horários Disponíveis de um Dia

```bash
GET http://localhost:8080/v1/doevida/hospital/1/horarios?data=2025-12-15&slot=60
```

**Resposta (200):**
```json
{
  "status": true,
  "status_code": 200,
  "hospitalId": 1,
  "data": "2025-12-15",
  "slotMinutos": 60,
  "horarios": [
    { "hora": "08:00:00", "vagas": 10 },
    { "hora": "09:00:00", "vagas": 8 },
    { "hora": "10:00:00", "vagas": 5 }
  ]
}
```

### Listar TODOS os Horários (Incluindo Ocupados)

```bash
GET http://localhost:8080/v1/doevida/hospital/1/horarios?data=2025-12-15&slot=60&todos=1
```

### Cadastrar Hospital

```bash
POST http://localhost:8080/v1/doevida/hospital
Content-Type: application/json

{
  "nome": "Hospital Santa Casa",
  "email": "contato@santacasa.com",
  "senha": "senha123456",
  "cnpj": "12345678000199",
  "crm": "CRM123456",
  "cep": "01310100",
  "telefone": "11987654321",
  "capacidade_maxima": 10,
  "convenios": "SUS, Unimed, Bradesco",
  "complemento": "Próximo ao metrô"
}
```

### Upload de Foto do Hospital

```bash
POST http://localhost:8080/v1/doevida/hospital/upload-image
Content-Type: multipart/form-data

foto: [arquivo_imagem.jpg]
```

**Resposta (200):**
```json
{
  "status": true,
  "status_code": 200,
  "message": "Imagem enviada com sucesso",
  "imageUrl": "/uploads/hospital_1234567890_123456789.webp"
}
```

---

## 🔓 Recuperação de Senha

### Solicitar Código de Recuperação

```bash
POST http://localhost:8080/v1/doevida/recuperar-senha
Content-Type: application/json

{
  "email": "joao@email.com"
}
```

**Resposta (200):**
```json
{
  "status": true,
  "status_code": 200,
  "message": "Código de recuperação enviado para seu email"
}
```

> **Nota:** Um código de 6 dígitos será enviado para o email cadastrado. O código é válido por 15 minutos.

### Redefinir Senha

```bash
POST http://localhost:8080/v1/doevida/redefinir-senha
Content-Type: application/json

{
  "codigo": "123456",
  "novaSenha": "novaSenha123456"
}
```

**Resposta (200):**
```json
{
  "status": true,
  "status_code": 200,
  "message": "Senha redefinida com sucesso"
}
```

---

## 🔍 Outros Endpoints

### Banco de Sangue

```bash
# Listar estoques
GET http://localhost:8080/v1/doevida/banco-sangue

# Buscar por ID
GET http://localhost:8080/v1/doevida/banco-sangue/1

# Adicionar estoque
POST http://localhost:8080/v1/doevida/banco-sangue
```

### Tipos Sanguíneos

```bash
# Listar tipos sanguíneos
GET http://localhost:8080/v1/doevida/tipo-sanguineo
```

### Sexo

```bash
# Listar sexos
GET http://localhost:8080/v1/doevida/sexo-usuario
```

---

## 📊 Códigos de Status

| Código | Significado | Descrição |
|--------|-------------|-----------|
| 200 | OK | Requisição bem-sucedida |
| 201 | Created | Recurso criado com sucesso |
| 400 | Bad Request | Dados inválidos ou faltando campos obrigatórios |
| 401 | Unauthorized | Token inválido ou não fornecido |
| 403 | Forbidden | Token expirado |
| 404 | Not Found | Recurso não encontrado |
| 409 | Conflict | Conflito (ex: email já cadastrado) |
| 429 | Too Many Requests | Rate limit excedido |
| 500 | Internal Server Error | Erro interno do servidor |

---

## 🔒 Rate Limits

| Endpoint | Limite |
|----------|--------|
| Geral | 100 requisições/minuto |
| Login | 5 tentativas/15 minutos |
| Cadastro | 3 cadastros/hora |
| Recuperação de Senha | 3 solicitações/hora |
| Agendamento | 10 agendamentos/hora |

---

## 💡 Dicas

### 1. Usando curl

```bash
# Login
curl -X POST http://localhost:8080/v1/doevida/login \
  -H "Content-Type: application/json" \
  -d '{"email":"joao@email.com","senha":"senha123456"}'

# Endpoint autenticado
curl -X GET http://localhost:8080/v1/doevida/perfil \
  -H "Authorization: Bearer SEU_TOKEN_AQUI"
```

### 2. Usando Postman

1. Crie uma variável `{{token}}` no ambiente
2. No login, adicione um Test Script:
```javascript
pm.environment.set("token", pm.response.json().token);
```
3. Nas requisições autenticadas, use: `Bearer {{token}}`

### 3. Usando JavaScript (Fetch)

```javascript
// Login
const response = await fetch('http://localhost:8080/v1/doevida/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'joao@email.com',
    senha: 'senha123456'
  })
})

const data = await response.json()
const token = data.token

// Requisição autenticada
const profile = await fetch('http://localhost:8080/v1/doevida/perfil', {
  headers: { 'Authorization': `Bearer ${token}` }
})
```

---

## ❓ Erros Comuns

### Token inválido ou expirado
```json
{
  "status": false,
  "status_code": 403,
  "message": "Token inválido ou expirado"
}
```
**Solução:** Faça login novamente para obter um novo token.

### Campos obrigatórios faltando
```json
{
  "status": false,
  "status_code": 400,
  "message": "Erro de validação",
  "errors": [
    {
      "campo": "email",
      "mensagem": "Email é obrigatório"
    }
  ]
}
```
**Solução:** Verifique se todos os campos obrigatórios estão preenchidos.

### Rate limit excedido
```json
{
  "status": false,
  "status_code": 429,
  "message": "Muitas requisições do mesmo IP. Tente novamente em alguns instantes."
}
```
**Solução:** Aguarde alguns minutos antes de fazer novas requisições.

---

**🩸 Dúvidas?** Consulte o [README.md](./README.md) para mais informações sobre instalação e configuração.
