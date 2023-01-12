import React from 'react';
import { Outlet } from 'react-router-dom'

const Home = () => (
  <>
    <Navbar />
    <section>
      <h2 className='text-gray-700 font-bold flex justify-center items-center mt-44'>
        Welcome To Edu Library
      </h2>
    </section>
    <Outlet />
  </>
)

export default Home;
