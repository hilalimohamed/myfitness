// import { NextApiResponse,NextApiRequest } from "next";
// import Cookies from "js-cookie";

// export default async function logout(req:NextApiRequest,res:NextApiResponse) {
//     const {method} = req
//     if (method==='GET') {
//         try {
//             Cookies.set('token','',{
//                 httpOnly:true,expires:new Date(0)
//             })
//             return res.status(200).json({ message: 'Logout success' })
//         } catch (error) {
//             return res.status(500).json({ message: 'Internal Server Error' })
//         }
//     }
// }
// import { NextApiResponse, NextApiRequest } from 'next'
// import prisma from '@/src/lib/prisma'
// import jwt from 'jsonwebtoken'
// import Cookies from 'js-cookie'

// export default async function foodData(
//   res: NextApiResponse,
//   req: NextApiRequest,
// ) {
//   const { method } = req
//   if (method === 'POST') {
//     try {
//       const {
//         Mealtype,
//         // servings,
//         name,
//         calories,
//         carbs,
//         fat,
//         protein,
//         sodium,
//         sugar,
//       } = req.body
//       const token = req.cookies.token

//       if (!token) {
//         return res.status(400).json({ message: 'Unauthorized' })
//       }

//       const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!)
//       const userID = await decodedToken.id
//       const meal = await prisma.meal.create({
//         data: {
//           Mealtype,
//           user: { connect: { id: userID } },
//           items: {
//             create: {
//               // servings,
//               name,
//               calories,
//               carbs,
//               fat,
//               protein,
//               sodium,
//               sugar,
//             },
//           },
//         },
//         include: {
//           items: true,
//         },
//       })

//       return res.status(200).json({ message: meal })
//     } catch (error) {
//       return res.status(500).json({ error: 'Internal Server Error' })
//     }
//   }
// }
// import { NextApiHandler, NextApiRequest } from 'next'
// import formidable from 'formidable'
// import path from 'path'
// import fs from 'fs/promises'

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }

// const readFile = (
//   req: NextApiRequest,
//   saveLocally?: boolean,
// ): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
//   const options: formidable.Options = {}
//   if (saveLocally) {
//     options.uploadDir = path.join(process.cwd(), '/public/images')
//     options.filename = (name, ext, path, form) => {
//       return Date.now().toString() + '_' + path.originalFilename
//     }
//   }
//   const form = formidable()
//   return new Promise((resolve, reject) => {
//     form.parse(req, (err, fields, files) => {
//       if (err) reject(err)
//       resolve({ fields, files })
//     })
//   })
// }

// const handler: NextApiHandler = async (req, res) => {
//   //   const form = formidable({})
//   //   form.parse(req, (err, fields, files) => {})
//   try {
//     return fs.readdir(path.join(process.cwd() + '/public', '/images'))
//   } catch (error) {
//     await fs.mkdir(path.join(process.cwd() + '/public', '/images'))
//   }
//   await readFile(req, true)
//   res.json({ done: 'ok' })
// }

// export default handler



import { NextApiHandler } from 'next'
import formidable from 'formidable'
import path from 'path'
import fs from 'fs/promises'

export const config = {
  api: {
    bodyParser: false,
  },
}

const readFile = (
  req: any,
  saveLocally?: boolean,
  ): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
    const options: formidable.Options = {}
    if (saveLocally) {
      options.uploadDir = path.join(process.cwd(), '/public/images')
      options.filename = (name, ext, path, form) => {
        return Date.now().toString() + '_' + path.originalFilename
      }
    }
    const form = formidable()
    return new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err)
        resolve({ fields, files })
    })
  })
}

const handler: NextApiHandler = async (req, res) => {
  try {
    // Parse the incoming form data
    const { files } = await readFile(req, true)
    
    // Here, you can process the uploaded file if needed
    // For example, you can save the file path to a database

    // Send a JSON response indicating a successful upload
    res.status(200).json({ message: 'Image uploaded successfully' })
  } catch (error) {
    // Handle errors and send an appropriate response
    console.error(error)
    res.status(500).json({ error: 'An error occurred during file upload' })
  }
}

export default handler


// const handler: NextApiHandler = async (req, res) => {
//   //   const form = formidable({})
//   //   form.parse(req, (err, fields, files) => {})
//   try {
//     return fs.readdir(path.join(process.cwd() + '/public', '/images'))
//   } catch (error) {
//     await fs.mkdir(path.join(process.cwd() + '/public', '/images'))
//   }
//   await readFile(req, true)
//   res.json({ done: 'ok' })
// }