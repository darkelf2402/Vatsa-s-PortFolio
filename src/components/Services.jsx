import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import {DataObject , Source , InterpreterMode} from '@mui/icons-material';



const CustomCard = ({ icon, iconSize, title, description }) => (
  <div className='bg-white w-[250px] items-center  md:w-[360px] mb-11 xs:h-[160px] m-2 md:mr-[35px] rounded-[4px]'>
    {icon && React.cloneElement(icon, { className: `mt-7 ${icon.props.className}`, style: { fontSize: iconSize , backgroundColor:"lightgreen" , borderRadius:"50px" , padding:"12px"} })}
    <p className="text-center font-semibold xs:mt-3 p-2 text-xl ">{title}</p>
    <p className="text-center text-xl text-gray-400 p-1 ">{description}</p>
  </div>
);


const Services = () => {
  return(
    
    <div>
      <div>
        <p className='text-lg xs:text-2xl text-left font-poppins p-3 font-semibold mb-4'>My Services</p>
        <hr className="w-1/2 border-t-2 border-gray-300  mb-9" />
      </div>
      <div className='flex flex-row  xs:mr-5 mt-0 xs:mt-[38px] '>
        <div className='flex flex-wrap'>
            <CustomCard
              icon={<DataObject />} // Pass your icon component here
              iconSize={78}
              title='Web Development'
              description='Modern and mobile-ready'
            />
            <CustomCard
                icon={<Source />} // Pass your icon component here
                iconSize={78}
                title='Backend Designing'
                description='Efficient and Scalable Backend Architectures'
              />
              <CustomCard
                icon={<InterpreterMode />} // Pass your icon component here
                iconSize={78}
                title='Large Language Models'
                description='Computationally light and inexpensive'
              />
        </div>
        <div>
        
        </div>
      </div>
    </div>




  
  )
}

export default Services;