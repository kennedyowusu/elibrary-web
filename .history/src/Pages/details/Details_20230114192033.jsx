import React from 'react'
import RichDad from '../../assets/rich-dad-poor-dad.png'

const Details = () => {
 return (
  <section className='w-screen h-[70vh] mt-28 grid grid-rows-2'>
   
   {/* Divide page into two */}
   <div className="">
    <img src={RichDad} alt="Rich Dad Poor Dad" />
   </div>
   <div className="details__right">
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
