const axios = require('axios');
const MESSAGE = require('./modulo/config.js'); 

const buscarCep = async function(cep) {
    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
        return { erro: true, message: "CEP inválido. Deve conter 8 dígitos." };
    }

    try {
        const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;
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