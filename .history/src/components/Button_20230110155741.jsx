import React from 'react'

const Button = ({title, type}) => {
 return (
  <button
   className={'bg-[#317773] text-white px-4 py-2 rounded-md mt-4 font-bold'}
   type={type}
   title={title}


  >
   
  </button>
 )
}

export default Button
