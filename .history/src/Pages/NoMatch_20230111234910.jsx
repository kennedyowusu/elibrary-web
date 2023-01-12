import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'

const NoMatch = () => {
 return (
  <div className='flex justify-center items-center'>
   <h1 className='text-3xl font-bold text-black-800 pb-2'>404</h1>
   <p className='text-lg mt-4'>Page Not Found</p>
   <Button
    title='Go Back'
    type='submit'
    className='bg-[#317773] text-white px-4 py-2 rounded-md mt-4 font-bold'
   />

  </div>
 )
}

export default NoMatch
