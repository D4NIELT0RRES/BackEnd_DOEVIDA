# 🧪 Guia de Testes no Postman - API Agendamento DOE VIDA

## 📋 Pré-requisitos

1. **Servidor rodando**: `npm start` na pasta do projeto
2. **URL Base**: `http://localhost:8080`
3. **Banco de dados**: Execute o script SQL antes dos testes

---

## 🔑 1. OBTER TOKEN DE AUTENTICAÇÃO

### Login do Usuário
**Método**: `POST`  
**URL**: `http://localhost:8080/v1/doevida/login`  
**Headers**:
```
Content-Type: application/json
```
**Body** (raw JSON):
```json
{
  "email": "usuario@teste.com",
  "senha": "123456"
}
```

**📝 Resultado esperado**: Token JWT para usar nos próximos testes
```json
{
  "status": true,
  "status_code": 200,
  "message": "Login realizado com sucesso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 🏥 2. LISTAR HOSPITAIS (Para selecionar um ID)

**Método**: `GET`  
**URL**: `http://localhost:8080/v1/doevida/hospital`  

**📝 Anote o `id` de um hospital para usar nos próximos testes**

---

## 📅 3. TESTAR DIAS DISPONÍVEIS

**Método**: `GET`  
**URL**: `http://localhost:8080/v1/doevida/hospital/1/dias-disponiveis`  
**Query Params**:
- `mes`: `2025-10` (ou `2025-11` para próximo mês)
- `slot`: `60` (opcional)

**URL Completa**: 
```
http://localhost:8080/v1/doevida/hospital/1/dias-disponiveis?mes=2025-10&slot=60
```

**📝 Resultado esperado**:
```json
{
  "status": true,
  "status_code": 200,
  "hospitalId": 1,
  "mes": "2025-10",
  "slotMinutos": 60,
  "diasDisponiveis": ["2025-10-10", "2025-10-11", "2025-10-12"]
}
```

---

## ⏰ 4. TESTAR HORÁRIOS DO DIA

**Método**: `GET`  
**URL**: `http://localhost:8080/v1/doevida/hospital/1/horarios`  
**Query Params**:
- `data`: `2025-10-15` (uma data futura)
- `slot`: `60` (opcional)
- `todos`: `1` (opcional - mostra todos os slots, não só disponíveis)

**URL Completa**: 
```
http://localhost:8080/v1/doevida/hospital/1/horarios?data=2025-10-15&slot=60&todos=1
```

**📝 Resultado esperado**:
```json
{
  "status": true,
  "status_code": 200,
  "hospitalId": 1,
  "data": "2025-10-15",
  "slotMinutos": 60,
  "horarios": [
    {"hora": "08:00:00", "vagas": 5},
    {"hora": "09:00:00", "vagas": 5},
    {"hora": "10:00:00", "vagas": 5}
  ]
}
```

---

## ✅ 5. CRIAR AGENDAMENTO

**Método**: `POST`  
**URL**: `http://localhost:8080/v1/doevida/agendamento`  
**Headers**:
```
Content-Type: application/json
Authorization: Bearer SEU_TOKEN_AQUI
```
**Body** (raw JSON):
```json
{
  "id_hospital": 1,
  "data": "2025-10-15",
  "hora": "09:00:00"
}
```

**📝 Resultado esperado**:
```json
{
  "status": true,
  "status_code": 201,
  "message": "Agendamento criado com sucesso",
  "agendamento": {
    "id": 1,
    "status": "Agendado",
    "data": "2025-10-15T03:00:00.000Z",
    "hora": "09:00:00",
    "id_usuario": 1,
    "id_doacao": null,
    "id_hospital": 1
  }
}
```

---

## 📋 6. LISTAR MEUS AGENDAMENTOS

**Método**: `GET`  
**URL**: `http://localhost:8080/v1/doevida/agendamento/me`  
**Headers**:
```
Authorization: Bearer SEU_TOKEN_AQUI
```
**Query Params** (opcional):
- `futuros`: `1` (só agendamentos futuros)

**URL Completa**: 
```
http://localhost:8080/v1/doevida/agendamento/me?futuros=1
```

**📝 Resultado esperado**:
```json
{
  "status": true,
  "status_code": 200,
  "items": 1,
  "agendamentos": [
    {
      "id": 1,
      "status": "Agendado",
      "data": "2025-10-15T03:00:00.000Z",
      "hora": "09:00:00",
      "hospital_nome": "Hospital Central",
      "hospital_email": "contato@hospitalcentral.com.br",
      "hospital_telefone": "(11) 99999-9999",
      "hospital_cep": "01234-567"
    }
  ]
}
```

---

## ❌ 7. CANCELAR AGENDAMENTO

**Método**: `DELETE`  
**URL**: `http://localhost:8080/v1/doevida/agendamento/1` (substitua `1` pelo ID do agendamento)  
**Headers**:
```
Authorization: Bearer SEU_TOKEN_AQUI
```

**📝 Resultado esperado**:
```json
{
  "status": true,
  "status_code": 200,
  "message": "Agendamento cancelado com sucesso"
}
```

---

## 🧪 TESTES DE VALIDAÇÃO

### Teste 1: Criar agendamento sem token
**Resultado esperado**: Status 401 - "Token não fornecido"

### Teste 2: Criar agendamento para data passada
```json
{
  "id_hospital": 1,
  "data": "2025-10-08",
  "hora": "09:00:00"
}
```
**Resultado esperado**: Status 400 - "Não é possível agendar para data passada"

### Teste 3: Criar agendamento fora do horário
```json
{
  "id_hospital": 1,
  "data": "2025-10-15",
  "hora": "22:00:00"
}
```
**Resultado esperado**: Status 400 - "Horário fora do funcionamento do hospital"

### Teste 4: Criar múltiplos agendamentos para testar limite de vagas
Repita o teste de criação várias vezes para o mesmo horário até esgotar as vagas.
**Resultado esperado**: Status 409 - "Não há vagas disponíveis para este horário"

---

## 🔧 DICAS PARA O POSTMAN

1. **Salve o token**: Crie uma variável de ambiente `{{token}}` no Postman
2. **Collection**: Organize todos os testes em uma collection
3. **Environment**: Use variáveis para `{{baseUrl}}` e `{{hospitalId}}`
4. **Scripts**: Use Pre-request scripts para automatizar o login

### Exemplo de variáveis:
- `baseUrl`: `http://localhost:8080`
- `token`: `seu_token_jwt_aqui`
- `hospitalId`: `1`

---

## ❗ SOLUÇÃO DE PROBLEMAS

### Erro 500 - Internal Server Error
- Verifique se o banco de dados está rodando
- Execute o script SQL completo
- Verifique os logs no terminal do servidor

### Erro 404 - Hospital não encontrado
- Confirme que existem hospitais cadastrados
- Use `GET /v1/doevida/hospital` para verificar IDs válidos

### Erro 401 - Token inválido
- Faça login novamente para obter um token válido
- Verifique se o token está sendo enviado corretamente no header

---

## 🎯 FLUXO COMPLETO DE TESTE

1. ✅ Login para obter token
2. ✅ Listar hospitais
3. ✅ Ver dias disponíveis do hospital
4. ✅ Ver horários de um dia específico
5. ✅ Criar agendamento
6. ✅ Listar meus agendamentos
7. ✅ Cancelar agendamento

**🎉 Se todos os testes passaram, sua API está funcionando perfeitamente!**