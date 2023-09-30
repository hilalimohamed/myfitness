import Link from 'next/link'
import { useRouter } from 'next/router'
import List from '@/src/components/Store'
import { useEffect, useState } from 'react'
import { allOfList } from '@/src/type'

export default function bigStep() {
  const router = useRouter()
  const butt = () => {
    router.push('/account/create/activity-level')
  }

  // useEffect(() => {
  //   const {
  //     query: { arrr },
  //   } = router
  //   console.log('lkhr ', arrr1)
  // }, [])

  const arrr:allOfList[] = List((state: any) => state.arr)
  const [theGoal, setTheGoal] = useState('')
  const [toNext, setToNext] = useState('')
  
  // useEffect(()=>{
  //   const loc = localStorage.getItem('selectedOptions')
  //   if (loc) {
  //     console.log('yes')
  //   } else {
  //     // router.push('/')
  //     console.log('no')
  //   }

  // })

  return (
    <div className="pt-24">
      <div className="pt-14 pb-12 rounded-lg shadow-2xl mx-96 flex-col justify-center text-center  ">
        <h1 className="font-bold text-xl">
          Great! You’ve just taken a big step on your journey.
        </h1>
        {/* {arrr1} */}
        <p className="text-slate-500 pt-3 px-2 text-sm">{theGoal}</p>
        <p className="text-slate-500 pt-5">
          Now, let’s talk about your goal to {toNext} .
        </p>
        <div className="pt-36 flex justify-around mx-10">
          <Link href="/account/create/goals">
            <button className=" border-solid border-2 text-orange-500 border-orange-500 px-14 rounded py-3 font-semibold text-lg font-serif">
              BACK
            </button>
          </Link>
          <button
            className=" text-white bg-orange-500 px-14 rounded py-3 font-semibold text-lg font-serif"
            onClick={butt}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}
