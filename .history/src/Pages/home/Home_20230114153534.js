import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import CardContainer from '../home/CardContainer'

const Home = () => (
  <>
    <Navbar />
    <main className='container mx-auto py-24 px-8'>
      <CardContainer />
    </main>
    <Outlet />
  </>
)

export default Home;