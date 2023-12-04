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
    <div className='h-full w-full m-2 flex '>

        
        <div className='absolute top-0 right-0 h-full w-full bg-gradient-to-r from-green-700 to-green-300 z-0'/>

        <div className='ml-0 md:mr-7 md:mt-9 z-10'>
          <Navbar/>
        </div>
        
        <div className='w-full md:w-full h-full bg-white mt-9 '>
        <Carousel/>
        </div>
    </div>
  )
}

export default App
