const axios = require('axios');
const MESSAGE = require('./modulo/config.js'); 

// Função para buscar o endereço pelo CEP usando a API ViaCEP
const buscarCep = async function(cep) {
    // Remove caracteres não numéricos
    const cepLimpo = cep.replace(/\D/g, '');

    // Valida o formato do CEP
    if (cepLimpo.length !== 8) {
        return { erro: true, message: "CEP inválido. Deve conter 8 dígitos." };
    }

    // Configurações de retry
    const maxRetries = 3;
    const retryDelay = 1000; // 1 segundo

    // Função para fazer retry com delay
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Consulta a API ViaCEP com retry
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            // Construção da URL da API
            const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;
            
            // Configuração do axios com timeout
            const config = {
                timeout: 10000, // 10 segundos
                headers: {
                    'User-Agent': 'BackEnd_DOEVIDA/1.0'
                }
            };
            
            // Requisição GET para a API ViaCEP
            const response = await axios.get(url, config);
            
            if (response.data.erro) {
                return { erro: true, message: "CEP não encontrado." };
            }
            
            return response.data;
            
        } catch (error) {
            console.error(`Erro ao buscar CEP na ViaCEP (tentativa ${attempt}/${maxRetries}):`, error.message);
            
            // Se não é a última tentativa, aguarda antes de tentar novamente
            if (attempt < maxRetries) {
                console.log(`Aguardando ${retryDelay}ms antes da próxima tentativa...`);
                await sleep(retryDelay);
                continue;
            }
            
            // Se todas as tentativas falharam
            if (error.code === 'ECONNRESET' || error.code === 'ENOTFOUND' || error.code === 'ETIMEDOUT') {
                return { 
                    erro: true, 
                    message: "Serviço de CEP temporariamente indisponível. Tente novamente mais tarde." 
                };
            }
            
            return { erro: true, message: MESSAGE.ERROR_INTERNAL_SERVER_API };
        }
    }
};

module.exports = {
    buscarCep
};