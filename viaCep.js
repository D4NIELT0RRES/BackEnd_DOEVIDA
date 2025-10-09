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

    // Consulta a API ViaCEP
    try {
        // Construção da URL da API
        const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;
        // Requisição GET para a API ViaCEP
        const response = await axios.get(url);
        
        if (response.data.erro) {
            return { erro: true, message: "CEP não encontrado." };
        }
        
        return response.data;
        
    } catch (error) {
        console.error("Erro ao buscar CEP na ViaCEP:", error);
        return { erro: true, message: MESSAGE.ERROR_INTERNAL_SERVER_API };
    }
};

module.exports = {
    buscarCep
};