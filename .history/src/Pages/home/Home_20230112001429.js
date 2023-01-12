import React from 'react';
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => (
  <section>
    <Navbar />
    <h2 className='text-gray-700 font-bold flex justify-center items-center mt-44'>
      Welcome To Edu Library
    </h2>
    <Outlet />
  </section>
)

export default Home;
