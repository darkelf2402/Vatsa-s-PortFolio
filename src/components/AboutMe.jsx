import React from 'react'
import Intro from './Intro'
import Services from './Services'
import Projects from './Projects'

const AboutMe = () => {
  return (
    <div className='h-[660px] w-[400px] sm:w-[480px] font-poppins  md:w-[620px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full scrollbar-thumb-hover:black scrollbar-thumb-active:black'>
      <Intro />
      <Services />
      <Projects />
    </div>

    
  )
}

export default AboutMe