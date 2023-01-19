import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { login } from '../../features/authentication/authSlice'
import { clearMessage } from '../../features/authentication/messageSlice'

const Login = () => {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth)
  const { message } = useSelector((state) => state.message)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearMessage())
  }, [dispatch])

  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  })

  const handleUserLogin = async (values) => {
    const { email, password } = values
    setIsLoading(true)

    // dispatch(login(email, password)).unwrap().then(() => {
    //   navigate('/');
    //   window.location.reload();
    // }).catch(() => {
    //   setIsLoading(false)
    // });
    
    try {
      const response = await dispatch(login(email, password))
      if (response.payload.status === 'error') {
        setIsLoading(false)
        return;
      } else if (response.payload.status === 'success') {
        setIsLoading(false)
        navigate('/')
      }
    } catch (error) {
      
    }
  }

  if (isLoggedIn) {
    return <Navigate to='/' />
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
            onSubmit={}
          >
            <input
              className='p-2 rounded border mt-8'
              type='email'
              name='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <p className='text-sm text-red-500'>
              {message && <div>{message}</div>}
            </p>

            <input
              className='p-2 rounded border'
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* {error && <p className='text-red-500 text-sm mt-2'>{error}</p>} */}

              <p className='text-sm text-red-500'>
              {message && <div>{message}</div>}
            </p>

           
            {/* <Button
              // title={
              //   isLoading ? ( 'Loading...' ) : 'Login'
              // }
              title='Login'
              type='submit'
              className='bg-[#317773] text-white px-4 py-2 rounded-md mt-4 font-bold'
              disabled={ isLoading }
            /> */}

            <button
              type='submit'
              className='bg-[#317773] text-white px-4 py-2 rounded-md mt-4 font-bold'
              disabled={isLoading}
            >
              {
                isLoading && (
                  <span className='spinner-border spinner-border-sm'></span>
                )
              }
              <span>Login</span>
            </button>
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
}

export default Login
