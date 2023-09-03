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

    // const find = document.getElementsByName('true')
    // if (find.length == 0) {
    //   setError('khtar chi 3 mn had l2ikhtiyarat')
    // } else {
    // }
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
        <div className="mt-7">
          <button
            onClick={subm}
            className="text-slate-700 py-3 w-96 text-center border-2 border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
          >
            Lose weight
          </button>
          <button
            onClick={subm}
            className="text-slate-700 py-3 w-96 text-center border-2 border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
          >
            Maintain weight
          </button>
          <button
            onClick={subm}
            className="text-slate-700 py-3 w-96 text-center border-2 border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
          >
            Gain weight
          </button>
          <button
            onClick={subm}
            className="text-slate-700 py-3 w-96 text-center border-2 border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
          >
            Gain muscule
          </button>
          <button
            onClick={subm}
            className="text-slate-700 py-3 w-96 text-center border-2 border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
          >
            Modify my diet
          </button>
          <button
            onClick={subm}
            className="text-slate-700 py-3 w-96 text-center border-2 border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
          >
            Manage stress
          </button>
          <button
            onClick={subm}
            className="text-slate-700 py-3 w-96 text-center border-2 border-slate-500 rounded mx-9 mb-2 hover:border-orange-500 hover:text-orange-500"
          >
            Increase step count
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
