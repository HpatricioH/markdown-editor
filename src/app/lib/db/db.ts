import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = (): PrismaClient => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as typeof globalThis & {
  prisma?: PrismaClientSingleton
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
