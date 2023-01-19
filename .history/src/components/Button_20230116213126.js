/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ title, type, className, onClick, disa }) => (
  <button className={className} type={type} onClick={onClick}>
    {title}
  </button>
)

export default Button;
