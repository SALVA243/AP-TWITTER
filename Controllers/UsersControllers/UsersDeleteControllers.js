const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

function deleteUser(Id) {
    return prisma.user.delete({ where: { IdUser: Id } })
}

module.exports = deleteUser;

