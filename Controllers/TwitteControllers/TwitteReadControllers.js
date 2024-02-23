const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

function getAllTwitte() {
    return prisma.post.findMany()
}

function getTwitte(Id) {
    return prisma.post.findUnique({ where: { IdPost: Id } })
}

module.exports = { getAllTwitte, getTwitte };
