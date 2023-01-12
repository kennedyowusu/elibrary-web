import { Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import ForgetPassword from './Pages/authentication/ForgetPassword'
import Login from './Pages/authentication/Login'
import Registration from './Pages/authentication/Registration'
import Home from './Pages/home/Home'
import Layout from ''
import NoMatch from './Pages/NoMatch'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'

function App() {
  return (
    <div className='bg-[#ccc]-600 w-full h-screen'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='profile' element={<Profile />} />
          <Route path='*' element={<NoMatch />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Registration />} />
          <Route path='forgot-password' element={<ForgetPassword />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
