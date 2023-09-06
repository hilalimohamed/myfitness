// import { NextApiRequest, NextApiResponse } from 'next'
// import prisma from '@/src/lib/prisma'
// import bcrypt from 'bcrypt'
// // interface CustomResponse extends NextApiResponse {
// //   body: any // You can specify the type of 'body' as needed
// // }

// export default async function register(req: NextApiRequest, res: NextApiResponse) {
//   const { method } = req
//   if (method === 'GET') {
//     const users = await prisma.user.findMany()

//     return res.json('ok')
//   }
//   if (method === 'POST') {
//     const { username, email, password } = (res as any).body
//     const salt = await bcrypt.genSalt(10)
//     const hashedPassword = await bcrypt.hash(password, salt)
//     const user = await prisma.user.create({
//       data: {
//         username: username,
//         email: email,
//         password: hashedPassword,
//       },
//     })
//     return res.json('ok')
//     // return NextResponse.json({message:'user created succesfully'}), {status:201}
//   }
// }
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/src/lib/prisma'
import bcrypt from 'bcrypt'

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req

  if (method === 'GET') {
    const users = await prisma.user.findMany()
    return res.status(200).json(users)
  }

  if (method === 'POST') {
    try {
      const { username, email, password } = req.body
      // Check if a user with the same email already exists
      const existingUser = await prisma.user.findUnique({
        where: {email} ,
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
        },
      })
      return res.status(201).json({ message: 'User created successfully' })
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }
  return res.status(405).json({ error: 'Method Not Allowed' })
}
