# 📋 **DOCUMENTAÇÃO COMPLETA DA API DOE VIDA PARA INTEGRAÇÃO FRONTEND**

## 🔧 **CONFIGURAÇÕES BASE**

```javascript
// Configuração base da API
const BASE_URL = 'http://localhost:8080/v1/doevida'

// Headers padrão para requisições
const headers = {
    'Content-Type': 'application/json'
}

// Para requisições autenticadas, adicionar:
const headersAuth = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
}
```

---

## 🔐 **AUTENTICAÇÃO E USUÁRIO**

### **1. CADASTRO DE USUÁRIO**
```javascript
// POST /v1/doevida/usuario
const cadastrarUsuario = async (dadosUsuario) => {
    const response = await fetch(`${BASE_URL}/usuario`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            nome: "João Silva",
            email: "joao@email.com",
            senha: "12345678",
            cpf: "123.456.789-00", // Opcional
            cep: "12345-678", // Opcional
            data_nascimento: "1990-05-22", // Opcional (formato: YYYY-MM-DD)
            foto_perfil: "https://example.com/foto.jpg", // Opcional
            id_sexo: 1, // 1=Masculino, 2=Feminino, 3=Outro
            id_tipo_sanguineo: 1 // Opcional (1-8, conforme tipos disponíveis)
        })
    })
    return await response.json()
}

// RESPOSTA DE SUCESSO:
{
    "status": true,
    "status_code": 201,
    "message": "Usuário criado com sucesso!",
    "usuario": {
        "id": 1,
        "nome": "João Silva",
        "email": "joao@email.com",
        "cpf": "123.456.789-00",
        "cep": "12345-678",
        "data_nascimento": "1990-05-22T00:00:00.000Z",
        "foto_perfil": "https://example.com/foto.jpg",
        "sexo": { "sexo": "MASCULINO" },
        "tbl_tipo_sanguineo": { "tipo": "A+" }
    }
}
```

### **2. LOGIN**
```javascript
// POST /v1/doevida/login
const login = async (email, senha) => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            email: "joao@email.com",
            senha: "12345678"
        })
    })
    return await response.json()
}

// RESPOSTA DE SUCESSO:
{
    "status": true,
    "status_code": 200,
    "message": "Login realizado com sucesso!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "usuario": {
        "id": 1,
        "nome": "João Silva",
        "email": "joao@email.com"
    }
}
```

### **3. PERFIL DO USUÁRIO** (Requer autenticação)
```javascript
// GET /v1/doevida/perfil
const obterPerfil = async (token) => {
    const response = await fetch(`${BASE_URL}/perfil`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return await response.json()
}

// RESPOSTA:
{
    "status": true,
    "status_code": 200,
    "usuario": {
        "id": 1,
        "nome": "João Silva",
        "email": "joao@email.com",
        // ... outros dados do perfil
    }
}
```

---

## 🔑 **RECUPERAÇÃO DE SENHA**

### **4. SOLICITAR RECUPERAÇÃO**
```javascript
// POST /v1/doevida/recuperar-senha
const solicitarRecuperacao = async (email) => {
    const response = await fetch(`${BASE_URL}/recuperar-senha`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            email: "joao@email.com"
        })
    })
    return await response.json()
}

// RESPOSTA DE SUCESSO:
{
    "status": true,
    "status_code": 200,
    "message": "Código de recuperação enviado para o email!"
}
```

### **5. REDEFINIR SENHA**
```javascript
// POST /v1/doevida/redefinir-senha
const redefinirSenha = async (codigo, novaSenha) => {
    const response = await fetch(`${BASE_URL}/redefinir-senha`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            codigo: "123456",
            novaSenha: "novaSenha123"
        })
    })
    return await response.json()
}

// RESPOSTA DE SUCESSO:
{
    "status": true,
    "status_code": 200,
    "message": "Senha redefinida com sucesso!"
}
```

---

## 🏠 **DADOS PARA TELA HOME**

### **6. LISTAR TIPOS SANGUÍNEOS**
```javascript
// GET /v1/doevida/tipo-sanguineo
const obterTiposSanguineos = async () => {
    const response = await fetch(`${BASE_URL}/tipo-sanguineo`, {
        method: 'GET',
        headers: headers
    })
    return await response.json()
}

// RESPOSTA:
{
    "status": true,
    "status_code": 200,
    "tipos_sanguineos": [
        { "id": 1, "tipo": "A+" },
        { "id": 2, "tipo": "A-" },
        { "id": 3, "tipo": "B+" },
        { "id": 4, "tipo": "B-" },
        { "id": 5, "tipo": "AB+" },
        { "id": 6, "tipo": "AB-" },
        { "id": 7, "tipo": "O+" },
        { "id": 8, "tipo": "O-" }
    ]
}
```

### **7. LISTAR SEXOS**
```javascript
// GET /v1/doevida/sexo-usuario
const obterSexos = async () => {
    const response = await fetch(`${BASE_URL}/sexo-usuario`, {
        method: 'GET',
        headers: headers
    })
    return await response.json()
}

// RESPOSTA:
{
    "status": true,
    "status_code": 200,
    "sexos": [
        { "id": 1, "sexo": "MASCULINO" },
        { "id": 2, "sexo": "FEMININO" },
        { "id": 3, "sexo": "OUTRO" }
    ]
}
```

### **8. LISTAR HOSPITAIS**
```javascript
// GET /v1/doevida/hospital
const obterHospitais = async () => {
    const response = await fetch(`${BASE_URL}/hospital`, {
        method: 'GET',
        headers: headers
    })
    return await response.json()
}
```

---

## 📱 **EXEMPLO DE IMPLEMENTAÇÃO NO FRONTEND**

### **Serviço de API (api.js)**
```javascript
class ApiService {
    constructor() {
        this.baseURL = 'http://localhost:8080/v1/doevida'
        this.token = localStorage.getItem('token')
    }

    // Headers base
    getHeaders(needsAuth = false) {
        const headers = { 'Content-Type': 'application/json' }
        if (needsAuth && this.token) {
            headers.Authorization = `Bearer ${this.token}`
        }
        return headers
    }

    // Cadastro
    async cadastrar(dados) {
        const response = await fetch(`${this.baseURL}/usuario`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(dados)
        })
        return await response.json()
    }

    // Login
    async login(email, senha) {
        const response = await fetch(`${this.baseURL}/login`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify({ email, senha })
        })
        const result = await response.json()
        
        if (result.status && result.token) {
            localStorage.setItem('token', result.token)
            this.token = result.token
        }
        
        return result
    }

    // Recuperar senha
    async recuperarSenha(email) {
        const response = await fetch(`${this.baseURL}/recuperar-senha`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify({ email })
        })
        return await response.json()
    }

    // Redefinir senha
    async redefinirSenha(codigo, novaSenha) {
        const response = await fetch(`${this.baseURL}/redefinir-senha`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify({ codigo, novaSenha })
        })
        return await response.json()
    }

    // Logout
    logout() {
        localStorage.removeItem('token')
        this.token = null
    }
}

export default new ApiService()
```

---

## 🚨 **TRATAMENTO DE ERROS**

### **Possíveis códigos de erro:**
- **400**: Dados inválidos ou incompletos
- **401**: Token inválido ou expirado
- **404**: Usuário não encontrado
- **409**: Email já cadastrado
- **500**: Erro interno do servidor

### **Exemplo de resposta de erro:**
```javascript
{
    "status": false,
    "status_code": 400,
    "message": "Email ou senha inválidos"
}
```

---

## 🔄 **URL BASE E PORTA**

```javascript
// Durante desenvolvimento
const BASE_URL = 'http://localhost:8080/v1/doevida'

// Para produção (quando fizer deploy)
const BASE_URL = 'https://seudominio.com/v1/doevida'
```

---

# DOCUMENTAÇÃO ORIGINAL DOS ENDPOINTS

## Endpoints Usuário

### Criar Usuário
- **POST** `/v1/doevida/usuario`
- **Body Exemplo:**
```json
{
  "nome": "Daniel Torres",
  "email": "daniel.torres@example.com",
  "senha": "12345678",
  "cpf": "123.456.789-00",
  "cep": "12345-678",
  "data_nascimento": "1990-05-22",
  "tipo_sanguineo": "O+",
  "foto_perfil": "https://example.com/foto_perfil.jpg",
  "id_sexo": 1
}
```
- **Retorno:** Dados completos do usuário criado (sem mostrar id_sexo, apenas o nome do sexo)

### Listar Usuários
- **GET** `/v1/doevida/usuario`
- **Retorno:** Lista de todos os usuários cadastrados

### Buscar Usuário por ID
- **GET** `/v1/doevida/usuario/{id}`
- **Retorno:** Dados completos do usuário

---

## Endpoints Agendamento

### Criar Agendamento
- **POST** `/v1/doevida/agendamento`
- **Body Exemplo:**
```json
{
  "status": "Agendado",
  "data": "2025-10-05",
  "hora": "10:30",
  "id_usuario": 1,
  "id_doacao": 1,
  "id_hospital": 1
}
```
- **Retorno:** Dados completos do agendamento, incluindo os dados do usuário, doação e hospital relacionados

### Listar Agendamentos
- **GET** `/v1/doevida/agendamento`
- **Retorno:** Lista de todos os agendamentos

### Buscar Agendamento por ID
- **GET** `/v1/doevida/agendamento/{id}`
- **Retorno:** Dados completos do agendamento

---

## Endpoints Hospital

### Criar Hospital
- **POST** `/v1/doevida/hospital`
- **Body Exemplo:**
```json
{
  "nome": "Hospital São Paulo",
  "email": "contato@hsp.com",
  "senha": "senha123",
  "cnpj": "12.345.678/0001-99",
  "crm": "123456",
  "cep": "12345-678",
  "telefone": "(11) 99999-9999",
  "capacidade_maxima": 100,
  "convenios": "Unimed, Amil",
  "horario_abertura": "07:00",
  "horario_fechamento": "19:00",
  "foto": "https://example.com/foto_hospital.jpg"
}
```
- **Retorno:** Dados completos do hospital criado

### Listar Hospitais
- **GET** `/v1/doevida/hospital`
- **Retorno:** Lista de todos os hospitais

### Buscar Hospital por ID
- **GET** `/v1/doevida/hospital/{id}`
- **Retorno:** Dados completos do hospital

---

## Endpoints Doação

### Criar Doação
- **POST** `/v1/doevida/doacao`
- **Body Exemplo:**
```json
{
  "tipo": "Sangue",
  "quantidade": 450,
  "data": "2025-09-23",
  "id_usuario": 1
}
```
- **Retorno:** Dados completos da doação criada

### Listar Doações
- **GET** `/v1/doevida/doacao`
- **Retorno:** Lista de todas as doações

### Buscar Doação por ID
- **GET** `/v1/doevida/doacao/{id}`
- **Retorno:** Dados completos da doação

---

## Endpoints Banco de Sangue

### Criar Banco de Sangue
- **POST** `/v1/doevida/banco-sangue`
- **Body Exemplo:**
```json
{
  "nome": "Banco Central de Sangue",
  "endereco": "Rua Exemplo, 123",
  "telefone": "(11) 98888-8888"
}
```
- **Retorno:** Dados completos do banco de sangue criado

### Listar Bancos de Sangue
- **GET** `/v1/doevida/banco-sangue`
- **Retorno:** Lista de todos os bancos de sangue

### Buscar Banco de Sangue por ID
- **GET** `/v1/doevida/banco-sangue/{id}`
- **Retorno:** Dados completos do banco de sangue

---

## Endpoints Certificado

### Criar Certificado
- **POST** `/v1/doevida/certificado`
- **Body Exemplo:**
```json
{
  "descricao": "Certificado de doador fiel",
  "data_emissao": "2025-09-23",
  "id_usuario": 1
}
```
- **Retorno:** Dados completos do certificado criado

### Listar Certificados
- **GET** `/v1/doevida/certificado`
- **Retorno:** Lista de todos os certificados

### Buscar Certificado por ID
- **GET** `/v1/doevida/certificado/{id}`
- **Retorno:** Dados completos do certificado

---

## Endpoints Sexo Usuário

### Criar Sexo
- **POST** `/v1/doevida/sexo-usuario`
- **Body Exemplo:**
```json
{
  "sexo": "MASCULINO"
}
```
- **Retorno:** Dados completos do sexo criado

### Listar Sexos
- **GET** `/v1/doevida/sexo-usuario`
- **Retorno:** Lista de todos os sexos cadastrados

---

## Endpoints Telefone

### Criar Telefone
- **POST** `/v1/doevida/telefone`
- **Body Exemplo:**
```json
{
  "numero": "(11) 99999-9999",
  "id_usuario": 1
}
```
- **Retorno:** Dados completos do telefone criado

### Listar Telefones
- **GET** `/v1/doevida/telefone`
- **Retorno:** Lista de todos os telefones

### Buscar Telefone por ID
- **GET** `/v1/doevida/telefone/{id}`
- **Retorno:** Dados completos do telefone
