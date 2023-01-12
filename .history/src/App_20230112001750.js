import { Routes, Route } from 'react-router-dom';
import ForgetPassword from './Pages/authentication/ForgetPassword';
import Login from './Pages/authentication/Login';
import Registration from './Pages/authentication/Registration';
import Home from './Pages/home/Home';
import NoMatch from './Pages/NoMatch';

function App() {
  return (
    <div className="bg-[#ccc]-600 w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />}>
          
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
