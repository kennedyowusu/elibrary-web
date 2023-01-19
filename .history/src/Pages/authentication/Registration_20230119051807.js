import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../assets/library.png';
import Button from '../../components/Button';
import Form from '../../components/Form';
import { registerUser } from '../../features/authentication/registerSlice';

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleUserRegistration = async (e) => { 
    e.preventDefault();
    
    try {
      const response = await dispatch(registerUser({ email, password, name }));
      
      navigate('/dashboard');

    } catch (error) {
      setErr
    }
    
    
  }

  return (
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
      <div className='bg-gray-100 flex rounded-xl shadow-lg max-w-3xl p-5'>
        <div className='sm:w-1/2 px-8'>
          <h1 className='text-3xl font-bold text-black-800 pb-2'>Register</h1>
          <p className='text-lg mt-4'>Create Account to continue</p>

          {/* <Form title='Register' /> */}

          <form action='' className='flex flex-col gap-4'>
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

            <Button
              title='Register'
              type='submit'
              className='bg-[#317773] text-white px-4 py-2 rounded-md mt-4 font-bold'
              onClick={handleUserRegistration}
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
