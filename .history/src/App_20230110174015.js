import { Routes, Route } from 'react-router-dom';
import ForgetPassword from './Pages/authentication/ForgetPassword.jsx';
import Login from './Pages/authentication/Login.js';
import Registration from './Pages/authentication/Registration.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
