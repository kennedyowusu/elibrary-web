import React from 'react'
import loginImage from '../../assets/library.png'
import Button from '../../components/Button'
import Form from '../../components/Form'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
      {/* Login Container */}
      <div className='bg-gray-100 flex rounded-xl shadow-lg max-w-3xl p-5'>
        {/* Login Form */}
        <div className='sm:w-1/2 px-8'>
          <h1 className='text-3xl font-bold text-black-800 pb-2'>
            Welcome Back
          </h1>
          <p className='text-lg mt-4'>Please login to continue</p>

          <Form title='Login' />

          <div>
            <p className='text-sm mt-4 text-right pt-3 text-black-500'>
              {' '}
            <Link to='/forget-password'>Forgot Password?</Link>
            </p>

            <hr className='border-b mt-6' />
          </div>

          <div className='flex gap-4 mt-10 items-center justify-center text-gray-500'>
            <p className='text-sm mt-4'>Don't have an account?</p>
            <Button
              title='Register'
              type='submit'
              className='bg-[#317773] text-white px-4 py-2 rounded-md mt-4 font-bold'
              link={{ to: '/register' } }
            />
          </div>
        </div>

        {/* Right Side */}
        <div className='w-1/2 sm:block hidden'>
          <img src={loginImage} alt='Login' />
        </div>
      </div>
    </section>
  )
}

export default Login
