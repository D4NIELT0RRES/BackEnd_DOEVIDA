/***************************************************************************************
 * OBJETIVO: Sistema de logs estruturado para monitoramento e debugging
 * DATA: 10/11/2025
 * AUTOR: GitHub Copilot
 * Versão: 1.0
 ***************************************************************************************/

const fs = require('fs')
const path = require('path')

// Criar diretório de logs se não existir
const logsDir = path.join(__dirname, '..', 'logs')
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true })
}

// Níveis de log
const LOG_LEVELS = {
    ERROR: 'ERROR',
    WARN: 'WARN',
    INFO: 'INFO',
    DEBUG: 'DEBUG'
}

// Formata mensagem de log
const formatLog = (level, message, meta = {}) => {
    const timestamp = new Date().toISOString()
    return JSON.stringify({
        timestamp,
        level,
        message,
        ...meta
    })
}

// Escreve log em arquivo
const writeLog = (level, message, meta = {}) => {
    const logMessage = formatLog(level, message, meta)
    
    // Console em desenvolvimento
    if (process.env.NODE_ENV !== 'production') {
        const colors = {
            ERROR: '\x1b[31m',
            WARN: '\x1b[33m',
            INFO: '\x1b[36m',
            DEBUG: '\x1b[90m'
        }
        const reset = '\x1b[0m'
        console.log(`${colors[level]}${logMessage}${reset}`)
    }
    
    // Arquivo de log
    const date = new Date().toISOString().split('T')[0]
    const logFile = path.join(logsDir, `${date}.log`)
    
    fs.appendFile(logFile, logMessage + '\n', (err) => {
        if (err) console.error('Erro ao escrever log:', err)
    })
}

// Funções de log
const logger = {
    error: (message, meta = {}) => writeLog(LOG_LEVELS.ERROR, message, meta),
    warn: (message, meta = {}) => writeLog(LOG_LEVELS.WARN, message, meta),
    info: (message, meta = {}) => writeLog(LOG_LEVELS.INFO, message, meta),
    debug: (message, meta = {}) => writeLog(LOG_LEVELS.DEBUG, message, meta)
}

// Middleware para log de requisições
const requestLogger = (req, res, next) => {
    const start = Date.now()
    
    // Captura o método original res.json
    const originalJson = res.json.bind(res)
    
    res.json = function(body) {
        const duration = Date.now() - start
        
        logger.info('HTTP Request', {
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode,
            duration: `${duration}ms`,
            ip: req.ip || req.connection.remoteAddress,
            userAgent: req.get('user-agent')
        })
        
        return originalJson(body)
    }
    
    next()
}

module.exports = {
    logger,
    requestLogger
}
