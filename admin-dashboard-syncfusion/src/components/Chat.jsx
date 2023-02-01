import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Chat = () => {
  const { currentColor, setIsClicked, isClicked } = useStateContext();

  return (
    <div className="nav-item shadow absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
        <button
          type="button"
          onClick={() => setIsClicked(!isClicked)}
          style= {{color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel/>
        </button>
      </div>
       
      <div>
        {chatData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <img
              alt="avatar"
              src={item.image}
              className=" rounded-full h-12 w-12"
            />

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 w-full flex justify-center items-center">
        <Button
          color="white"
          bgColor={currentColor}
          text="See all messages"
          borderRadius="10px"
          width="full"
          padding="3"
        />
      </div>
    </div>

  );
};

export default Chat;
