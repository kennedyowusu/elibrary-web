import React from 'react'

const Button = ({title, type, className, click}) => {
 return (
  <button
   className={className}
   type={type}
   onClick={click}
   link
  > {title}
  </button>
 )
}

export default Button
