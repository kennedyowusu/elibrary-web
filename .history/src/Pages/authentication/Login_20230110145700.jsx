import React from 'react'

const colors = {
 primary: '#317773',
 secondary:'#E2D1F9',
 white: '#fff',
 
}

const Login = () => {
  return (
    <section className='bg-gray-100 min-h-screen flex items-center justify-center'>
      {/* Login Container */}
      <div className='bg-cyan-100'>
        {/* Login Form */}
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
              Username
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username' />
          </div>
      </div>

    </section>
  )
}

export default Login
