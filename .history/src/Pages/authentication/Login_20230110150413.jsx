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
    <section className='bg-gray-100 min-h-screen flex items-center justify-center'>
      {/* Login Container */}
      <div className='bg-cyan-100'>
        {/* Login Form */}
        <div>
          <h1 className='text-3xl font-bold text-gray-800'>Login</h1>
        </div>

        {/* Left Side */}
        <div>
          <img src={loginImage} alt='Login' />
        </div>
      </div>
    </section>
  )
}

export default Login
