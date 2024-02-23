const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

function deletePoste(Id) {
    return prisma.post.delete({ where: { IdPost: Id } })
}

module.exports = deletePoste;