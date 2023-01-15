import React from 'react'
import RequestedBooksImage from '../../assets/rich-dad-poor-dad.png'
import { Link } from 'react-router-dom'

const RequestedBooks = () => {
  return (
    <section>
      <div className='flex w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-teal-500 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white md:mb-6 md:mt-24 sm:p-12 md:m-12 sm:m-5 sm:mt-24 overflow-hidden'>
          <div className='flex flex-col space-y-8 justify-between'>
            <div>
              <h1 className='font-bold text-4xl tracking-wide'>Edu Library</h1>
              <p className='pt-2 text-teal-100 text-sm'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                beatae quas ullam delectus veritatis quasi rerum quos dolorem
                blanditiis. Sequi doloribus expedita fugit aut excepturi fuga
                fugiat officiis, libero tenetur.
              </p>
            </div>
            <div className='flex flex-col space-y-4'>
              <div className='inline-flex space-x-2 items-center'>
                <ion-icon name='call' className='text-xl'></ion-icon>
                <span>+(233) 256 325 592</span>
              </div>

              <div className='inline-flex space-x-2 items-center'>
                <ion-icon name='mail' className='text-xl'></ion-icon>
                <span>edulibrary@edulib.com</span>
              </div>

              <div className='inline-flex space-x-2 items-center'>
                <ion-icon name='location' className='text-xl'></ion-icon>
                <span>Central Africana Street</span>
              </div>
            </div>
            <div className='flex space-x-4 text-lg'>
              <Link to='#'>
                <ion-icon name='logo-github'></ion-icon>
              </Link>

              <Link to='#'>
                <ion-icon name='logo-linkedin'></ion-icon>
              </Link>

              <Link to='#'>
                <ion-icon name='logo-twitter'></ion-icon>
              </Link>
            </div>
          </div>

          
            <div className=' z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-[21rem]'>
        <img src={RequestedBooksImage} alt='Book Title'
        className='w-full h-96 object-cover rounded-xl'

        />
            </div>
        </div>
      </div>
    </section>
  )
}

export default RequestedBooks
