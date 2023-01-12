import { Routes, Route } from 'react-router-dom';
import ForgetPassword from './Pages/authentication/ForgetPassword';
import Login from './Pages/authentication/Login';
import Registration from './Pages/authentication/Registration';
import Navbar from './components/Navbar';
import Home from './Pages/home/Home';
import NoMatch <FormControl>
  <FormLabel></FormLabel>
  
  <FormHelperText></FormHelperText>
</FormControl>
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'

function App() {
  return (
    <div className="bg-[#ccc]-600 w-full h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
        <Route path="forgot-password" element={<ForgetPassword />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
