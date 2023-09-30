// import { NextRequest, NextResponse } from 'next/server'
// import prisma from '@/src/lib/prisma'

// export default async function verifyemail(req: NextRequest) {
//   const { method } = req
//   if (method === 'POST') {
//     try {
//       const { token }: any = req.body
//       const user = await prisma.user.findUnique({
//         where: {
//           verifyToken: token,
//           verifyTokenExpiry: {
//             gte: new Date(Date.now()), 
//           },
//         },
//       })
//     } catch (error: any) {
//       return NextResponse.json({ error: error.message }, { status: 500 })
//     }
//   }
// }











// import { NextRequest, NextResponse } from 'next/server'
// import prisma from '@/src/lib/prisma'

// export default async function verifyemail(req: NextRequest) {
//   const { method } = req;
  
//   if (method === 'POST') {
//     try {
//       const { token }: any = req.body;
//       const user = await prisma.user.findUnique({
//         where: {
//           verifyToken: token,
//         },
//       });

//       if (user) { 
//         await prisma.user.update({
//           where: { id: user.id },
//           data: {
//             isVerified: true,
//             verifyToken: null, 
//           },
//         });

//         return NextResponse.json({ message: 'Email verified successfully' });
//       } else {
//         return NextResponse.json({ message: 'Invalid token or token expired' }, { status: 400 });
//       }
//     } catch (error: any) {
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }
//   }
// }





import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/src/lib/prisma'

export default async function verifyemail(req: NextRequest) {
  const { method } = req

  if (method === 'POST') {
    try {
      const { token }: any = req.body
      const users = await prisma.user.findMany({
        where: {
          verifyToken: token,
          verifyTokenExpiry: {
            gte: new Date(Date.now()),
          },
        },
      })

      if (users.length === 1) {
        const user = users[0]
        // Verification successful, update user's verification status
        await prisma.user.update({
          where: { id: user.id },
          data: {
            isVerified: true,
            verifyToken: null, // Clear the token after verification
          },
        })

        return NextResponse.json({ message: 'Email verified successfully' })
      } else {
        return NextResponse.json(
          { message: 'Invalid token or token expired' },
          { status: 400 },
        )
      }
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
  }
}
