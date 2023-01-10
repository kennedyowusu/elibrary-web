import React from 'react';
import Logo from '../assets/library.png';

const Navbar = () => (
  <nav className="shadow-md w-full fixed top-0 left-0">
    <div className="md:flex bg-indigo-500 py-4 md:py-5 px">
      <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
        <img src={Logo} alt="Logo" className="w-10 h-10" />

      </div>

    </div>
  </nav>
);

export default Navbar;
