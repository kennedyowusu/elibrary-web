import React from 'react'
import RichDad from '../../assets/rich-dad-poor-dad.png'

const Details = () => {
 return (
  <div className='h-screen flex flex-col justify-center pb-16'>
   <div className='h-'>
    <img src={RichDad} alt="Book Title" />

   </div>

   <div>
    <h1>Rich Dad Poor Dad</h1>
    <p>Robert T. Kiyosaki</p>
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quo quia inventore! Quis delectus eligendi, et odio inventore nulla, accusantium nam quibusdam incidunt impedit dolore? Eaque, eligendi quasi! Perferendis, molestiae!
     Doloribus iusto magnam consectetur molestiae praesentium id quae cumque, quisquam fugiat doloremque labore at ipsum enim inventore ullam esse laboriosam magni vitae unde iste reprehenderit odio! Est quasi quam provident!
    </p>
   </div>
  </div>
 )
}

export default Details;
