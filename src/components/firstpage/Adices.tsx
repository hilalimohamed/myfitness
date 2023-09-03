import Image from "next/image"
import img from "../../../public/spadri.png"
import img1 from "../../../public/spa.png"
import img2 from "../../../public/glog.png"
import {FaNewspaper} from "react-icons/fa"
import { MdOutlineSnowshoeing } from "react-icons/md"
import { VscNotebook } from "react-icons/vsc"

export default function Advices() {
  return (
    <div className="text-center">
      <p className="text-5xl font-black m-2">The Tools for Your Goals</p>
      <div className="px-28 mx-56 my-7">
        <p>
          Trying to lose weight, tone up, lower your BMI, or invest in your
          overall health? We give you the right features to get there.
        </p>
      </div>
      <div className="flex m-2 text-center">
        <div className="">
          <div className="m-2 flex justify-center">
            <VscNotebook className="text-orange-400 w-20 h-20" />
          </div>
          <p className="m-4 font-bold">Learn. Track. Improve.</p>
          <p className="m-3 px-24">
            Keeping a food diary helps you understand your habits and increases
            your likelihood of hitting your goals.
          </p>
        </div>
        <div>
          <div className="m-2 flex justify-center">
            <MdOutlineSnowshoeing className="text-orange-400 w-20 h-20" />
          </div>
          <p className="m-4 font-bold">Stay Motivated.</p>
          <p className="m-3 px-10">
            Join the World’s Largest Fitness Community for advice, tips, and
            support 24/7.
          </p>
        </div>
        <div>
          <div className="m-2  flex justify-center">
            <FaNewspaper className="text-orange-400 w-20 h-20" />
          </div>
          <p className="m-4 font-bold">Logging Simplified.</p>
          <p className="m-2 px-24">
            Scan barcodes, save meals and recipes, and use Quick Tools for fast
            and easy food tracking.
          </p>
        </div>
      </div>
    </div>
  )
}
