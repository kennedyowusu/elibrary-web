import React from 'react';
import Logo from '../assets/library.png';

const Navbar = () => (
  <nav className="relative container mx-auto bg-red-500 p-6">
    <div className="flex justify-between items-center">
      <div className="pt-2">
        <img src={Logo} alt="" />
   </div>
   
   {/* Menu Items */}
   <div className="flex gap-4">
    </div>
    </div>

  </nav>
);

export default Navbar;
