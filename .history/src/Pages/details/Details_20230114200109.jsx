import React from 'react'
import RichDad from '../../assets/rich-dad-poor-dad.png'

const Details = () => {
  return (
    <section className='w-screen mt-28 mb-8 grid grid-cols-1 md:grid-cols-2 container mx-auto px-20'>
      {/* Divide page into two */}
      <div className='w-full h-full flex '>
        <img src={RichDad} alt='Rich Dad Poor Dad' />
      </div>

      <div className='w-full h-full'>
        <h1 className='text-4xl font-bold text-gray-800 text-center md:text-left mt-10 md:mt-0 md:ml-10 mb-10 md:mb-0'>
          Rich Dad Poor Dad
        </h1>
        <p className='text-l mt-4 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quas quibusdam
          voluptatum quidem quos nemo. Quisquam, quae. Quisquam, quae. Quisquam,
          quae. Quisquam, quae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam voluptates, quod, quia, voluptate quae
          voluptatem quas quibusdam voluptatum quidem quos nemo. Quisquam, quae.
          Quisquam, quae. Quisquam, quae. Quisquam, quae.
        </p>

        <p className="first-letter:">Available</p>

        <button
          className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
            rounded-md text-white md:w-aut mt-4 w-full font-bold text-lg'
        >
          Request Book
        </button>
      </div>
    </section>
  )
}

export default Details
