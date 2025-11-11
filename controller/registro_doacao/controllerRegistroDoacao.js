/***************************************************************************************
 * OBJETIVO: Controller responsável pela regra de negócio do CRUD da TABELA REGISTRO DE DOAÇÃO.
 * DATA: 11/11/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

const MESSAGE = require('../../modulo/config.js')
const registroDAO = require('../../model/DAO/registro_doacao')
const agendamentoDAO = require('../../model/DAO/agendamento')

//Inserir novo registro de doação
const inserirRegistroDoacao = async function(registro, contentType, userId) {
    try {
        if(contentType === 'application/json') {
            // Validação dos campos obrigatórios
            if(!registro.id_agendamento || isNaN(registro.id_agendamento)) {
                return {
                    status: false,
                    status_code: 400,
                    message: "ID do agendamento é obrigatório e deve ser um número válido"
                }
            }

            // Buscar dados automáticos do agendamento
            let dadosAgendamento = await registroDAO.getDadosAgendamento(
                parseInt(registro.id_agendamento), 
                userId
            )

            if(!dadosAgendamento) {
                return {
                    status: false,
                    status_code: 404,
                    message: "Agendamento não encontrado, não concluído ou não pertence ao usuário"
                }
            }

            // Verificar se já existe registro para este agendamento
            let registroExistente = await registroDAO.selectByIdAgendamento(
                parseInt(registro.id_agendamento)
            )

            if(registroExistente) {
                return {
                    status: false,
                    status_code: 409,
                    message: "Já existe um registro de doação para este agendamento"
                }
            }

            // Preparar dados do registro com informações automáticas
            let novoRegistro = {
                id_agendamento: dadosAgendamento.id_agendamento,
                id_usuario: dadosAgendamento.id_usuario,
                id_hospital: dadosAgendamento.id_hospital,
                data_doacao: dadosAgendamento.data_doacao,
                local_doacao: dadosAgendamento.local_doacao,
                observacao: registro.observacao || null,
                foto_comprovante: registro.foto_comprovante || null
            }

            // Validar tamanho da URL da foto
            if(novoRegistro.foto_comprovante && novoRegistro.foto_comprovante.length > 500) {
                return {
                    status: false,
                    status_code: 400,
                    message: "URL da foto do comprovante muito longa (máximo 500 caracteres)"
                }
            }

            let resultRegistro = await registroDAO.insertRegistroDoacao(novoRegistro)
            
            if(resultRegistro) {
                return {
                    status: true,
                    status_code: 201,
                    message: "Registro de doação criado com sucesso",
                    registro: resultRegistro
                }
            } else {
                return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE
        }
    } catch(error) {
        console.error("Erro inserirRegistroDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Atualizar registro de doação (apenas observação e foto)
const atualizarRegistroDoacao = async function(registro, id, contentType, userId) {
    try {
        if(contentType === 'application/json') {
            if(!id || isNaN(id) || id <= 0) {
                return MESSAGE.ERROR_REQUIRED_FIELDS
            }

            // Buscar registro existente
            let registroExistente = await buscarRegistroDoacao(parseInt(id))
            
            if(registroExistente.status_code !== 200) {
                return registroExistente
            }

            // Verificar se o registro pertence ao usuário
            if(registroExistente.registro.id_usuario !== userId) {
                return {
                    status: false,
                    status_code: 403,
                    message: "Você não tem permissão para atualizar este registro"
                }
            }

            // Preparar dados para atualização (apenas campos editáveis)
            let dadosAtualizacao = {
                observacao: registro.observacao || registroExistente.registro.observacao,
                foto_comprovante: registro.foto_comprovante || registroExistente.registro.foto_comprovante
            }

            // Validar tamanho da URL da foto
            if(dadosAtualizacao.foto_comprovante && dadosAtualizacao.foto_comprovante.length > 500) {
                return {
                    status: false,
                    status_code: 400,
                    message: "URL da foto do comprovante muito longa (máximo 500 caracteres)"
                }
            }

            let updated = await registroDAO.updateRegistroDoacao(dadosAtualizacao, parseInt(id))
            
            if(updated) {
                let registroAtualizado = await buscarRegistroDoacao(parseInt(id))
                return {
                    status: true,
                    status_code: 200,
                    message: "Registro de doação atualizado com sucesso",
                    registro: registroAtualizado.registro
                }
            } else {
                return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE
        }
    } catch(error) {
        console.error("Erro atualizarRegistroDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Deletar registro de doação
const excluirRegistroDoacao = async function(id, userId) {
    try {
        if(!id || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        // Buscar registro existente
        let registroExistente = await buscarRegistroDoacao(parseInt(id))
        
        if(registroExistente.status_code !== 200) {
            return registroExistente
        }

        // Verificar se o registro pertence ao usuário
        if(registroExistente.registro.id_usuario !== userId) {
            return {
                status: false,
                status_code: 403,
                message: "Você não tem permissão para excluir este registro"
            }
        }

        let deleted = await registroDAO.deleteRegistroDoacao(parseInt(id))
        return deleted ? MESSAGE.SUCCESS_DELETE_ITEM : MESSAGE.ERROR_INTERNAL_SERVER_MODEL
    } catch(error) {
        console.error("Erro excluirRegistroDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Listar todos os registros de doação
const listarRegistroDoacao = async function() {
    try {
        let resultRegistro = await registroDAO.selectAllRegistroDoacao()
        
        if(resultRegistro) {
            return {
                status: true,
                status_code: 200,
                items: resultRegistro.length,
                registros: resultRegistro
            }
        } else {
            return MESSAGE.ERROR_NOT_FOUND
        }
    } catch(error) {
        console.error("Erro listarRegistroDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar registro de doação pelo ID
const buscarRegistroDoacao = async function(id) {
    try {
        if(!id || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        let resultRegistro = await registroDAO.selectByIdRegistroDoacao(parseInt(id))
        
        if(resultRegistro) {
            return {
                status: true,
                status_code: 200,
                registro: resultRegistro
            }
        } else {
            return MESSAGE.ERROR_NOT_FOUND
        }
    } catch(error) {
        console.error("Erro buscarRegistroDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Histórico de registros de doação do usuário
const historicoRegistroUsuario = async function(userId) {
    try {
        if(!userId || isNaN(userId) || userId <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        let resultRegistro = await registroDAO.historicoRegistroDoacao(parseInt(userId))
        
        if(resultRegistro) {
            return {
                status: true,
                status_code: 200,
                items: resultRegistro.length,
                registros: resultRegistro
            }
        } else {
            return {
                status: true,
                status_code: 200,
                items: 0,
                registros: [],
                message: "Nenhum registro de doação encontrado para este usuário"
            }
        }
    } catch(error) {
        console.error("Erro historicoRegistroUsuario:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Buscar dados do agendamento para pré-preencher o formulário
const obterDadosAgendamento = async function(idAgendamento, userId) {
    try {
        if(!idAgendamento || isNaN(idAgendamento) || idAgendamento <= 0) {
            return MESSAGE.ERROR_REQUIRED_FIELDS
        }

        let dadosAgendamento = await registroDAO.getDadosAgendamento(
            parseInt(idAgendamento), 
            userId
        )

        if(dadosAgendamento) {
            return {
                status: true,
                status_code: 200,
                dados: dadosAgendamento
            }
        } else {
            return {
                status: false,
                status_code: 404,
                message: "Agendamento não encontrado, não concluído ou não pertence ao usuário"
            }
        }
    } catch(error) {
        console.error("Erro obterDadosAgendamento:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Upload de imagem do comprovante de doação
const uploadComprovanteDoacao = async function(request) {
    try {
        if(!request.file) {
            return {
                status: false,
                status_code: 400,
                message: "Nenhuma imagem foi enviada"
            }
        }

        // A URL será fornecida pelo middleware de upload
        // Para local: request.imageUrl contém o caminho relativo /uploads/arquivo.webp
        // Para Azure: request.imageUrl conterá a URL completa do blob
        const imageUrl = request.imageUrl || `/uploads/${request.file.filename}`

        return {
            status: true,
            status_code: 200,
            message: "Imagem do comprovante enviada com sucesso",
            url: imageUrl
        }
    } catch(error) {
        console.error("Erro uploadComprovanteDoacao:", error)
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirRegistroDoacao,
    atualizarRegistroDoacao,
    excluirRegistroDoacao,
    listarRegistroDoacao,
    buscarRegistroDoacao,
    historicoRegistroUsuario,
    obterDadosAgendamento,
    uploadComprovanteDoacao
}
