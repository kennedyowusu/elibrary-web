import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../assets/library.png';
import Button from '../../components/Button';
import { registerUser } from '../../features/authentication/authSlice'
import validator from 'validator'

const Registration = () => {

  const handleUserRegistration = async (e) => { 
    e.preventDefault();

    if (name.length === 0) {
      setError('Name is required');
      return;
    } else if (!validator.isLength(name, { min: 3 })) {
      setError('Name must be at least 3 characters long');
      return;
    }

    if (email.length === 0) {
      setError('Email is required');
      return;
    } else if (!validator.isEmail(email)) {
      setError('Invalid email address');
      return;
    }

    if (password.length === 0) {
      setError('Password is required');
      return;
    } else if (!validator.isLength(password, { min: 8 })) {
      setError('Password must be at least 8 characters long');
      return;
    }
    
    try {
      setError(null);
      setIsLoading(true);
      const response = dispatch(registerUser({ email, password, name, confirm_password }));
      console.log(response);

      navigate('/');
      // if (response.payload.status === 'error') {
      //   setError(response.payload.message);
      //   return;
      // } else if (response.payload.status === 'success') {
      //   setError(null);
      //   setIsLoading(false);

      //   navigate('/')
      // } else {
      //   setError('Failed to register user');
      // }
    } catch (error) {
      setError('Failed to register user');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
      <div className='bg-gray-100 flex rounded-xl shadow-lg max-w-3xl p-5'>
        <div className='sm:w-1/2 px-8'>
          <h1 className='text-3xl font-bold text-black-800 pb-2'>Register</h1>
          <p className='text-lg mt-4'>Create Account to continue</p>

          {/* <Form title='Register' /> */}

          <form
            action=''
            className='flex flex-col gap-4'
            onSubmit={handleUserRegistration}
          >
            <input
              className='p-2 rounded border mt-8'
              type='text'
              name='name'
              placeholder='Full Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className='p-2 rounded border'
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

            <input
              className='p-2 rounded border'
              type='password'
              name='password'
              placeholder='Confirm Password'
              value={confirm_password}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}

            <Button
              title='Register'
              type='submit'
              className='bg-[#317773] text-white px-4 py-2 rounded-md mt-4 font-bold'
            />
          </form>

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
};

export default Registration;
