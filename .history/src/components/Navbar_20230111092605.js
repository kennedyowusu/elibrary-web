// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { HiBars3, HiXMark } from 'react-icons/hi2';
import Logo from '../assets/library.png';
import NavButton from './NavButton';

const Navbar = () => {
  const navLink = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      name: 'Profile',
      link: '/profile',
    },

  ];

  // const [toggleNav, setToggleNav] = useState(false);

  // const handleClick = () => {
  //   setToggleNav(!toggleNav);
  // };

  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:py-5 px-14">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <img src={Logo} alt="Logo" className="w-10 h-10 ml-2 mr-3" />
          <span className="text-[#317773]">Edu</span>
          {' '}
          Library
          {' '}
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
