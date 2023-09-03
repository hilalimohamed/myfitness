import Link from 'next/link'
import { useRouter } from 'next/router'
import List from '@/src/components/Store'
import { useEffect, useState } from 'react'
import { allOfList } from '@/src/type'

export default function bigStep() {
  const router = useRouter()
  const butt = () => {
    router.push('/account/create/goals/lose-weight/options')
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
  const timeWait = () => {
    if (arrr.length === 0) {
      setTheGoal('makhdamach')
      setToNext('hta hiya')
    } else
    // if (arrr === 'Lose weight' || 'Maintain weight' || 'Gain weight') {
    //   setTheGoal(
    //     'Did you know that tracking your food is a scientifically proven method to being successful? It’s called “self-monitoring” and the more consistent you are, the more likely you are to hit your goals.',
    //   )
    //   if (arrr === 'Lose weight') {
    //     setToNext('Lose weight')
    //   } else if (arrr === 'Maintain weight') {
    //     setToNext('Maintain weight')
    //   } else {
    //     setToNext('Gain weight')
    //   }
    // }
    if (arrr[1].goal === 'Lose weight') {
      setTheGoal(
        'Did you know that tracking your food is a scientifically proven method to being successful? It’s called “self-monitoring” and the more consistent you are, the more likely you are to hit your goals.',
      )
      setToNext('Lose weight')
    } else if (arrr[1].goal === 'Maintain weight') {
      setTheGoal(
        'Did you know that tracking your food is a scientifically proven method to being successful? It’s called “self-monitoring” and the more consistent you are, the more likely you are to hit your goals.',
      )
      setToNext('Maintain weight')
    } else if (arrr[1].goal === 'Gain weight') {
      setTheGoal(
        'Did you know that tracking your food is a scientifically proven method to being successful? It’s called “self-monitoring” and the more consistent you are, the more likely you are to hit your goals.',
      )
      setToNext('Gain weight')
    } else if (arrr[1].goal === 'Gain muscule') {
      setTheGoal(
        'Nutrition is critical to help you build muscle. Track your food to make sure you’re getting enough protein and carbs for optimal metabolism.',
      )
      setToNext('Gain muscule')
    } else if (arrr[1].goal === 'Modify my diet') {
      setTheGoal(
        'Tracking your food can help with modifying your diet. It increases awareness of what you’re eating and prompts you to be mindful.',
      )
      setToNext('Modify my diet')
    } else if (arrr[1].goal === 'Manage stress') {
      setTheGoal(
        'Stress management is key in support of a healthy mind and body. We’re here to help.',
      )
      setToNext('Manage stress')
    } else if (arrr[1].goal === 'Increase step count') {
      setTheGoal(
        'Health benefits of being more active include increasing your metabolism, keeping your joints healthy, and improving your mental outlook.',
      )
      setToNext('Increase step count')
    } else {
      setTheGoal("may be you didn't choose goals, or you didn't see them")
      setToNext('')
    }
    console.log('lmrd   ',arrr)
  }
  useEffect(() => {
    setTimeout(() => {
      timeWait()
    }, 10)
  }, [])

  // console.log('hh >> ',arrr)
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
