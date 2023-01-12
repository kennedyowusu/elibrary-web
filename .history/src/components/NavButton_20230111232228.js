import React from 'react';

// eslint-disable-next-line react/prop-types
const NavButton = ({ title, className }) => (
  <button
    type="submit"
    className={className}
    on
  >
    {title}
  </button>
);

export default NavButton;
