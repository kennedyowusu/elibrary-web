import React from 'react';

const NavButton = (props) => (
  <button
    type="submit"
    className="bg-[#317773] text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:duration-500"
  >
    // eslint-disable-next-line react/destructuring-assignment
    { props.children }
  </button>
);

export default NavButton;
