import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import loginImage from '../../assets/library.png'
import Button from '../../components/Button'
import { registerUser } from '../../features/authentication/authSlice'

import { clearMessage } from '../../features/authentication/messageSlice'
import { Navigate, useNavigate, NavLink } from 'react-router-dom'

const Registration = () => {
  const [successful, setSuccessful] = useState(false)

  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(clearMessage())
  }, [dispatch])

  const initialValues = {
    name: '',
    email: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .test(
        'len',
        'The name must be between 3 and 20 characters.',
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required('This field is required!'),
    email: Yup.string()
      .email('This is not a valid email.')
      .required('This field is required!'),
    password: Yup.string()
      .test(
        'len',
        'The password must be between 6 and 40 characters.',
        (val) =>
          val && val.toString().length >= 6 && val.toString().length <= 40
      )
      .required('This field is required!'),
  })

  const handleUserRegistration = (formValue) => {
    const { name, email, password, confirm_password } = formValue

    setSuccessful(false)

    dispatch(register({ name, email, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true)
      })
      .catch(() => {
        setSuccessful(false)
      })
  }


  return (
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
      <div className='bg-gray-100 flex rounded-xl shadow-lg max-w-3xl p-5'>
        <div className='sm:w-1/2 px-8'>
          <h1 className='text-3xl font-bold text-black-800 pb-2'>Register</h1>
          <p className='text-lg mt-4'>Create Account to continue</p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleUserRegistration}
          >
            <Form className='flex flex-col gap-4 mt-8'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Full name</label>
                <Field
                  className='p-2 rounded border'
                  type='text'
                  name='name'
                  placeholder='name'
                />
                <ErrorMessage
                  name='name'
                  component='div'
                  className='text-red-500 text-sm'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='email'>Email Address</label>
                <Field
                  className='p-2 rounded border'
                  type='email'
                  name='email'
                  placeholder='Email'
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='text-red-500 text-sm'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='password'>Password</label>
                <Field
                  className='p-2 rounded border'
                  type='password'
                  name='password'
                  placeholder='Password'
                />
                <ErrorMessage
                  name='password'
                  component='div'
                  className='text-red-500 text-sm'
                />
              </div>

              <Button
                title='Register'
                type='submit'
                className='bg-[#317773] text-white px-4 py-2 rounded-md mt-4 font-bold'
              />
            </Form>
          </Formik>

          <div className='flex gap-4 mt-10 items-center justify-center text-gray-500'>
            <p className='text-sm mt-4'>Already have an account?</p>

            <Button
              onClick={() => navigate('/login')}
              title='Login'
              type='submit'
              className='bg-[#317773] text-white px-4 py-2 rounded-md mt-4 font-bold'
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

export default Registration
