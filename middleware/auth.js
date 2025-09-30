const jwt = require('jsonwebtoken')

const verificarToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] // Bearer <token>

    if (!token) {
        return res.status(401).json({
            status: false,
            status_code: 401,
            message: "Token não fornecido"
        })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
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
