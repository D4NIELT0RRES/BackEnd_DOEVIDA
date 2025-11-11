/***************************************************************************************
 * OBJETIVO: Middleware responsável pelo upload e processamento de imagens usando Multer e Sharp.
 * DATA: 16/10/2025
 * AUTOR: GitHub Copilot
 * Versão: 1.0
 ***************************************************************************************/

const multer = require('multer')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

// Criar diretório de uploads se não existir
const uploadsDir = path.join(__dirname, '..', 'uploads')
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true })
}

// Configuração do multer para armazenar em memória temporariamente
const storage = multer.memoryStorage()

// Filtro para aceitar apenas imagens
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true)
    } else {
        cb(new Error('Apenas arquivos de imagem são permitidos!'), false)
    }
}

// Configuração do multer
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB máximo
    }
})

// Middleware para processar e otimizar a imagem
const processImage = async (req, res, next) => {
    try {
        if (!req.file) {
            return next()
        }

        // Gerar nome único para o arquivo
        // Detectar o tipo de upload baseado na rota
        const prefix = req.path.includes('comprovante') ? 'comprovante' : 'hospital'
        const fileName = `${prefix}_${Date.now()}_${Math.round(Math.random() * 1E9)}.webp`
        const filePath = path.join(uploadsDir, fileName)

        // Processar a imagem com Sharp
        await sharp(req.file.buffer)
            .resize(800, 600, { 
                fit: 'inside',
                withoutEnlargement: true 
            })
            .webp({ 
                quality: 80,
                effort: 4 
            })
            .toFile(filePath)

        // Adicionar informações do arquivo processado ao request
        req.processedFile = {
            filename: fileName,
            path: filePath,
            size: fs.statSync(filePath).size,
            mimetype: 'image/webp'
        }

        // Gerar URL relativa para salvar no banco
        req.imageUrl = `/uploads/${fileName}`

        next()
    } catch (error) {
        console.error('Erro ao processar imagem:', error)
        res.status(500).json({
            status_code: 500,
            message: 'Erro interno do servidor ao processar imagem',
            error: error.message
        })
    }
}

// Middleware para limpar arquivo em caso de erro
const cleanupOnError = (req, res, next) => {
    const originalSend = res.send
    res.send = function(data) {
        // Se houve erro e existe arquivo processado, remove ele
        if (res.statusCode >= 400 && req.processedFile && fs.existsSync(req.processedFile.path)) {
            try {
                fs.unlinkSync(req.processedFile.path)
            } catch (err) {
                console.error('Erro ao limpar arquivo:', err)
            }
        }
        originalSend.call(this, data)
    }
    next()
}

module.exports = {
    upload,
    processImage,
    cleanupOnError
}