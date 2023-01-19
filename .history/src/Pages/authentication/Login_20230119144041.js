import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, NavLink } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Button from '../../components/Button'
import loginImage from '../../assets/library.png'

import { login } from '../../features/authentication/authSlice'
import { clearMessage } from '../../features/authentication/messageSlice'

const Login = () => {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const { isLoggedIn } = useSelector((state) => state.auth)
  const { message } = useSelector((state) => state.message)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearMessage())
  }, [dispatch])

  const initialValues = {
    username: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('This field is required!'),
    password: Yup.string().required('This field is required!'),
  })

  const handleUserLogin = (formValue) => {
    const { username, password } = formValue
    setIsLoading(true)

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        navigate('/profile')
        window.location.reload()
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  if (isLoggedIn) {
    return <Navigate to='/profile' />
  }

  return (
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
      <div className='bg-gray-100 flex rounded-xl shadow-lg max-w-3xl p-5'>
        <div className='sm:w-1/2 px-8'>
          <h1 className='text-3xl font-bold text-black-800 pb-2'>
            Welcome Back
          </h1>
          <p className='text-lg mt-4'>Please login to continue</p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleUserLogin}
          >
            <Form className='mt-8'>
            

          {message && (
            <div>
              <div className='text-sm text-red-500' role='alert'>
                {message}
              </div>
            </div>
          )}

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
