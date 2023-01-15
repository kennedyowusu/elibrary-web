import React from 'react'
import RequestedBooksImage from '../../assets/rich-dad-poor-dad.png'

const RequestedBooks = () => {
 return (
  <section>
   <div className='flex flex-col lg:flex-row mx-10 rounded-lg'>
    <img src={RequestedBooksImage} alt="" />
   </div>
  </section>
 )
}

export default RequestedBooks
