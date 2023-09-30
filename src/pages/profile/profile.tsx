import axios from 'axios'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import Image from 'next/image'
import img from '@/public/foodn.jpg'
import { VscNotebook } from 'react-icons/vsc'
import { FcHome } from 'react-icons/fc'
import { useState, useEffect } from 'react'
import jwt from 'jsonwebtoken'
import Link from 'next/link'
import { UserData } from '@/src/type'

export default function profile() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const router = useRouter()

  const logout = async () => {
    try {
      //   await axios.get('/api/logout/logout')
      Cookies.remove('token')
      router.push('/account/create/login')
    } catch (error) {
      console.log('error >> ', error)
    }
  }
  const dailyCalorie = () => {
    if (userData) {
      const birthDate = new Date(userData.profile.birthdate)
      const currentDate = new Date()

      let age = currentDate.getFullYear() - birthDate.getFullYear()
      const birthMonth = birthDate.getMonth()
      const currentMonth = currentDate.getMonth()

      if (
        currentMonth < birthMonth ||
        (currentMonth === birthMonth &&
          currentDate.getDate() < birthDate.getDate())
      ) {
        age--
      } else {
        age
      }
      console.log(age)

      if (userData.profile.sex === 'male') {
        const BMR =
          88.362 +
          13.397 * userData.profile.weight +
          4.799 * userData.profile.tall -
          5.677 * age
        if (userData.profile.activitie === 'Not Very Active') {
          const BMRandActi0 = BMR * 1.2
          if (userData.profile.weightGoal > userData.profile.weight) {
            const wiegh = userData.profile.weightGoal - userData.profile.weight
            // const kgOfMonth = 1 or 0.5
            const calorieDeficit = 0.071 * 7100
            const dailyClr = BMRandActi0 + calorieDeficit
            console.log(Math.floor(dailyClr))
          } else if (userData.profile.weightGoal < userData.profile.weight) {
            const wiegh = userData.profile.weight - userData.profile.weightGoal
            // const kgOfMonth = 1 or 0.5
            const calorieDeficit = 0.071 * 7100
            const dailyClr = BMRandActi0 - calorieDeficit
            console.log(Math.floor(dailyClr))
          } else {
            const dailyClr = BMRandActi0
            console.log(Math.floor(dailyClr))
          }
        } else if (userData.profile.activitie === 'Lightly Active') {
          const BMRandActi1 = BMR * 1.325
          if (userData.profile.weightGoal > userData.profile.weight) {
            const wiegh = userData.profile.weightGoal - userData.profile.weight
            // const kgOfMonth = 1 or 0.5
            const calorieDeficit = 0.071 * 7100
            const dailyClr = BMRandActi1 + calorieDeficit
            console.log(Math.floor(dailyClr))
          } else if (userData.profile.weightGoal < userData.profile.weight) {
            const wiegh = userData.profile.weight - userData.profile.weightGoal
            // const kgOfMonth = 1 or 0.5
            const calorieDeficit = 0.071 * 7100
            const dailyClr = BMRandActi1 - calorieDeficit
            console.log(Math.floor(dailyClr))
          } else {
            const dailyClr = BMRandActi1
            console.log(Math.floor(dailyClr))
          }
        } else if (userData.profile.activitie === 'Active') {
          const BMRandActi2 = BMR * 1.55
          if (userData.profile.weightGoal > userData.profile.weight) {
            const wiegh = userData.profile.weightGoal - userData.profile.weight
            // const kgOfMonth = 1 or 0.5
            const calorieDeficit = 0.071 * 7100
            const dailyClr = BMRandActi2 + calorieDeficit
            console.log(Math.floor(dailyClr))
          } else if (userData.profile.weightGoal < userData.profile.weight) {
            const wiegh = userData.profile.weight - userData.profile.weightGoal
            // const kgOfMonth = 1 or 0.5
            const calorieDeficit = 0.071 * 7100
            const dailyClr = BMRandActi2 - calorieDeficit
            console.log(Math.floor(dailyClr))
          } else {
            const dailyClr = BMRandActi2
            console.log(Math.floor(dailyClr))
          }
        } else if (userData.profile.activitie === 'Very Active') {
          const BMRandActi3 = BMR * 1.725
          if (userData.profile.weightGoal > userData.profile.weight) {
            const wiegh = userData.profile.weightGoal - userData.profile.weight
            // const kgOfMonth = 1 or 0.5
            const calorieDeficit = 0.071 * 7100
            const dailyClr = BMRandActi3 + calorieDeficit
            console.log(Math.floor(dailyClr))
          } else if (userData.profile.weightGoal < userData.profile.weight) {
            const wiegh = userData.profile.weight - userData.profile.weightGoal
            // const kgOfMonth = 1 or 0.5
            const calorieDeficit = 0.071 * 7100
            const dailyClr = BMRandActi3 - calorieDeficit
            console.log(Math.floor(dailyClr))
          } else {
            const dailyClr = BMRandActi3
            console.log(Math.floor(dailyClr))
          }
        }
      } else {
        const BMRWomen =
          447.593 +
          9.247 * userData.profile.weight +
          3.098 * userData.profile.tall -
          4.33 * age
        if (userData.profile.activitie === 'Not Very Active') {
          const BMRandActi0 = BMRWomen * 1.2
          if (userData.profile.weightGoal > userData.profile.weight) {
            const wiegh = userData.profile.weightGoal - userData.profile.weight
            // const kgOfMonth = 1 or 0.5
            const calorieDeficit = 0.071 * 7100
            const dailyClr = BMRandActi0 + calorieDeficit
            console.log(Math.floor(dailyClr))
          } else if (userData.profile.weightGoal < userData.profile.weight) {
            const wiegh = userData.profile.weight - userData.profile.weightGoal
            // const kgOfMonth = 1 or 0.5
            const calorieDeficit = 0.071 * 7100
            const dailyClr = BMRandActi0 - calorieDeficit
            console.log(Math.floor(dailyClr))
          } else {
            const dailyClr = BMRandActi0
            console.log(Math.floor(dailyClr))
          }
        } else if (userData.profile.activitie === 'Lightly Active') {
          const BMRandActi1 = BMRWomen * 1.325
          if (userData.profile.weightGoal > userData.profile.weight) {
            const wiegh = userData.profile.weightGoal - userData.profile.weight
            // const kgOfMonth = 1 or 0.5
            const calorieDeficit = 0.071 * 7100
            const dailyClr = BMRandActi1 + calorieDeficit
            console.log(Math.floor(dailyClr))
          } else if (userData.profile.weightGoal < userData.profile.weight) {
            const wiegh = userData.profile.weight - userData.profile.weightGoal
            // const kgOfMonth = 1 or 0.5
            const calorieDeficit = 0.071 * 7100
            const dailyClr = BMRandActi1 - calorieDeficit
            console.log(Math.floor(dailyClr))
          } else {
            const dailyClr = BMRandActi1
            console.log(Math.floor(dailyClr))
          }
        } else if (userData.profile.activitie === 'Active') {
          const BMRandActi2 = BMRWomen * 1.55
          if (userData.profile.weightGoal > userData.profile.weight) {
            const wiegh = userData.profile.weightGoal - userData.profile.weight
            // const kgOfMonth = 1 or 0.5
            const calorieDeficit = 0.071 * 7100
            const dailyClr = BMRandActi2 + calorieDeficit
            console.log(Math.floor(dailyClr))
          } else if (userData.profile.weightGoal < userData.profile.weight) {
            const wiegh = userData.profile.weight - userData.profile.weightGoal
            // const kgOfMonth = 1 or 0.5
            const calorieDeficit = 0.071 * 7100
            const dailyClr = BMRandActi2 - calorieDeficit
            console.log(Math.floor(dailyClr))
          } else {
            const dailyClr = BMRandActi2
            console.log(Math.floor(dailyClr))
          }
        } else if (userData.profile.activitie === 'Very Active') {
          const BMRandActi3 = BMRWomen * 1.725
          if (userData.profile.weightGoal > userData.profile.weight) {
            const wiegh = userData.profile.weightGoal - userData.profile.weight
            // const kgOfMonth = 1 or 0.5
            const calorieDeficit = 0.071 * 7100
            const dailyClr = BMRandActi3 + calorieDeficit
            console.log(Math.floor(dailyClr))
          } else if (userData.profile.weightGoal < userData.profile.weight) {
            const wiegh = userData.profile.weight - userData.profile.weightGoal
            // const kgOfMonth = 1 or 0.5
            const calorieDeficit = 0.071 * 7100
            const dailyClr = BMRandActi3 - calorieDeficit
            console.log(Math.floor(dailyClr))
          } else {
            const dailyClr = BMRandActi3
            console.log(Math.floor(dailyClr))
          }
        }
      }
    } else {
      console.log('wait')
    }
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/login/login')
        setUserData(response.data)
        // console.log(response.data)
      } catch (error) {
        console.log(error, '   zmr ')
      }
    }
    // Call the fetchUserData function when the component mounts
    fetchUserData()
  }, [])
  console.log('set  ', userData)
  return (
    <div className="pt-28">
      <div className="bg-red-400 py-5 relative -z-20">
        <FcHome className="absolute w-14 h-14 left-24 top-1 -z-10 opacity-60" />
        <h1 className="ml-32 font-extrabold font-serif">MY HOME</h1>
      </div>
      <div className="m-20 mr-80">
        <div className="flex bg-lime-300 justify-between h-11 px-4 items-center">
          <h1>Your Daily Summary</h1>
          <div className="flex">
            <h1 className="mr-3">1</h1>
            <span>DAY STREAK</span>
          </div>
        </div>
        <div className="flex bg-purple-400 p-6 justify-around items-center">
          <div>
            <Image src={img} alt="food" width={110} height={140} />
            <div className="flex items-center justify-between m-2">
              <div>
                <h1>
                  <span className="font-bold text-3xl">0</span> Kg
                </h1>
                <h1>GAINED</h1>
              </div>
              <VscNotebook />
            </div>
          </div>
          <div>
            <div className="flex justify-between ">
              <h1 className="text-3xl font-extrabold font-serif mr-3">2345</h1>
              <button className="py-2 px-6 border mx-3 font-semibold">
                Add Exercise
              </button>
              <Link href="/profile/food/addfood">
                <button className="py-2 px-6 border mx-3 font-semibold">
                  Add Food
                </button>
              </Link>
            </div>
            <div className="flex justify-between mt-7">
              <h1 className="w-5">2345 GOAL</h1>
              <h1 className="w-5">0 FOOD</h1>
              <h1 className="w-5">-</h1>
              <h1 className="w-5">0 EXERCISE</h1>
              <h1 className="w-5">=</h1>
              <h1 className="w-5">0 NET</h1>
            </div>
            <div className="mt-2">
              <input type="range" name="" id="" className="w-full " />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <VscNotebook />
        </div>
        <div>
          <h1>Don't forget to verify your email.</h1>
          <h1>We sent an email to:</h1>
          <h1>usernamer@gmail.com</h1>
        </div>
        <div></div>
      </div>
      <button
        onClick={logout}
        className="bg-orange-500 px-20 py-2 rounded-md mt-1 text-white font-bold"
      >
        LogOut
      </button>
      <Link href="/profile/pro">
        <button
          // onClick={fetchUserData}
          className="bg-orange-500 px-20 py-2 rounded-md mt-1 text-white font-bold"
        >
          my profile
        </button>
      </Link>
      <button
        onClick={dailyCalorie}
        className="bg-orange-500 px-20 py-2 rounded-md mt-1 text-white font-bold"
      >
        getClr
      </button>
    </div>
  )
}
