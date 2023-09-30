import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/src/lib/prisma'
import bcrypt from 'bcrypt'
import { sendEmail } from '@/src/specifics/mailer'

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req

  if (method === 'GET') {
    const users = await prisma.user.findMany({
      include: {
        meals: {
          include: {
            items: true,
          },
        },
        profile: {
          include: {
            goals: true,
          },
        },
      },
    })
    return res.status(200).json(users)
  }

  if (method === 'POST') {
    try {
      const {
        username,
        email,
        password,
        activitie,
        sex,
        birthdate,
        country,
        tall,
        weight,
        weightGoal,
        goals,
        imagePath
      } = req.body
      // Check if a user with the same email already exists
      const existingUser = await prisma.user.findUnique({
        where: { email },
      })
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' })
      }
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
      const user = await prisma.user.create({
        data: {
          username: username,
          email: email,
          password: hashedPassword,
          isVerified: false,
          profile: {
            create: {
              imagePath,
              activitie,
              sex,
              birthdate,
              country,
              tall,
              weight,
              weightGoal,
              goals: {
                create: goals.map((name: string) => ({ name })),
              },
            },
          },
        },
        include: {
          profile: {
            include: {
              goals: true,
            },
          },
          //  {
          //   select:{
          //     id:true,
          //     sex:true,
          //   }
          // }
        },
      })
      const send = await sendEmail({ email: email, id: user.id })
      return res.status(201).json({ message: user })
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }
  // return res.status(405).json({ error: 'Method Not Allowed' })
  if (method === 'PUT') {
    try {
      const {
        id,
        username,
        activitie,
        sex,
        birthdate,
        country,
        tall,
        weight,
        weightGoal,
      } = req.body
      if (!id) {
        return res.json({ mess: 'yes' })
      }
      const user = await prisma.user.update({
        where: { id },
        data: {
          username,
          profile: {
            update: {
              activitie,
              sex,
              birthdate,
              country,
              tall,
              weight,
              weightGoal,
            },
          },
        },
        include: {
          profile: true,
        },
      })
      return res.status(200).json({ message: 'update', user })
    } catch (error) {
      return res.status(400).json({ message: error })
    }
  }
}
