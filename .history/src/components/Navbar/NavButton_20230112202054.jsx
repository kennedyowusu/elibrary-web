import React from 'react';

const NavButton = ({ title, className, onClick }) => (
  <button type='submit' className={className} onClick={onClick}>
    {title}
  </button>
)

export default NavButton;
