import Link from 'next/link'
import { useEffect, useState } from 'react'
import List from '@/src/components/Store'
import { useRouter } from 'next/router'

export default function goals() {
  const router = useRouter()
  const addgoals = List((state: any) => state.addgoal)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [thename, setThename] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const name: any = localStorage.getItem('theName')
    setThename(name)
  })
  useEffect(() => {
    // Save selectedOptions to localStorage whenever it changes
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions))
  }, [selectedOptions])

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (
      selectedOptions.includes('Lose weight') &&
      (value === 'Maintain weight' || value === 'Gain weight')
    ) {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== 'Lose weight'),
      )
      setSelectedOptions([ value])
    } else if (
      selectedOptions.includes('Maintain weight') &&
      (value === 'Lose weight' || value === 'Gain weight')
    ) {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== 'Maintain weight'),
      )
      setSelectedOptions([ value])
    } else if (
      selectedOptions.includes('Gain weight') &&
      (value === 'Maintain weight' || value === 'Lose weight')
    ) {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== 'Gain weight'),
      )
      setSelectedOptions([ value])
    } else if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value))
    } else {
      setSelectedOptions([...selectedOptions, value])
    }
  }
  console.log(selectedOptions)

  const check = () => {
    let seldOptnLgth: number = selectedOptions.length
    if (seldOptnLgth === 0) {
      setError('Choose at least one option')
    } else if (seldOptnLgth > 3) {
      setError('Choose a maximum of 3 options')
    } else {
      addgoals(selectedOptions)
      router.push({
        pathname: '/account/create/goals/big-step',
      })
    }
  }
  return (
    <div className="pt-24">
      <div className="pt-14 pb-12 rounded-lg shadow-2xl mx-96 flex-col justify-center text-center  ">
        <h1 className="font-bold text-xl">
          Thanks {thename}! Now for your goals.
        </h1>
        <p className="mt-3 mx-11 text-sm text-slate-500">
          Select up to 3 that are important to you, including one weight goal.
        </p>
        <p>{error}</p>
        <div className="mr-2">
          <select
            className={`mt-7 outline-none scrollbar-none`}
            multiple
            size={4}
            onChange={handleOptionChange}
            value={selectedOptions}
          >
            <option
              value="Lose weight"
              className="text-slate-700 py-3 w-80 text-center border-2 cursor-pointer border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
            >
              Lose weight
            </option>
            <option
              value="Maintain weight"
              className="text-slate-700 py-3 w-80 text-center border-2 cursor-pointer border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
            >
              Maintain weight
            </option>
            <option
              value="Gain weight"
              className="text-slate-700 py-3 w-80 text-center border-2 cursor-pointer border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
            >
              Gain weight
            </option>
            <option
              value="Gain muscule"
              className="text-slate-700 py-3 w-80 text-center border-2 cursor-pointer border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
            >
              Gain muscule
            </option>
            <option
              value="Modify my diet"
              className="text-slate-700 py-3 w-80 text-center border-2 cursor-pointer border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
            >
              Modify my diet
            </option>
            <option
              value="Manage stress"
              className="text-slate-700 py-3 w-80 text-center border-2 cursor-pointer border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
            >
              Manage stress
            </option>
            <option
              value="Increase step count"
              className="text-slate-700 py-3 w-80 text-center border-2 cursor-pointer border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
            >
              Increase step count
            </option>
          </select>
        </div>
        <div className="pt-6 flex justify-around mx-10">
          <Link href="/account/create/input-name">
            <button className=" border-solid border-2 text-orange-500 border-orange-500 px-14 rounded py-3 font-semibold text-lg font-serif">
              BACK
            </button>
          </Link>
          <button
            className={`text-white px-14 rounded py-3 font-semibold text-lg font-serif ${
              selectedOptions.length == 0 || selectedOptions.length > 3
                ? 'bg-orange-400'
                : 'bg-orange-500'
            }`}
            onClick={check}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}
