import React from 'react'
import cardData from '../home/cardData'
import { useNavigate } from 'react-router-dom'

const cardData = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/1758845/pexels-photo-1758845.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    title: 'Web Design',
    alt: 'Web Design',
    desc: 'Lorem ipsum dolor sit amet, conse adipiscing elit. Phasellus enim erat, vestibulum vel.',
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/1758845/pexels-photo-1758845.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    title: 'Web Design',
    alt: 'Web Design',
    desc: 'Lorem ipsum dolor sit amet, conse adipiscing elit. Phasellus enim erat, vestibulum vel.',
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/1758845/pexels-photo-1758845.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    title: 'Web Design',
    alt: 'Web Design',
    desc: 'Lorem ipsum dolor sit amet, conse adipiscing elit. Phasellus enim erat, vestibulum vel.',
  },
]


const CardContainer = () => {
  const navigate = useNavigate()
  return (
    <div className='card'>
      {cardData.map((item) => {
        <div className='p-5 flex flex-col' key={item.id}>
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
      })}
    </div>
  )
}

export default CardContainer;