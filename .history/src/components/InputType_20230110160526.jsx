import React from 'react'

const InputType = ({className, placeholder, type}) => {
 return (
   <input
     className={className}
     type='email'
     name='email'
     placeholder='Email Address'
   />
 )
}

export default InputType
