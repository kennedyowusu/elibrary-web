import React from 'react';
import Logo from '../assets/library.png';

const Navbar = () => (
  <nav className="shadow-md w-full fixed top-0 left-0">
    <div className="md:flex bg-inc-500 py-4 md:py-5 px-14">
      <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
      </div>
      <div className="flex items-center justify-end w-full">
        <div className="flex gap-4">
     <a href="/forgot-password" className="text-gray-800 font-bold text-lg"> 
      Forgot Password
     </a>
     
          <a href="/login" className="text-gray-800 font-bold text-lg">
            Login
          </a>
          <a href="/register" className="text-gray-800 font-bold text-lg">
            Register
          </a>
        </div>

      </div>
    </div>
  </nav>
);

export default Navbar;
