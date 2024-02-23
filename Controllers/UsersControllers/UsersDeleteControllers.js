const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

function deleteUser() {
    return prisma.user.delete()
}

module.exports = deleteUser;

