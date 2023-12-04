import React from 'react'

const Intro = () => {
  return (
    <div className='flex flex-col  text-left md:mb-[50px]'>
        <div>
            <p className='text-lg xs:text-2xl font-poppins p-5 font-semibold mb-4'>About Me</p>
            <hr className="w-1/2 border-t-2 border-gray-300  mb-9" />
        </div>
       
        <div className='flex flex-col  md:flex-row'>
            <div className='max-w-[200px] md:max-w-[300px] mr-2 xs:mr-5'>
                <p className='text-gray-600 text-xs md:text-xl  mb-5 xs:mb-0'>
                    <strong>Hey!   I am  R Srivatsa.</strong>   
                </p>
                <p className='text-gray-600 text-xs md:text-xl  mb-5 xs:mb-0'>I   am Front End Web developer from Bengaluru , India . I create professional websites.  I am a student of PES University and a self taught developer . I love Machine Learning and Web Development.</p>
            </div>
            <div className='w-0 md:w-[140px]'>

            </div>
            <div className='xs:w-[350px] sm:mr-2'>
            <div className='flex'>
                <div className="bg-green-300 text-white text-xs xs:text-lg mb-5 font-poppins flex max-w-[50px] xs:max-w-[100px] rounded-[3px] pl-4 pr-4">
                Age:
                </div>
                <p className='md:ml-auto ml-2 md:mr-5 xs:ml-7 text-xs md:text-lg text-gray-600'>20</p>
            </div>
            <hr className="w-1/2 ml-[70px] border-t border-gray-200 mx-2 mb-4" />

            <div className='flex'>
                <div className="bg-green-300 text-white max-w-[120px] text-xs xs:text-lg rounded-[3px] pl-4 pr-4 mb-5">
                Residence:
                </div>
                <p className='md:ml-auto md:mr-5 ml-2 xs:ml-3 text-xs xs:text-lg text-gray-600'>Bengaluru , India</p>
            </div>
            <hr className="w-1/2 ml-[70px] border-t border-gray-200 mx-2 mb-4" />

            <div className='flex'>
                <div className="bg-green-300 text-white max-w-[120px] text-xs xs:text-lg rounded-[3px] pl-4 pr-4 mb-5 mr-2">
                Freelance:
                </div>
                <p className='md:ml-auto ml-1 md:mr-5 text-xs xs:text-lg max-w-[200px] text-gray-600'>Available</p>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Intro