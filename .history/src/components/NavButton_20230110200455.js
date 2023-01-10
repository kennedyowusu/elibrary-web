import React from 'react';

// eslint-disable-next-line react/prop-types
const NavButton = ({ title }) => (
  <button
    type="submit"
    className="bg-[#317773] text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:duration-500"
  >
    {title}
  </button>
);

export default NavButton;
