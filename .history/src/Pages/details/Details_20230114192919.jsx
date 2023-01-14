import React from 'react'
import RichDad from '../../assets/rich-dad-poor-dad.png'

const Details = () => {
 return (
   <section className='w-screen h-[70vh] mt-28 grid grid-cols-1 md:grid-cols-2 container mx-auto px-20 bg-red'>
     {/* Divide page into two */}
     <div className='w-full h-full'>
       <img src={RichDad} alt='Rich Dad Poor Dad' />
     </div>

     <div className='w-full h-full bg-yellow-400'>
       <h1>Rich Dad Poor Dad</h1>
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
         voluptates, quod, quia, voluptate quae voluptatem quas quibusdam
         voluptatum quidem quos nemo. Quisquam, quae. Quisquam, quae. Quisquam,
         quae. Quisquam, quae.
       </p>
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
         voluptates, quod, quia, voluptate quae voluptatem quas quibusdam
         voluptatum quidem quos nemo. Quisquam, quae. Quisquam, quae. Quisquam,
         quae. Quisquam, quae.
       </p>
     </div>
   </section>
 )
}

export default Details;
