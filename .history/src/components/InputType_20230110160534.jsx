import React from 'react'

const InputType = ({className, placeholder, type, name}) => {
 return (
   <input
     className={className}
     type={type}
     name='email'
     placeholder='Email Address'
   />
 )
}

export default InputType
