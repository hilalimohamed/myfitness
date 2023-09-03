import Link from "next/link"
import { BiLogIn } from "react-icons/bi"

export default function Navbar() {
  return (
    <div className=" shadow-xl fixed w-full bg-slate-50 z-50">
      <div className="flex justify-around py-5">
        <Link href="/">
          <span className="font-bold text-2xl text-orange-600 cursor-pointer">
            MyFitness &#129351; 
          </span>
        </Link>
        <Link href="/account/create/login">
          <div className="font-bold text-lgl cursor-pointer flex">
            <BiLogIn className="mx-1 text-lg" />
            Log In
          </div>
        </Link>
      </div>
    </div>
  )
}
