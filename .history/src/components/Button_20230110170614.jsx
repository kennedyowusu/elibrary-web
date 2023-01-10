import React from 'react'

const Button = ({title, type, className, click, link}) => {
 return (
  <button
   className={className}
   type={type}
   onClick={click}
   link={link}
  > {title}
  </button>
 )
}

export default Button
