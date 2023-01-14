import React from 'react'

const Request = () => {
  return (
    <section>
      <div className='flex w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col space-y-6 bg-teal-500 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white'>
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
                <span>+(233) 256 325 592</span>
              </div>

              <div className='inline-flex space-x-2 items-center'>
                <ion-icon name='location' className='text-xl'></ion-icon>
                <span>+(233) 256 325 592</span>
              </div>
            </div>
            <div></div>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Request
