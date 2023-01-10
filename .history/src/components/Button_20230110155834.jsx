import { click } from '@testing-library/user-event/dist/click'
import React from 'react'

const Button = ({title, type, className, click}) => {
 return (
  <button
   className={className}
   type={type}
   onClick={click}
  > {title}
  </button>
 )
}

export default Button
