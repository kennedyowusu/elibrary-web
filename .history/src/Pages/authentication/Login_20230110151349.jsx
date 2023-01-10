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
      <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5'>
        {/* Login Form */}
        <div className='w-1/2 px-8'>
          <h1 className='text-3xl font-bold text-black-800'>Login</h1>
          <p className='text-sm mt-4'>
            Please login into your Account continue
          </p>

          <form action="" className='flex flex-col'>
            <input type="email" name="email" placeholder='Email Address' />
            <input type="password" name="password" placeholder='Password' />
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'>Login</button>
          </form>
        </div>

        {/* Left Side */}
        <div className='w-1/2'>
          <img src={loginImage} alt='Login' className='sm:block ' />
        </div>
      </div>
    </section>
  )
}

export default Login
