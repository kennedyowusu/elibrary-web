import React from 'react'
import RequestedBooksImage from '../../assets/rich-dad-poor-dad.png'

const RequestedBooks = () => {
 return (
  <section>
   <div className='flex flex-col lg:flex-row mx-10 md:mx-20 lg: rounded-lg'>
    <img src={RequestedBooksImage} alt="Rich Dad Poor Dad" className='h-[400] w-[300]' />

    <div className=''>
     <div></div>
     <div></div>
     <div></div>
    </div>
   </div>
  </section>
 )
}

export default RequestedBooks
