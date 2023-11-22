import React, { useState } from 'react';
import Resume from './Resume';
import AboutMe from './AboutMe';

const Carousel = () => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div className=" flex flex-col md:flex-row bg-green-700">
      <div
        className={`h-[660px] md:w-[520px] ml-5 rounded-2xl flex-1  cursor-pointer transition duration-300 relative ${
          selected === 0 ? 'bg-white transform scale-110' : 'bg-gray-200'
        } ${selected === 0 ? 'z-10 border border-blue-700' : 'z-0'}`}
        onClick={() => handleSelect(0)}
      >
        <Resume/>
      </div>
      <div
        className={`flex-1  m-2 p-4 cursor-pointer transition duration-300 relative rounded-2xl ${
          selected === 1 ? 'bg-white transform scale-110' : 'bg-gray-200'
        } ${selected === 1 ? 'z-10 border border-blue-700' : 'z-0'}`}
        onClick={() => handleSelect(1)}
      >
        <AboutMe/>
      </div>
    </div>
  );
};

export default Carousel;
