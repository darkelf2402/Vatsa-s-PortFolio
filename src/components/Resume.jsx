import React from 'react';
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';
import { my_pic } from '../assets';

const Resume = () => {
  return (
    <div className="flex font-poppins border-none flex-col items-center md:w-[550px] ">
       <div className="relative mt-3 md:mt-0 border-none w-[100px] md:w-full h-[100px]  md:h-[350px] overflow-hidden md:rounded-[5px]">
        <img
          className="w-full border-none h-full rounded-full object-cover md:rounded-[5px]"
          src={my_pic}
          alt="My Profile"
        />
        <div className="md:absolute bottom left-0 w-full h-[30px] transform skew-y-6 bg-white"></div>
        <div className="md:absolute bottom right-0 w-full h-[30px] transform -skew-y-6 bg-white "></div>
      </div>

      <div className="w-full md:mt-8 p-4 sm:p-8">
        <h1 className="text-4xl  text-gray-800 mb-4">R Srivatsa</h1>
        <p className="text-md font-medium text-opacity-80 mb-4 text-green-700">Web Developer</p>

        <div className="flex space-x-5 justify-center sm:justify-center">
          <a href="https://www.linkedin.com/in/srivatsa-r-8726b1218" target="_blank" rel="noopener noreferrer">
            <LinkedIn fontSize="medium" className="text-gray-800 hover:text-green-700 " />
          </a>
          <a href="https://twitter.com/Rsrivatsa1" target="_blank" rel="noopener noreferrer">
            <Twitter fontSize="medium" className="text-gray-800 hover:text-green-700 " />
          </a>
          <a href="https://github.com/darkelf2402" target="_blank" rel="noopener noreferrer">
            <GitHub fontSize="medium" className="text-gray-800 hover:text-green-700 " />
          </a>
        </div>
      </div>


      <hr className='w-1/2 border-t border-gray-300 mt-9 mx-2' />
      

      <div className='flex flex-row text-center'>
        <a href="https://indigo-willie-44.tiiny.site" className='md:mt-[82px] mt-[60px] mr-[120px]' download>
          <h4 className=' mb-3 md:mr-4 ml-2 font-semibold md:font-medium text-xs   md:text-lg text-gray-800 hover:text-green-700 '>
            Download CV
          </h4>
        </a>
        <a href="mailto:vatsa2402@gmail.com.com" className='md:mt-[82px] mt-[60px]'>
          <h4 className=' md:ml-7 xs:ml-6  mb-5 mr-2 md:mb-0 font-semibold md:font-medium text-xs md:text-lg text-gray-800 hover:text-green-700'>
            Contact Me
          </h4>
        </a>
      </div>
    </div>
  );
};

export default Resume;
