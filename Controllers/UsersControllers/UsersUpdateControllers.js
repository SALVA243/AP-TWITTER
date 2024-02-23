const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

function updateUser() {
    return prisma.user.update()
}

module.exports = updateUser;

