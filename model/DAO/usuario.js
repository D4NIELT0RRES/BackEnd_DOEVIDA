/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a USUÁRIO no BANCO DE DADOS.
 * DATA: 18/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.1
 ***************************************************************************************/

// Import da biblioteca do prisma client para executar scripts no BD
const { PrismaClient } = require('@prisma/client')

// Instancia da classe do prisma client
const prisma = new PrismaClient()

//============================== INSERIR ==============================
const insertUsuario = async function (usuario) {
    try {
        // A string SQL agora é um template literal com tag, usando a crase.
        // Os valores são inseridos diretamente com ${}.
        let result = await prisma.$executeRaw`
            INSERT INTO tbl_usuario (
                nome,
                email,
                senha,
                cpf,
                cep,
                data_nascimento,
                tipo_sanguineo,
                logradouro,
                bairro,
                localidade,
                uf,
                numero,
                id_sexo,
                foto_perfil 
            ) VALUES (
                ${usuario.nome},
                ${usuario.email},
                ${usuario.senha},
                ${usuario.cpf},
                ${usuario.cep},
                ${usuario.data_nascimento},
                ${usuario.tipo_sanguineo},
                ${usuario.logradouro || null},
                ${usuario.bairro || null},
                ${usuario.localidade || null},
                ${usuario.uf || null},
                ${usuario.numero || null},
                ${usuario.id_sexo},
                ${usuario.foto_perfil || null}
            );
        `;

        if (result) {
            // A query de SELECT também deve seguir a mesma sintaxe.
            let criado = await prisma.$queryRaw`
                SELECT 
                    u.id,
                    u.nome,
                    u.email,
                    u.senha,
                    u.cpf,
                    u.cep,
                    u.tipo_sanguineo,
                    u.data_nascimento,
                    u.foto_perfil,
                    u.data_criacao,
                    u.data_atualizacao,
                    u.logradouro,
                    u.bairro,
                    u.localidade,
                    u.uf,
                    u.numero,
                    s.sexo as nome_sexo
                FROM tbl_usuario u
                LEFT JOIN tbl_sexo s ON u.id_sexo = s.id
                WHERE u.email = ${usuario.email}
                ORDER BY u.id DESC
                LIMIT 1
            `;
            
            return criado.length > 0 ? criado[0] : false;
        } else {
            return false;
        }
    } catch (error) {
        // Use console.error para destacar o erro
        console.error("Erro na DAO:", error);
        return false;
    }
};

//============================== ATUALIZAR ==============================
const updateUsuario = async function (usuario) {
    try {
        let sql = `
            
            UPDATE tbl_usuario 
            SET 
                nome            = '${usuario.nome}',
                email           = '${usuario.email}',
                senha           = '${usuario.senha}',
                cpf             = '${usuario.cpf}',
                cep             = '${usuario.cep}',
                logradouro      = '${usuario.logradouro}',
                bairro          = '${usuario.bairro}',
                localidade      = '${usuario.localidade}',
                uf              = '${usuario.uf}',
                numero          = '${usuario.numero}',
                data_nascimento = '${usuario.data_nascimento}',
                foto_perfil     = '${usuario.foto_perfil}',
                tipo_sanguineo  = '${usuario.tipo_sanguineo}',
                id_sexo         = ${usuario.id_sexo || null}
            WHERE id = ${usuario.id};
        `
        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== DELETAR ==============================
const deleteUsuario = async function (id) {
    try {
        let sql = `DELETE FROM tbl_usuario WHERE id = ${id}`
        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== LISTAR TODOS ==============================
const selectAllUsuario = async function () {
    try {
        let sql = `
            SELECT 
                u.id,
                u.nome,
                u.email,
                u.senha,
                u.cpf,
                u.cep,
                u.tipo_sanguineo,
                u.data_nascimento,
                u.foto_perfil,
                u.data_criacao,
                u.data_atualizacao,
                s.sexo as nome_sexo
            FROM tbl_usuario u
            LEFT JOIN tbl_sexo s ON u.id_sexo = s.id
            ORDER BY u.id ASC
        `
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR ID ==============================
const selectByIdUsuario = async function (id) {
    try {
        let sql = `
            SELECT 
                u.id,
                u.nome,
                u.email,
                u.senha,
                u.cpf,
                u.cep,
                u.tipo_sanguineo,
                u.data_nascimento,
                u.foto_perfil,
                u.data_criacao,
                u.data_atualizacao,
                s.sexo as nome_sexo
            FROM tbl_usuario u
            LEFT JOIN tbl_sexo s ON u.id_sexo = s.id
            WHERE u.id = ${id}
        `
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result[0] : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR EMAIL ==============================
const selectByEmailUsuario = async function (email) {
    try {
        let sql = `
            SELECT 
                u.id,
                u.nome,
                u.email,
                u.senha,
                u.cpf,
                u.cep,
                u.tipo_sanguineo,
                u.data_nascimento,
                u.foto_perfil,
                u.data_criacao,
                u.data_atualizacao,
                s.sexo as nome_sexo
            FROM tbl_usuario u
            LEFT JOIN tbl_sexo s ON u.id_sexo = s.id
            WHERE u.email = '${email}'
        `
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result[0] : false
    } catch (error) {
        console.log(error)
        return false
    }
}

//============================== BUSCAR POR NOME ==============================
const selectByNomeUsuario = async function (nome) {
    try {
        let sql = `
            SELECT 
                u.id,
                u.nome,
                u.email,
                u.senha,
                u.cpf,
                u.cep,
                u.tipo_sanguineo,
                u.data_nascimento,
                u.foto_perfil,
                u.data_criacao,
                u.data_atualizacao,
                s.sexo as nome_sexo
            FROM tbl_usuario u
            LEFT JOIN tbl_sexo s ON u.id_sexo = s.id
            WHERE u.nome LIKE '%${nome}%'
        `
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result : false
    } catch (error) {
        console.log(error)
        return false
    }
}



module.exports = {
    insertUsuario,
    updateUsuario,
    deleteUsuario,
    selectAllUsuario,
    selectByIdUsuario,
    selectByEmailUsuario,
    selectByNomeUsuario
}
