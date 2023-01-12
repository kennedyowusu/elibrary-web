import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import ForgetPassword from './Pages/authentication/ForgetPassword';
import Login from './Pages/authentication/Login';
import Registration from './Pages/authentication/Registration';
import Home from './Pages/home/Home';
import NoMatch from './Pages/NoMatch';

function App() {
  return (
    <div className='bg-[#ccc]-600 w-full h-screen'>
      <Routes>
        <Route path='/' element={<Layou />}>
          <Route path='about' element={<About />} />
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
