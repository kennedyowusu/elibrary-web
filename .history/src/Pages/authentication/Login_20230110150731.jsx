import React from 'react'
import { Link } from 'react-router-dom'
import loginImage from '../../assets/library.png'

// const colors = {
//  primary: '#317773',
//  secondary:'#E2D1F9',
//  white: '#fff',
 
// }

const Login = () => {
  return (
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
      {/* Login Container */}
      <div className='bg-gray-100 flex rounded-2xl sha'>
        {/* Login Form */}
        <div className='w-1/2'>
          <h1 className='text-3xl font-bold text-gray-800'>Login</h1>
        </div>

        {/* Left Side */}
        <div className='w-1/2 p-5'>
          <img src={loginImage} alt='Login' />
        </div>
      </div>
    </section>
  )
}

export default Login
