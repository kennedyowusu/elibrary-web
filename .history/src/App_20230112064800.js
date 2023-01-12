import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import ForgetPassword from './Pages/authentication/ForgetPassword';
import Login from './Pages/authentication/Login';
import Registration from './Pages/authentication/Registration';
import { Dashboard } from './Pages/Dashboard';
import Home from './Pages/home/Home';
import Layout from './Pages/Layout';
import NoMatch from './Pages/NoMatch';

function App() {
  return (
    <div className='bg-[#ccc]-600 w-full h-screen'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Dashboard path='dashboard' />
          <Route path='*' element={<NoMatch />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Registration />} />
        <Route path='forgot-password' element={<ForgetPassword />} />
      </Routes>
    </div>
  )
}

export default App;
