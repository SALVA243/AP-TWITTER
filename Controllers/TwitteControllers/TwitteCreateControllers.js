const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

function addUser(user) {
    return prisma.user.create({ data: user })
}

module.exports = addUser;