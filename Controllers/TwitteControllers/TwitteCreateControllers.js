const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

function addPost(post) {
    return prisma.post.create({ data: post })
}

module.exports = addPost;