/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ title, type, className, onClick }) => (
  <button className={className} type={type} onClick={clionClickck}>
    {title}
  </button>
)

export default Button;
