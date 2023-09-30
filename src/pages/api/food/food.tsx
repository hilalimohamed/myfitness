import { NextApiResponse, NextApiRequest } from 'next'
import prisma from '@/src/lib/prisma'
import jwt from 'jsonwebtoken'
// import Cookies from 'js-cookie'

export default async function food(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  if (method === 'POST') {
    try {
      const {
        mealtype,
        // servings,
        name,
        calories,
        carbs,
        fat,
        protein,
        sodium,
        sugar,
      } = req.body

      const token = req.cookies.token

      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
      }

      const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!)
      const userID = decodedToken.id

      const user = await prisma.user.findUnique({
        where: {
          id: userID,
        },
      })
      const existingMeal = await prisma.meal.findFirst({
        where: {
          userId: userID,
          mealtype,
        },
      })
      //    const existingMeal = await prisma.meal.findUnique({
      //   where: {
      //     userId_mealtype: {
      //       userId: userID,
      //       mealtype: mealtype,
      //     },
      //   },
      // })

      if (user && existingMeal) {
        const updatedMeal = await prisma.meal.update({
          where: {
            // mealtype: existingMeal.mealtype,
            // user: user,
            id:existingMeal.id
          },
          data: {
            user: { connect: { id: userID } },
            items: {
              create: {
                name,
                calories,
                carbs,
                fat,
                protein,
                sodium,
                sugar,
              },
            },
          },
          include: {
            items: true,
          },
        })

        return res
          .status(200)
          .json({ message: 'Meal updated', meal: existingMeal })
      } else {
        // Create a new meal
        const newMeal = await prisma.meal.create({
          data: {
            mealtype: mealtype,
            user: { connect: { id: userID } },
            items: {
              create: {
                name,
                calories,
                carbs,
                fat,
                protein,
                sodium,
                sugar,
              },
            },
          },
          include: {
            items: true,
          },
        })

        return res.status(200).json({ message: 'Meal created', meal: newMeal })
      }
    } catch (error) {
      console.error('Error creating/updating meal:', error)
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }
  if (method === 'DELETE') {
    try {
      const { id, mealId } = req.body
      const token = req.cookies.token

      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
      }

      const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!)
      const userID = decodedToken.id

      const user = await prisma.user.findUnique({
        where: {
          id: userID,
        },
      })
      if (user) {
        const existingMeal = await prisma.foodItem.delete({
          where: {
            id,
            mealId,
          },
        })
        return res.status(200).json({ message: 'Item deleted' })
      } else {
        return res.status(400).json({ message: 'does not work' })
      }
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }

  return res.status(405).end()
}
