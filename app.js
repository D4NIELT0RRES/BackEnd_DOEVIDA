/*************************************************************************************************
 * OBJETIVO: API referente ao projeto DOE VIDA
 * DATA: 23/09/2025
 * AUTOR: DANIEL TORRES
 * VERSÃO: 1.0
 *================================================================================================ 
 * 
 * OBSERVAÇÃO:
 * 
 * ****************** Para configurar e instalar a API, precisamos das seguintes bibliotecas:
 *                      -> express          npm install express --save
 *                      -> cors             npm install cors --save
 *                      -> body-parser      npm install body-parser --save
 * 
 * ****************** Para configurar e Instalar o acesso remoto ao Banco de Dados precisamos:
 *                      -> prisma          npm install prisma --save (conexão com o BD)
 *                      -> prisma/client   npm install @prisma/client --save (Executa scripts no BD)
 * 
 * ******************* Após a instalação do prisma e do prisma/client, devemos:
 * 
 *                     npx prisma init (Inicializar o prisma no projeto)
 * 
 * ******************* Para realizar o sincronismo do prisma com o BD, devemos executar o seguinte comando:
 * 
 *                     npx prisma migrate dev                   
 * 
 *************************************************************************************************/

//Import das bibliotecas para criar a API
const express    = require('express')
const cors       = require('cors')
const bodyParser = require('body-parser')

//Import das controllers para realizar o CRUD de dados
const controllerAgendamento = require('./controller/agendamento/controllerAgendamento')
const controllerEstoqueSangue = require('./controller/banco_de_sangue/controllerEstoqueSangue')
const controllerCertificado = require('./controller/certificado/controllerCertificado')
const controllerDoacao      = require('./controller/doacao/controllerDoacao')
const controllerHospital    = require('./controller/hospital/controllerHospital')
const controllerSexo        = require('./controller/sexo/controllerSexo')
const controllerTelefone    = require('./controller/telefone/controllerTelefone')
const controllerUsuario     = require('./controller/usuario/controllerUsuario')

//Estabelecendo o formato de dados que deverá chegar no body da requisição (POST ou PUT)
const bodyParserJson = bodyParser.json()

//Cria o objeto app para criar a API
const app = express()

//Configuração do cors   
app.use((request, response, next) =>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')

    app.use(cors())
    app.use(express.json())
    next()
})

/*************************************************************************************************
 *                                      ENDPOINTS AGENDAMENTO
 *************************************************************************************************/
// Inserir um novo agendamento
app.post('/v1/doevida/agendamento', cors(), bodyParserJson, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerAgendamento.inserirAgendamento(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Listar todos os agendamentos
app.get('/v1/doevida/agendamento', cors(), async function(request, response){
    let result = await controllerAgendamento.listarAgendamento()
    response.status(result.status_code)
    response.json(result)
})

// Buscar um agendamento por ID
app.get('/v1/doevida/agendamento/:id', cors(), async function(request, response){
    let id     = request.params.id
    let result = await controllerAgendamento.buscarAgendamento(id)
    response.status(result.status_code)
    response.json(result)
})

// Excluir um agendamento por ID
app.delete('/v1/doevida/agendamento/:id', cors(), async function(request, response){
    let id     = request.params.id
    let result = await controllerAgendamento.excluirAgendamento(id)
    response.status(result.status_code)
    response.json(result)
})

// Atualizar um agendamento por ID
app.put('/v1/doevida/agendamento/:id', cors(), bodyParserJson, async function(request, response){
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let dadosBody   = request.body
    let result      = await controllerAgendamento.atualizarAgendamento(dadosBody, id, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Buscar agendamentos por status
app.get('/v1/doevida/agendamento/status/:status', cors(), async function(request, response) {
    let status = request.params.status
    let result = await controllerAgendamento.buscarAgendamentoPorStatus(status)
    
    response.status(result.status_code)
    response.json(result)
})

// Buscar agendamentos por data
app.get('/v1/agendamento/data/:data', cors(), async function(request, response) {
    let data = request.params.data
    let dadosAgendamento = await controllerAgendamento.buscarAgendamentoPorData(data)
    response.status(dadosAgendamento.status_code)
    response.json(dadosAgendamento)
})

// Verificar disponibilidade de agendamento
app.get('/v1/agendamento/disponibilidade', cors(), async function(request, response) {
    let data = request.query.data
    let hora = request.query.hora
    let id_hospital = request.query.id_hospital
    let disponibilidade = await controllerAgendamento.verificarDisponibilidade(data, hora, id_hospital)
    // mantendo o comportamento original (controlador define o campo de status)
    response.status(disponibilidade.status)
    response.json(disponibilidade)
})

/*************************************************************************************************
 *                                  ENDPOINTS BANCO DE SANGUE
 *************************************************************************************************/
// Inserir novo banco de sangue
app.post('/v1/doevida/banco-sangue', cors(), bodyParserJson, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerEstoqueSangue.inserirBancoSangue(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Listar todos os bancos de sangue
app.get('/v1/doevida/banco-sangue', cors(), async function(request, response){
    let result = await controllerEstoqueSangue.listarBancoSangue()
    response.status(result.status_code)
    response.json(result)
})

// Buscar um banco de sangue por ID
app.get('/v1/doevida/banco-sangue/:id', cors(), async function(request, response){
    let id     = request.params.id
    let result = await controllerEstoqueSangue.buscarBancoSangue(id)
    response.status(result.status_code)
    response.json(result)
})

// Excluir um banco de sangue por ID
app.delete('/v1/doevida/banco-sangue/:id', cors(), async function(request, response){
    let id     = request.params.id
    let result = await controllerEstoqueSangue.excluirBancoSangue(id)
    response.status(result.status_code)
    response.json(result)
})

// Atualizar um banco de sangue por ID
app.put('/v1/doevida/banco-sangue/:id', cors(), bodyParserJson, async function(request, response){
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let dadosBody   = request.body
    let result      = await controllerEstoqueSangue.atualizarBancoSangue(dadosBody, id, contentType)
    response.status(result.status_code)
    response.json(result)
})

/*************************************************************************************************
 *                                      ENDPOINTS CERTIFICADO
 *************************************************************************************************/
// Inserir novo certificado
app.post('/v1/doevida/certificado', cors(), bodyParserJson, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerCertificado.inserirCertificado(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Listar todos os certificados
app.get('/v1/doevida/certificado', cors(), async function(request, response){
    let result = await controllerCertificado.listarCertificado()
    response.status(result.status_code)
    response.json(result)
})

// Buscar um certificado por ID
app.get('/v1/doevida/certificado/:id', cors(), async function(request, response){
    let id     = request.params.id
    let result = await controllerCertificado.buscarCertificado(id)
    response.status(result.status_code)
    response.json(result)
})

// Excluir um certificado por ID
app.delete('/v1/doevida/certificado/:id', cors(), async function(request, response){
    let id     = request.params.id
    let result = await controllerCertificado.excluirCertificado(id)
    response.status(result.status_code)
    response.json(result)
})

// Atualizar um certificado por ID
app.put('/v1/doevida/certificado/:id', cors(), bodyParserJson, async function(request, response){
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let dadosBody   = request.body
    let result      = await controllerCertificado.atualizarCertificado(dadosBody, id, contentType)
    response.status(result.status_code)
    response.json(result)
})

/*************************************************************************************************
 *                                      ENDPOINTS DOAÇÃO
 *************************************************************************************************/
// Inserir nova doação
app.post('/v1/doevida/doacao', cors(), bodyParserJson, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerDoacao.inserirDoacao(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Listar todas as doações
app.get('/v1/doevida/doacao', cors(), async function(request, response){
    let result = await controllerDoacao.listarDoacao()
    response.status(result.status_code)
    response.json(result)
})

// Buscar uma doação por ID
app.get('/v1/doevida/doacao/:id', cors(), async function(request, response){
    let id     = request.params.id
    let result = await controllerDoacao.buscarDoacao(id)
    response.status(result.status_code)
    response.json(result)
})

// Excluir uma doação por ID
app.delete('/v1/doevida/doacao/:id', cors(), async function(request, response){
    let id     = request.params.id
    let result = await controllerDoacao.excluirDoacao(id)
    response.status(result.status_code)
    response.json(result)
})

// Atualizar uma doação por ID
app.put('/v1/doevida/doacao/:id', cors(), bodyParserJson, async function(request, response){
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let dadosBody   = request.body
    let result      = await controllerDoacao.atualizarDoacao(dadosBody, id, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Buscar histórico de doações de um usuário
app.get('/v1/doacao/historico/:id_usuario', cors(), async function(request, response) {
    let id = request.params.id_usuario
    let historico = await controllerDoacao.historicoDoacao(id)
    response.status(historico.status_code)
    response.json(historico)
})

// Verificar compatibilidade sanguínea
app.get('/v1/doacao/compatibilidade', cors(), async function(request, response) {
    let tipo_doador = request.query.tipo_doador
    let tipo_receptor = request.query.tipo_receptor
    let compatibilidade = await controllerDoacao.verificarCompatibilidade(tipo_doador, tipo_receptor)
    // mantendo o comportamento original (controlador define o campo de status)
    response.status(compatibilidade.status)
    response.json(compatibilidade)
})

/*************************************************************************************************
 *                                      ENDPOINTS HOSPITAL
 *************************************************************************************************/
// Inserir novo hospital
app.post('/v1/doevida/hospital', cors(), bodyParserJson, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerHospital.inserirHospital(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Listar todos os hospitais
app.get('/v1/doevida/hospital', cors(), async function(request, response){
    let result = await controllerHospital.listarHospital()
    response.status(result.status_code)
    response.json(result)
})

// Buscar um hospital por ID
app.get('/v1/doevida/hospital/:id', cors(), async function(request, response){
    let id     = request.params.id
    let result = await controllerHospital.buscarHospital(id)
    response.status(result.status_code)
    response.json(result)
})

// Excluir um hospital por ID
app.delete('/v1/doevida/hospital/:id', cors(), async function(request, response){
    let id     = request.params.id
    let result = await controllerHospital.excluirHospital(id)
    response.status(result.status_code)
    response.json(result)
})

// Atualizar um hospital por ID
app.put('/v1/doevida/hospital/:id', cors(), bodyParserJson, async function(request, response){
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let dadosBody   = request.body
    let result      = await controllerHospital.atualizarHospital(dadosBody, id, contentType)
    response.status(result.status_code)
    response.json(result)
})

/*************************************************************************************************
 *                                      ENDPOINTS SEXO USUÁRIO
 *************************************************************************************************/
// Inserir novo sexo de usuário
app.post('/v1/doevida/sexo-usuario', cors(), bodyParserJson, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerSexo.inserirSexo(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Listar todos os sexos de usuários
app.get('/v1/doevida/sexo-usuario', cors(), async function(request, response){
    let result = await controllerSexo.listarSexo()
    response.status(result.status_code)
    response.json(result)
})

// Excluir um sexo de usuário por ID
app.delete('/v1/doevida/sexo-usuario/:id', cors(), async function(request, response){
    let id     = request.params.id
    let result = await controllerSexo.excluirSexo(id)
    response.status(result.status_code)
    response.json(result)
})


/*************************************************************************************************
 *                                      ENDPOINTS TELEFONE
 *************************************************************************************************/
// Inserir novo telefone
app.post('/v1/doevida/telefone', cors(), bodyParserJson, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerTelefone.inserirTelefone(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Listar todos os telefones
app.get('/v1/doevida/telefone', cors(), async function(request, response){
    let result = await controllerTelefone.listarTelefone()
    response.status(result.status_code)
    response.json(result)
})

// Buscar um telefone por ID
app.get('/v1/doevida/telefone/:id', cors(), async function(request, response){
    let id     = request.params.id
    let result = await controllerTelefone.buscarTelefone(id)
    response.status(result.status_code)
    response.json(result)
})

// Excluir um telefone por ID
app.delete('/v1/doevida/telefone/:id', cors(), async function(request, response){
    let id     = request.params.id
    let result = await controllerTelefone.excluirTelefone(id)
    response.status(result.status_code)
    response.json(result)
})

/*************************************************************************************************
 *                                      ENDPOINTS USUÁRIO
 *************************************************************************************************/
// Inserir novo usuário
// Cadastrar usuário
app.post('/v1/doevida/usuario', cors(), bodyParserJson, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerUsuario.inserirUsuario(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Listar todos os usuários
app.get('/v1/doevida/usuario', cors(), async function(request, response){
    let result = await controllerUsuario.listarUsuario()
    response.status(result.status_code)
    response.json(result)
})

// Buscar um usuário por ID
app.get('/v1/doevida/usuario/:id', cors(), async function(request, response){
    let id     = request.params.id
    let result = await controllerUsuario.buscarUsuario(id)
    response.status(result.status_code)
    response.json(result)
})

// Excluir um usuário por ID
app.delete('/v1/doevida/usuario/:id', cors(), async function(request, response){
    let id     = request.params.id
    let result = await controllerUsuario.excluirUsuario(id)
    response.status(result.status_code)
    response.json(result)
})

// Atualizar um usuário por ID
app.put('/v1/doevida/usuario/:id', cors(), bodyParserJson, async function(request, response){
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let dadosBody   = request.body
    let result      = await controllerUsuario.atualizarUsuario(dadosBody, id, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Login de usuário
app.post('/v1/doevida/login', cors(), bodyParserJson, async function (request, response) {
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerUsuario.loginUsuario(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})



/*************************************************************************************************
 *                                      INICIANDO SERVIDOR
 *************************************************************************************************/
const PORT = process.env.PORT || 8080
app.listen(PORT, function(){
    console.log(`API DOE VIDA rodando na porta ${PORT}`)
})

module.exports = app
