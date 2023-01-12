import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import ForgetPassword from './Pages/authentication/ForgetPassword';
import Login from './Pages/authentication/Login';
import Registration from './Pages/authentication/Registration';
import Home from './Pages/home/Home';
import Layout from './Pages/Layout';
import NoMatch from './Pages/NoMatch';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className='bg-[#ccc]-600 w-full h-screen'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
        
      </Routes>
    </div>
  )
}

export default App;
