import React from 'react'
import RequestedBooksImage from '../../assets/rich-dad-poor-dad.png'

const RequestedBooks = () => {
  return (
    <section>
      <img
        src={RequestedBooksImage}
        alt='Rich Dad Poor Dad'
        className='h-[400] w-[300] mx-auto'
      />
    </section>
  )
}

export default RequestedBooks
