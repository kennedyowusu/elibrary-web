import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import CardContainer from '../home/CardContainer'
import CardData from '../home/CardData'

const Home = () => (
  <>
    <Navbar />
    <main className='container mx-auto py-24 px-8'>
      <div className="grid lg:grid-cols-4 gap-6">
        {
          CardData.map((card, index) => {
            return (
              <div key={index} className='shadow-lg rounded-lg '>
                <img
                  src={card.img}
                  alt={card.title}
                  className='w-full h- sm:h-48 object-cover'
                />
                <h2 className='text-xl sm:text-2xl text-gray-800 font-semibold mb-3'>
                  {card.title}
                </h2>
                <p className='text-gray-500 leading-relaxed'>{card.desc}</p>
                <button
                  className='button'
                  onClick={() => navigate('/services')}
                >
                  View Details
                </button>
              </div>
            )
          })
        }
      </div>

    </main>
    <Outlet />
  </>
)

export default Home


{/* <div className='card'>
  <div className='p-5 flex flex-col'>
    <div className='rounded-xl overflow-hidden'>
      <img
        src='https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200'
        alt='Web Design'
        className='w-full h-40 sm:h-48 object-cover'
      />
    </div>
    <div className='py-5 px-6 sm:px-8'>
      <h2 className='text-xl sm:text-2xl text-gray-800 font-semibold mb-3'>
        Web Design
      </h2>
      <p className='text-gray-500 leading-relaxed'>
        Lorem ipsum dolor sit amet, conse adipiscing elit. Phasellus
        enim erat, vestibulum vel.
      </p>
      <button className='button'>View Details</button>
    </div>
  </div>
</div> */}