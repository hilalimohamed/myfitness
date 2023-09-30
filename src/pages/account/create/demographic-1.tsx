import React, { HtmlHTMLAttributes, useState } from 'react'
import List from '@/src/components/Store'
import Link from 'next/link'
import { BsFillQuestionOctagonFill, BsListColumnsReverse } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useRouter } from 'next/router'

export default function demographic() {
  const addDemogh = List((state: any) => state.addDemogh)
  const [countries, setCountries] = useState<string[]>([
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'Japan',
    'Brazil',
    'India',
    'China',
    'South Korea',
    'Mexico',
    'Russia',
    'Spain',
    'Italy',
    'Netherlands',
    'Sweden',
    'Norway',
    'Denmark',
    'Finland',
    'Switzerland',
    'Austria',
    'Belgium',
    'Ireland',
    'New Zealand',
    'Greece',
    'Portugal',
    'Turkey',
    'Egypt',
    'South Africa',
    'Argentina',
    'Chile',
    'Peru',
    'Colombia',
    'Venezuela',
    'Thailand',
    'Vietnam',
    'Indonesia',
    'Malaysia',
    'Singapore',
    'Philippines',
    'Pakistan',
    'Bangladesh',
    'Nepal',
    'Sri Lanka',
    'Kenya',
    'Nigeria',
    'Ghana',
    'Morocco',
    'Algeria',
    'Saudi Arabia',
    'United Arab Emirates',
    'Qatar',
    'Kuwait',
    'Iraq',
    'Iran',
    'Jordan',
    'Lebanon',
    'Syria',
    'Yemen',
    'Oman',
    'Bahrain',
    'Cyprus',
    'Estonia',
    'Latvia',
    'Lithuania',
    'Poland',
    'Czech Republic',
    'Slovakia',
    'Hungary',
    'Romania',
    'Bulgaria',
    'Moldova',
    'Ukraine',
    'Belarus',
    'Kazakhstan',
    'Uzbekistan',
    'Turkmenistan',
    'Kyrgyzstan',
    'Tajikistan',
    'Afghanistan',
    'Mongolia',
    'Bhutan',
    'Somalia',
    'Ethiopia',
    'Rwanda',
    'Uganda',
    'Tanzania',
    'Zimbabwe',
    'Mozambique',
    'Namibia',
    'Botswana',
    'Zambia',
    'Cameroon',
    'Niger',
    'Chad',
    'Libya',
    'Tunisia',
    'Mauritania',
    'Mali',
    'palestine',
  ])
  const router = useRouter()
  const [isHidden, setisHidden] = useState('hidden')
  const [demoghra1, setDemoghra1] = useState({
    sex: '',
    dateOfBurthday: '',
    country: '',
    error: '',
    hiddenListCounries: 'hidden',
  })

  const hidden = () => {
    setisHidden('hidden')
  }
  const block = () => {
    setisHidden('block')
  }
  const logOut = (ev: any) => {
    if (ev.target.id !== 'choose') {
      setisHidden('hidden')
    }
  }
  const radioValue = (radio: any) => {
    const theValue = radio.target.value
    setDemoghra1({ ...demoghra1, sex: theValue })
  }
  const dateValue = (date: any) => {
    const theValue = date.target.value
    const birthdate = new Date(theValue)
    const currentDate = new Date()
    const eighteenYearsAgo = new Date(currentDate)
    eighteenYearsAgo.setFullYear(currentDate.getFullYear() - 18)
    if (birthdate <= eighteenYearsAgo) {
      setDemoghra1({ ...demoghra1, error: '' })
      setDemoghra1({ ...demoghra1, dateOfBurthday: theValue })
    } else if (theValue === '') {
      setDemoghra1({
        ...demoghra1,
        error: 'khtar chi date',
      })
    } else {
      setDemoghra1({
        ...demoghra1,
        error: 'You are under 18 years old. Age verification failed.',
      })
    }
  }

  
  const selectedCountries = (e: any) => {
    // const inp = document.getElementById('country')
    setDemoghra1({ ...demoghra1, country: e, hiddenListCounries: 'hidden' })
  }
  const clickToBlock = ()=>{
      setDemoghra1({...demoghra1,hiddenListCounries:'block'})
    }
    console.log(demoghra1.country)
    // const onChangeCountriesVlu = (e:any)=>{
        //     // e.target.value ===
        //     // setCountries(countries.filter((countrie)=>countrie.startsWith(e.target.value)))
        //           setDemoghra1({ ...demoghra1, country: e.target.value })
        //   }
        const isValidIt = () => {
          if (demoghra1.sex === '' || demoghra1.dateOfBurthday === '') {
            console.log('error hhh')
          } else {
            addDemogh(
              demoghra1.sex,
              new Date(demoghra1.dateOfBurthday),
              demoghra1.country,
            )
            router.push('/account/create/demographic-2')
          }
        }
        
        return (
            <div className={`pt-24 relative bg-slate-50`} onClick={logOut}>
      <div className="pt-8 pb-8 rounded-lg shadow-2xl mx-96 flex-col justify-center">
        <h1 className="font-bold text-xl text-center">
          Please select which sex we should use to calculate your calorie needs.
        </h1>
        <div className="mt-2 ml-8">
          <input
            type="radio"
            name="sex"
            id="Male"
            value="Male"
            className="h-5 w-5  peer/Male"
            onClick={radioValue}
          />
          <label
            htmlFor="Male"
            className="peer-checked/Male:text-orange-500 pl-2"
          >
            Male
          </label>
          <input
            type="radio"
            name="sex"
            id="Female"
            value="Female"
            className="h-5 w-5 ml-3"
            onClick={radioValue}
          />
          <label htmlFor="Female" className="pl-2">
            Female
          </label>
        </div>
        <div>
          <div
            className="ml-7 mr-40 flex font-semibold text-orange-500 cursor-pointer items-center"
            onClick={block}
            id="choose"
          >
            <BsFillQuestionOctagonFill className="text-orange-500 m-2 text-lg" />
            Which one should I choose ?
          </div>
          <div
            className={`absolute left-64 mt-5 right-64 ${isHidden} shadow-2xl`}
          >
            <h1
              id="choose"
              className={`bg-orange-500 px-6 py-4 font-semibold text-white flex justify-between items-center`}
            >
              Which one should I choose ?
              <AiOutlineCloseCircle
                className="text-2xl cursor-pointer"
                onClick={hidden}
              />
            </h1>
            <p id="choose" className="text-slate-400 bg-white px-4 py-3">
              Male and female sex hormones affect metabolism. We calculate
              calorie needs differently depending on the sex you select. If you
              are intersex, taking gender-affirming medications, or aren’t sure
              which to select for your needs, tap to learn more.
            </p>
          </div>
        </div>
        <div className="mt-6 ml-8">
          <h1 className="font-bold text-xl mb-3">When were you born?</h1>
          <input
            type="date"
            name="date"
            id="date"
            onChange={dateValue}
            className="px-4 py-3 focus-within:border-orange-500 focus-within:border-2 outline-none border-2 border-slate-200 rounded"
          />
          <p>{demoghra1.error}</p>
        </div>
        <div className="mt-6 ml-8">
          <h1 className="font-bold text-xl mb-3">When were you born?</h1>
          <input
            type="text"
            name="country"
            id="country"
            value={demoghra1.country}
            // onChange={onChangeCountriesVlu}
            className="px-4 py-3 focus-within:border-orange-500 focus-within:border-2 outline-none border-2 border-slate-200 rounded"
          />
          <BsListColumnsReverse className='absolute top-2/3 left-1/2 mt-1 cursor-pointer' onClick={clickToBlock}/>
          <ul
            className={`overflow-auto h-44 w-1/4 absolute bg-green-400 top-56 p-3 ${demoghra1.hiddenListCounries}`}
          >
            {countries.map((countries) => (
              <li
                onClick={()=>selectedCountries(countries)}
                className={`p-1 bg-gray-500 mb-1 pl-2`}
                key={countries}
              >
                {countries}
              </li>
            ))}
          </ul>
        </div>
        <h2 className="mt-6 mx-8 text-slate-400 text-base  text-center">
          We use this information to calculate an accurate calorie goal for you.
        </h2>
        <div className="pt-7 flex justify-around mx-10">
          <Link href="/account/create/activity-level">
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
