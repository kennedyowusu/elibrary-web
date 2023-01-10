import { Routes, Route } from 'react-router-dom';
import ForgetPassword from './Pages/authentication/ForgetPassword';
import Login from './Pages/authentication/Login';
import Registration from './Pages/authentication/Registration';

function App() {
  return (
    <div className="bg-[]-600 w-full h-screen">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
