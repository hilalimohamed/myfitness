// import { NextApiRequest, NextApiResponse } from 'next'
// import multer from 'multer'

// const upload = multer({ dest: 'public/uploads/' })

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   try {
//     upload.single('image')(req, res, (err: any) => {
//       if (err) {
//         return res.status(400).json({ message: 'File upload failed.' })
//       }
//       const { file } = req.body
//       // Process or store the uploaded file
//       return res.status(200).json({ message: 'File uploaded successfully.' })
//     })
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ message: 'Internal server error.' })
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
//     await fs.readdir(path.join(process.cwd() + '/public', '/images'))
//   } catch (error) {
//     await fs.mkdir(path.join(process.cwd() + '/public', '/images'))
//   }
//   await readFile(req, true)
//   res.json({ done: 'ok' })
// }

// export default handler

import { NextApiHandler, NextApiRequest } from 'next'
import formidable from 'formidable'
import path from 'path'
import fs from 'fs/promises'
import jwt from 'jsonwebtoken'
import prisma from '@/src/lib/prisma'

export const config = {
  api: {
    bodyParser: false,
  },
}

const readFile = (
  req: NextApiRequest,
  saveLocally?: boolean,
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {}
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), '/public/images')
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + '_' + path.originalFilename
    }
  }
  const form = formidable(options)
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err)
      resolve({ fields, files })
    })
  })
}

const handler: NextApiHandler = async (req, res) => {
  // try {
  //   // Parse the incoming form data
  // const { files } = await readFile(req, true)
  try {
    await fs.readdir(path.join(process.cwd() + '/public', '/images'))
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + '/public', '/images'))
  }
  const respo = await readFile(req, true)
  // Construct the image path (save it relative to a directory)
  const imagePath = respo.files.image[0].newFilename

  res.json({ message: imagePath })

  // Save the file to the specified path
  // const destination = path.join(process.cwd(), imagePath)
  // const renam = await fs.rename(files.image[0].filepath, destination)
  //   return res.status(200).json({ message: respo })
  // } catch (error) {
  //   // Handle errors and send an appropriate response
  //   console.error(error)
  //   return res.status(500).json({ error: 'An error occurred during file upload' })
  // }
}

export default handler
