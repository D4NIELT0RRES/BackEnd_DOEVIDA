/*************************************************************************************************
 * OBJETIVO: API referente ao projeto DOE VIDA
 * DATA: 23/09/2025
 * AUTOR: DANIEL TORRES
 * VERSÃO: 2.1 (Com correção de inicialização para Azure)
 *================================================================================================ 
 * * MELHORIAS IMPLEMENTADAS:
 * - Rate limiting para prevenir abuso
 * - Helmet para headers de segurança
 * - Compressão gzip para melhor performance
 * - Validação robusta de inputs
 * - Sanitização contra XSS
 * - Logging estruturado
 * - CORS configurado adequadamente
 * - Health check endpoint
 * - **CORRIGIDO: Inicialização do Servidor (app.listen) usando process.env.PORT**
 * *************************************************************************************************/

// Carregar variáveis de ambiente primeiro
require('dotenv').config()

//Import das bibliotecas para criar a API
const express    = require('express')
const cors       = require('cors')
const bodyParser = require('body-parser')
const path       = require('path')
const helmet     = require('helmet')
const compression = require('compression')

//Import dos middlewares
const { upload, processImage, cleanupOnError } = require('./middleware/upload')
const { generalLimiter, authLimiter, recoveryLimiter, registerLimiter, bookingLimiter } = require('./middleware/rateLimiter')
const { sanitizeInput } = require('./middleware/sanitize')
const { logger, requestLogger } = require('./middleware/logger')
const { validateUsuario, validateLogin, validateAgendamento, validateRecuperacaoEmail, validateRedefinirSenha, validateId } = require('./middleware/validator')

//Import das controllers para realizar o CRUD de dados
const controllerAgendamento     = require('./controller/agendamento/controllerAgendamento')
const controllerEstoqueSangue   = require('./controller/banco_de_sangue/controllerEstoqueSangue')
const controllerCertificado     = require('./controller/certificado/controllerCertificado')
const controllerDoacao          = require('./controller/doacao/controllerDoacao')
const controllerHospital        = require('./controller/hospital/controllerHospital')
const controllerSexo            = require('./controller/sexo/controllerSexo')
const controllerTelefone        = require('./controller/telefone/controllerTelefone')
const controllerUsuario         = require('./controller/usuario/controllerUsuario')
const controllerTipoSanguineo   = require('./controller/tipo_sanguineo/controllerTipoSanguineo')
const controllerRecuperacao     = require('./controller/recuperacao/controllerRecuperacao')
const controllerRegistroDoacao  = require('./controller/registro_doacao/controllerRegistroDoacao')

//Import do arquivo de autenticação
const verificarToken = require('./middleware/auth')

//Cria o objeto app para criar a API
const app = express()

// Trust proxy - importante para rate limiting e logs corretos atrás de proxies/load balancers
app.set('trust proxy', 1)

/*************************************************************************************************
 * CONFIGURAÇÃO DE MIDDLEWARES GLOBAIS
 *************************************************************************************************/

// Helmet - Headers de segurança
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }, // Permite carregar imagens de outro domínio
    contentSecurityPolicy: false // Desabilita CSP pois pode interferir com uploads
}))

// Compressão gzip para melhor performance
app.use(compression())

// Rate limiting geral
app.use(generalLimiter)

// Logging de requisições
app.use(requestLogger)

// CORS configurado adequadamente
const corsOptions = {
    origin: process.env.CORS_ORIGIN 
        ? process.env.CORS_ORIGIN.split(',') 
        : ['http://localhost:3000', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 86400 // 24 horas de cache do preflight
}
app.use(cors(corsOptions))

// Body parser
app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }))

// Sanitização de inputs
app.use(sanitizeInput)

// Configurar para servir arquivos estáticos da pasta uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

/*************************************************************************************************
 * HEALTH CHECK ENDPOINT
 *************************************************************************************************/
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
    })
})

app.get('/v1/doevida/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'API DOE VIDA está funcionando',
        timestamp: new Date().toISOString()
    })
})

/*************************************************************************************************
 * ENDPOINTS AGENDAMENTO
 *************************************************************************************************/
// Listar todos os agendamentos
app.get('/v1/doevida/agendamento', async function(request, response){
    let result = await controllerAgendamento.listarAgendamento()
    response.status(result.status_code)
    response.json(result)
})

// Buscar agendamentos por status
app.get('/v1/doevida/agendamento/status/:status', async function(request, response) {
    let status = request.params.status
    let result = await controllerAgendamento.buscarAgendamentoPorStatus(status)
    
    response.status(result.status_code)
    response.json(result)
})

// Listar meus agendamentos (protegido por autenticação)
app.get('/v1/doevida/agendamento/me', verificarToken, async function(request, response){
    let userId = request.user.id
    let futuros = request.query.futuros === '1'
    let result = await controllerAgendamento.listarMeusAgendamentos(userId, futuros)
    response.status(result.status_code)
    response.json(result)
})

// Buscar um agendamento por ID
app.get('/v1/doevida/agendamento/:id', validateId, async function(request, response){
    let id     = request.params.id
    let result = await controllerAgendamento.buscarAgendamento(id)
    response.status(result.status_code)
    response.json(result)
})

// Criar novo agendamento (protegido por autenticação)
app.post('/v1/doevida/agendamento', bookingLimiter, verificarToken, validateAgendamento, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let userId = request.user.id
    let result = await controllerAgendamento.criarAgendamento(dadosBody, contentType, userId)
    response.status(result.status_code)
    response.json(result)
})

// Atualizar um agendamento por ID
app.put('/v1/doevida/agendamento/:id', validateId, async function(request, response){
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let dadosBody   = request.body
    let result      = await controllerAgendamento.atualizarAgendamento(dadosBody, id, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Cancelar meu agendamento (protegido por autenticação)
app.delete('/v1/doevida/agendamento/:id', validateId, verificarToken, async function(request, response){
    let agendamentoId = request.params.id
    let userId = request.user.id
    let result = await controllerAgendamento.cancelarMeuAgendamento(agendamentoId, userId)
    response.status(result.status_code)
    response.json(result)
})

// Buscar agendamentos por data
app.get('/v1/agendamento/data/:data', async function(request, response) {
    let data = request.params.data
    let dadosAgendamento = await controllerAgendamento.buscarAgendamentoPorData(data)
    response.status(dadosAgendamento.status_code)
    response.json(dadosAgendamento)
})

// Verificar disponibilidade de agendamento
app.get('/v1/agendamento/disponibilidade', async function(request, response) {
    let data = request.query.data
    let hora = request.query.hora
    let id_hospital = request.query.id_hospital
    let disponibilidade = await controllerAgendamento.verificarDisponibilidade(data, hora, id_hospital)
    // mantendo o comportamento original (controlador define o campo de status)
    response.status(disponibilidade.status)
    response.json(disponibilidade)
})

/*************************************************************************************************
 * NOVAS ROTAS PARA TELA DE AGENDAMENTO
 *************************************************************************************************/
// Listar dias disponíveis de um hospital
app.get('/v1/doevida/hospital/:id/dias-disponiveis', async function(request, response){
    let hospitalId = request.params.id
    let mes = request.query.mes
    let slot = request.query.slot || 60
    let result = await controllerAgendamento.listarDiasDisponiveis(hospitalId, mes, slot)
    response.status(result.status_code)
    response.json(result)
})

// Listar horários disponíveis de um dia específico
app.get('/v1/doevida/hospital/:id/horarios', async function(request, response){
    let hospitalId = request.params.id
    let data = request.query.data
    let slot = request.query.slot || 60
    let todos = request.query.todos === '1'
    let result = await controllerAgendamento.listarHorariosDoDia(hospitalId, data, slot, todos)
    response.status(result.status_code)
    response.json(result)
})

/*************************************************************************************************
 * ENDPOINTS BANCO DE SANGUE
 *************************************************************************************************/
// Inserir novo banco de sangue
app.post('/v1/doevida/banco-sangue', async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerEstoqueSangue.inserirBancoSangue(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Listar todos os bancos de sangue
app.get('/v1/doevida/banco-sangue', async function(request, response){
    let result = await controllerEstoqueSangue.listarBancoSangue()
    response.status(result.status_code)
    response.json(result)
})

// Buscar um banco de sangue por ID
app.get('/v1/doevida/banco-sangue/:id', async function(request, response){
    let id     = request.params.id
    let result = await controllerEstoqueSangue.buscarBancoSangue(id)
    response.status(result.status_code)
    response.json(result)
})

// Excluir um banco de sangue por ID
app.delete('/v1/doevida/banco-sangue/:id', async function(request, response){
    let id     = request.params.id
    let result = await controllerEstoqueSangue.excluirBancoSangue(id)
    response.status(result.status_code)
    response.json(result)
})

// Atualizar um banco de sangue por ID
app.put('/v1/doevida/banco-sangue/:id', async function(request, response){
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let dadosBody   = request.body
    let result      = await controllerEstoqueSangue.atualizarBancoSangue(dadosBody, id, contentType)
    response.status(result.status_code)
    response.json(result)
})

/*************************************************************************************************
 * ENDPOINTS CERTIFICADO
 *************************************************************************************************/
// Inserir novo certificado
app.post('/v1/doevida/certificado', async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerCertificado.inserirCertificado(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Listar todos os certificados
app.get('/v1/doevida/certificado', async function(request, response){
    let result = await controllerCertificado.listarCertificado()
    response.status(result.status_code)
    response.json(result)
})

// Buscar um certificado por ID
app.get('/v1/doevida/certificado/:id', async function(request, response){
    let id     = request.params.id
    let result = await controllerCertificado.buscarCertificado(id)
    response.status(result.status_code)
    response.json(result)
})

// Excluir um certificado por ID
app.delete('/v1/doevida/certificado/:id', async function(request, response){
    let id     = request.params.id
    let result = await controllerCertificado.excluirCertificado(id)
    response.status(result.status_code)
    response.json(result)
})

// Atualizar um certificado por ID
app.put('/v1/doevida/certificado/:id', async function(request, response){
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let dadosBody   = request.body
    let result      = await controllerCertificado.atualizarCertificado(dadosBody, id, contentType)
    response.status(result.status_code)
    response.json(result)
})

/*************************************************************************************************
 * ENDPOINTS DOAÇÃO
 *************************************************************************************************/
// Inserir nova doação
app.post('/v1/doevida/doacao', async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerDoacao.inserirDoacao(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Listar todas as doações
app.get('/v1/doevida/doacao', async function(request, response){
    let result = await controllerDoacao.listarDoacao()
    response.status(result.status_code)
    response.json(result)
})

// Buscar uma doação por ID
app.get('/v1/doevida/doacao/:id', async function(request, response){
    let id     = request.params.id
    let result = await controllerDoacao.buscarDoacao(id)
    response.status(result.status_code)
    response.json(result)
})

// Excluir uma doação por ID
app.delete('/v1/doevida/doacao/:id', async function(request, response){
    let id     = request.params.id
    let result = await controllerDoacao.excluirDoacao(id)
    response.status(result.status_code)
    response.json(result)
})

// Atualizar uma doação por ID
app.put('/v1/doevida/doacao/:id', async function(request, response){
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let dadosBody   = request.body
    let result      = await controllerDoacao.atualizarDoacao(dadosBody, id, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Buscar histórico de doações de um usuário
app.get('/v1/doacao/historico/:id_usuario', async function(request, response) {
    let id = request.params.id_usuario
    let historico = await controllerDoacao.historicoDoacao(id)
    response.status(historico.status_code)
    response.json(historico)
})

// Verificar compatibilidade sanguínea
app.get('/v1/doacao/compatibilidade', async function(request, response) {
    let tipo_doador = request.query.tipo_doador
    let tipo_receptor = request.query.tipo_receptor
    let compatibilidade = await controllerDoacao.verificarCompatibilidade(tipo_doador, tipo_receptor)
    // mantendo o comportamento original (controlador define o campo de status)
    response.status(compatibilidade.status)
    response.json(compatibilidade)
})

/*************************************************************************************************
 * ENDPOINTS HOSPITAL
 *************************************************************************************************/
// Upload de imagem para hospital
app.post('/v1/doevida/hospital/upload-image', upload.single('foto'), processImage, cleanupOnError, async function(request, response){
    let result = await controllerHospital.uploadImagemHospital(request)
    response.status(result.status_code)
    response.json(result)
})

// Inserir novo hospital
app.post('/v1/doevida/hospital', async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerHospital.inserirHospital(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Listar todos os hospitais
app.get('/v1/doevida/hospital', async function(request, response){
    let result = await controllerHospital.listarHospital()
    response.status(result.status_code)
    response.json(result)
})

// Listar hospitais para aplicação mobile
app.get('/v1/doevida/hospital/mobile', async function(request, response){
    let result = await controllerHospital.listarHospital()
    response.status(result.status_code)
    response.json(result)
})

// Buscar um hospital por ID
app.get('/v1/doevida/hospital/:id', async function(request, response){
    let id     = request.params.id
    let result = await controllerHospital.buscarHospital(id)
    response.status(result.status_code)
    response.json(result)
})

// Excluir um hospital por ID
app.delete('/v1/doevida/hospital/:id', async function(request, response){
    let id     = request.params.id
    let result = await controllerHospital.excluirHospital(id)
    response.status(result.status_code)
    response.json(result)
})

// Atualizar um hospital por ID
app.put('/v1/doevida/hospital/:id', async function(request, response){
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let dadosBody   = request.body
    let result      = await controllerHospital.atualizarHospital(dadosBody, id, contentType)
    response.status(result.status_code)
    response.json(result)
})

/*************************************************************************************************
 * ENDPOINTS REGISTRO DE DOAÇÃO
 *************************************************************************************************/
// Upload de comprovante de doação (protegido por autenticação)
app.post('/v1/doevida/registro-doacao/upload-comprovante', verificarToken, upload.single('foto_comprovante'), processImage, cleanupOnError, async function(request, response){
    let result = await controllerRegistroDoacao.uploadComprovanteDoacao(request)
    response.status(result.status_code)
    response.json(result)
})

// Buscar dados do agendamento para pré-preencher formulário (protegido por autenticação)
app.get('/v1/doevida/registro-doacao/dados-agendamento/:id_agendamento', verificarToken, async function(request, response){
    let idAgendamento = request.params.id_agendamento
    let userId = request.user.id
    let result = await controllerRegistroDoacao.obterDadosAgendamento(idAgendamento, userId)
    response.status(result.status_code)
    response.json(result)
})

// Criar novo registro de doação (protegido por autenticação)
app.post('/v1/doevida/registro-doacao', verificarToken, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let userId = request.user.id
    let result = await controllerRegistroDoacao.inserirRegistroDoacao(dadosBody, contentType, userId)
    response.status(result.status_code)
    response.json(result)
})

// Listar todos os registros de doação (sem autenticação - para admin)
app.get('/v1/doevida/registro-doacao', async function(request, response){
    let result = await controllerRegistroDoacao.listarRegistroDoacao()
    response.status(result.status_code)
    response.json(result)
})

// Buscar um registro de doação por ID
app.get('/v1/doevida/registro-doacao/:id', async function(request, response){
    let id = request.params.id
    let result = await controllerRegistroDoacao.buscarRegistroDoacao(id)
    response.status(result.status_code)
    response.json(result)
})

// Buscar histórico de registros do usuário logado (protegido por autenticação)
app.get('/v1/doevida/registro-doacao/historico/me', verificarToken, async function(request, response){
    let userId = request.user.id
    let result = await controllerRegistroDoacao.historicoRegistroUsuario(userId)
    response.status(result.status_code)
    response.json(result)
})

// Atualizar registro de doação (protegido por autenticação)
app.put('/v1/doevida/registro-doacao/:id', verificarToken, async function(request, response){
    let contentType = request.headers['content-type']
    let id = request.params.id
    let dadosBody = request.body
    let userId = request.user.id
    let result = await controllerRegistroDoacao.atualizarRegistroDoacao(dadosBody, id, contentType, userId)
    response.status(result.status_code)
    response.json(result)
})

// Excluir registro de doação (protegido por autenticação)
app.delete('/v1/doevida/registro-doacao/:id', verificarToken, async function(request, response){
    let id = request.params.id
    let userId = request.user.id
    let result = await controllerRegistroDoacao.excluirRegistroDoacao(id, userId)
    response.status(result.status_code)
    response.json(result)
})

/*************************************************************************************************
 * ENDPOINTS SEXO USUÁRIO
 *************************************************************************************************/
// Inserir novo sexo de usuário
app.post('/v1/doevida/sexo-usuario', async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerSexo.inserirSexo(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Listar todos os sexos de usuários
app.get('/v1/doevida/sexo-usuario', async function(request, response){
    let result = await controllerSexo.listarSexo()
    response.status(result.status_code)
    response.json(result)
})

// Excluir um sexo de usuário por ID
app.delete('/v1/doevida/sexo-usuario/:id', async function(request, response){
    let id     = request.params.id
    let result = await controllerSexo.excluirSexo(id)
    response.status(result.status_code)
    response.json(result)
})


/*************************************************************************************************
 * ENDPOINTS TELEFONE
 *************************************************************************************************/
// Inserir novo telefone
app.post('/v1/doevida/telefone', async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerTelefone.inserirTelefone(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Listar todos os telefones
app.get('/v1/doevida/telefone', async function(request, response){
    let result = await controllerTelefone.listarTelefone()
    response.status(result.status_code)
    response.json(result)
})

// Buscar um telefone por ID
app.get('/v1/doevida/telefone/:id', async function(request, response){
    let id     = request.params.id
    let result = await controllerTelefone.buscarTelefone(id)
    response.status(result.status_code)
    response.json(result)
})

// Excluir um telefone por ID
app.delete('/v1/doevida/telefone/:id', async function(request, response){
    let id     = request.params.id
    let result = await controllerTelefone.excluirTelefone(id)
    response.status(result.status_code)
    response.json(result)
})

/*************************************************************************************************
 * ENDPOINTS USUÁRIO
 *************************************************************************************************/
// Inserir novo usuário / Cadastrar usuário
app.post('/v1/doevida/usuario', registerLimiter, validateUsuario, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerUsuario.inserirUsuario(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Listar todos os usuários
app.get('/v1/doevida/usuario', async function(request, response){
    let result = await controllerUsuario.listarUsuarios()
    response.status(result.status_code)
    response.json(result)
})

// Perfil do usuário (dados do token)
app.get('/v1/doevida/perfil', verificarToken, async (request, response) => {
    response.status(200).json({
        status: true,
        status_code: 200,
        message: "Acesso liberado!",
        usuario: request.user
    })
})

// Complementar dados do usuário logado
app.patch('/v1/doevida/usuarios/me/complemento', verificarToken, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let userId = request.user.id
    let result = await controllerUsuario.complementarDadosUsuario(dadosBody, userId, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Listar agendamentos do usuário logado (endpoint alternativo para mobile)
app.get('/v1/doevida/usuarios/me/agendamentos', verificarToken, async function(request, response){
    let userId = request.user.id
    let futuros = request.query.futuros === '1'
    let result = await controllerAgendamento.listarMeusAgendamentos(userId, futuros)
    response.status(result.status_code)
    response.json(result)
})

// Buscar um usuário por ID
app.get('/v1/doevida/usuario/:id', validateId, async function(request, response){
    let id     = request.params.id
    let result = await controllerUsuario.buscarUsuario(id)
    response.status(result.status_code)
    response.json(result)
})

// Buscar agendamentos de um usuário específico por ID
app.get('/v1/doevida/usuarios/:id/agendamentos', validateId, async function(request, response){
    let id     = request.params.id
    let result = await controllerAgendamento.buscarAgendamentoPorUsuario(id)
    response.status(result.status_code)
    response.json(result)
})

// Excluir um usuário por ID
app.delete('/v1/doevida/usuario/:id', validateId, async function(request, response){
    let id     = request.params.id
    let result = await controllerUsuario.excluirUsuario(id)
    response.status(result.status_code)
    response.json(result)
})

// Atualizar um usuário por ID
app.put('/v1/doevida/usuario/:id', validateId, async function(request, response){
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let dadosBody   = request.body
    let result      = await controllerUsuario.atualizarUsuario(dadosBody, id, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Login de usuário
app.post('/v1/doevida/usuarios/login', authLimiter, validateLogin, async function (request, response) {
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerUsuario.loginUsuario(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Login de usuário (endpoint para frontend)
app.post('/v1/doevida/login', authLimiter, validateLogin, async function (request, response) {
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerUsuario.loginUsuario(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Rota alternativa para cadastro (compatibilidade com mobile)
app.post('/v1/doevida/usuarios', registerLimiter, validateUsuario, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerUsuario.inserirUsuario(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Rota alternativa para agendamento (compatibilidade com mobile)
app.post('/v1/doevida/agendamentos', bookingLimiter, verificarToken, validateAgendamento, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody = request.body
    let userId = request.user.id
    let result = await controllerAgendamento.criarAgendamento(dadosBody, contentType, userId)
    response.status(result.status_code)
    response.json(result)
})

/*************************************************************************************************
 * ENDPOINTS RECUPERAÇÃO DE SENHA
 *************************************************************************************************/
// Solicitar recuperação de senha (gera e envia código)
app.post('/v1/doevida/recuperar-senha', recoveryLimiter, validateRecuperacaoEmail, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerRecuperacao.solicitarRecuperacao(dadosBody.email, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Rota alternativa para recuperação de senha (compatibilidade com mobile)
app.post('/v1/doevida/usuarios/recuperar-senha', recoveryLimiter, validateRecuperacaoEmail, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerRecuperacao.solicitarRecuperacao(dadosBody.email, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Redefinir senha (recebe código + nova senha)
app.post('/v1/doevida/redefinir-senha', validateRedefinirSenha, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerRecuperacao.redefinirSenha(dadosBody.codigo, dadosBody.novaSenha, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Rota alternativa para redefinir senha (compatibilidade com mobile)
app.post('/v1/doevida/usuarios/redefinir-senha', validateRedefinirSenha, async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerRecuperacao.redefinirSenha(dadosBody.codigo, dadosBody.novaSenha, contentType)
    response.status(result.status_code)
    response.json(result)
})


/*************************************************************************************************
 * ENDPOINTS TIPO SANGUÍNEO
 *************************************************************************************************/
// Inserir novo tipo sanguíneo
app.post('/v1/doevida/tipo-sanguineo', async function(request, response){
    let contentType = request.headers['content-type']
    let dadosBody   = request.body
    let result      = await controllerTipoSanguineo.inserirTipoSanguineo(dadosBody, contentType)
    response.status(result.status_code)
    response.json(result)
})

// Listar todos os tipos sanguíneos
app.get('/v1/doevida/tipo-sanguineo', async function(request, response){
    let result = await controllerTipoSanguineo.listarTiposSanguineos()
    response.status(result.status_code)
    response.json(result)
})

// Buscar um tipo sanguíneo por ID
app.get('/v1/doevida/tipo-sanguineo/:id', async function(request, response){
    let id     = request.params.id
    let result = await controllerTipoSanguineo.buscarTipoSanguineo(id)
    response.status(result.status_code)
    response.json(result)
})


/*************************************************************************************************
 * TRATAMENTO DE ERROS GERAL (ÚLTIMO MIDDLEWARE)
 *************************************************************************************************/
app.use((err, req, res, next) => {
    logger.error('Erro interno não tratado:', { 
        message: err.message, 
        stack: err.stack,
        url: req.originalUrl,
        method: req.method
    });
    // Se o erro tiver um status, use-o; caso contrário, 500
    const status = err.status || 500; 
    res.status(status).json({
        status: false,
        status_code: status,
        message: 'Ocorreu um erro interno não tratado na API.',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined // Não expor detalhes de erro em produção
    });
});

//comentario para teste
/*************************************************************************************************
 * INICIALIZAÇÃO DO SERVIDOR (CORREÇÃO)
 *************************************************************************************************/
const PORT = process.env.PORT || 8080; 

app.listen(PORT, () => {
    // Esta mensagem aparecerá no Log Stream se o servidor iniciar com sucesso no Azure
    console.log(`[SERVER] API DOE VIDA iniciada e escutando na porta ${PORT}`); 
    logger.info(`Servidor iniciado com sucesso na porta ${PORT}`);
});