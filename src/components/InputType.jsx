import React from 'react';

const InputType = ({
  // eslint-disable-next-line react/prop-types
  className, placeholder, type, name, value, onChange,
}) => (
  <input
    className={className}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default InputType;
