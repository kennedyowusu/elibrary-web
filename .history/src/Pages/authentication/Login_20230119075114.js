import { useNavigate, NavLink } from 'react-router-dom'
import loginImage from '../../assets/library.png';
import Button from '../../components/Button';
import Form from '../../components/Form';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../features/authentication/authSlice';
import validator from 'validator'

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    // Validate input fields
    if (!validator.isEmail(email)) {
      setError('Invalid email address')
      return
    } else if (email.length === 0) { 
      setError('Email is required')
      return
    }

      
    if (!validator.isLength(password, { min: 8 })) {
      setError('Password must be at least 8 characters long')
      return
    }

    // Dispatch the loginUser async thunk
    try {
      // await login(email, password)
      const response = dispatch(loginUser({ email, password }))
      
      // if (response.payload.status === 'error') {
      //   setError(response.payload.message)
      //   return
      // } else if (response.payload.status === 'success') {
      //   setError(null)
      //   setIsLoading(false)

      //   navigate('/')
      // } else {
      //   setError('Failed to log in')
      // }

    
    } catch (error) {
      console.log('Error while logging in', error)
      setError('Failed to log in')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
      <div className='bg-gray-100 flex rounded-xl shadow-lg max-w-3xl p-5'>
        <div className='sm:w-1/2 px-8'>
          <h1 className='text-3xl font-bold text-black-800 pb-2'>
            Welcome Back
          </h1>
          <p className='text-lg mt-4'>Please login to continue</p>

          {/* <Form title="Login"
            handleSubmit={handleSubmit}
          /> */}

          <form
            action=''
            className='flex flex-col gap-4'
            onSubmit={handleSubmit}
          >
            <input
              className='p-2 rounded border mt-8'
              type='email'
              name='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className='p-2 rounded border'
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p
              className='text-red-500 text-sm mt-2'
            >{error}</p>}
            {/* <Link to='/dashboard' /> */}
            <Button
              // title={
              //   isLoading ? ( 'Loading...' ) : 'Login'
              // }
              title='Login'
              type='submit'
              className='bg-[#317773] text-white px-4 py-2 rounded-md mt-4 font-bold'
              // disabled={ isLoading }
            />

            {/* <button
              type='submit'
              className='bg-[#317773] text-white px-4 py-2 rounded-md mt-4 font-bold'
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Login'}
            </button> */}
          </form>

          <div>
            <p className='text-sm mt-4 text-right pt-3 text-black-500'>
              {' '}
              <NavLink to='/forgot-password'>Forgot Password?</NavLink>
            </p>

            <hr className='border-b mt-6' />
          </div>

          <div className='flex gap-4 mt-10 items-center justify-center text-gray-500'>
            <p className='text-sm mt-4'>Don`t have an account?</p>

            <Button
              title='Register'
              type='submit'
              className='bg-[#317773] text-white px-4 py-2 rounded-md mt-4 font-bold'
              onClick={() => navigate('/register')}
            />
          </div>
        </div>

        <div className='w-1/2 sm:block hidden'>
          <img src={loginImage} alt='Login' />
        </div>
      </div>
    </section>
  )
};

export default Login;
