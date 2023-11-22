import React from 'react';
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';
import { my_pic } from '../assets';

const Resume = () => {
  return (
    <div className="flex font-poppins flex-col items-center mt-9 ">
      <img className="w-1/2 md:max-w-[200px] object-cover rounded-full" src={my_pic} alt="My Profile" />

      <div className="w-full p-4 sm:p-8">
        <h1 className="text-4xl font-bold mb-4">R Srivatsa</h1>
        <p className="text-xl mb-4 text-green-700">Web Developer</p>

        <div className="flex space-x-5 justify-center sm:justify-center">
          <a href="https://www.linkedin.com/in/srivatsa-r-8726b1218" target="_blank" rel="noopener noreferrer">
            <LinkedIn fontSize="large" className="text-gray-800 hover:text-green-700 " />
          </a>
          <a href="https://twitter.com/Rsrivatsa1" target="_blank" rel="noopener noreferrer">
            <Twitter fontSize="large" className="text-gray-800 hover:text-green-700 " />
          </a>
          <a href="https://github.com/darkelf2402" target="_blank" rel="noopener noreferrer">
            <GitHub fontSize="large" className="text-gray-800 hover:text-green-700 " />
          </a>
        </div>
      </div>

      <div className='h-[100px]' />

      <div className='flex flex-row text-center sm:flex-col sm:justify-center sm:space-x-8'>
        <a href="https://indigo-willie-44.tiiny.site" download>
          <h4 className='mt-4 mr-2 xs:mr-6 mb-7 xs:mt-8 text-md text-gray-800 hover:text-green-700 font-semibold'>
            Download CV
          </h4>
        </a>
        <a href="mailto:vatsa2402@gmail.com.com">
          <h4 className='mt-4 ml-2 xs:ml-6 xs:mt-8 text-gray-800 font-semibold hover:text-green-700'>
            Contact Me
          </h4>
        </a>
      </div>
    </div>
  );
};

export default Resume;
