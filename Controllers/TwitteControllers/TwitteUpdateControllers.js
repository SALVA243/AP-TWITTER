const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

function updatePost(post) {
    return prisma.post.update({
        where: { IdPost: post.IdPost },
        data: post
    })
}

module.exports = updatePost;