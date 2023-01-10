import React from 'react'

const Button = ({title, type, className}) => {
 return (
  <button
   className={className}
   type={type}
   onClick
  > {title}
  </button>
 )
}

export default Button
