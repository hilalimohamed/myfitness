// pages/profile/food/[meal].tsx

import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function MealPage () {
  const [searchValue, setSearchValue] = useState<any>('')
  const router = useRouter()
  const { meal } = router.query
  const sendValue = () => {
    router.push({
      pathname: '/profile/food/search',
      query: {
        search: searchValue,
        meal: meal,
      },
    })
  }
  console.log(searchValue)
  return (
    <div className="p-36">
      <div>
        <h1>Add Food To {meal}</h1>
        <span>-------------------</span>
        <h4>Search our food database by name </h4>
        <div>
          <input
            type="text"
            name="search"
            id="search"
            value={searchValue}
            placeholder="Search..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={sendValue} className="bg-amber-400">
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

