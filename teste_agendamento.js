/***************************************************************************************
 * OBJETIVO: Script de teste para validar as funcionalidades de agendamento
 * DATA: 09/10/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

const agendamentoDAO = require('./model/DAO/agendamento.js')

async function testarFuncionalidades() {
    console.log("=== TESTE DAS FUNCIONALIDADES DE AGENDAMENTO ===")
    
    try {
        // 1. Testar dias disponíveis
        console.log("\n1. Testando dias disponíveis...")
        const diasDisponiveis = await agendamentoDAO.selectDiasDisponiveis(1, "2025-10", 60)
        console.log("Dias disponíveis:", diasDisponiveis)
        
        // 2. Testar horários do dia
        console.log("\n2. Testando horários do dia...")
        const horarios = await agendamentoDAO.selectHorariosDoDia(1, "2025-10-10", 60, true)
        console.log("Horários disponíveis:", horarios)
        
        // 3. Testar inserção de agendamento transacional
        console.log("\n3. Testando criação de agendamento...")
        const novoAgendamento = await agendamentoDAO.insertAgendamentoTx(
            1, // userId (precisa existir um usuário com id 1)
            1, // hospitalId (precisa existir um hospital com id 1)
            "2025-10-15",
            "09:00:00"
        )
        console.log("Agendamento criado:", novoAgendamento)
        
        // 4. Testar listagem de agendamentos do usuário
        console.log("\n4. Testando agendamentos do usuário...")
        const agendamentosUsuario = await agendamentoDAO.selectAgendamentosDoUsuario(1, true)
        console.log("Agendamentos do usuário:", agendamentosUsuario)
        
        console.log("\n=== TESTES CONCLUÍDOS ===")
        
    } catch (error) {
        console.error("Erro durante os testes:", error)
    }
}

// Executar testes apenas se chamado diretamente
if (require.main === module) {
    testarFuncionalidades()
}

module.exports = { testarFuncionalidades }