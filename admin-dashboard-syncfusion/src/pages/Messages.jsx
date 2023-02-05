import React from 'react';
import { BsImage, BsMusicNoteBeamed, BsStar } from 'react-icons/bs';
import { MdOutlineSlowMotionVideo, MdKeyboardArrowDown } from 'react-icons/md';
import { BiMicrophone, BiEditAlt } from 'react-icons/bi';
import { FiFileText, FiPhoneCall,FiVideo, FiPaperclip, FiSend, FiEdit, FiSearch } from 'react-icons/fi';

import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import avatar2 from '../data/avatar2.jpg';
import avatar3 from '../data/avatar3.png';
import avatar4 from '../data/avatar4.jpg';
import party from '../data/party.jpg';

const Messages = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="grid grid-cols-12 h-screen border-t dark:border-transparent" >
      {/*GRID 1*/}
      <div className="invisible lg:visible col-span-0 lg:col-span-4 lg:p-4 bg-gray-100  dark:text-gray-200 dark:bg-main-dark-bg">
        <div className="flex flex-col p-6 ">
          {/*ONLINE NOW*/}
          <div className="border shadow-md border-gray-300 -p-2 -m-2 rounded-md dark:border-[#33373E]">
            <div className="flex flex-row bg-white rounded-t-md p-2 items-center justify-between border-b dark:text-gray-200 dark:bg-secondary-dark-bg dark:border-transparent">
              <p className="font-semibold text-base">Online Now</p>
              <p className="text-sm font-semibold p-1 rounded-full" style={{ color: currentColor }}>10</p>
            </div>
            {/*AVATARS*/}
            <div className="flex flex-row px-2 py-4 items-center justify-between dark:border-[#33373E]">
              <img
                className="rounded-full w-10 h-10 ring hover:ring-blue-500 cursor-pointer"
                src={avatar3}
                alt="user-profile"
              />
              <img
                className="rounded-full w-10 h-10 ring hover:ring-blue-500 cursor-pointer"
                src={avatar}
                alt="user-profile"
              />
              <img
                className="rounded-full w-10 h-10 ring hover:ring-blue-500 cursor-pointer"
                src={avatar2}
                alt="user-profile"
              />
              <img
                className="rounded-full w-10 h-10 ring hover:ring-blue-500 cursor-pointer"
                src={avatar3}
                alt="user-profile"
              />
              <img
                className="rounded-full w-10 h-10 ring hover:ring-blue-500 cursor-pointer"
                src={avatar}
                alt="user-profile"
              />
            </div>
          </div>
          {/*MESSAGES*/}
          <div className="border shadow-md rounded-md -p-2 -mx-2 -mb-2 mt-6 border-gray-300 dark:text-gray-200 dark:bg-main-dark-bg dark:border-[#33373E]">
            <div className="flex flex-row items-center rounded-t-md border-b p-2 bg-white justify-between  dark:text-gray-200 dark:bg-secondary-dark-bg dark:border-transparent">
              <div className="flex flex-row gap-2 items-center">
                <p className="font-semibold text-base">Messages</p>
                <MdKeyboardArrowDown/>
              </div>
              <div className="flex flex-row gap-2 items-center text-gray-400">
                <button><FiEdit/></button>
                <button><BsStar/></button>
              </div>
            </div>
            {/*SEARCH BAR*/}
            <div className="p-2 gap-4 flex flex-col">
              <form className="group relative dark:bg-gray-700 rounded-md">
                <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
                <input class="focus:ring-2 focus:ring-blue-500 dark:focus:text-gray-200 dark:ring-[#33373E] dark:bg-transparent focus:outline-none appearance-none w-full text-xs leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="search message" placeholder="search message..."/>
              </form>
              {/*LATEST MESSAGE*/}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <div className="relative w-11 h-11">
                    <img
                      className="rounded-full w-11 h-11 mr-4"
                      src={avatar2}
                      alt="user-profile"
                    />
                    <div className="absolute border-2 border-white w-3 h-3 bg-green-500 bottom-0.5 right-0.5 rounded-full"></div>
                  </div>
                  <div className="flex flex-col ml-2">
                    <p className="font-medium text-sm">Monkey D. Luffy</p>
                    <p className="flex flex-row items-center text-xs text-gray-400 font-base gap-1"><span style={{color: currentColor}}><BiEditAlt/></span>  Luffy is typing...</p>
                  </div>
                </div>
                <div className="grid place-content-center border-2 border-white text-xs w-6 h-6 rounded-full text-white" style={{ marginLeft: '-10px',backgroundColor: currentColor }}>
                  <span>2</span>
                </div>
              </div>
              {/*LATEST MESSAGE*/}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <div className="relative w-11 h-11">
                    <img
                      className="rounded-full w-11 h-11 mr-4"
                      src={avatar3}
                      alt="user-profile"
                    />
                    <div className="absolute border-2 border-white w-3 h-3 bg-green-500 bottom-0.5 right-0.5 rounded-full"></div>
                  </div>
                  <div className="flex flex-col ml-2">
                    <p className="font-medium text-sm">Dark King Rayleigh</p>
                    <p className="flex flex-row items-center text-xs text-gray-400 font-base gap-1"><span><BiMicrophone/></span>Voice Message</p>
                  </div>
                </div>
              </div>
              {/*LATEST MESSAGE*/}
              <div className="p-2 -ml-2 -mr-2 flex flex-row items-center bg-white justify-between border-r-4  dark:text-gray-200 dark:bg-secondary-dark-bg dark:border-transparent" style={{borderColor: currentColor}}>
                <div className="flex flex-row items-center">
                  <div className="relative w-11 h-11">
                    <img
                      className="rounded-full w-11 h-11 mr-4"
                      src={avatar}
                      alt="user-profile"
                    />
                    <div className="absolute border-2 border-white w-3 h-3 bg-green-500 bottom-0.5 right-0.5 rounded-full"></div>
                  </div>
                  <div className="flex flex-col ml-2">
                    <p className="font-medium text-sm">Group #1</p>
                    <p className="flex flex-row items-center text-xs text-gray-400 font-base gap-1">You:<span className="text-black dark:text-gray-200">It was, indeed!</span>  </p>
                  </div>
                </div>
                  <p className="text-xs text-gray-400" >9:32</p>
              </div>
              {/*LATEST MESSAGE*/}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <div className="relative w-11 h-11">
                    <img
                      className="rounded-full w-11 h-11 mr-4"
                      src={avatar4}
                      alt="user-profile"
                    />
                    <div className="absolute border-2 border-white w-3 h-3 bg-green-500 bottom-0.5 right-0.5 rounded-full"></div>
                  </div>
                  <div className="flex flex-col ml-2">
                    <p className="font-medium text-sm">Roronoa Zoro</p>
                    <p className="flex flex-row items-center text-xs text-gray-400 font-base gap-1"><span><BiMicrophone/></span>Voice Message</p>
                  </div>
                </div>
              </div>
              {/*LATEST MESSAGE*/}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <div className="relative w-11 h-11">
                    <img
                      className="rounded-full w-11 h-11 mr-4"
                      src={avatar2}
                      alt="user-profile"
                    />
                    <div className="absolute border-2 border-white w-3 h-3 bg-green-500 bottom-0.5 right-0.5 rounded-full"></div>
                  </div>
                  <div className="flex flex-col ml-2">
                    <p className="font-medium text-sm">Vinsmoke Sanji</p>
                    <p className="flex flex-row items-center text-xs text-gray-400 font-base gap-1"><span style={{color: currentColor}}><BiEditAlt/></span>  Sanji is typing...</p>
                  </div>
                </div>
                <div className="grid place-content-center border-2 border-white text-xs w-6 h-6 rounded-full text-white" style={{ marginLeft: '-10px',backgroundColor: currentColor }}>
                  <span>10</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      {/*END GRID 1*/}

      {/*GRID 2*/}
      <div className="col-span-24 w-full lg:col-span-5 bg-white  dark:text-gray-200 dark:bg-secondary-dark-bg">
        {/*GRID 2 HEADER*/}
        <div className="flex flex-row justify-between items-center p-4 border-b dark:border-b-[#20232A]">
          <p className="font-medium text-base">Group #1</p>
          <div className="flex flex-row text-lg text-gray-500 gap-3">
            <button><FiVideo/></button>
            <button><FiPhoneCall/></button>
            <button><BsImage/></button>
            <button><FiFileText/></button>
          </div>
          <div className="flex flex-row gap">
            <img
              className="rounded-full w-8 h-8 border-2 border-white dark:border-[#33373E]"
              src={avatar2}
              alt="user-profile"
            />
            <img
              className="rounded-full w-8 h-8 border-2 border-white dark:border-[#33373E]"
              src={avatar3}
              alt="user-profile"
              style={{ marginLeft: '-10px'}}
            />
            <img
              className="rounded-full w-8 h-8 border-2 border-white dark:border-[#33373E]"
              src={avatar4}
              alt="user-profile"
              style={{ marginLeft: '-10px'}}
            />
            <div className="grid place-content-center border-2 border-white dark:border-[#33373E] text-xs w-8 h-8 rounded-full text-white" style={{ marginLeft: '-10px',backgroundColor: currentColor }}>
              <span>+6</span>
            </div>
          </div>
        </div>

        {/*GRID 2 CONTENT*/}
        <div className="flex flex-col p-6">
          {/*CHAT 1*/}
          <div className="flex flex-row gap-2">
            <img
              className="rounded-full w-10 h-10 hover:ring"
              src={avatar4}
              alt="user-profile"
            />
            <div className="flex flex-col gap-2">
              <p className="text-xs font-normal w-full">Tobirama Senju  <span className="text-xs text-gray-400">1d</span></p>
              <p className="text-xs font-light rounded-r-full rounded-bl-full bg-gray-200 py-2 px-4 dark:bg-main-dark-bg">Hii!, are we goin on new year's holiday?</p>
              <p className="text-xs font-light "><span className="rounded-full bg-gray-200 py-1 px-3 dark:bg-main-dark-bg">👍 6</span><span className="rounded-full dark:bg-main-dark-bg bg-gray-200 py-1 px-3">👎 2</span></p>
            </div>
          </div>
          {/*CHAT 2*/}
          <p className="text-xs font-normal text-center m-4 text-gray-400">Today, 17 Nov</p>
          <div className="flex flex-row gap-2">
            <img
              className="rounded-full w-10 h-10 hover:ring"
              src={avatar2}
              alt="user-profile"
            />
            <div className="flex flex-col gap-2">
              <p className="text-xs font-normal w-full">Uzumaki Kushina  <span className="text-xs text-gray-400">10m</span></p>
              <p className="text-xs font-light rounded-r-full rounded-bl-full bg-gray-200 dark:bg-main-dark-bg py-2 px-4">Last night's party was a blast! Can't get enough..</p>
              <img
              className="rounded-2xl w-64 h-32"
              src={party}
              alt="user-profile"
              />
              <p className="text-xs font-medium "><span className="rounded-full bg-gray-200 dark:bg-main-dark-bg py-1 font-light px-3">👍 8</span><span className="rounded-full dark:bg-main-dark-bg bg-gray-200 py-1 font-light px-3">👎 1</span></p>
            </div>
          </div>
          {/*CHAT 3*/}
          <div className="flex flex-row-reverse gap-2">
            <img
              className="rounded-full w-10 h-10 hover:ring"
              src={avatar}
              alt="user-profile"
            />
            <div className="flex flex-col gap-2">
              <p className="text-xs font-normal text-right w-full">You  <span className="text-xs text-gray-400">2m</span></p>
              <p className="text-xs font-light text-black rounded-br-full rounded-l-full py-2 px-4" style={{ backgroundColor: currentColor }}>It was indeed!</p>
            </div>
          </div>
          {/*CHAT INPUT*/}
          <div className="flex flex-row rounded-lg mt-10 p-2 bg-gray-200 dark:bg-main-dark-bg items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <img
                className="rounded-full w-8 h-8"
                src={avatar}
                alt="user-profile"
              />
              <input className="text-xs text-gray-600 bg-transparent focus:outline-none" placeholder="Your Message..."/>
            </div>
            <div className="flex flex-row gap-2 text-lg">
              <button><BiMicrophone/></button>
              <button><FiPaperclip/></button>
              <button>
                <div style={{ color: currentColor }}>
                  <FiSend/>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*END OF GRID 2*/}

      {/*GRID 3*/}
      <div className="invisible lg:visible col-span-0 lg:col-span-3 bg-white border-l dark:border-l-[#20232A] dark:text-gray-200 dark:bg-secondary-dark-bg">
        {/*GROUP BAR*/}
        <div className="flex flex-col p-4 border-b dark:border-b-[#20232A] items-center justify-between">
            <img
              className="rounded-full w-16 h-16"
              src={avatar3}
              alt="user-profile"
            />
          <p className="font-medium text-lg">Group #1</p>
          <p className="font-light text-xs text-gray-600 dark:text-gray-300">@Odama</p>
        </div>

        <div className="p-4 flex flex-col gap-2">
          {/*24 PARTICIPANTS*/}
          <div className="flex flex-row items-center justify-between">
            <p className="font-semibold text-base">24 Participants</p>
            <button>
              <p className="text-xs font-semibold hover:underline" style={{ color: currentColor }}>See all</p>
            </button>
          </div>
          {/*chat entry*/}
          <div className="flex flex-row items-center">
            <button>
              <img
                className="rounded-full w-11 h-11 mr-4 hover:ring"
                src={avatar2}
                alt="user-profile"
              />
            </button>
            <div className="flex flex-col">
              <p className="font-medium text-sm">Killua Zoldyck</p>
              <p className="text-xs text-gray-400 font-base">Busy! Sorry for slowers</p>
            </div>
          </div>
          {/*chat entry*/}
          <div className="flex flex-row items-center">
            <button>
              <img
                className="rounded-full w-11 h-11 mr-4 hover:ring"
                src={avatar3}
                alt="user-profile"
              />
            </button>
            <div className="flex flex-col">
              <p className="font-medium text-sm">Gon Freecs</p>
              <p className="text-xs text-gray-400 font-base">At work</p>
            </div>
          </div>
          {/*chat entry*/}
          <div className="flex flex-row items-center">
            <button>
              <img
                className="rounded-full w-11 h-11 mr-4 hover:ring"
                src={avatar4}
                alt="user-profile"
              />
            </button>
            <div className="flex flex-col">
              <p className="font-medium text-sm">Uzumaki Naruto</p>
              <p className="text-xs text-gray-400 font-base">Gaming and IT</p>
            </div>
          </div>
          {/*SHARED MEDIA*/}
          <div className="flex flex-row items-center justify-between">
            <p className="font-semibold text-base">Shared Media</p>
            <button>
              <p className="text-xs font-semibold hover:underline" style={{ color: currentColor }}>See all</p>
            </button>
          </div>
          {/*media entry*/}
          <button>
            <div className="flex flex-row items-center pb-1 pt-1 hover:bg-gray-100 hover:rounded-md dark:hover:bg-gray-700">
              <div className="p-2 mr-5 ml-2 rounded text-gray-600 bg-gray-200">
                <FiFileText/>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-sm">Sales.pdf</p>
                <p className="text-left text-xs text-gray-400 font-base">1.8 Mb</p>
              </div>
            </div>
          </button>
          {/*media entry*/}
          <button>
            <div className="flex flex-row items-center pb-1 pt-1 hover:bg-gray-100 hover:rounded-md dark:hover:bg-gray-700">
              <div className="p-2 mr-5 ml-2 rounded text-gray-600 bg-gray-200">
                <BsMusicNoteBeamed/>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-sm">Meeting.zip</p>
                <p className="text-left text-xs text-gray-400 font-base">1.8 Mb</p>
              </div>
          </div>
          </button>
          {/*media entry*/}
          <button>
            <div className="flex flex-row items-center pb-1 pt-1 hover:bg-gray-100 hover:rounded-md dark:hover:bg-gray-700">
              <div className="p-2 mr-5 ml-2 rounded text-gray-600 bg-gray-200">
                <BsImage/>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-sm">FB Ad.png</p>
                <p className="text-left text-xs text-gray-400 font-base">1.8 Mb</p>
              </div>
            </div>
          </button>
          {/*media entry*/}
          <button>
            <div className="flex flex-row items-center pb-1 pt-1 hover:bg-gray-100 hover:rounded-md dark:hover:bg-gray-700">
              <div className="p-2 mr-5 ml-2 rounded text-gray-600 bg-gray-200">
                <MdOutlineSlowMotionVideo/>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-sm">Ads.mp4</p>
                <p className="text-left text-xs text-gray-400 font-base">1.8 Mb</p>
              </div>
            </div>
          </button>
        </div>

      </div>
      {/*END OF GRID 3*/}
    </div>
  );
};

export default Messages;
