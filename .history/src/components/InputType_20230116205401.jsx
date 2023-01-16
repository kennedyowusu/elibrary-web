import React from 'react';

const InputType = ({
  // eslint-disable-next-line react/prop-types
  className, placeholder, type, name,
}) => (
  <input
    className={className}
    type={type}
    name={name}
    value={name}
    onChange={() => {}}
    placeholder={placeholder}
  />
);

export default InputType;
