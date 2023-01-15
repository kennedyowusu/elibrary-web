import React from 'react'
import RequestedBooksImage from '../../assets/rich-dad-poor-dad.png'
import { Link } from 'react-router-dom'

const RequestedBooks = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center p-2 pt-4 md:p-32 md:pt-4'>
      <article className='bg-gray-800 text-gray-200 flex flex-wrap mb-8 mt-24 flex-row md:flex-inherit rounded'>
        <Link to=''>
          <img
            src={RequestedBooksImage}
            alt='Rich Dad Poor Dad'
            // style={{ width: '20%', height: '20%' }}
            // center the image in the div
            className='object-cover object-center mx-auto mt-5 '
          />
        </Link>
        <div className='relative flex flex-col p-8 '>
          <h3 className='text-l font-bold mb-2'>Rich Dad Poor Dad</h3>
          <div>
            <time
              dateTime='2021-01-01T00:00:00+00:00'
              className='text-center md:text-start text-xl mb-2'
            >
              Mon, 01 Jan 2021
            </time>
          </div>
          <div></div>
          <div>
            <p className='md:text-start text-justify text-l mb-2'>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              inventore sed voluptas. Nihil praesentium earum quam illum omnis
              dolore sit eum. Laborum iste id repellat voluptates consectetur
              earum, aut deleniti.
            </p>
          </div>
          <button className='text-center md:text-start bg-teal-500 hover:bg-teal-700 rounded-md h-10 font-bold mt-2'>
            <Link to='/'>Remove From List</Link>
          </button>
        </div>
      </article>
    </section>
  )
}

export default RequestedBooks
