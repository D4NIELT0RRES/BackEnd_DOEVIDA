/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a USUÁRIO no BANCO DE DADOS.
 * DATA: 18/09/2025 (ajustado 28/09/2025)
 * AUTOR: Daniel Torres
 * Versão: 1.3 (corrigido JOINs e nomes das tabelas/colunas)
 ***************************************************************************************/

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//Inserir um novo usuário
const insertUsuario = async function (usuario) {
    try {
        let sqlInsert = `
            INSERT INTO tbl_usuario (
                nome,
                email,
                senha_hash,
                cpf,
                cep,
                data_nascimento,
                id_tipo_sanguineo,
                logradouro,
                bairro,
                localidade,
                uf,
                numero,
                id_sexo,
                foto_perfil
            ) VALUES (
                '${usuario.nome}',
                '${usuario.email}',
                '${usuario.senha_hash}', 
                ${usuario.cpf ? `'${usuario.cpf}'` : 'NULL'},
                ${usuario.cep ? `'${usuario.cep}'` : 'NULL'},
                ${usuario.data_nascimento ? `'${usuario.data_nascimento}'` : 'NULL'},
                ${usuario.id_tipo_sanguineo ? usuario.id_tipo_sanguineo : 'NULL'},
                ${usuario.logradouro ? `'${usuario.logradouro}'` : 'NULL'},
                ${usuario.bairro ? `'${usuario.bairro}'` : 'NULL'},
                ${usuario.localidade ? `'${usuario.localidade}'` : 'NULL'},
                ${usuario.uf ? `'${usuario.uf}'` : 'NULL'},
                ${usuario.numero ? `'${usuario.numero}'` : 'NULL'},
                ${usuario.id_sexo ? usuario.id_sexo : 'NULL'},
                ${usuario.foto_perfil ? `'${usuario.foto_perfil}'` : 'NULL'}
            );
        `;

        let result = await prisma.$executeRawUnsafe(sqlInsert);

        if (result) {
            let criado = await prisma.$queryRawUnsafe(`
                SELECT 
                    u.id,
                    u.nome,
                    u.email,
                    u.senha_hash,
                    u.cpf,
                    u.cep,
                    ts.tipo AS tipo_sanguineo_nome,
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
                LEFT JOIN tbl_tipo_sanguineo ts ON u.id_tipo_sanguineo = ts.id
                WHERE u.email = '${usuario.email}'
                ORDER BY u.id DESC
                LIMIT 1
            `);
            return criado[0];
        } else {
            return false;
        }
    } catch (error) {
        console.error("Erro na DAO insertUsuario:", error);
        return false;
    }
};


//Atualizar um usuário existente pelo ID
const updateUsuario = async function (usuario) {
    try {
        let sql = `
            UPDATE tbl_usuario 
            SET 
                nome                = '${usuario.nome}',
                email               = '${usuario.email}',
                senha_hash          = '${usuario.senha_hash}',
                cpf                 = ${usuario.cpf ? `'${usuario.cpf}'` : 'NULL'},
                cep                 = ${usuario.cep ? `'${usuario.cep}'` : 'NULL'},
                logradouro          = ${usuario.logradouro ? `'${usuario.logradouro}'` : 'NULL'},
                bairro              = ${usuario.bairro ? `'${usuario.bairro}'` : 'NULL'},
                localidade          = ${usuario.localidade ? `'${usuario.localidade}'` : 'NULL'},
                uf                  = ${usuario.uf ? `'${usuario.uf}'` : 'NULL'},
                numero              = ${usuario.numero ? `'${usuario.numero}'` : 'NULL'},
                data_nascimento     = ${usuario.data_nascimento ? `'${usuario.data_nascimento}'` : 'NULL'},
                foto_perfil         = ${usuario.foto_perfil ? `'${usuario.foto_perfil}'` : 'NULL'},
                id_tipo_sanguineo   = ${usuario.id_tipo_sanguineo ? usuario.id_tipo_sanguineo : 'NULL'},
                id_sexo             = ${usuario.id_sexo ? usuario.id_sexo : 'NULL'}
            WHERE id = ${usuario.id};
        `
        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        console.error("Erro na DAO updateUsuario:", error)
        return false
    }
}

// Atualizar senha do usuário
const updateSenha = async (idUsuario, senhaHash) => {
  try {
    const sql = `
      UPDATE tbl_usuario
      SET senha_hash = '${senhaHash}'
      WHERE id = ${idUsuario}
    `
    return await prisma.$executeRawUnsafe(sql)
  } catch (error) {
    console.error("ERRO updateSenha:", error)
    return false
  }
}

//Deletar um usuário pelo ID
const deleteUsuario = async function (id) {
    try {
        let sql = `DELETE FROM tbl_usuario WHERE id = ${id}`
        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        console.error("Erro na DAO deleteUsuario:", error)
        return false
    }
}

//Listar todos os usuários
const selectAllUsuario = async function () {
    try {
        let sql = `
            SELECT 
                u.id,
                u.nome,
                u.email,
                u.senha_hash,
                u.cpf,
                u.cep,
                u.logradouro,
                u.bairro,
                u.localidade,
                u.uf,
                u.numero,
                ts.tipo AS tipo_sanguineo_nome,  -- Nome do tipo sanguíneo
                u.data_nascimento,
                u.foto_perfil,
                u.data_criacao,
                u.data_atualizacao,
                s.sexo AS nome_sexo
            FROM tbl_usuario u
            LEFT JOIN tbl_sexo s ON u.id_sexo = s.id
            LEFT JOIN tbl_tipo_sanguineo ts ON u.id_tipo_sanguineo = ts.id
            ORDER BY u.id ASC

        `
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result : false
    } catch (error) {
        console.error("Erro na DAO selectAllUsuario:", error)
        return false
    }
}

//Buscar usuário pelo ID
const selectByIdUsuario = async function (id) {
    try {
        let sql = `
            SELECT 
                u.id,
                u.nome,
                u.email,
                u.senha_hash,
                u.cpf,
                u.cep,
                ts.tipo AS tipo_sanguineo_nome,
                u.data_nascimento,
                u.foto_perfil,
                u.data_criacao,
                u.data_atualizacao,
                s.sexo as nome_sexo
            FROM tbl_usuario u
            LEFT JOIN tbl_sexo s ON u.id_sexo = s.id
            LEFT JOIN tbl_tipo_sanguineo ts ON u.id_tipo_sanguineo = ts.id
            WHERE u.id = ${id}
        `
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result[0] : false
    } catch (error) {
        console.error("Erro na DAO selectByIdUsuario:", error)
        return false
    }
}

//Buscar usuário pelo email
const selectByEmailUsuario = async function (email) {
    try {
        let sql = `
            SELECT 
                u.id,
                u.nome,
                u.email,
                u.senha_hash,
                u.cpf,
                u.cep,
                ts.tipo AS tipo_sanguineo_nome,
                u.data_nascimento,
                u.foto_perfil,
                u.data_criacao,
                u.data_atualizacao,
                s.sexo as nome_sexo
            FROM tbl_usuario u
            LEFT JOIN tbl_sexo s ON u.id_sexo = s.id
            LEFT JOIN tbl_tipo_sanguineo ts ON u.id_tipo_sanguineo = ts.id
            WHERE u.email = '${email}'
        `
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result[0] : false
    } catch (error) {
        console.error("Erro na DAO selectByEmailUsuario:", error)
        return false
    }
}

//Buscar usuário pelo NOME
const selectByNomeUsuario = async function (nome) {
    try {
        let sql = `
            SELECT 
                u.id,
                u.nome,
                u.email,
                u.senha_hash,
                u.cpf,
                u.cep,
                ts.tipo AS tipo_sanguineo_nome,
                u.data_nascimento,
                u.foto_perfil,
                u.data_criacao,
                u.data_atualizacao,
                s.sexo as nome_sexo
            FROM tbl_usuario u
            LEFT JOIN tbl_sexo s ON u.id_sexo = s.id
            LEFT JOIN tbl_tipo_sanguineo ts ON u.id_tipo_sanguineo = ts.id
            WHERE u.nome LIKE '%${nome}%'
        `
        let result = await prisma.$queryRawUnsafe(sql)
        return result.length > 0 ? result : false
    } catch (error) {
        console.error("Erro na DAO selectByNomeUsuario:", error)
        return false
    }
}

//Fazer login do usuário (por email ou nome)
const loginUsuario = async function (dadosLogin) {
    try {
        let sql = `
            SELECT 
                u.id,
                u.nome,
                u.email,
                u.senha_hash,
                u.cpf,
                u.cep,
                ts.tipo AS tipo_sanguineo_nome,
                u.data_nascimento,
                u.foto_perfil,
                u.data_criacao,
                u.data_atualizacao,
                s.sexo as nome_sexo
            FROM tbl_usuario u
            LEFT JOIN tbl_sexo s ON u.id_sexo = s.id
            LEFT JOIN tbl_tipo_sanguineo ts ON u.id_tipo_sanguineo = ts.id
            WHERE (u.email = '${dadosLogin.usuario}' OR u.nome = '${dadosLogin.usuario}')
            AND u.senha_hash = '${dadosLogin.senha_hash}'
        `

        let result = await prisma.$queryRawUnsafe(sql)

        if(result && result.length > 0){
            return result
        }else{
            return false
        }
    } catch(error){
        console.error("Erro na DAO loginUsuario:", error)
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
    selectByNomeUsuario,
    loginUsuario,
    updateSenha
}
