import React from 'react'
import RequestedBooksImage from '../../assets/rich-dad-poor-dad.png'
import { Link } from 'react-router-dom'

const RequestedBooks = () => {
  return (
    <section className='mt-24 mb-5'>
      <div className='flex w-full min-h-screen justify-center items-center '>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-teal-500 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white md:mb-6 md:mt-24 sm:p-12 md:m-12 sm:m-5 sm:mt-24 overflow-hidden'>
          <div className='flex flex-col space-y-8 justify-between'>
            <div>
              <h1 className='font-bold text-4xl tracking-wide'>
                Book Title Here
              </h1>
              <p className='pt-2 text-justify'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                beatae quas ullam delectus veritatis quasi rerum quos dolorem
                blanditiis. Sequi doloribus expedita fugit aut excepturi fuga
                fugiat officiis, libero tenetur. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Rem beatae quas ullam delectus
                veritatis quasi rerum quos dolorem blanditiis. Sequi doloribus
                expedita fugit aut excepturi fuga fugiat officiis, libero
                tenetur. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Rem beatae quas ullam delectus veritatis quasi rerum quos
                dolorem blanditiis. Sequi doloribus expedita fugit aut excepturi
                fuga fugiat officiis, libero tenetur. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Rem beatae quas ullam
                delectus veritatis quasi rerum quos dolorem blanditiis. Sequi
                doloribus expedita fugit aut excepturi fuga fugiat officiis,
                libero tenetur.
              </p>
            </div>
            <button className='bg-white hover:bg-white-700 text-teal-500 font-bold py-2 px-4 rounded'>
              <Link to='/request'>Remove From List</Link>
            </button>
          </div>

          <div className=''>
            <div className='bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-[21rem]'>
              <img
                src={RequestedBooksImage}
                alt='Book Title'
                className='w-full h-96 object-cover rounded-xl'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RequestedBooks
