import React from 'react';

const Button = ({
  title, type, className, click}) => (
  <button
    className={className}
    type={type}
    onClick={click}
  >
    {' '}
    {title}
  </button>
);

export default Button;
