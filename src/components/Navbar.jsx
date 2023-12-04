import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import {Menu,AccountCircle,Description,Work,Phone,Assignment} from '@mui/icons-material';


const navItems = [
  { text: 'About', icon: <AccountCircle /> },
  { text: 'Resume', icon: <Description /> },
  { text: 'Work', icon: <Work /> },
  { text: 'Blog', icon: <Assignment /> },
  { text: 'Contact', icon: <Phone /> },
];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    transform: 'scale(0.9)',
  };

  const transitionStyles = {
    entering: { opacity: 1, transform: 'scale(1)' },
    entered: { opacity: 1, transform: 'scale(1)' },
    exiting: { opacity: 0, transform: 'scale(0.9)' },
    exited: { opacity: 0, transform: 'scale(0.9)' },
  };

  return (
    <div className='hidden mr-0 xs:flex-col xs:flex'>
      <div className="text-4xl font-poppins text-gray-800 cursor-pointer pt-6 pb-6  bg-white rounded-lg mb-2 " onClick={toggleDropdown}>
        <Menu style={{fontSize:"40px"}}/>
      </div>
      <Transition in={showDropdown} timeout={duration}>
        {(state) => (
          <nav
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            className="bg-white pt-0 p-3 text-gray-800 rounded-lg"
          >
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${index !== navItems.length - 1 ? 'my-6' : ''} cursor-pointer transition-all duration-300 transform hover:text-green-700`}
                onClick={() => {
                  window.alert('This is a non-functional item.');
                }}
              >
                <div className="text-3xl">{item.icon}</div>
                <div className="mt-1 text-lg">{item.text}</div>
              </div>
            ))}
          </nav>
        )}
      </Transition>

    </div>
  );
};

export default Navbar;
