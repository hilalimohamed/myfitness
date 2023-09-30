import Link from 'next/link'
import { useEffect, useState } from 'react'
import List from '@/src/components/Store'
import { useRouter } from 'next/router'

export default function goals() {
  const router = useRouter()
  const addgoals = List((state: any) => state.addgoals)
  const arrr = List((state: any) => state.arr)
  const [thename, setThename] = useState('')
  const [error, setError] = useState('')
  useEffect(() => {
    const name: any = localStorage.getItem('theName')
    setThename(name)
  })

  const subm = (e: any) => {
    e.target.name = 'true'
    e.target.disabled = true
  }
  const check = () => {
    const chooseGoals = document.getElementsByName('true')
    if (chooseGoals.length > 0) {
      chooseGoals.forEach((e) => {
        addgoals(e.innerText)
      })
      router.push({
        pathname: '/account/create/goals/big-step',
        // query:{
        //   arrr,
        // }
      })
    } else {
      setError('khtar asahbi ')
    }
  }
  console.log(arrr)
  return (
    <div className="pt-24">
      <div className="pt-14 pb-12 rounded-lg shadow-2xl mx-96 flex-col justify-center text-center  ">
        <h1 className="font-bold text-xl">
          In the past, what have been your barriers to losing weight?.
        </h1>
        <p className="mt-3 mx-11 text-sm text-slate-500">
          Select all that apply.
        </p>
        <p>{error}</p>
        <div className="mt-7">
          <button
            onClick={subm}
            className="text-slate-700 py-3 w-96 text-center border-2 border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
          >
            Lack of time
          </button>
          <button
            onClick={subm}
            className="text-slate-700 py-3 w-96 text-center border-2 border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
          >
            The regimen was too hard to follow
          </button>
          <button
            onClick={subm}
            className="text-slate-700 py-3 w-96 text-center border-2 border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
          >
            Did not enjoy the food
          </button>
          <button
            onClick={subm}
            className="text-slate-700 py-3 w-96 text-center border-2 border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
          >
            Difficult to make food choices 
          </button>
          <button
            onClick={subm}
            className="text-slate-700 py-3 w-96 text-center border-2 border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
          >
            Social eating and events
          </button>
          <button
            onClick={subm}
            className="text-slate-700 py-3 w-96 text-center border-2 border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
          >
            Food gravings
          </button>
          <button
            onClick={subm}
            className="text-slate-700 py-3 w-96 text-center border-2 border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
          >
            Lack of progress
          </button>
        </div>
        <div className="pt-6 flex justify-around mx-10">
          <Link href="/account/create/input-name">
            <button className=" border-solid border-2 text-orange-500 border-orange-500 px-14 rounded py-3 font-semibold text-lg font-serif">
              BACK
            </button>
          </Link>
          <button
            className=" text-white bg-orange-500 px-14 rounded py-3 font-semibold text-lg font-serif"
            onClick={check}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}
