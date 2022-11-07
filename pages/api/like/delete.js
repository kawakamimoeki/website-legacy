import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
  const like = await prisma.like.delete({
    where: {
      id: req.body.id
    }
  })
  res.status(201).json(like)
}
