/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a RECUPERAÇÃO DE SENHA.
 * DATA: 22/09/2025
 * AUTOR: Daniel Torres
 * Versão: 1.2
 ***************************************************************************************/

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Inserir código de recuperação
const insertCodigo = async (idUsuario, codigo) => {
  try {
    const sql = `
      INSERT INTO tbl_recuperacao_senha (id_usuario, codigo)
      VALUES (${idUsuario}, '${codigo}')
    `
    return await prisma.$executeRawUnsafe(sql)
  } catch (error) {
    console.error("ERRO insertCodigo:", error)
    return false
  }
}

// Buscar registro pelo código
const selectByCodigo = async (codigo) => {
  try {
    const sql = `
      SELECT * FROM tbl_recuperacao_senha
      WHERE codigo = '${codigo}' AND usado = 0
      ORDER BY criado_em DESC
      LIMIT 1
    `
    const result = await prisma.$queryRawUnsafe(sql)
    return result.length > 0 ? result[0] : null
  } catch (error) {
    console.error("ERRO selectByCodigo:", error)
    return null
  }
}

// Marcar código como usado
const updateCodigoUsado = async (id) => {
  try {
    const sql = `
      UPDATE tbl_recuperacao_senha
      SET usado = 1
      WHERE id = ${id}
    `
    return await prisma.$executeRawUnsafe(sql)
  } catch (error) {
    console.error("ERRO updateCodigoUsado:", error)
    return false
  }
}

module.exports = {
  insertCodigo,
  selectByCodigo,
  updateCodigoUsado
}
