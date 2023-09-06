import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/src/lib/prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  if (method === 'POST') {
    const { email, password } = req.body

    try {
      const user = await prisma.user.findUnique({
        where: { email },
      })

      if (user) {
        const validPassword = await bcrypt.compare(password, user.password)

        if (validPassword) {
          // Create token data
          const tokenData = {
            id: user.id,
            username: user.username,
            email: user.email,
          }
          // Create token
          const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
            expiresIn: '1d',
          })

          // Set the token as an HTTP-only cookie
          // const cook =await res.setHeader('Set-Cookie', `token=${token}; HttpOnly`)
          Cookies.set('token', token, {
            httpOnly: true,
          })

          // Return the success response
          return res.status(200).json({ message: token })
        } else {
          return res.status(400).json({ message: 'Invalid password' })
        }
      } else {
        return res.status(400).json({ message: 'User not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
