import React from 'react';

const InputType = ({
  className, placeholder, type, name,
}) => (
  <input
    className={className}
    type={type}
    name={name}
    placeholder={placeholder}
  />
);

export default InputType;
