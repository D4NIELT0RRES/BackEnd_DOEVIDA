/*************************************************************************************************
 * OBJETIVO: API para projeto DOE VIDA
 * DATA: 18/09/2025
 * VERSÃO: 1.0
 *************************************************************************************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Import dos controllers
const controllerAgendamento = require('./controller/agendamento/controllerAgendamento')
const controllerBancoSangue = require('./controller/banco_sangue/controllerBancoSangue')
const controllerCertificado = require('./controller/certificado/controllerCertificado')
const controllerDoacao = require('./controller/doacao/controllerDoacao')
const controllerHospital = require('./controller/hospital/controllerHospital')
const controllerSexo = require('./controller/sexo/controllerSexo')
const controllerTelefone = require('./controller/telefone/controllerTelefone')
const controllerUsuario = require('./controller/usuario/controllerUsuario')

const bodyParserJSON = bodyParser.json()
const app = express()

// Configuração do CORS
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    app.use(cors())
    next()
})

/*************************** ENDPOINTS AGENDAMENTO ****************************/
app.post('/v1/doevida/agendamento', cors(), bodyParserJSON, async (request, response) => {
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultAgendamento = await controllerAgendamento.inserirAgendamento(dadosBody, contentType)
    response.status(resultAgendamento.status_code).json(resultAgendamento)
})

app.get('/v1/doevida/agendamento', cors(), async (request, response) => {
    let resultAgendamento = await controllerAgendamento.listarAgendamento()
    response.status(resultAgendamento.status_code).json(resultAgendamento)
})

app.get('/v1/doevida/agendamento/:id', cors(), async (request, response) => {
    let idAgendamento = request.params.id
    let resultAgendamento = await controllerAgendamento.buscarAgendamento(idAgendamento)
    response.status(resultAgendamento.status_code).json(resultAgendamento)
})

app.delete('/v1/doevida/agendamento/:id', cors(), async (request, response) => {
    let idAgendamento = request.params.id
    let resultAgendamento = await controllerAgendamento.excluirAgendamento(idAgendamento)
    response.status(resultAgendamento.status_code).json(resultAgendamento)
})

app.put('/v1/doevida/agendamento/:id', cors(), bodyParserJSON, async (request, response) => {
    let contentType = request.headers['content-type']
    let idAgendamento = request.params.id
    let dadosBody = request.body
    let resultAgendamento = await controllerAgendamento.atualizarAgendamento(dadosBody, idAgendamento, contentType)
    response.status(resultAgendamento.status_code).json(resultAgendamento)
})

/*************************** ENDPOINTS BANCO DE SANGUE ****************************/
app.post('/v1/doevida/banco-sangue', cors(), bodyParserJSON, async (request, response) => {
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultBancoSangue = await controllerBancoSangue.inserirBancoSangue(dadosBody, contentType)
    response.status(resultBancoSangue.status_code).json(resultBancoSangue)
})

app.get('/v1/doevida/banco-sangue', cors(), async (request, response) => {
    let resultBancoSangue = await controllerBancoSangue.listarBancoSangue()
    response.status(resultBancoSangue.status_code).json(resultBancoSangue)
})

app.get('/v1/doevida/banco-sangue/:id', cors(), async (request, response) => {
    let idBancoSangue = request.params.id
    let resultBancoSangue = await controllerBancoSangue.buscarBancoSangue(idBancoSangue)
    response.status(resultBancoSangue.status_code).json(resultBancoSangue)
})

app.delete('/v1/doevida/banco-sangue/:id', cors(), async (request, response) => {
    let idBancoSangue = request.params.id
    let resultBancoSangue = await controllerBancoSangue.excluirBancoSangue(idBancoSangue)
    response.status(resultBancoSangue.status_code).json(resultBancoSangue)
})

app.put('/v1/doevida/banco-sangue/:id', cors(), bodyParserJSON, async (request, response) => {
    let contentType = request.headers['content-type']
    let idBancoSangue = request.params.id
    let dadosBody = request.body
    let resultBancoSangue = await controllerBancoSangue.atualizarBancoSangue(dadosBody, idBancoSangue, contentType)
    response.status(resultBancoSangue.status_code).json(resultBancoSangue)
})

/*************************** ENDPOINTS CERTIFICADO ****************************/
app.post('/v1/doevida/certificado', cors(), bodyParserJSON, async (request, response) => {
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultCertificado = await controllerCertificado.inserirCertificado(dadosBody, contentType)
    response.status(resultCertificado.status_code).json(resultCertificado)
})

app.get('/v1/doevida/certificado', cors(), async (request, response) => {
    let resultCertificado = await controllerCertificado.listarCertificado()
    response.status(resultCertificado.status_code).json(resultCertificado)
})

app.get('/v1/doevida/certificado/:id', cors(), async (request, response) => {
    let idCertificado = request.params.id
    let resultCertificado = await controllerCertificado.buscarCertificado(idCertificado)
    response.status(resultCertificado.status_code).json(resultCertificado)
})

app.delete('/v1/doevida/certificado/:id', cors(), async (request, response) => {
    let idCertificado = request.params.id
    let resultCertificado = await controllerCertificado.excluirCertificado(idCertificado)
    response.status(resultCertificado.status_code).json(resultCertificado)
})

app.put('/v1/doevida/certificado/:id', cors(), bodyParserJSON, async (request, response) => {
    let contentType = request.headers['content-type']
    let idCertificado = request.params.id
    let dadosBody = request.body
    let resultCertificado = await controllerCertificado.atualizarCertificado(dadosBody, idCertificado, contentType)
    response.status(resultCertificado.status_code).json(resultCertificado)
})

/*************************** ENDPOINTS DOAÇÃO ****************************/
app.post('/v1/doevida/doacao', cors(), bodyParserJSON, async (request, response) => {
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultDoacao = await controllerDoacao.inserirDoacao(dadosBody, contentType)
    response.status(resultDoacao.status_code).json(resultDoacao)
})

app.get('/v1/doevida/doacao', cors(), async (request, response) => {
    let resultDoacao = await controllerDoacao.listarDoacao()
    response.status(resultDoacao.status_code).json(resultDoacao)
})

app.get('/v1/doevida/doacao/:id', cors(), async (request, response) => {
    let idDoacao = request.params.id
    let resultDoacao = await controllerDoacao.buscarDoacao(idDoacao)
    response.status(resultDoacao.status_code).json(resultDoacao)
})

app.delete('/v1/doevida/doacao/:id', cors(), async (request, response) => {
    let idDoacao = request.params.id
    let resultDoacao = await controllerDoacao.excluirDoacao(idDoacao)
    response.status(resultDoacao.status_code).json(resultDoacao)
})

app.put('/v1/doevida/doacao/:id', cors(), bodyParserJSON, async (request, response) => {
    let contentType = request.headers['content-type']
    let idDoacao = request.params.id
    let dadosBody = request.body
    let resultDoacao = await controllerDoacao.atualizarDoacao(dadosBody, idDoacao, contentType)
    response.status(resultDoacao.status_code).json(resultDoacao)
})

/*************************** ENDPOINTS HOSPITAL ****************************/
app.post('/v1/doevida/hospital', cors(), bodyParserJSON, async (request, response) => {
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultHospital = await controllerHospital.inserirHospital(dadosBody, contentType)
    response.status(resultHospital.status_code).json(resultHospital)
})

app.get('/v1/doevida/hospital', cors(), async (request, response) => {
    let resultHospital = await controllerHospital.listarHospital()
    response.status(resultHospital.status_code).json(resultHospital)
})

app.get('/v1/doevida/hospital/:id', cors(), async (request, response) => {
    let idHospital = request.params.id
    let resultHospital = await controllerHospital.buscarHospital(idHospital)
    response.status(resultHospital.status_code).json(resultHospital)
})

app.delete('/v1/doevida/hospital/:id', cors(), async (request, response) => {
    let idHospital = request.params.id
    let resultHospital = await controllerHospital.excluirHospital(idHospital)
    response.status(resultHospital.status_code).json(resultHospital)
})

app.put('/v1/doevida/hospital/:id', cors(), bodyParserJSON, async (request, response) => {
    let contentType = request.headers['content-type']
    let idHospital = request.params.id
    let dadosBody = request.body
    let resultHospital = await controllerHospital.atualizarHospital(dadosBody, idHospital, contentType)
    response.status(resultHospital.status_code).json(resultHospital)
})

/*************************** ENDPOINTS SEXO USUÁRIO ****************************/
app.post('/v1/doevida/sexo-usuario', cors(), bodyParserJSON, async (request, response) => {
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultSexo = await controllerSexo.inserirSexo(dadosBody, contentType)
    response.status(resultSexo.status_code).json(resultSexo)
})

app.get('/v1/doevida/sexo-usuario', cors(), async (request, response) => {
    let resultSexo = await controllerSexo.listarSexo()
    response.status(resultSexo.status_code).json(resultSexo)
})

/*************************** ENDPOINTS TELEFONE ****************************/
app.post('/v1/doevida/telefone', cors(), bodyParserJSON, async (request, response) => {
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultTelefone = await controllerTelefone.inserirTelefone(dadosBody, contentType)
    response.status(resultTelefone.status_code).json(resultTelefone)
})

app.get('/v1/doevida/telefone', cors(), async (request, response) => {
    let resultTelefone = await controllerTelefone.listarTelefone()
    response.status(resultTelefone.status_code).json(resultTelefone)
})

app.get('/v1/doevida/telefone/:id', cors(), async (request, response) => {
    let idTelefone = request.params.id
    let resultTelefone = await controllerTelefone.buscarTelefone(idTelefone)
    response.status(resultTelefone.status_code).json(resultTelefone)
})

/*************************** ENDPOINTS USUÁRIO ****************************/
app.post('/v1/doevida/usuario', cors(), bodyParserJSON, async (request, response) => {
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let resultUsuario = await controllerUsuario.inserirUsuario(dadosBody, contentType)
    response.status(resultUsuario.status_code).json(resultUsuario)
})

app.get('/v1/doevida/usuario', cors(), async (request, response) => {
    let resultUsuario = await controllerUsuario.listarUsuario()
    response.status(resultUsuario.status_code).json(resultUsuario)
})

app.get('/v1/doevida/usuario/:id', cors(), async (request, response) => {
    let idUsuario = request.params.id
    let resultUsuario = await controllerUsuario.buscarUsuario(idUsuario)
    response.status(resultUsuario.status_code).json(resultUsuario)
})

app.delete('/v1/doevida/usuario/:id', cors(), async (request, response) => {
    let idUsuario = request.params.id
    let resultUsuario = await controllerUsuario.excluirUsuario(idUsuario)
    response.status(resultUsuario.status_code).json(resultUsuario)
})

app.put('/v1/doevida/usuario/:id', cors(), bodyParserJSON, async (request, response) => {
    let contentType = request.headers['content-type']
    let idUsuario = request.params.id
    let dadosBody = request.body
    let resultUsuario = await controllerUsuario.atualizarUsuario(dadosBody, idUsuario, contentType)
    response.status(resultUsuario.status_code).json(resultUsuario)
})

// Iniciando o servidor
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`API DOE VIDA rodando na porta ${PORT}`)
})

module.exports = app