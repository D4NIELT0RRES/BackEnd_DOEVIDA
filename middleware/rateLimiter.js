/***************************************************************************************
 * OBJETIVO: Middleware de rate limiting para proteger a API contra abuso
 * DATA: 10/11/2025
 * AUTOR: GitHub Copilot
 * Versão: 1.0
 ***************************************************************************************/

const rateLimit = require('express-rate-limit')

// Rate limiter geral - 100 requisições por minuto por IP
const generalLimiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 60000, // 1 minuto
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
    message: {
        status: false,
        status_code: 429,
        message: 'Muitas requisições do mesmo IP. Tente novamente em alguns instantes.'
    },
    standardHeaders: true,
    legacyHeaders: false,
    // Pula rate limiting para health checks
    skip: (req) => req.path === '/health' || req.path === '/v1/doevida/health'
})

// Rate limiter para autenticação - 5 tentativas por 15 minutos
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5,
    message: {
        status: false,
        status_code: 429,
        message: 'Muitas tentativas de login. Tente novamente em 15 minutos.'
    },
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: true // Não conta requisições bem-sucedidas
})

// Rate limiter para recuperação de senha - 3 tentativas por hora
const recoveryLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 3,
    message: {
        status: false,
        status_code: 429,
        message: 'Muitas solicitações de recuperação de senha. Tente novamente em 1 hora.'
    },
    standardHeaders: true,
    legacyHeaders: false
})

// Rate limiter para cadastro - 3 cadastros por hora
const registerLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 3,
    message: {
        status: false,
        status_code: 429,
        message: 'Limite de cadastros atingido. Tente novamente em 1 hora.'
    },
    standardHeaders: true,
    legacyHeaders: false
})

// Rate limiter para agendamentos - 10 agendamentos por hora
const bookingLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 10,
    message: {
        status: false,
        status_code: 429,
        message: 'Limite de agendamentos atingido. Tente novamente em 1 hora.'
    },
    standardHeaders: true,
    legacyHeaders: false
})

module.exports = {
    generalLimiter,
    authLimiter,
    recoveryLimiter,
    registerLimiter,
    bookingLimiter
}
