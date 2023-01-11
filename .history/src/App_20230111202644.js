import { Routes, Route } from 'react-router-dom';
import ForgetPassword from './Pages/authentication/ForgetPassword';
import Login from './Pages/authentication/Login';
import Registration from './Pages/authentication/Registration';
import Navbar from './components/Navbar';
o,

function App() {
  return (
    <div className="bg-[#ccc]-600 w-full h-screen">
      <Navbar />
      <Home />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
