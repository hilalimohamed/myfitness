import { UserData } from '@/src/type'
import axios from 'axios'
import React from 'react'
import { MdDelete } from 'react-icons/md'
import { TiDocumentDelete } from 'react-icons/ti'

interface FoodDiaryTableProps {
  meal: string
  foodData: UserData | null
}

const FoodDiaryTable: React.FC<FoodDiaryTableProps> = ({ meal, foodData }) => {
  const deletedItem = async (id: any, mealId: any) => {
    try {
      const response = await axios.delete('/api/food/food', {
        data: {
          id: id,
          mealId: mealId,
        },
      })
      console.log(response.data)
      window.location.reload()
    } catch (error) {
      console.log('THE Error : >> ', error)
    }
  }

  console.log(
    'fooood  ',
    foodData?.meals
      ?.find((meala) => meala.mealtype === meal)
      ?.items?.map((item) => item.name),
  )

  return (
    <div id={meal} className="mx-8 shadow-slate-400 shadow-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="w-80 py-2 text-left text-xs font-medium text-gray-500  tracking-wider border-r-2 border-t-2 border-gray-400">
              name of {meal} food
            </th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500  tracking-wider border-r-2 border-gray-300">
              calories kcal
            </th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500  tracking-wider border-r-2 border-gray-300">
              carbs g
            </th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500  tracking-wider border-r-2 border-gray-300">
              Fat g
            </th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500  tracking-wider border-r-2 border-gray-300">
              Protein g
            </th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500  tracking-wider border-r-2 border-gray-300">
              Sodium mg
            </th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500  tracking-wider border-r-2 border-gray-300">
              Sugar g
            </th>
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500  tracking-wider border-r-2 border-gray-300">
              <TiDocumentDelete className=''/>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {foodData?.meals
            ?.find((meala) => meala.mealtype === meal)
            ?.items?.map((item, index) => (
              <tr key={index}>
                <td className="w-80 px-1 py-1 whitespace-nowrap text-center text-10px border-r-2 border-gray-200">
                  {item.name}
                </td>
                <td className="px-1 py-1 whitespace-nowrap text-center text-xs border-r-2 border-gray-200">
                  {item.calories}
                </td>
                <td className="px-1 py-1 whitespace-nowrap text-center text-xs border-r-2 border-gray-200">
                  {item.carbs}
                </td>
                <td className="px-1 py-1 whitespace-nowrap text-center text-xs border-r-2 border-gray-200">
                  {item.fat}
                </td>
                <td className="px-1 py-1 whitespace-nowrap text-center text-xs border-r-2 border-gray-200">
                  {item.protein}
                </td>
                <td className="px-1 py-1 whitespace-nowrap text-center text-xs border-r-2 border-gray-200">
                  {item.sodium}
                </td>
                <td className="px-1 py-1 whitespace-nowrap text-center text-xs border-r-2 border-gray-200">
                  {item.sugar}
                </td>
                <td className="px-1 py-1 whitespace-nowrap text-center text-xs border-r-2 border-gray-200">
                  <button
                    onClick={()=>deletedItem(item.id,item.mealId)}
                    className="text-red-400 hover:text-red-600"
                  >
                    <MdDelete className="text-center" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
export default FoodDiaryTable
