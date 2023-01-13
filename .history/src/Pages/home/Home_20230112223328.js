import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => (
  <>
    <Navbar />
    <section>
      <div class='min-h-screen sm:p-10 p-5 lg:px-10 bg-gray-100'>
        <div class='min-h-screen max-w-5xl mx-auto place-content-center justify-center justify-items-center grid md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-5'>
          <div class='bg-white shadow-lg rounded-xl overflow-hidden max-w-xs order-first lg:order-none'>
            <div>
              <img
                src='https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='Abstract Design'
                class='w-full h-40 sm:h-48 object-cover'
              />
            </div>
            <div class='py-5 px-6 sm:px-8'>
              <h2 class='text-xl sm:text-2xl text-gray-800 font-semibold mb-3'>
                Abstract Design
              </h2>
              <p class='text-gray-500 leading-relaxed'>
                Lorem ipsum dolor sit amet, conse adipiscing elit. Phasellus
                enim erat, vestibulum vel.
              </p>

              <ul class='flex mt-8'>
                <li>
                  <img
                    src='https://images.pexels.com/photos/89790/beauty-woman-portrait-face-89790.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb'
                    alt='Face'
                    class='rounded-full w-10 h-10 object-cover border-2 border-white'
                  />
                </li>
                <li>
                  <img
                    src='https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200'
                    alt='Face'
                    class='rounded-full w-10 h-10 object-cover border-2 border-white'
                  />
                </li>
                <li>
                  <img
                    src='https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200'
                    alt='Face'
                    class='rounded-full w-10 h-10 object-cover border-2 border-white'
                  />
                </li>
                <li>
                  <img
                    src='https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200'
                    alt='Face'
                    class='rounded-full w-10 h-10 object-cover border-2 border-white'
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class='bg-white shadow-lg rounded-xl overflow-hidden max-w-xs order-3 md:row-start-1 md:col-start-2 lg:order-none'>
            <div>
              <img
                src='https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='Web Design'
                class='w-full h-40 sm:h-48 object-cover'
              />
            </div>
            <div class='py-5 px-6 sm:px-8'>
              <h2 class='text-xl sm:text-2xl text-gray-800 font-semibold mb-3'>
                Web Design
              </h2>
              <p class='text-gray-500 leading-relaxed'>
                Lorem ipsum dolor sit amet, conse adipiscing elit. Phasellus
                enim erat, vestibulum vel.
              </p>

              <ul class='flex mt-8'>
                <li>
                  <img
                    src='https://images.pexels.com/photos/1758845/pexels-photo-1758845.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200'
                    alt='Face'
                    class='rounded-full w-10 h-10 object-cover border-2 border-white'
                  />
                </li>
                <li>
                  <img
                    src='https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200'
                    alt='Face'
                    class='rounded-full w-10 h-10 object-cover border-2 border-white'
                  />
                </li>
                <li>
                  <img
                    src='https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200'
                    alt='Face'
                    class='rounded-full w-10 h-10 object-cover border-2 border-white'
                  />
                </li>
                <li>
                  <img
                    src='https://images.pexels.com/photos/412840/pexels-photo-412840.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb'
                    alt='Face'
                    class='rounded-full w-10 h-10 object-cover border-2 border-white'
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class='bg-white shadow-lg rounded-xl overflow-hidden max-w-xs order-5 lg:order-none'>
            <div>
              <img
                src='https://images.pexels.com/photos/986733/pexels-photo-986733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='Photography'
                class='w-full h-40 sm:h-48 object-cover'
              />
            </div>
            <div class='py-5 px-6 sm:px-8'>
              <h2 class='text-xl sm:text-2xl text-gray-800 font-semibold mb-3'>
                Photography
              </h2>
              <p class='text-gray-500 leading-relaxed'>
                Lorem ipsum dolor sit amet, conse adipiscing elit. Phasellus
                enim erat, vestibulum vel.
              </p>

              <ul class='flex mt-8'>
                <li>
                  <img
                    src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200'
                    alt='Face'
                    class='rounded-full w-10 h-10 object-cover border-2 border-white'
                  />
                </li>
                <li>
                  <img
                    src='https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb'
                    alt='Face'
                    class='rounded-full w-10 h-10 object-cover border-2 border-white'
                  />
                </li>
                <li>
                  <img
                    src='https://images.pexels.com/photos/458718/pexels-photo-458718.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb'
                    alt='Face'
                    class='rounded-full w-10 h-10 object-cover border-2 border-white'
                  />
                </li>
                <li>
                  <img
                    src='https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200'
                    alt='Face'
                    class='rounded-full w-10 h-10 object-cover border-2 border-white'
                  />
                </li>
              </ul>
            </div>
          </div>

          <div class='w-full bg-white shadow-lg rounded-xl h-24 flex items-center justify-center order-2 md:col-start-1 md:col-end-2 md:max-w-xs lg:order-none'>
            <div class='bg-gray-200 block w-44 h-1 rounded relative'>
              <span class='bg-blue-400 block w-32 h-1 rounded absolute top-0 left-0'></span>
            </div>

            <span class='ml-5 text-sm text-gray-400'>76%</span>
          </div>

          <div class='w-full bg-white shadow-lg rounded-xl h-24 flex items-center justify-center order-4 max-w-xs lg:order-none'>
            <div class='bg-gray-200 block w-44 h-1 rounded relative'>
              <span class='bg-yellow-400 block w-5 h-1 rounded absolute top-0 left-0'></span>
            </div>

            <span class='ml-5 text-sm text-gray-400'>7%</span>
          </div>

          <div class='w-full bg-white shadow-lg rounded-xl h-24 flex items-center justify-center order-last md:col-start-1 md:col-end-2 md:max-w-xs lg:col-auto lg:order-none'>
            <div class='bg-gray-200 block w-44 h-1 rounded relative'>
              <span class='bg-green-400 block w-20 h-1 rounded absolute top-0 left-0'></span>
            </div>

            <span class='ml-5 text-sm text-gray-400'>42%</span>
          </div>
        </div>
      </div>
    </section>
    <Outlet />
  </>
)

export default Home
