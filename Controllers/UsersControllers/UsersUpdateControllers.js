const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

function updateUser(user) {
    return prisma.user.update({
         where: { IdUser: user.IdUser }, 
         data: user 
        })
}

module.exports = updateUser;

