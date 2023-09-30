import React, { useState, useEffect } from 'react'
import img from '@/public/images/profile.jpeg'
import img1 from '@/public/rghitimg.png'
import Image from 'next/image'
import { IoEarthOutline, IoEarthSharp } from 'react-icons/io5'
import { MdWorkHistory } from 'react-icons/md'
import { FcBusinessman,FcBusinesswoman } from 'react-icons/fc'
import { LiaBirthdayCakeSolid } from 'react-icons/lia'
import { GiBodyHeight, GiWeightLiftingUp } from 'react-icons/gi'
import { BiRun } from 'react-icons/bi'
import {
  BsFillCameraFill,
  BsFillPersonVcardFill,
  BsPersonBoundingBox,
} from 'react-icons/bs'
import axios from 'axios'
import { UserData } from '@/src/type'
import UpdateForm from '@/src/components/UpdateForm'
import ImageUploadForm from '@/src/components/imageForm/ImageUploadForm'

export default function pro() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [hidden, setHidden] = useState<string>('hidden')
  const [monthNames, setMonthNames] = useState([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ])
  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        // Make a GET request to the /api/user route with the token
        const response = await axios.get('/api/login/login')

        // Set the user data in state
        setUserData(response.data)
        // console.log(response.data)
      } catch (error) {
        console.log('error >>', error)
      }
    }

    // Call the fetchUserData function when the component mounts
    fetchUserData()
  }, [])
  const blockFormUpdate = () => {
    setHidden('block')
  }
  const HiddenFormUpdate = (ev: any) => {
    setHidden('hidden')
  }

  // upload Image
  const handleImageUpload = async (imageFile: File | null) => {
    if (!imageFile) {
      console.error('No image file selected.')
      return
    }

    try {
      const formData = new FormData()
      formData.append('image', imageFile)
      const response = await axios.post('/api/uploadImg/upload', formData)

      if (response.status === 200) {
        console.log('Image uploaded successfully.', response.data)
        try {
          const respons = await axios.put('/api/uploadImg/saveImg', {
            imagePath: response.data.message,
          })
          // if (response.data.message === 'update') {
          // }
          console.log('save img to : ', respons.data)
        } catch (error) {
          console.error(error)
        }

        // Fetch the updated user data or perform any necessary actions
      } else {
        console.error('Image upload failed.')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const birthdate = userData?.profile.birthdate
  console.log('tarikh  : > ', birthdate)
  return (
    <div
      className="p-12 bg-fixed bg-contain"
      style={{
        backgroundImage:
          "url('https://tailwind.build/placeholders/pictures/office.jpg')",
      }}
    >
      {userData ? (
        <div className="mt-12 flex justify-around bg-white bg-opacity-80 items-center relative">
          <div className={`absolute z-40 mb-20 ${hidden}`}>
            <div className="relative">
              <UpdateForm userData={userData} />
              <button
                onClick={HiddenFormUpdate}
                className="absolute right-0 bottom-0 mx-6 my-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
              >
                cancel
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 m-4">
            <button
              onClick={blockFormUpdate}
              className="bg-green-800 px-4 py-2 rounded-xl text-white font-medium"
            >
              Edit Profile
            </button>
          </div>
          <div className=" mt-14 mb-12">
            <h1 className="font-bold text-3xl">{userData.username}</h1>
            <div className="my-4 h-1 w-full bg-green-500"></div>
            <div className="flex items-center">
              <MdWorkHistory className="mr-3 text-xl text-green-800" />
              <h2 className="font-semibold">Waht you do</h2>
            </div>
            <div className="flex items-center mt-1">
              <IoEarthSharp className="mr-3 text-xl text-green-800" />
              <h3>{userData.profile.country} - 25.0000° N 71.0000° W</h3>
            </div>
            <div className="mt-2 flex items-center">
              {userData.profile.sex === 'Male' ? (
                <FcBusinessman className="mr-3 text-2xl" />
              ) : (
                <FcBusinesswoman className="mr-3 text-2xl" />
              )}
              <div>
                <h5>{userData.profile.sex}</h5>
                <h5 className="text-xs text-gray-700">Gender</h5>
              </div>
            </div>
            <div className="mt-2 flex items-center">
              <LiaBirthdayCakeSolid className="text-2xl mr-3 text-green-800" />
              <div>
                <h5>
                  <span className="font-medium">
                    {
                      monthNames[
                        new Date(userData?.profile.birthdate).getMonth()
                      ]
                    }
                  </span>{' '}
                  {new Date(userData?.profile.birthdate).getDate()}{' '}
                  {new Date(userData?.profile.birthdate).getFullYear()}
                </h5>
                <h5 className="text-xs text-gray-700">Birth date/year</h5>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 rounded-xl px-4 py-3 bg-gray-100 shadow-xl">
              <div className="flex items-center">
                <GiBodyHeight className="mr-3 text-2xl text-green-800" />
                <div>
                  <h3 className="font-semibold">{userData.profile.tall} cm</h3>
                  <h3 className="text-xs text-gray-700">Tall</h3>
                </div>
              </div>
              <div className="flex items-center">
                <GiWeightLiftingUp className="mr-3 text-2xl text-green-800" />
                <div>
                  <h3 className="font-semibold">
                    {userData.profile.weight} kg
                  </h3>
                  <h3 className="text-xs text-gray-700">Weight</h3>
                </div>
              </div>
              <div className="flex items-center">
                <GiWeightLiftingUp className="mr-3 text-2xl text-green-800" />
                <div>
                  <h3 className="font-semibold">
                    {userData.profile.weightGoal} kg
                  </h3>
                  <h3 className="text-xs text-gray-700">Weight Goal</h3>
                </div>
              </div>
              <div className="flex items-center">
                <BiRun className="mr-3 text-2xl text-green-800" />
                <div>
                  <h3 className="font-semibold">
                    {userData.profile.activitie}
                  </h3>
                  <h3 className="text-xs text-gray-700">Your Activity</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ImageUploadForm onSubmit={handleImageUpload} userData={userData} />
          </div>
        </div>
      ) : (
        <div className="mt-12 flex justify-around bg-white bg-opacity-80 items-center relative">
          <div className="absolute bottom-0 right-0 m-4">
            <button className="bg-green-800 px-12 py-2 rounded-xl text-white font-medium">
              <div
                className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </button>
          </div>
          <div className=" mt-14 mb-12">
            <h1 className="font-bold text-3xl">Your Name</h1>
            <div className="my-4 h-1 w-full bg-green-500"></div>
            <div className="flex items-center">
              <MdWorkHistory className="mr-3 text-xl text-green-800" />
              <h2 className="font-semibold">Waht you do</h2>
            </div>
            <div className="flex items-center mt-1">
              <IoEarthSharp className="mr-3 text-xl text-green-800" />
              <h3>Your Location - 25.0000° N 71.0000° W</h3>
            </div>
            <div className="mt-2 flex items-center">
              <FcBusinessman className="mr-3 text-2xl" />
              <div>
                <h5>your gender</h5>
                <h5 className="text-xs text-gray-700">Gender</h5>
              </div>
            </div>
            <div className="mt-2 flex items-center">
              <LiaBirthdayCakeSolid className="text-2xl mr-3 text-green-800" />
              <div>
                <h5>
                  <span className="font-medium">Month</span> Day Year
                </h5>
                <h5 className="text-xs text-gray-700">Birth date/year</h5>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 rounded-xl px-4 py-3 bg-gray-100 shadow-xl w-full h-24">
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></div>
            </div>
          </div>
          <div className="mr-6 relative">
            <div className="h-48 w-48 overflow-hidden rounded-full border-2 border-green-800">
              <Image
                src={img}
                alt="cover photo"
                height={200}
                width={200}
                className="h-full"
              />
            </div>
            <h1 className="font-semibold text-xl">About Me</h1>
            <p className="mr-4 text-xs">
              About Me erfg fgh edfghjn zsdefrgthjkl dfgh
            </p>
            <div className="bg-slate-200 absolute top-2/3 left-5 p-2 rounded-full border border-green-800 cursor-pointer">
              <BsFillCameraFill className="text-xl text-green-700" />
            </div>
            {/* <p className='text-sm mx-32'>About Me sdfvdf dfg dfg erthy ezqrtshdy erzthdy regsthdysfsdebt ezfq ezbtz ezebtz ezfqebt rzqebt zrqeb vqrbaet vrbaet vraebt vrbt vraeb vraebt</p> */}
          </div>
        </div>
      )}
    </div>
    // BsFillPersonVcardFill
  )
}
