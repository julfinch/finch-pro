import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line, RiArrowLeftLine } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { useLocation, useNavigate } from "react-router-dom";


const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const MenuButton = ({ title, customFunc, icon, color, dotColor }) => (
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // const [user, setUser] = useState({});
  

  // const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user || user === 'undefined' || user === 'null') {
    navigate("/");
    }
  }, [user])
  


  // if ( pathname === '/') {
  //   return <></>
  // }
  // useEffect(() => {
  //   if (localStorage.getItem('user')) {
  //     const userDetails = JSON.parse(localStorage.getItem('user'));
  //     setUser(userDetails)
  //   } else {
  //     ""
  //   }
  // }, [])
  

    // if (localStorage.getItem('user')) {
    //   const userDetails = JSON.parse(localStorage.getItem('user'));
    //   setUser(userDetails)
    // } else {
    //   ""
    // }


  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      
        <MenuButton customFunc={handleActiveMenu} color={currentColor} icon={activeMenu ? <RiArrowLeftLine/> : <AiOutlineMenu />} />
          <div className="flex-row hidden sm:flex rounded-full p-1 bg-gray-200 dark:bg-main-dark-bg items-center justify-between">
            <div className="flex flex-row items-center gap-2 group relative">
              <svg width="20" height="20" fill="currentColor" className="ml-2 text-slate-400 pointer-events-none" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
              </svg>
              <input className="text-xs text-gray-600 bg-transparent focus:outline-none" placeholder="Search"/>
            </div>
            <div className="flex flex-row items-center p-2 justify-between text-white w-28 h-9 rounded-full" style={{ backgroundColor: currentColor }}>
              <p className="text-xs">Categories</p>
              <MdKeyboardArrowDown/>
            </div>
          </div>

      <div className="flex">
        <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="Chat" dotColor={currentColor} customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor={currentColor} customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={pathname === "/" ? avatar : user.picturePath}
              alt="user-profile"
            />
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile/>)}
      </div>
    </div>
  );
};

export default Navbar;
