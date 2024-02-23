const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

function getAllUsers() {
    return prisma.user.findMany()
}

function getUser(Id) {
    return prisma.user.findUnique({ where: { IdUser: Id } })
}

module.exports = { getAllUsers, getUser };
