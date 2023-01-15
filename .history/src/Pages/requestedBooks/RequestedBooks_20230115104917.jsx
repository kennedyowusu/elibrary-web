import React from 'react'
import RequestedBooksImage from '../../assets/rich-dad-poor-dad.png'

const RequestedBooks = () => {
  return (
    <section>
      <div className='flex flex-col lg:flex-row mx-10 md:mx-20 lg:mx-52 rounded-lg'>
        <img
          src={RequestedBooksImage}
          alt='Rich Dad Poor Dad'
          className='h-[400] w-[300]'
        />

        <div className='card-details'>
          <div className='top flex flex-row justify-between mx-4 font-semibold text-gray-500'>
            <div>
              <h1 className='text-2xl font-bold'>Rich Dad Poor Dad</h1>
            </div>
            <div>
              <p>12/12/2021</p>
            </div>
      </div>
      
      <div ></div>

        </div>
      </div>
    </section>
  )
}

export default RequestedBooks
