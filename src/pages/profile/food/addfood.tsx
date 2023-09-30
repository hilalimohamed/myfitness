//     <div className="pt-28">
//       <div className="w-3/4">
//         <div>
//           <div>
//             <h1>Your Food Diary For:</h1>
//             <div>
//               <button>left</button>
//               <div>Tuesday, September 19, 2023</div>
//               <button>right</button>
//             </div>
//           </div>
//           <div>
//             <span>---------------------------------------</span>
//           </div>
//         </div>

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import FoodDiaryTable from '@/src/components/food/FoodDiaryTable'
import axios from 'axios'
import { FoodItem, UserData } from '@/src/type'

export default function AddFood() {
  const router = useRouter()
  const [selectedMeal, setSelectedMeal] = useState<string>('Breakfast')
  const [foodData, setFoodData] = useState<UserData | null>(null)

  const handleMealClick = (meal: string) => {
    setSelectedMeal(meal)
    router.push(`/profile/food/add_to_diary?meal=${meal}`)
  }



  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/login/login')
        setFoodData(response.data)
        console.log(response.data)
      } catch (error) {
        console.error(error, '   zmr ')
      }
    }
    // Call the fetchUserData function when the component mounts
    fetchUserData()
  }, [])



  return (
    <div className="pt-20">
      <div id="Breakfast" className="p-5 flex justify-start">
        <button
          onClick={() => handleMealClick('Breakfast')}
          className="text-sm text-blue-600 hover:text-blue-500 cursor-pointer h-5 border-r-2 border-blue-600 pr-1"
        >
          Add <span className='text-10px font-semibold'>Breakfast</span>
        </button>
        <FoodDiaryTable meal={'Breakfast'} foodData={foodData} />
      </div>
      <div id="Lunch" className="p-5 flex justify-start">
        <button
          onClick={() => handleMealClick('Lunch')}
          className="text-sm text-blue-600 hover:text-blue-500 cursor-pointer h-5 border-r-2 border-blue-600 pr-1"
        >
          Add Lunch
        </button>
        <FoodDiaryTable meal={'Lunch'} foodData={foodData} />
      </div>
      <div id="Dinner" className="p-5 flex justify-start">
        <button
          onClick={() => handleMealClick('Dinner')}
          className="text-sm text-blue-600 hover:text-blue-500 cursor-pointer h-5 border-r-2 border-blue-600 pr-1"
        >
          Add Dinner
        </button>
        <FoodDiaryTable meal={'Dinner'} foodData={foodData} />
      </div>
      <div id="Snacks" className="p-5 flex justify-start">
        <button
          onClick={() => handleMealClick('Snacks')}
          className="text-sm text-blue-600 hover:text-blue-500 cursor-pointer h-5 border-r-2 border-blue-600 pr-1"
        >
          Add Snacks
        </button>
        <FoodDiaryTable meal={'Snacks'} foodData={foodData} />
      </div>
    </div>
  )
}
