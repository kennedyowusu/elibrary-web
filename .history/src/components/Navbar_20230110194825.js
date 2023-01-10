import React from 'react';
import Logo from '../assets/library.png';

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
    {
      name: 'Login',
      link: '/login',
    },
    {
      name: 'Register',
      link: '/register',
    },

  ];
  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-inc-500 py-4 md:py-5 px-14">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
        </div>

        <div className="flex items-center justify-end w-full">
          <ul className="flex gap-4">
            {navLink.map((link) => (
              <li
                key={link.name}
                className="
              md:ml-8 text-xl
             "
              >
                <a
                  href={link ? link.link : '/'}
                  className="text-gray-800 font-medium text-lg hover:border-solid border-2
               border-transparent
                "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {/* <a
              href="/forgot-password"
              className="text-gray-800 font-bold text-lg"
            >
              Forgot Password
            </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
