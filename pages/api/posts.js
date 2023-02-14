// pages/api/posts.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const { method } = req

  switch (method) {
    case 'POST':
      // get the title and content from the request body
        const { petType, petName, petColor, petBreed, lastLocation, contactPhone, contactEmail, petDescription, petImage, title } = req.body
      // use prisma to create a new post using that data
      const post = await prisma.post.create({
        data: {
            petType,
            petName,
            petColor,
            petBreed,
            lastLocation,
            contactPhone,
            contactEmail,
            petDescription,
            petImage,
            title
        }
      })
      // send the post object back to the client
      res.status(201).json(post)
      break
    default:
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}