import React from 'react'
import { NavLink } from 'react-router-dom'

const NoMatch = () => {
 return (
  <div className='flex justify-center items-center'>
   <h1 className='text-3xl font-bold text-black-800 pb-2'>404</h1>
   <p className='text-lg mt-4'>Page Not Found</p>
   <Button>
    <NavLink to='/'>Go Back</NavLink>
   </Button>

  </div>
 )
}

export default NoMatch
