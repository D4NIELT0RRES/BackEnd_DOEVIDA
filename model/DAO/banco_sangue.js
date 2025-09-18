/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a BANCO DE SANGUE no BANCO DE DADOS.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

//Import da biblioteca do prisma client para executar scripts no BD
const { PrismaClient } = require('@prisma/client')

//Instancia da classe do prisma client
const prisma = new PrismaClient()

//============================== INSERIR ==============================
const insertBancoSangue = async function(bancoSangue){
    try{
        let sql = `insert into tbl_banco_sangue(
                                                tipo_sanguineo,
                                                quantidade
                                            ) values (
                                                '${bancoSangue.tipo_sanguineo}',
                                                '${bancoSangue.quantidade}'
                                            );`

        let result = await prisma.$executeRawUnsafe(sql)

        if(result){
            // Retorna o último registro inserido (pegar ID recém criado)
            let sqlSelect = `SELECT * FROM tbl_banco_sangue WHERE tipo_sanguineo = '${bancoSangue.tipo_sanguineo}' ORDER BY id DESC LIMIT 1`
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
const updateBancoSangue = async function(bancoSangue){
    try{
        let sql = `update tbl_banco_sangue set  tipo_sanguineo = '${bancoSangue.tipo_sanguineo}',
                                                quantidade    = '${bancoSangue.quantidade}'
                                            where id = ${bancoSangue.id}`

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
const deleteBancoSangue = async function(id){
    try{
        let sql = `delete from tbl_banco_sangue where id = ${id}`

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
const selectAllBancoSangue = async function(){
    try{
        let sql = `select * from tbl_banco_sangue`

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
const selectByIdBancoSangue = async function(id){
    try{
        let sql = `select * from tbl_banco_sangue where id = ${id}`

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

//============================== BUSCAR POR TIPO SANGUÍNEO ==============================
const selectByTipoSanguineo = async function(tipo){
    try{
        let sql = `select * from tbl_banco_sangue where tipo_sanguineo = '${tipo}'`

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

module.exports = {
    insertBancoSangue,
    updateBancoSangue,
    deleteBancoSangue,
    selectAllBancoSangue,
    selectByIdBancoSangue,
    selectByTipoSanguineo
}
