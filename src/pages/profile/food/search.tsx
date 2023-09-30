import { useRouter } from 'next/router'
import { useState } from 'react'
import { foodList } from '../../../allFood'
import { Item } from '@/src/type'
import axios from 'axios'

const SearchPage = () => {
  const router = useRouter()
  const { search } = router.query
  const { meal } = router.query
  const [value, setValue] = useState<any>(search || '')
  const [clickValues, setClickValues] = useState<Item | null>(null)
  const [selectedMeal, setSelectedMeal] = useState<any>(meal || '')

  // Filter food items based on the search query
  const filteredFoodList: Item[] = foodList.filter((food: any) =>
    food.name.toLowerCase().includes(value.toLowerCase()),
  )

  const handleItemClick = (clickedFood: Item) => {
    setClickValues(clickedFood)
  }
  const handleMealSelect = (meal: string) => {
    setSelectedMeal(meal)
  }
  const handleAddToDiary = async () => {
    // You can add your logic to add the selected food to the diary with the selected meal here.
    // For example, you can send a POST request to a server to save the data.
    console.log('Selected Food:', clickValues)
    console.log('Selected Meal:', selectedMeal)
    try {
      const res = await axios.post('/api/food/food', {
        mealtype: selectedMeal,
        name: clickValues?.name,
        // servings:,
        calories: clickValues?.calories,
        carbs: clickValues?.carbs,
        fat: clickValues?.fat,
        protein: clickValues?.protein,
        sodium: clickValues?.sodium,
        sugar: clickValues?.sugar,
      })
      return (
        console.log('meal  :  ', res.data.message),
        router.push('/profile/food/addfood')
      )
    } catch (error: any) {
      console.log('error h : >> ', error.message)
    }
  }

  return (
    <div className="pt-32">
      <div className="mx-28">
        <div className="">
          <h1 className="text-2xl font-bold ">Search Results</h1>
          <div className="w-full h-px bg-gray-500"></div>
          <p className="mt-2 font-semibold">
            Search our food database by name: {value}
          </p>
          <form className="w-1/2">
            {/* <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label> */}
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-hreen-500 "
                //  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500
                placeholder="Search food, drink..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 "
                // dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-700
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="flex gap-10">
          <div className="overflow-auto h-64 w-1/2 border border-gray-300 mt-10 rounded-lg">
            {filteredFoodList.map((food, index) => (
              <div
                className="border-b mx-3 hover:bg-slate-100 hover:border-b hover:border-gray-400 hover:scale-105 transition-transform ease-in-out cursor-pointer"
                key={index}
                onClick={() => handleItemClick(food)}
              >
                <h2 className="text-orange-400 text-xs py-2 ">{food.name}</h2>
                <p className="text-xs pb-1"> {food.calories} Calories</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-slate-600 w-1/2">
            {/* <h1></h1>
            <div>
              <input type="number" name={clickValues?.name} id={clickValues?.name}/>
              <h5>servings of</h5>
              <input type="number" name={clickValues?.name} id={clickValues?.name} value={}/>
            </div>
            <h1>To which meal?</h1>
            <select name="brekfast" id=""></select>
            <button>Add Food To Diary</button> */}
            <h1></h1>
            <div>
              {/* Input for servings */}
              <input
                type="number"
                name={clickValues?.name}
                id={clickValues?.name}
              />
              <h5>servings of {clickValues?.name}</h5>
              {/* Input for selecting meal */}
              <select
                name="meal"
                id="meal"
                onChange={(e) => handleMealSelect(e.target.value)}
              >
                <option value="">Select a meal</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snacks">Snack</option>
              </select>
              <button
                onClick={handleAddToDiary}
                disabled={!clickValues || !selectedMeal}
                className="bg-amber-400"
              >
                Add Food To Diary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage
