import ForgetPassword from './Pages/authentication/ForgetPassword.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      {/* <ForgetPassword /> */}
      <Routes>
        <Route path='/' element={<ForgetPassword />} />
      </Routes>
      
    </div>
  )
}

export default App;
