import React from 'react'

const Request = () => {
 return (
  <section>
   <div className='flex w-full min-h-screen justify-center items-center'>
    <div className='w-1/2'> 
     <h1 className='text-4xl font-bold text-gray-800 text-center md:text-left mt-10 md:mt-0 md:ml-10 mb-10 md:mb-0'></h1>
     <p className='text-l mt-4 text-justify'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptates, quod, quia, voluptate quae voluptatem quas quibusdam
      voluptatum quidem quos nemo. Quisquam, quae. Quisquam, quae. Quisquam,
      quae. Quisquam, quae. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Quisquam voluptates, quod, quia, voluptate quae
      voluptatem quas quibusdam voluptatum quidem quos nemo. Quisquam, quae.
      Quisquam, quae. Quisquam, quae. Quisquam, quae.
     </p>
     <p className='text-teal-400 font-bold text-lg mt-4 mb-4 flex items-center opacity-80 justify-end'>Available</p>
     <button className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-aut mt-4 w-full font-bold text-lg'>Request Book</button>
   </div>
  </section>
 )
}

export default Request
