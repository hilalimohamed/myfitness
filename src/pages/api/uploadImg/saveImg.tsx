import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import prisma from '@/src/lib/prisma'

export default async function saveImg(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req
  if (method === 'PUT') {
    try {
      // You can save the file path to a database
      const { imagePath } = req.body
      const token = req.cookies.token
      if (!token) {
        return res.status(400).json({ message: 'Unauthorized' })
      }

      const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!)
      const userID = await decodedToken.id
      const updatedProfile = await prisma.profile.update({
        where: {
          userId: userID,
        },
        data: {
          imagePath,
        },
      })
      return res
        .status(200)
        .json({
          message: 'Profile image path updated',
          profile: updatedProfile,
        })
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' })
  }
}
