import React from 'react';

// eslint-disable-next-line react/prop-types
const NavButton = ({ title, className, onClick }) => (
  <button type='submit' className={className} onClick={onClick}>
    {title}
  </button>
)

export default NavButton;
