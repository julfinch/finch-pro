import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiFinch } from 'react-icons/gi';
import { FiLogOut} from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
  const { pathname } = useLocation();
  // const [person, setPerson] = useState([])
  const user = JSON.parse(localStorage.getItem('user'))

  // useEffect(() => {
  //   if (!user || user === 'undefined' || user === 'null') {
  //     return <></> } else {
  //      const currentUser = JSON.parse(localStorage.getItem('user'))
  //     setPerson(currentUser)
  //   }
  // }, [])
  // console.log('person', person)
  

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };


  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const fullName = user === null ? "John Doe" : `${user.firstName} ${user.lastName}`;

  const activeLink = 'flex items-center gap-5 pl-4 pt-2 pb-2 rounded-lg  text-white  text-md ';
  const normalLink = 'flex items-center gap-5 pl-4 pt-2 pb-2 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray ';

  return (
    <div className="mx-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-1">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <GiFinch  size={42} color={currentColor}/> <span>FinchPro</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          {/*Admin Profile Card */}
          {pathname !== "/" ? <div className="flex flex-col dark:text-gray-200 dark:bg-main-dark-bg shadow-md p-4 border dark:border-transparent rounded-md mt-1 mb-6 items-center justify-between">
            <img
              className="rounded-full w-16 h-16"
              src={pathname === "/" ? avatar : user.picturePath}
              alt="user-profile"
            />
            <p className="font-medium text-lg">{fullName || ""}</p>
            <p className="font-normal text-sm text-gray-600">{pathname === "/" ? "" : user.role}</p>
            {/* <div className="mt-4 flex flex-row gap-3">
              <div className="flex flex-col items-center gap-1">
                <p className="text-gray-400 text-xs">Daily</p>
                <p className="text-black dark:text-gray-200 text-sm font-semibold">$10,000</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-gray-400 text-xs">Weekly</p>
                <p className="text-black dark:text-gray-200 text-sm font-semibold">$50,000</p>
              </div>
            </div> */}
          </div> : <></>
            }
          {/*Links */}
          <div className="mt-2">
            {links.map((item) => (
              <div key={item.title}>
                <p className="hidden">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <div className="my-2" key={link.name}>
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize text-sm">{link.id}</span>
                  </NavLink>
                  </div>
                ))}
              </div>
            ))}
            <NavLink
                    to="/"
                    key="logout"
                    onClick={handleLogout}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <FiLogOut/>
                    <span className="capitalize text-sm">logout</span>
                  </NavLink>
          </div>          
        </>
      )}
    </div>
  );
};

export default Sidebar;
