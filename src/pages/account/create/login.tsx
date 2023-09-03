import Link from "next/link"
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import Image from "next/image"
import img from "@/public/rghitimg.png"

export default function login() {
  return (
    <div className="pt-32">
      <div className="p-5 flex bg-orange-100 rounded-2xl mx-14">
        <div className="">
          <Image
            src={img}
            alt="login"
            width="700"
            height="650"
            className="rounded-2xl"
          />
        </div>
        <div className="px-9  w-3/5 rounded-2xl bg-orange-100">
          <div className="flex justify-end mt-1 font-semibold">
            <p>
              Not a member ?{" "}
              <span className="text-orange-500">
                <Link href="/account/create/register">Register Now</Link>{" "}
              </span>{" "}
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold mt-7 mb-2">Hello !</h1>
            <p className="mb-1">wellcome here </p>
            <div className="text-center mt-3 mb-2  ">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md"
              />
            </div>
            <div className="text-center mb-3">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="px-4 py-2 rounded-md"
              />
            </div>
            <button className="bg-orange-500 px-20 py-2 rounded-md mt-1 text-white font-bold">
              Sign In
            </button>
            <h5 className="mt-1">Or continue with</h5>
          </div>
          <div className="flex mt-4 justify-center ">
            <div className="mx-4 text-2xl bg-white p-2 rounded-full shadow-2xl cursor-pointer">
              <FcGoogle />
            </div>
            <div className="mx-4 text-2xl bg-white p-2 rounded-full text-blue-700 shadow-2xl cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="mx-4 text-2xl bg-white p-2 rounded-full text-sky-500 shadow-2xl cursor-pointer">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
