# 📱 Guia de Integração - Tela de Agendamento Mobile

## 🎯 Visão Geral
Este documento explica como integrar os endpoints da API com a tela de agendamento do app mobile DOE VIDA.

---

## 🏥 **1. CARREGAMENTO INICIAL DA TELA**

### Endpoint: Listar Hospitais
```http
GET /v1/doevida/hospital
```

**🎯 Onde usar:** Logo quando a tela abrir, para carregar as opções de hospitais.

**📍 Na tela:** Seção "Local" com as 3 opções (Hospital central, Hospital Regional, Centro médico).

**Exemplo de resposta:**
```json
{
  "status_code": 200,
  "items": 3,
  "hospitais": [
    {
      "id": 1,
      "nome": "Hospital Central",
      "endereco": "Rua das Flores, 123",
      "capacidade_maxima": 50,
      "horario_abertura": "08:00",
      "horario_fechamento": "18:00"
    }
  ]
}
```

**💡 Como implementar:**
- Faça esta requisição quando a tela carregar
- Popule os cards de seleção de hospital com os dados retornados
- Salve o `id` do hospital selecionado para as próximas requisições

---

## 📅 **2. CALENDÁRIO - DIAS DISPONÍVEIS**

### Endpoint: Dias Disponíveis do Hospital
```http
GET /v1/doevida/hospital/{hospitalId}/dias-disponiveis?mes=2025-07
```

**🎯 Onde usar:** Quando o usuário selecionar um hospital.

**📍 Na tela:** O calendário que mostra o mês de Julho 2025.

**Parâmetros:**
- `hospitalId`: ID do hospital selecionado
- `mes`: Formato YYYY-MM (ex: "2025-07" para julho)

**Exemplo de resposta:**
```json
{
  "status_code": 200,
  "dias_disponiveis": [
    {
      "data": "2025-07-05",
      "disponivel": true,
      "vagas_restantes": 8
    },
    {
      "data": "2025-07-06",
      "disponivel": false,
      "vagas_restantes": 0
    }
  ]
}
```

**💡 Como implementar:**
- Chame este endpoint quando um hospital for selecionado
- Marque no calendário apenas os dias com `disponivel: true`
- Desabilite os dias com `disponivel: false`
- O dia 5 (que está selecionado na imagem) deve ficar destacado quando clicado

---

## ⏰ **3. HORÁRIOS DISPONÍVEIS**

### Endpoint: Horários do Dia
```http
GET /v1/doevida/hospital/{hospitalId}/horarios?data=2025-07-05
```

**🎯 Onde usar:** Quando o usuário clicar em um dia disponível no calendário.

**📍 Na tela:** Os 4 botões de horário (08:00, 10:00, 11:00, 14:00).

**Parâmetros:**
- `hospitalId`: ID do hospital selecionado
- `data`: Data no formato YYYY-MM-DD

**Exemplo de resposta:**
```json
{
  "status_code": 200,
  "horarios": [
    {
      "hora": "08:00",
      "disponivel": true,
      "vagas_restantes": 3
    },
    {
      "hora": "10:00",
      "disponivel": true,
      "vagas_restantes": 5
    },
    {
      "hora": "11:00",
      "disponivel": false,
      "vagas_restantes": 0
    },
    {
      "hora": "14:00",
      "disponivel": true,
      "vagas_restantes": 2
    }
  ]
}
```

**💡 Como implementar:**
- Chame quando o usuário selecionar uma data
- Crie os botões de horário dinamicamente
- Desabilite horários com `disponivel: false`
- Destaque o horário selecionado (como mostrado na imagem)

---

## ✅ **4. CONFIRMAR AGENDAMENTO**

### Endpoint: Criar Agendamento
```http
POST /v1/doevida/agendamento
Content-Type: application/json
Authorization: Bearer {token}
```

**🎯 Onde usar:** Quando o usuário clicar no botão "Confirmar Agendamento".

**📍 Na tela:** Botão vermelho "Confirmar Agendamento" na parte inferior.

**Body da requisição:**
```json
{
  "status": "Agendado",
  "data": "2025-07-05",
  "hora": "08:00",
  "id_usuario": 123,
  "id_doacao": 1,
  "id_hospital": 1
}
```

**Exemplo de resposta (Sucesso):**
```json
{
  "status_code": 201,
  "message": "Agendamento criado com sucesso",
  "agendamento": {
    "id": 456,
    "data": "2025-07-05",
    "hora": "08:00",
    "status": "Agendado"
  }
}
```

**💡 Como implementar:**
- Certifique-se de ter o token de autenticação
- Envie todos os dados obrigatórios
- Após sucesso, redirecione para tela de confirmação ou histórico

---

## 👤 **5. DADOS DO USUÁRIO**

### Endpoint: Perfil do Usuário
```http
GET /v1/doevida/perfil
Authorization: Bearer {token}
```

**🎯 Onde usar:** Para pegar os dados do usuário logado.

**📍 Na tela:** Para preencher automaticamente o `id_usuario` no agendamento.

---

## 🔐 **6. SISTEMA DE AUTENTICAÇÃO**

### Endpoint: Login
```http
POST /v1/doevida/login
Content-Type: application/json
```

**Body:**
```json
{
  "email": "usuario@email.com",
  "senha": "minhasenha"
}
```

**💡 Importante:** Salve o token retornado para usar nos endpoints protegidos.

---

## 🔄 **7. FLUXO COMPLETO DA TELA**

### Sequência de chamadas:

1. **Carregamento inicial:**
   ```
   GET /v1/doevida/hospital
   ```

2. **Usuário seleciona hospital:**
   ```
   GET /v1/doevida/hospital/{hospitalId}/dias-disponiveis?mes=2025-07
   ```

3. **Usuário seleciona data:**
   ```
   GET /v1/doevida/hospital/{hospitalId}/horarios?data=2025-07-05
   ```

4. **Usuário confirma agendamento:**
   ```
   POST /v1/doevida/agendamento
   ```

---

## ⚠️ **TRATAMENTO DE ERROS**

### Códigos de Status:
- **200**: Sucesso
- **201**: Criado com sucesso
- **400**: Dados inválidos
- **401**: Não autorizado (token inválido)
- **404**: Não encontrado
- **409**: Conflito (horário já ocupado)

### Exemplo de erro:
```json
{
  "status_code": 409,
  "message": "Horário indisponível no hospital",
  "error": "Todas as vagas para este horário foram preenchidas"
}
```

---

## 🎨 **DICAS DE UX/UI**

1. **Loading States:** Mostre indicadores de carregamento durante as requisições
2. **Estados Vazios:** Se não houver horários disponíveis, mostre mensagem amigável
3. **Feedback Visual:** Destaque claramente as seleções do usuário
4. **Validação:** Valide se hospital, data e hora foram selecionados antes de confirmar
5. **Offline:** Considere cache para dados dos hospitais

---

## 🧪 **EXEMPLOS DE TESTE**

### Testar com dados reais:
```bash
# 1. Listar hospitais
curl -X GET "http://localhost:3333/v1/doevida/hospital"

# 2. Dias disponíveis
curl -X GET "http://localhost:3333/v1/doevida/hospital/1/dias-disponiveis?mes=2025-07"

# 3. Horários do dia
curl -X GET "http://localhost:3333/v1/doevida/hospital/1/horarios?data=2025-07-05"
```

---

## 📞 **Suporte**

Para dúvidas sobre implementação:
- Verifique os logs do console em caso de erro
- Confirme se o token de autenticação está sendo enviado corretamente
- Valide se os parâmetros estão no formato correto

**🎯 Lembre-se:** Todos os endpoints que modificam dados (POST, PUT, DELETE) precisam do token de autenticação no header!