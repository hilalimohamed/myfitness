import React, { useState } from 'react'
import List from '@/src/components/Store'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function demographic2() {
  const arrr = List((state: any) => state.arr)
  const addDemogh2 = List((state: any) => state.addDemogh2)
  const router = useRouter()
  const [values, setvalues] = useState({
    tall: '',
    weight: '',
    weightGoal: '',
    tallError: '',
    weightError: '',
    weightGoalError: '',
  })

  const onChangeValue = (e: any) => {
    const nameValue = e.target.name
    // setvalues({ ...values, [nameValue]: e.target.value })
    if (nameValue === 'tall' && e.target.value < 100) {
      setvalues({
        ...values,
        tallError: 'Height must exceed 66 centimeters',
        [nameValue]: e.target.value,
      })
    } else if (nameValue === 'weight' && e.target.value < 30) {
      setvalues({
        ...values,
        weightError: 'weight must exceed 30 killograms',
        [nameValue]: e.target.value,
      })
    } else if (nameValue === 'weightGoal' && e.target.value < 30) {
      setvalues({
        ...values,
        weightGoalError: 'weight must exceed 30 killograms',
        [nameValue]: e.target.value,
      })
    } else if (nameValue === 'tall' && e.target.value >= 100) {
      setvalues({
        ...values,
        tallError: '',
        [nameValue]: e.target.value,
      })
    } else if (nameValue === 'weight' && e.target.value >= 30) {
      setvalues({
        ...values,
        weightError: '',
        [nameValue]: e.target.value,
      })
    } else if (nameValue === 'weightGoal' && e.target.value >= 30) {
      setvalues({
        ...values,
        weightGoalError: '',
        [nameValue]: e.target.value,
      })
    }
  }
  const isValidIt = () => {
    if (
      parseInt(values.tall) < 100 ||
      values.tall === '' ||
      parseInt(values.weight) < 30 ||
      values.weight === '' ||
      parseInt(values.weightGoal) < 30 ||
      values.weightGoal === ''
    ) {
      console.log('wamakhdamach')
    } else {
      addDemogh2(
        parseInt(values.tall),
        parseInt(values.weight),
        parseInt(values.weightGoal),
      )
      router.push('/account/create/register')
    }
  }
  //   console.log(arrr)
  return (
    <div className="pt-28">
      <div className="pt-12 pb-12 rounded-lg shadow-2xl mx-96 flex-col justify-center">
        <div className="ml-12 mb-4 relative">
          <h1 className="font-bold text-xl mb-3">How tall are you ?</h1>
          <input
            type="number"
            max={222}
            min={0}
            placeholder="0"
            name="tall"
            id="tall"
            className="pr-32 px-4 py-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus-within:border-orange-500 focus-within:border-2 outline-none border-2 border-slate-200 rounded"
            onChange={onChangeValue}
          />
          <h2 className="absolute right-1/2 bottom-1/3 text-lg text-slate-500 font-normal mr-2">
            cm
          </h2>
          <h6 className="absolute top-2/3 text-red-600 text-xs font-semibold">
            {values.tallError}
          </h6>
          <h1 className="text-base text-orange-500 mb-3">
            Change units to feet
          </h1>
        </div>
        <div className="ml-12 mb-4 relative">
          <h1 className="font-bold text-xl mb-1">How mush do you weight ?</h1>
          <h1 className="text-sm mb-2 text-slate-500">
            It's OK to estimate. You can update this later.
          </h1>
          <input
            type="number"
            placeholder="0"
            max={200}
            min={45}
            name="weight"
            id="weight"
            className="pr-32 px-4 py-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus-within:border-orange-500 focus-within:border-2 outline-none border-2 border-slate-200 rounded"
            onChange={onChangeValue}
          />
          <h2 className="absolute right-1/2 bottom-1/4 mb-1 text-lg text-slate-500 font-normal mr-2">
            kg
          </h2>
          <h6 className="absolute top-3/4 text-red-600 text-xs font-semibold">
            {values.weightError}
          </h6>
          <h1 className="text-base text-orange-500 mb-3">
            Change units to pounds
          </h1>
        </div>
        <div className="ml-12 relative">
          <h1 className="font-bold text-xl mb-1">what's your goal weight ?</h1>
          <h1 className="text-sm mb-2 text-slate-500 mr-8">
            Don't worry. This doesn't affect your daily calorie goal and you can
            always change it later.
          </h1>
          <input
            placeholder="0"
            type="number"
            max={200}
            min={45}
            name="weightGoal"
            id="weightGoal"
            className="pr-32 px-4 py-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus-within:border-orange-500 focus-within:border-2 outline-none border-2 border-slate-200 rounded"
            onChange={onChangeValue}
          />
          <h2 className="absolute right-1/2 top-2/3 text-lg text-slate-500 font-normal mr-2">
            kg
          </h2>
          <h6 className="absolute top-full text-red-600 text-xs font-semibold">
            {values.weightGoalError}
          </h6>
          {/* <h1 className="text-base text-orange-500 mb-3">
            Change units to pounds
          </h1> */}
        </div>
        <div className="pt-7 flex justify-around mx-10">
          <Link href="/account/create/demographic-1">
            <button className=" border-solid border-2 text-orange-500 border-orange-500 px-14 rounded py-3 font-semibold text-lg font-serif">
              BACK
            </button>
          </Link>
          <button
            onClick={isValidIt}
            className="text-white bg-orange-500 px-14 rounded py-3 font-semibold text-lg font-serif"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}
