/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a HOSPITAL no BANCO DE DADOS.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

//Import da biblioteca do prisma client para executar scripts no BD
const { PrismaClient } = require('@prisma/client')

//Instancia da classe do prisma client
const prisma = new PrismaClient()

//============================== INSERIR ==============================
const insertHospital = async function(hospital){
    try{
        let sql = `insert into tbl_hospital(
                                        nome,
                                        email,
                                        senha,
                                        cnpj,
                                        crm,
                                        cep,
                                        telefone,
                                        capacidade_maxima,
                                        convenios,
                                        horario_abertura,
                                        horario_fechamento,
                                        foto,
                                        complemento,
                                        id_agendamento
                                    ) values (
                                        '${hospital.nome}',
                                        '${hospital.email}',
                                        '${hospital.senha}',
                                        '${hospital.cnpj}',
                                        '${hospital.crm}',
                                        '${hospital.cep}',
                                        '${hospital.telefone}',
                                        ${hospital.capacidade_maxima},
                                        '${hospital.convenios}',
                                        '${hospital.horario_abertura}',
                                        '${hospital.horario_fechamento}',
                                        '${hospital.foto}',
                                        ${hospital.complemento ? `'${hospital.complemento}'` : null},
                                        ${hospital.id_agendamento || null}
                                    );`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result){
            // Retorna o último registro inserido (pegar ID recém criado)
            let sqlSelect = `SELECT * FROM tbl_hospital WHERE email = '${hospital.email}' ORDER BY id DESC LIMIT 1`
            let criado = await prisma.$queryRawUnsafe(sqlSelect)
            return criado[0]
        }else{
            return false
        }
    }catch(error){
        console.log(error)
        return false
    }
}

//============================== ATUALIZAR ==============================
const updateHospital = async function(hospital){
    try{
        let sql = `update tbl_hospital set 
                        nome              = '${hospital.nome}',
                        email             = '${hospital.email}',
                        senha             = '${hospital.senha}',
                        cnpj              = '${hospital.cnpj}',
                        crm               = '${hospital.crm}',
                        cep               = '${hospital.cep}',
                        telefone          = '${hospital.telefone}',
                        capacidade_maxima = ${hospital.capacidade_maxima},
                        convenios         = '${hospital.convenios}',
                        horario_abertura  = '${hospital.horario_abertura}',
                        horario_fechamento= '${hospital.horario_fechamento}',
                        foto              = '${hospital.foto}',
                        complemento       = ${hospital.complemento ? `'${hospital.complemento}'` : null},
                        id_agendamento    = ${hospital.id_agendamento || null}
                    where id = ${hospital.id}`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result){
            return true
        }else{
            return false
        }
    }catch(error){
        console.log(error)
        return false
    }
}

//============================== DELETAR ==============================
const deleteHospital = async function(id){
    try{
        let sql = `delete from tbl_hospital where id = ${id}`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result){
            return true
        }else{
            return false
        }
    }catch(error){
        console.log(error)
        return false
    }
}

//============================== LISTAR TODOS ==============================
const selectAllHospital = async function(){
    try{
        let sql = `select * from tbl_hospital`

        let result = await prisma.$queryRawUnsafe(sql)

        if(result && result.length > 0){
            return result
        }else{
            return false
        }
    }catch(error){
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR ID ==============================
const selectByIdHospital = async function(id){
    try{
        let sql = `select * from tbl_hospital where id = ${id}`

        let result = await prisma.$queryRawUnsafe(sql)

        if(result && result.length > 0){
            return result[0]
        }else{
            return false
        }
    }catch(error){
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR EMAIL ==============================
const selectByEmailHospital = async function(email){
    try{
        let sql = `select * from tbl_hospital where email = '${email}'`

        let result = await prisma.$queryRawUnsafe(sql)

        if(result && result.length > 0){
            return result[0]
        }else{
            return false
        }
    }catch(error){
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR CNPJ ==============================
const selectByCnpjHospital = async function(cnpj){
    try{
        let sql = `select * from tbl_hospital where cnpj = '${cnpj}'`

        let result = await prisma.$queryRawUnsafe(sql)

        if(result && result.length > 0){
            return result[0]
        }else{
            return false
        }
    }catch(error){
        console.log(error)
        return false
    }
}

module.exports = {
    insertHospital,
    updateHospital,
    deleteHospital,
    selectAllHospital,
    selectByIdHospital,
    selectByEmailHospital,
    selectByCnpjHospital
}
