import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
import img from '@/public/yhj.jpg'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function register() {
  const router = useRouter()
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [hidden, setHidden] = useState({
    username: 'hidden',
    email: 'hidden',
    password: 'hidden',
    confirmPassword: 'hidden',
  })
  const [disabled, setDisabled] = useState('')
  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const onSubmit = (e: any) => {
    e.preventDefault()
  }
  const invalidFun = (e: any) => {
    setHidden({
      ...hidden,
      [e.target.name]: 'block text-xs text-red-500 mx-28 -my-2',
    })
  }
  const signup = async () => {
    try {
      const res = await axios.post('/api/signup/register', {
        username: values.username,
        email: values.email,
        password: values.password,
      })
      console.log('signup success',  res.data)
      router.push('/account/create/login')
    } catch (error: any) {
      console.log('signup failed  ', error.message)
    }
  }
  // useEffect(() => {

  // }, [values])
  
  return (
    <div className="pt-24">
      <div className="px-5 pb-3 pt-5 flex bg-orange-100 rounded-2xl mx-28">
        <div className="">
          <Image
            src={img}
            alt="login"
            width="500"
            height="450"
            className="rounded-2xl"
          />
        </div>
        <div className="px-9  w-3/5 rounded-2xl bg-orange-100">
          <div className="flex justify-end  font-semibold">
            <p className="text-orange-500">
              <Link href="/account/create/login">Back to login</Link>
            </p>
          </div>
          <form className="text-center" onSubmit={onSubmit}>
            <h1 className="text-xl font-bold mt-4 mb-2">Hello again !</h1>
            <p className="mb-1">wellcome back </p>
            <div className="text-center mt-3 mb-2  ">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your name"
                className="px-4 py-2 rounded-md bg-white invalid:bg-zinc-100"
                value={values.username}
                onChange={handleChange}
                onInvalid={invalidFun}
                pattern="^[A-Za-z0-9]{3,14}$"
                required
              />
            </div>
            <h4 id="err" className={hidden.username}>
              username should be 3-14 characters and shouldn't include any
              special caracter!
            </h4>
            <div className="text-center mt-3 mb-3  ">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md"
                value={values.email}
                onChange={handleChange}
                onInvalid={invalidFun}
                required
              />
            </div>
            <h4 id="err" className={hidden.email}>
              It should be a valid email address!
            </h4>
            <div className="text-center mb-3">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="px-4 py-2 rounded-md"
                value={values.password}
                onChange={handleChange}
                onInvalid={invalidFun}
                // pattern="^[A-Za-z0-9]{3,14}$"
                // pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}$"
                // pattern="^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$"
                required
              />
            </div>
            <h4 id="err" className={hidden.password}>
              Password should be 6-20 characters and include at least 1 letter,
              1number and 1 special caracter!
            </h4>
            <div className="text-center mb-3">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="confirm password"
                className="px-4 py-2 rounded-md"
                value={values.confirmPassword}
                onChange={handleChange}
                onInvalid={invalidFun}
                pattern={values.password}
                required
              />
            </div>
            <h4 id="err" className={hidden.confirmPassword}>
              Password don't match!
            </h4>
            <button
              className="bg-orange-500 px-20 py-2 rounded-md mt-1 text-white font-bold"
              onClick={signup}
            >
              Sign up
            </button>
            <h5 className="mt-1">Or continue with</h5>
          </form>
          <div className="flex mt-4 justify-center ">
            <div className="mx-4 text-2xl bg-white p-2 rounded-full shadow-2xl">
              <FcGoogle />
            </div>
            <div className="mx-4 text-2xl bg-white p-2 rounded-full text-blue-700 shadow-2xl">
              <FaFacebookF />
            </div>
            <div className="mx-4 text-2xl bg-white p-2 rounded-full text-sky-500 shadow-2xl">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
