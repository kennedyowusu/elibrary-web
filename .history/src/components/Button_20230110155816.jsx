import React from 'react'

const Button = ({title, type, className}) => {
 return (
  <button
   className={className}
   type={type}
   onClick={() => console.log('clicked')}
  > {title}
  </button>
 )
}

export default Button
