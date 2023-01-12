import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
   <footer className='bg-gray-900 text-white'>
    <div className='md:flex md:justify-between sm:px-12 px-4 bg-[#ffffff19] py-7 md:items-center'>
     <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
      <span className='text-teal-400'>Free</span> for all students and teachers
     </h1>
     <div>
      <input type="text" placeholder='Enter Your Email Address' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none' />
      <button className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md'></button>
     </div>
    </div>
    
    </footer>
  )
}

export default Footer
