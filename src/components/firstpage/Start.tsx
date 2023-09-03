import Image from "next/image"
import img from "../../../public/foodimg.jpg"
import Link from "next/link"

export default function Start() {
  return (
    <>
      <div className="flex items-center">
        <div className="m-28">
          <p className="text-5xl font-black">
            Food is an important part of a balanced diet.
          </p>
          <p className="py-5">
            Want to eat more mindfully? Track meals, learn about your habits,
            and reach your goals with MyFitnessPal.
          </p>
          <Link href="/account/create/input-name">
            <button className="bg-orange-500 mt-2 font-bold text-center text-white px-11 py-3 text-xl rounded cursor-pointer">
              CLICK TO START
            </button>
          </Link>
        </div>
        <div className="-z-10 py-40 ">
          <Image src={img} alt="food" width="1400" height="1120" />
        </div>
      </div>
    </>
  )
}
