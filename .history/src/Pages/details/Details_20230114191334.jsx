import React from 'react'
import RichDad from '../../assets/rich-dad-poor-dad.png'

const Details = () => {
 return (
  <section className='h-screen flex flex-col justify-center pb-16 md:items-center ,d'>
   
   {/* Right Side */}
   <div className='h-1/3 md:flex-1 md:h-auto md:mt-20 lg:mt-24'>
    <img src={RichDad} alt="Book Title" className='h-[100%]' />

   </div>

   {/* Left Side */}
   <div>
    <h1>Rich Dad Poor Dad</h1>
    <p>Robert T. Kiyosaki</p>
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quo quia inventore! Quis delectus eligendi, et odio inventore nulla, accusantium nam quibusdam incidunt impedit dolore? Eaque, eligendi quasi! Perferendis, molestiae!
     Doloribus iusto magnam consectetur molestiae praesentium id quae cumque, quisquam fugiat doloremque labore at ipsum enim inventore ullam esse laboriosam magni vitae unde iste reprehenderit odio! Est quasi quam provident!
    </p>
   </div>

  </sec>
 )
}

export default Details;
