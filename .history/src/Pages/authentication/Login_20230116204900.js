import { useNavigate, NavLink } from 'react-router-dom'
import loginImage from '../../assets/library.png';
import Button from '../../components/Button';
import Form from '../../components/Form';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try { 
      setError('')
      setLoading(true)
      // await login(email, password)
      navigate('/dashboard')
    } catch {
      setError('Failed to log in')
    }
    

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-xl shadow-lg max-w-3xl p-5">
        <div className="sm:w-1/2 px-8">
          <h1 className="text-3xl font-bold text-black-800 pb-2">
            Welcome Back
          </h1>
          <p className="text-lg mt-4">Please login to continue</p>

          <Form title="Login" />

          <div>
            <p className="text-sm mt-4 text-right pt-3 text-black-500">
              {' '}
              <NavLink to="/forgot-password">Forgot Password?</NavLink>
            </p>

            <hr className="border-b mt-6" />
          </div>

          <div className="flex gap-4 mt-10 items-center justify-center text-gray-500">
            <p className="text-sm mt-4">Don`t have an account?</p>

              <Button
                title="Register"
                type="submit"
              className="bg-[#317773] text-white px-4 py-2 rounded-md mt-4 font-bold"
              onClick={() => navigate('/register')}
              />
          </div>
        </div>

        <div className="w-1/2 sm:block hidden">
          <img src={loginImage} alt="Login" />
        </div>
      </div>
    </section>
  )
};

export default Login;
