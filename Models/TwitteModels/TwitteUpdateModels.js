const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {

    await prisma.user.create({
        data: {
            name: 'Rachel',
            email: 'Rachel@prisma.io',
            Post: {
                create: { title: 'Hello World' },
            },
            Profile: {
                create: { bio: 'I like turtles' },
            },
        },
    })

    const allUsers = await prisma.user.findMany({
        include: {
            Post: true,
            Profile: true,
        },
    })
    console.dir(allUsers, { depth: null })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })