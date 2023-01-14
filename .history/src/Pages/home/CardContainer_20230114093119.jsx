import React from 'react'
import cardData from '../home/cardData'
import { useNavigate } from 'react-router-dom'

const CardContainer = () => {
  const navigate = useNavigate()
  return (
    // <div className='card'>
    //   {cardData.map((item) => {
    //     <div className='p-5 flex flex-col' >
    //       <div className='rounded-xl overflow-hidden'>
    //         <img
    //           src={item.img}
    //           alt={item.title}
    //           className='w-full h-40 sm:h-48 object-cover'
    //         />
    //       </div>
    //       <div className='py-5 px-6 sm:px-8'>
    //         <h2 className='text-xl sm:text-2xl text-gray-800 font-semibold mb-3'>
    //           {item.title}
    //         </h2>
    //         <p className='text-gray-500 leading-relaxed'>{item.desc}</p>
    //         <button className='button' onClick={() => navigate('/')}>
    //           View Details
    //         </button>
    //       </div>
    //     </div>
    //   })}
    // </div>

    // map over the cardData array and return a div for each item
    <div className='card'>
      {cardData.map((item) => { 
        return (
          <div className='p-5 flex flex-col' key={item.id}>
            <div className='rounded-xl overflow-hidden'>
              <img src={item.img
  )
}

export default CardContainer;