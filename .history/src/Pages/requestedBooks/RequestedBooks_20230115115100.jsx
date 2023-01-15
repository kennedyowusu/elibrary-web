import React from 'react'
import RequestedBooksImage from '../../assets/rich-dad-poor-dad.png'
import { Link } from 'react-router-dom'

const RequestedBooks = () => {
  return (
    <section>
      <article className='bg-gray-800 text-gray-200 flex flex-wrap mb-8 mt-24 flex-row'>
        <Link to=''>
          <img
            src={RequestedBooksImage}
            alt='Rich Dad Poor Dad'
            // style={{ width: '20%', height: '20%' }}
            className='img-fluid img-thumbnail rounded d-block mt-24 mb-5    '
          />
        </Link>
        <div className='relative'>
          <h3 className='text-l font-bold mb-2'>Rich Dad Poor Dad</h3>
          <div>
            <time
              dateTime='
       2021-01-01T00:00:00+00:00'
              className='text-center text-xl mb-2'
            >
              Mon, 01 Jan 2021
            </time>
          </div>
      <div></div>
      <div>
        <p className=' text-xl mb-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum inventore sed voluptas. Nihil praesentium earum quam illum omnis dolore sit eum. Laborum iste id repellat voluptates consectetur earum, aut deleniti.</p>
      </div>
      <button>
        <Link to='/'>Remove from List</Link>
      </button>
        </div>
      </article>
    </section>
  )
}

export default RequestedBooks
