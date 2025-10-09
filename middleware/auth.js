const jwt = require('jsonwebtoken')

// Middleware para verificar o token JWT
const verificarToken = (req, res, next) => {
    // Pega o token do header Authorization
    const authHeader = req.headers['authorization']
    // O token vem no formato "Bearer <token>"
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        // 401 Unauthorized - Token não fornecido 
        return res.status(401).json({
            status: false,
            status_code: 401,
            message: "Token não fornecido"
        })
    }

    // Verifica o token e extrai os dados do usuário
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            // 403 Forbidden - Token inválido ou expirado 
            return res.status(403).json({
                status: false,
                status_code: 403,
                message: "Token inválido ou expirado"
            })
        }

        req.user = user // adiciona os dados do usuário dentro do request
        next()
    })
}

module.exports = verificarToken
