/***************************************************************************************
 * OBJETIVO: Middleware de sanitização para prevenir XSS e injeções
 * DATA: 10/11/2025
 * AUTOR: GitHub Copilot
 * Versão: 1.0
 ***************************************************************************************/

// Sanitiza strings removendo scripts e tags HTML perigosas
const sanitizeString = (str) => {
    if (typeof str !== 'string') return str
    
    return str
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove scripts
        .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // Remove iframes
        .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '') // Remove event handlers
        .replace(/on\w+\s*=\s*[^\s>]*/gi, '') // Remove event handlers sem aspas
        .trim()
}

// Sanitiza objetos recursivamente
const sanitizeObject = (obj) => {
    if (obj === null || obj === undefined) return obj
    
    if (Array.isArray(obj)) {
        return obj.map(item => sanitizeObject(item))
    }
    
    if (typeof obj === 'object') {
        const sanitized = {}
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                sanitized[key] = sanitizeObject(obj[key])
            }
        }
        return sanitized
    }
    
    if (typeof obj === 'string') {
        return sanitizeString(obj)
    }
    
    return obj
}

// Middleware para sanitizar body, query e params
const sanitizeInput = (req, res, next) => {
    if (req.body) {
        req.body = sanitizeObject(req.body)
    }
    
    if (req.query) {
        req.query = sanitizeObject(req.query)
    }
    
    if (req.params) {
        req.params = sanitizeObject(req.params)
    }
    
    next()
}

module.exports = {
    sanitizeInput,
    sanitizeString,
    sanitizeObject
}
