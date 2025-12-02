const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function migrate() {
    try {
        console.log('Aplicando migração para aumentar o tamanho da coluna foto...')
        
        await prisma.$executeRawUnsafe(`
            ALTER TABLE tbl_hospital MODIFY COLUMN foto MEDIUMTEXT;
        `)
        
        console.log('✓ Migração aplicada com sucesso!')
        console.log('A coluna "foto" agora pode armazenar imagens base64 grandes.')
    } catch (error) {
        console.error('Erro ao aplicar migração:', error)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

migrate()
