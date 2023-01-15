import React from 'react'
import RequestedBooksImage from '../../assets/rich-dad-poor-dad.png'

const RequestedBooks = () => {
  return (
    <section>
      <div className='flex flex-col lg:flex-row mx-10 md:mx-20 lg:mx-52 rounded-lg'>
        <img
          src={RequestedBooksImage}
          alt='Rich Dad Poor Dad'
          className='h-[400] w-[300] mx-auto'
        />

        <div className='card-details flex flex-col just'>
          <div className='top flex flex-row justify-between mx-4 font-semibold text-gray-500'>
            <div>
              <h1 className='text-2xl font-bold'>Rich Dad Poor Dad</h1>
            </div>
            <div>
              <p>12/12/2021</p>
            </div>
          </div>

          <div className='mx-2'>
            <p className='text-nd'>Description of the Book</p>
          </div>
          <div className='bottom'>
            <p className='text-sm'>Author: Robert Kiyosaki</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RequestedBooks
