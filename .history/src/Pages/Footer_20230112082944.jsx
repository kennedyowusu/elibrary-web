import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/library.png';

const Footer = () => {
 return (
   <footer className='w-full bg-[#317773] text-white flex justify-between shadow-md fixed py-4 md:py-5 md:px-14 bottom-0 left-0'>
     <div className='flex flex-col justify-center items-center'>
       <h2 className='text-2xl font-bold'>Edu Library</h2>
       <img src={Logo} alt='Logo' className='w-[120px] h-[120px] ml-2 mr-3' />
       <address>
         <a href='tel:+233 24 000 0000'>+233 20 000 0000</a> |{' '}
         <a href='tel:+233 24 000 0000'>+233 24 000 0000</a> <br />
         <p className='text-l font-bold text-center'>
           West Legon Accra, Ghana Concord Royal Plaza
         </p>
       </address>
     </div>

     <div>
       <Link to='/about'>
          <h1 className='text-l'>About Us</h1>
       </Link>
     </div>

     <div>
       <h1 className='text-2xl font-bold'>Edu Library</h1>
     </div>

     <div>
       <h1 className='text-2xl font-bold'>Edu Library</h1>
     </div>
   </footer>
 )
}

export default Footer
