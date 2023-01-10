import ForgetPassword from './Pages/authentication/ForgetPassword.jsx'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/authentication/Login.jsx';
import Registration from './Pages/authentication/Registration.jsx';

function App() {
  return (
    <div className='App'>
      {/* <ForgetPassword /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/' element={<Registration />} />
        <Route path='/' element={<ForgetPassword />} />
      </Routes>
    </div>
  )
}

export default App;
