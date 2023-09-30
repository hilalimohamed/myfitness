import Link from 'next/link'
import { BiLogIn } from 'react-icons/bi'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Navbar = () => {
  // const [existingCookies, setexistingCookies] = useState<string | null>(null)
  // useEffect(() => {
  //   const cookie = Cookies.get('token')
  //   if (cookie) {
  //     setexistingCookies(cookie)
  //   } else {
  //     setexistingCookies(null)
  //   }
  // })

  return (
    <div className=" shadow-xl fixed w-full bg-slate-50 z-50">
      <div className="flex justify-around py-5">
        <Link href="/">
          <span className="font-bold text-2xl text-orange-600 cursor-pointer">
            MyFitness &#129351;
          </span>
        </Link>
        {/* {existingCookies ? ( */}
          {/* <Link href="/account/create/login">
            <div className="font-bold text-lgl cursor-pointer flex">
              <BiLogIn className="mx-1 text-lg" />
              Log Out
            </div>
          </Link> */}
        {/* ) : ( */}
          <Link href="/account/create/login">
            <div className="font-bold text-lgl cursor-pointer flex">
              <BiLogIn className="mx-1 text-lg" />
              Log In
            </div>
          </Link>
        {/* )} */}
      </div>
    </div>
  )
}
export default Navbar
