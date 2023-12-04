import React, { useState } from 'react';
import Resume from './Resume';
import AboutMe from './AboutMe';

const Carousel = () => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div className=" flex flex-col md:flex-row ">
      <div
        className={`h-[200px] xs:h-[400px] md:h-[710px]    rounded-[5px] flex-1   transition duration-300 relative ${
          selected === 0 ? 'bg-white transform scale-105' : 'bg-white'
        } ${selected === 0 ? 'z-10 border border-gray-200' : 'z-0'}`}
        onClick={() => handleSelect(0)}
      >
        <Resume/>
      </div>
      <div
        className={`flex-1  m-2 p-4 cursor-pointer transition md:h-[710px] duration-300 relative   rounded-[5px] ${
          selected === 1 ? ' transform scale-105 bg-white' : 'bg-white'
        } ${selected === 1 ? 'z-10 border border-gray-200 ' : 'z-0'}`}
        onClick={() => handleSelect(1)}
      >
        <AboutMe/>
      </div>
    </div>
  );
};

export default Carousel;
