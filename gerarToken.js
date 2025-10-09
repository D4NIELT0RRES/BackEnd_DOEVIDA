const jwt = require('jsonwebtoken');

// Função para gerar um token JWT
function gerarToken(payload) {
  // Gera o token com a chave secreta e tempo de expiração definidos nas variáveis de ambiente
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    // Define o tempo de expiração do token
    expiresIn: process.env.JWT_EXPIRES_IN
  });
  return token;
}

module.exports = gerarToken;
