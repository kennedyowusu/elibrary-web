import ForgetPassword from './Pages/authentication/ForgetPassword.jsx'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/authentication/Login.jsx';

function App() {
  return (
    <div className='App'>
      {/* <ForgetPassword /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/' element={<Register />} />
        <Route path='/' element={<ForgetPassword />} />
      </Routes>
    </div>
  )
}

export default App;
