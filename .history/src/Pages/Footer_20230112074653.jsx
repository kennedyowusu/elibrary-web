import React from 'react'
import Logo from '../assets/library.png';

const Footer = () => {
 return (
   <footer className='w-full bg-[#317773] text-white flex justify-between shadow-md fixed py-4 md:py-5 md:px-14 bottom-0 left-0'>
     <div>
       {/* <h1 className='text-2xl font-bold'>Edu Library</h1> */}
       <img src={Logo} alt='Logo' className='w-15 h-15 ml-2 mr-3' />
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
