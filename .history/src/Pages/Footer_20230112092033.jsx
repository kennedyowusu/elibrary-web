import React from 'react'
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa'
import { GoZap } from 'react-icons/go'
import { TiBeer } from 'react-icons/ti'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'


const Footer = () => {
 return (
   <footer className='w-full h-36 bg-[#317773] text-white flex justify-between shadow-md fixed py-4 md:py-5 md:px-14 bottom-0 left-0'>
     <div className='flex flex-col justify-start items-start space-y-4'>
       <h2 className='text-2xl font-bold'>Edu Library</h2>
       <address>
         <a href='tel:+233 24 000 0000'>+233 20 000 0000</a> |{' '}
         <a href='tel:+233 24 000 0000'>+233 24 000 0000</a> <br />
         <p className='text-l font-bold text-center'>
           West Legon Accra, Ghana Concord Royal Plaza
         </p>
       </address>
     </div>

     <div className='flex flex-col space-y-4'>
       <Link to='/about'>
         <h1 className='text-l'>About Us</h1>
       </Link>
       <Link to='/about'>
         <h1 className='text-l'>Our Services </h1>
       </Link>
       <Link to='/about'>
         <h1 className='text-l'>Contact Us</h1>
       </Link>
       <Link to='/about'>
         <h1 className='text-l'>About Us</h1>
       </Link>
     </div>

     <div className='flex flex-col space-y-4'>
       <Link to='/about'>
         <h1 className='text-l'>Disclaimer</h1>
       </Link>
       <Link to='/about'>
         <h1 className='text-l'>Privacy Policy</h1>
       </Link>
       <Link to='/about'>
         <h1 className='text-l'>Terms of Service</h1>
       </Link>
     </div>

     <div className='flex  space-x-2'>
       <FaGithub />
       <FaTwitter />
       <FaInstagram />
       <FaFacebookF />
       <FaLinkedinIn />
     </div>
   </footer>
 )
}

export default Footer
