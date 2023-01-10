import React from 'react'

const Button = ({title, type, className}) => {
 return (
  <button
   className={className}
   type={type}
   on
  > {title}
  </button>
 )
}

export default Button
