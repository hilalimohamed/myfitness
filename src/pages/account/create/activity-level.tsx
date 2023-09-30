import Link from 'next/link'
import { useState } from 'react'
import List from '@/src/components/Store'
import { useRouter } from 'next/router'
import { allOfList } from '@/src/type'

export default function activityLevel() {
  const [selecteRadio, setSelecteRadio] = useState<string[]>([])
  const [error, setError] = useState('')
  const addActivity = List((state: any) => state.addActivity)
  const router = useRouter()

  const selectChoise = (radio: any) => {
    const selectedChoice = radio.target.value
    setSelecteRadio([selectedChoice])
  }
  const toNext = () => {
    if (selecteRadio.length === 0) {
      setError('Choose at least one option')
    } else {
      addActivity(selecteRadio[0])
      router.push('/account/create/demographic-1')
    }
  }
  return (
    <div className="pt-28">
      <div className="pt-14 pb-12 rounded-lg shadow-2xl mx-96 flex-col justify-center">
        <h1 className="font-bold text-xl text-center">
          What is your baseline activity level?
        </h1>
        <p className="mt-3 mb-3 mx-11 text-sm text-slate-500 text-center">
          Not including workouts-we count that separately
        </p>
        <p>{error}</p>
        <div className="mr-2">
          <form className="overflow-y-scroll h-64 scrollbar-none">
            <div className="relative border-2 cursor-pointer border-slate-400 mx-3 rounded-md hover:border-orange-500 hover:border-2">
              <label htmlFor="Not Very Active" className="cursor-pointer">
                <h1 className="font-bold m-2 text-slate-600">
                  Not Very Active
                </h1>
                <p className="text-slate-500 mx-3 my-2">
                  Spend most of the day sitting (e.g., bankteller, desk jab)
                </p>
              </label>
              <input
                type="radio"
                id="Not Very Active"
                name="theActivitys"
                value="Not Very Active"
                className="absolute top-0 left-0 -z-10 h-full w-full appearance-none cursor-pointer rounded-none checked:bg-orange-200"
                onClick={selectChoise}
              />
            </div>
            <br></br>
            <div className="relative border-2 cursor-pointer border-slate-400 mx-3 rounded-md hover:border-orange-500 hover:border-2">
              <label htmlFor="Lightly Active" className="cursor-pointer">
                <h1 className="font-bold m-2 text-slate-600">Lightly Active</h1>
                <p className="text-slate-500 mx-3 my-2">
                  Spend a good part of the day on your feet (e.g., teacher,
                  salesperson)
                </p>
              </label>
              <input
                type="radio"
                id="Lightly Active"
                name="theActivitys"
                value="Lightly Active"
                className="absolute top-0 left-0 -z-10 h-full w-full appearance-none cursor-pointer rounded-none checked:bg-orange-200"
                onClick={selectChoise}
              />
            </div>
            <br></br>
            <div className="relative border-2 cursor-pointer border-slate-400 mx-3 rounded-md hover:border-orange-500 hover:border-2">
              <label htmlFor="Active" className="cursor-pointer">
                <h1 className="font-bold m-2 text-slate-600">Active</h1>
                <p className="text-slate-500 mx-3 my-2">
                  Spend a good part of the day doing some physical activity
                  (e.g., food server, postal carrier)
                </p>
              </label>
              <input
                type="radio"
                id="Active"
                name="theActivitys"
                value="Active"
                className="absolute top-0 left-0 -z-10 h-full w-full appearance-none cursor-pointer rounded-none checked:bg-orange-200"
                onClick={selectChoise}
              />
            </div>
            <br></br>
            <div className="relative border-2 cursor-pointer border-slate-400 mx-3 rounded-md hover:border-orange-500 hover:border-2">
              <label htmlFor="Very Active" className="cursor-pointer">
                <h1 className="font-bold m-2 text-slate-600">Very Active</h1>
                <p className="text-slate-500 mx-3 my-2">
                  Spend a good part of the day doing heavy physical activity
                  (e.g., bike messenger, carpenter)
                </p>
              </label>
              <input
                type="radio"
                id="Very Active"
                name="theActivitys"
                value="Very Active"
                className="absolute top-0 left-0 -z-10 h-full w-full appearance-none cursor-pointer rounded-none checked:bg-orange-200"
                onClick={selectChoise}
              />
            </div>
          </form>
          <div className="pt-9 flex justify-around mx-10">
            <Link href="/account/create/goals/big-step">
              <button className=" border-solid border-2 text-orange-500 border-orange-500 px-14 rounded py-3 font-semibold text-lg font-serif">
                BACK
              </button>
            </Link>
            <button
              className={`text-white bg-orange-500 px-14 rounded py-3 font-semibold text-lg font-serif `}
              onClick={toNext}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
