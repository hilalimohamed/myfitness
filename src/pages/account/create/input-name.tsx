import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import List from '@/src/components/Store'

export default function inputName() {
  // const addProduct = List((state: any) => state.)
  const addlist = List((state: any) => state.addlist)
  const arrr = List((state: any) => state.arr)

  const [firstname, setFirstname] = useState('')
  // const [account, setAccount] = useState({})
  const [error, setError] = useState('')
  const router = useRouter()
  const subm = (e: any) => {
    setFirstname(e.target.value)
  }
  const butt = () => {
    if (firstname === '') {
      setError('ktb chi smiya')
    } else {
      router.push('/account/create/goals')
      localStorage.setItem('theName', firstname)
      addlist(firstname)
    }
  }

  return (
    <div className="pt-24">
      <div className="pt-14 pb-12 rounded-lg shadow-2xl mx-96 flex-col justify-center text-center  ">
        <h1 className="font-bold text-xl">What’s your first name?</h1>
        <p className="mt-3 text-slate-500">We’re happy you’re here.</p>
        <p className="text-slate-500">Let’s get to know a little about you.</p>
        <h4>{error}</h4>
        <div className="relative mt-11 flex-col justify-center">
          <legend className="text-slate-500 font-semibold text-center absolute left-1/4 -top-3 bg-white px-1">
            First Name
          </legend>
          <input
            type="text"
            value={firstname}
            onChange={subm}
            placeholder="name"
            className="border-2 border-solid font-semibold text-slate-500 rounded text-lg border-slate-500 py-3 pl-3 w-3/4"
          />
        </div>
        <div className="pt-36 flex justify-around mx-10">
          <Link href="/">
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
