import React from 'react'
import ItemsContainer from '../footer/ItemsContainer'

import SocialIcons from '../footer/SocialIcons'
import { Icons } from '../footer/Menus'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white  bottom-0 w-full scroll'>
      <div className='md:flex md:justify-between md:items-center lg:px-20 md:px-20 sm:px-12 px-4 bg-[#ffffff19] py-4 '>
        <h2
          className='lg:text-2xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
          md:w-2/5 '
        >
          <span className='text-teal-400'>Free</span> for all students and
          staff
        </h2>
        <div>
          <input
            type='text'
            placeholder='Enter Your Email Address'
            className='text-gray-800
            sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'
          />
          <button
            className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
            rounded-md text-white md:w-auto w-full font-bold'
          >
            Subscribe Here
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8'
      >
        <span>© 2022 All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  )
}

export default Footer
