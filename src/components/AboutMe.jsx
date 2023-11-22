import React from 'react'
import Intro from './Intro'
import Services from './Services'
import Projects from './Projects'

const AboutMe = () => {
  return (
    <div className='xs:h-[660px] h-[400px] w-full sm:w-[480px] xs:w-[380px] font-poppins  md:w-[620px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full scrollbar-thumb-hover:black scrollbar-thumb-active:black'>
      <Intro />
      <Services />
      <Projects />
    </div>

    
  )
}

export default AboutMe