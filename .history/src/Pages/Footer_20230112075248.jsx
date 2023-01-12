import React from 'react'
import Logo from '../assets/library.png';

const Footer = () => {
 return (
   <footer className='w-full bg-[#317773] text-white flex justify-between shadow-md fixed py-4 md:py-5 md:px-14 bottom-0 left-0'>
     <div className='flex flex-col'>
       <img src={Logo} alt='Logo' className='w-[] h-[100px] ml-2 mr-3' />
       <h2 className='text-2xl font-bold'>Edu Library</h2>
     </div>

     <div>
       <h1 className='text-2xl font-bold'>Edu Library</h1>
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
