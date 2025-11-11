/***************************************************************************************
 * OBJETIVO: Middleware de validação de dados usando express-validator
 * DATA: 10/11/2025
 * AUTOR: GitHub Copilot
 * Versão: 1.0
 ***************************************************************************************/

const { body, param, query, validationResult } = require('express-validator')

// Middleware para processar resultado das validações
const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: false,
            status_code: 400,
            message: 'Erro de validação',
            errors: errors.array().map(err => ({
                campo: err.path,
                mensagem: err.msg
            }))
        })
    }
    next()
}

// Validações para usuário
const validateUsuario = [
    body('nome')
        .trim()
        .notEmpty().withMessage('Nome é obrigatório')
        .isLength({ max: 70 }).withMessage('Nome deve ter no máximo 70 caracteres'),
    body('email')
        .trim()
        .notEmpty().withMessage('Email é obrigatório')
        .isEmail().withMessage('Email inválido')
        .normalizeEmail()
        .isLength({ max: 100 }).withMessage('Email deve ter no máximo 100 caracteres'),
    body('senha')
        .notEmpty().withMessage('Senha é obrigatória')
        .isLength({ min: 8, max: 255 }).withMessage('Senha deve ter entre 8 e 255 caracteres'),
    body('id_sexo')
        .notEmpty().withMessage('Sexo é obrigatório')
        .isInt({ min: 1 }).withMessage('ID do sexo inválido'),
    body('cpf')
        .optional()
        .trim()
        .matches(/^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/).withMessage('CPF inválido'),
    body('cep')
        .optional()
        .trim()
        .matches(/^\d{8}$|^\d{5}-?\d{3}$/).withMessage('CEP inválido'),
    body('data_nascimento')
        .optional()
        .isISO8601().withMessage('Data de nascimento inválida'),
    body('id_tipo_sanguineo')
        .optional()
        .isInt({ min: 1 }).withMessage('ID do tipo sanguíneo inválido'),
    validate
]

// Validações para login
const validateLogin = [
    body('email')
        .trim()
        .notEmpty().withMessage('Email é obrigatório')
        .isEmail().withMessage('Email inválido')
        .normalizeEmail(),
    body('senha')
        .notEmpty().withMessage('Senha é obrigatória'),
    validate
]

// Validações para agendamento
const validateAgendamento = [
    body('id_hospital')
        .notEmpty().withMessage('Hospital é obrigatório')
        .isInt({ min: 1 }).withMessage('ID do hospital inválido'),
    body('data')
        .notEmpty().withMessage('Data é obrigatória')
        .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage('Formato de data inválido (use YYYY-MM-DD)')
        .custom((value) => {
            const date = new Date(value)
            const today = new Date()
            today.setHours(0, 0, 0, 0)
            if (date < today) {
                throw new Error('Data não pode ser no passado')
            }
            return true
        }),
    body('hora')
        .notEmpty().withMessage('Hora é obrigatória')
        .matches(/^\d{2}:\d{2}:\d{2}$/).withMessage('Formato de hora inválido (use HH:MM:SS)'),
    validate
]

// Validações para hospital
const validateHospital = [
    body('nome')
        .trim()
        .notEmpty().withMessage('Nome é obrigatório')
        .isLength({ max: 70 }).withMessage('Nome deve ter no máximo 70 caracteres'),
    body('email')
        .trim()
        .notEmpty().withMessage('Email é obrigatório')
        .isEmail().withMessage('Email inválido')
        .normalizeEmail()
        .isLength({ max: 100 }).withMessage('Email deve ter no máximo 100 caracteres'),
    body('senha')
        .notEmpty().withMessage('Senha é obrigatória')
        .isLength({ min: 8, max: 255 }).withMessage('Senha deve ter entre 8 e 255 caracteres'),
    body('cnpj')
        .trim()
        .notEmpty().withMessage('CNPJ é obrigatório')
        .matches(/^\d{14}$|^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/).withMessage('CNPJ inválido'),
    body('cep')
        .trim()
        .notEmpty().withMessage('CEP é obrigatório')
        .matches(/^\d{8}$|^\d{5}-?\d{3}$/).withMessage('CEP inválido'),
    body('telefone')
        .trim()
        .notEmpty().withMessage('Telefone é obrigatório')
        .matches(/^\d{10,11}$|^\(\d{2}\)\s?\d{4,5}-?\d{4}$/).withMessage('Telefone inválido'),
    body('capacidade_maxima')
        .optional()
        .isInt({ min: 1, max: 1000 }).withMessage('Capacidade máxima deve ser entre 1 e 1000'),
    validate
]

// Validações para recuperação de senha
const validateRecuperacaoEmail = [
    body('email')
        .trim()
        .notEmpty().withMessage('Email é obrigatório')
        .isEmail().withMessage('Email inválido')
        .normalizeEmail(),
    validate
]

const validateRedefinirSenha = [
    body('codigo')
        .trim()
        .notEmpty().withMessage('Código é obrigatório')
        .isLength({ min: 6, max: 6 }).withMessage('Código deve ter 6 dígitos'),
    body('novaSenha')
        .notEmpty().withMessage('Nova senha é obrigatória')
        .isLength({ min: 8, max: 255 }).withMessage('Senha deve ter entre 8 e 255 caracteres'),
    validate
]

// Validação para parâmetros ID
const validateId = [
    param('id')
        .isInt({ min: 1 }).withMessage('ID inválido'),
    validate
]

// Validação para query parameters
const validateQueryData = [
    query('data')
        .notEmpty().withMessage('Data é obrigatória')
        .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage('Formato de data inválido (use YYYY-MM-DD)'),
    validate
]

const validateQueryMes = [
    query('mes')
        .notEmpty().withMessage('Mês é obrigatório')
        .matches(/^\d{4}-\d{2}$/).withMessage('Formato de mês inválido (use YYYY-MM)'),
    validate
]

module.exports = {
    validate,
    validateUsuario,
    validateLogin,
    validateAgendamento,
    validateHospital,
    validateRecuperacaoEmail,
    validateRedefinirSenha,
    validateId,
    validateQueryData,
    validateQueryMes
}
