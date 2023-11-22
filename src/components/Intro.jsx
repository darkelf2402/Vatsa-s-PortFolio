import React from 'react'

const Intro = () => {
  return (
    <div className='flex flex-col text-left'>
        <p className='text-lg xs:text-3xl font-poppins font-semibold mb-9'>About Me</p>
        <div className='flex flex-col xs:flex-row'>
            <div className='max-w-[200px] mr-2 xs:mr-9'>
                <p className='text-gray-600 text-xs xs:text-lg  mb-5 xs:mb-0'>
                    <strong>Hey! I am Srivatsa.</strong> Front End Web developer from Bengaluru , India . I create professional websites.  I am a student of PES University and a self taught developer .  
                </p>
            </div>
            <div className='xs:w-[350px]  sm:mr-2'>
                <div className='flex '>
                    <div className="bg-green-700 text-xs xs:text-lg mb-5 font-poppins flex max-w-[50px] xs:max-w-[100px] rounded-[3px] p-1 ">
                        Age:
                    </div>
                    <p className='md:ml-auto ml-2 xs:ml-7  text-xs xs:text-lg  mt-2 text-gray-600'><strong>20</strong></p>
                </div>

                <div className='flex'>
                    <div className="bg-green-700 max-w-[100px] text-xs xs:text-lg rounded-[3px] p-1 mb-5">
                        Residence: 
                    </div>
                    <p className='md:ml-auto ml-2 xs:ml-3  mt-2 text-xs xs:text-lg  text-gray-600'><strong>Bengaluru , India</strong></p>
                </div>

                <div className='flex'>
                    <div className="bg-green-700 max-w-[100px] text-xs xs:text-lg rounded-[3px] p-1 mb-5 mr-2">
                        Tech Stack:
                    </div>
                    <p className='md:ml-auto ml-1 xs:ml-3  mt-2 text-xs xs:text-lg  max-w-[200px] text-gray-600'><strong>ReactJS, TailwindCSS </strong></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro