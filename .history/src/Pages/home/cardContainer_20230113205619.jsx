import React from 'react'
import cardData from '..'

const cardContainer = () => {
 return (
   <div className='card'>
   {
    cardData.map((item) => { 
     <div className='p-5 flex flex-col'>
       <div className='rounded-xl overflow-hidden'>
         <img
           src={item.img}
           // alt={item.title}
           className='w-full h-40 sm:h-48 object-cover'
         />
       </div>
       <div className='py-5 px-6 sm:px-8'>
         <h2 className='text-xl sm:text-2xl text-gray-800 font-semibold mb-3'>
           Web Design
         </h2>
         <p className='text-gray-500 leading-relaxed'>
           Lorem ipsum dolor sit amet, conse adipiscing elit. Phasellus enim
           erat, vestibulum vel.
         </p>
         <button className='button'>View Details</button>
       </div>
     </div>
    })
     }
   </div>
 )
}

export default cardContainer
