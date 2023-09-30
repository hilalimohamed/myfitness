// components/ImageUploadForm.js
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsFillCameraFill } from 'react-icons/bs'
import img from '@/public/images/profile.jpeg'
import { UserData } from '@/src/type'
import { useRouter } from 'next/router'

interface dataType {
  onSubmit: any
  userData: UserData | null
}

const ImageUploadForm: React.FC<dataType> = ({ onSubmit, userData }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedImage, setSelectedImage] = useState(
    `/images/${userData?.profile.imagePath}`,
  )
  const [block, setblock] = useState({
    svCnl: 'hidden',
    imgOpc: 'opacity-100',
  })

  const router = useRouter()

  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0])
    setSelectedImage(URL.createObjectURL(e.target.files[0]))
    console.log('change')
    setblock({ ...block, svCnl: 'block', imgOpc: 'opacity-30' })
  }

  const save = () => {
    onSubmit(selectedFile)
    // updateImgPath()
    setblock({ ...block, svCnl: 'hidden', imgOpc: 'opacity-100' })
    // window.location.reload()
  }

  const cancel = () => {
    setblock({ ...block, svCnl: 'hidden', imgOpc: 'opacity-100' })
    setSelectedFile(null)
    setSelectedImage(`/images/${userData?.profile.imagePath}`)
  }

  // const handleSubmit = (e: any) => {
  //   e.preventDefault()
  //   onSubmit(selectedFile)
  // }

  // const updateImgPath = async () => {
  //   try {
  //     const response = await axios.put('/api/uploadImg/saveImg', {
  //       imagePath: selectedImage,
  //     })
  //     // if (response.data.message === 'update') {
  //     // }
  //     console.log(response.data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  console.log('file : >> ', selectedFile)
  console.log('image : >> ', selectedImage)
  return (
    <div className="mr-6 relative">
      <div className="h-48 w-48 overflow-hidden rounded-full border-2 border-green-800">
        <div className={`absolute top-1/2 left-10 z-50 ${block.svCnl}`}>
          <button
            className="bg-green-900 text-xs px-3 py-1 mr-2 rounded-full cursor-pointer"
            onClick={save}
          >
            save
          </button>
          <button
            className="bg-red-900 text-xs px-2 py-1 ml-2 rounded-full cursor-pointer"
            onClick={cancel}
          >
            cancel
          </button>
        </div>
        {userData ? (
          <Image
            src={selectedImage}
            alt="cover photo"
            height={200}
            width={200}
            className={`h-full ${block.imgOpc}`}
          />
        ) : (
          <Image
            src={img}
            alt="cover photo"
            height={200}
            width={200}
            className="h-full"
          />
        )}
      </div>
      <h1 className="font-semibold text-xl">About Me</h1>
      <p className="mr-4 text-xs">
        About Me erfg fgh edfghjn zsdefrgthjkl dfgh
      </p>
      <div className="bg-slate-200 absolute top-2/3 left-5 p-2 rounded-full border border-green-800 cursor-pointer">
        <BsFillCameraFill className="text-xl text-green-700" />
        <input
          type="file"
          //    accept="image/*"
          onChange={handleFileChange}
          className="bg-red-400 text-1px absolute rounded-full h-9 w-9 top-0 left-0 opacity-0 cursor-pointer"
        />
      </div>
      {/* <p className='text-sm mx-32'>About Me sdfvdf dfg dfg erthy ezqrtshdy erzthdy regsthdysfsdebt ezfq ezbtz ezebtz ezfqebt rzqebt zrqeb vqrbaet vrbaet vraebt vrbt vraeb vraebt</p> */}
    </div>
  )
}

export default ImageUploadForm
