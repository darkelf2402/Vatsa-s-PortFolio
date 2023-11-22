import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import {DataObject , Source , InterpreterMode} from '@mui/icons-material';



const CustomCard = ({ icon, iconSize, title, description }) => (
  <div className='bg-gray-100 w-[150px] mt-5 xs:w-[260px] xs:h-[160px] m-2 rounded-[4px]'>
    {icon && React.cloneElement(icon, { className: `mt-7 ${icon.props.className}`, style: { fontSize: iconSize} })}
    <p className="text-center font-bold xs:mt-3 text-green-700">{title}</p>
    <p className="text-center text-sm pb-3 ">{description}</p>
  </div>
);


const Services = () => {
  return(
    
    <div>
      <div>
        <p className='text-3xl font-poppins text-left mt-9 ml-2 font-semibold mb-9'>Services</p>
      </div>
      <div className='flex flex-col xs:flex-row items-center xs:mr-5 mt-0 xs:mt-[38px] '>
        <div>
            <CustomCard
              icon={<DataObject />} // Pass your icon component here
              iconSize={48}
              title='Web Development'
              description='Modern and mobile-ready'
            />
            <CustomCard
                icon={<Source />} // Pass your icon component here
                iconSize={48}
                title='Backend Designing'
                description='Efficient and Scalable Backend Architectures'
              />
        </div>
        <div>
        <div>
          <CustomCard
                icon={<InterpreterMode />} // Pass your icon component here
                iconSize={58}
                title='Large Language Models'
                description='Computationally light and inexpensive'
              />
        </div>
        </div>
      </div>
    </div>




  
  )
}

export default Services;