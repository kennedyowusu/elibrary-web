import React from 'react'
import CardData from '../home/CardData'
import { useNavigate } from 'react-router-dom'

const CardContainer = () => {
  const navigate = useNavigate()
  return (
    // map over the CardData array and return a div for each item
    <div className='card'>
      {CardData.map((item) => {
        return (
          <div className='p-5 flex flex-col m'>
            <div className='rounded-xl overflow-hidden'>
              <img
                src={item.img}
                alt={item.title}
                className='w-full h-40 sm:h-48 object-cover'
              />
            </div>
            <div className='py-5 px-6 sm:px-8'>
              <h2 className='text-xl sm:text-2xl text-gray-800 font-semibold mb-3'>
                {item.title}
              </h2>
              <p className='text-gray-500 leading-relaxed'>{item.desc}</p>
              <button className='button' onClick={() => navigate('/')}>
                View Details
              </button>
            </div>
          </div>
        )
      })}
    </div>

    // <div className='card'>
    //   <div className='p-5 flex flex-col'>
    //     <div className='rounded-xl overflow-hidden'>
    //       <img
    //         src='https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200'
    //         alt='Web Design'
    //         className='w-full h-48 sm:h-48 object-cover'
    //       />
    //     </div>
    //     <div className='py-5 px-6 sm:px-8'>
    //       <h2 className='text-xl sm:text-2xl text-gray-800 font-semibold mb-3'>
    //         Web Design
    //       </h2>
    //       <p className='text-gray-500 leading-relaxed'>
    //         Lorem ipsum dolor sit amet, conse adipiscing elit. Phasellus enim
    //         erat, vestibulum vel.
    //       </p>
    //       <button className='button'>View Details</button>
    //     </div>
    //   </div>
    // </div>
  )

}
    
export default CardContainer;