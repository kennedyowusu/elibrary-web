/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({
  title, type, className, click,
}) => (
  <button
    className={className}
    // eslint-disable-next-line react/button-has-type
    type={type}
    onClick={click}
  >
    {title}
  </button>
);

export default Button;
