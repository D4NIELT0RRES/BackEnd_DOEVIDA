# Documentação dos Endpoints - API DOE VIDA

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
