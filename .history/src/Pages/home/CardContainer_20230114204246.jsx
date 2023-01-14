import React from 'react'
import CardData from '../home/CardData'
import { useNavigate, useParams } from 'react-router-dom'

const CardContainer = () => {
  const navigate = useNavigate()
  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
      {CardData.map((card, index) => {
        return (
          <div key={index} className='shadow-lg rounded-lg overflow-hidden'>
            <img
              src={card.img}
              alt={card.title}
              className='w-full h-40 sm:h-48 object-cover rounded-t-lg'
            />
            <div className='py-5 px-6 sm:px-8'>
              <h2 className='text-xl sm:text-2xl text-slate-800 font-semibold mb-3 text-center'>
                {card.title}
              </h2>
              <p className='text-gray-500 leading-relaxed text-justify'>
                {card.desc}
              </p>
              <button className='button' onClick={() => navigate('/services')}>
                View Details
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )

}
    
export default CardContainer;