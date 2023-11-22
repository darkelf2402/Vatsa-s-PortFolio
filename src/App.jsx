import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Slider'
import Swiper from 'swiper';
import 'swiper/css';

function App() {

  return (
    <div className='h-full w-full m-2 flex flex-row '>
        <div className='ml-0 mr-7 mt-9'>
          <Navbar/>
        </div>
        <div className='w-full md:w-[1300px]  h-full bg-white mt-9'>
        <Carousel/>
        </div>
    </div>
  )
}

export default App
