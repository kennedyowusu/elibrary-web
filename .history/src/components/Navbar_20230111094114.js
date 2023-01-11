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

        <div className="flex items-center justify-end w-full">
          <ul className="md:items-center gap-4 hidden md:flex ">
            {navLink.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl">
                <a
                  href={link ? link.link : '/'}
                  className="text-gray-800 font-medium text-lg hover:border-solid border-2 p-2 rounded-lg
                border-transparent hover:border-[#ccc] hover:text-bold hover:duration-500
                "
                >
                  {link.name}
                </a>
              </li>
            ))}
            <Link to="/login" className="ml-8 mr-4">
              <NavButton
                title="Login"
                className="border-2 px-6 py-2 rounded-md mt-[-6px] font-bold hover:duration-500 hover:bg-[#317773] text-[#317773] hover:text-white"
              />
            </Link>

            <Link to="register">
              <NavButton
                title="Register"
                className="bg-[#317773] text-white px-8 py-2 rounded-md mt-[-6px] font-bold hover:duration-500 hover:bg-[#fff] hover:text-[#317773] border-2 border-[#317773]"
              />
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
