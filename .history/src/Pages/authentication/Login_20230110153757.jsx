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
      <div className='bg-gray-100 flex rounded-xl shadow-lg max-w-3xl p-5'>
        {/* Login Form */}
        <div className='sm:w-1/2 px-8'>
          <h1 className='text-3xl font-bold text-black-800'>Login</h1>
          <p className='text-sm mt-4'>Please login to continue</p>

          <form action='' className='flex flex-col gap-4'>
            <input
              className='p-2 rounded border mt-8'
              type='email'
              name='email'
              placeholder='Email Address'
            />
            <input
              className='p-2 rounded border'
              type='password'
              name='password'
              placeholder='Password'
            />
            <button className='bg-[#317773] text-white px-4 py-2 rounded-md mt-4 font-bold'>
              Login
            </button>
          </form>

          <div>
            <p className='text-sm mt-4 text-right pt-3 text-black-500'> Forgot Password?</p>

          </div>

          <div className='mt-10 grid grid-cols-3 items-center text-gray-500'>
            <hr className='border-gray-500' />
            <p className='text-center text-sm'>OR</p>
            <hr className='border-gray-500' />
          </div>

          <div>
            <p className='text-sm mt-4'>
              Don't have an account?
              {/* <Link to='/register' className='text-[#317773]'>
                Register
              </Link> */}
            </p>
          </div>
        </div>

        {/* Left Side */}
        <div className='w-1/2 sm:block hidden'>
          <img src={loginImage} alt='Login' />
        </div>
      </div>
    </section>
  )
}

export default Login
