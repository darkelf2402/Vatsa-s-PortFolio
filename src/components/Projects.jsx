import React from 'react';
import { chads,hoobank,dsa } from '../assets';

const Projects = () => {
  return (
    <div className=''>
      <div className='h-[80px]'></div>
      <div>
        <p className='text-lg xs:text-2xl text-left font-poppins p-3 font-semibold mb-4'>Projects</p>
        <hr className="w-1/2 border-t-2 border-gray-300  mb-9" />
      </div>

      

      <div className='flex-col ml-2'>
        
        <div className='flex flex-col md:flex-row mt-11 sm:flex-row '>
          <div className='text-left max-w-[400px] mb-4 sm:mb-0 sm:mr-5 '>
            <p className='text-gray-800 text-xl '>
              Hoobank is a bank website built using <strong>ReactJS and TailwindCSS</strong>. It is a responsive website and is mobile-friendly.
            </p>
          </div>
          <div className='text-center'>
            <a href="https://65531ce6dc3c12254adf2f06--relaxed-wisp-3b96f2.netlify.app/" target="_blank">
              <img src={hoobank} className='h-[158px] md:ml-9 rounded-md w-[252px] md:w-[320px] mx-auto mb-3 transition duration-300 hover:opacity-70 ' alt="hoobank" />
            </a>
          </div>
        </div>

        <div className='h-[20px]'></div>

        <div className='flex mt-7  mb-9 flex-col-reverse md:flex-row'>
          <div className='text-center sm:mr-5'>
            <a href="https://www.youtube.com/watch?v=IH7MeH0iXrU" target="_blank">
              <img src={chads} className='h-[158px] rounded-md w-[252px] md:w-[320px] mx-auto mb-3 mr-5 mt-9 transition duration-300 hover:opacity-70 ' alt="hoobank" />
            </a>
          </div>
          <div className='text-left max-w-[400px]'>
            <p className='text-gray-800 text-xl md:text-right mt-8'>
              Developed a web app where you can host rooms and discuss over your favorite topics. <strong>Used Bootstrap for frontend, Django for backend with SQLite database</strong>
            </p>
          </div>
        </div>

        <div className='h-[20px]'></div>

        <div className='flex  mt-7 flex-col md:flex-row'>
          <div className='text-left max-w-[280px] md:max-w-[350px] mb-4 md:mr-11 sm:mb-0 sm:mr-5 sm:text-center'>
            <p className='text-gray-800 text-xl '>
              Developed a DSA Visualizer using <strong>ReactJS and NodeJS.</strong> You can visualize data structures like stacks and queues.
            </p>
          </div>
          <div className='text-center'>
            <a href="https://65483cc410f7c938ff1f0ac0--silly-starburst-8a6ba5.netlify.app/" target="_blank">
              <img src={dsa} className='h-[158px] rounded-md w-[252px]  md:w-[400px] mx-auto mb-3 transition duration-300 hover:opacity-70 ' alt="hoobank" />
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Projects