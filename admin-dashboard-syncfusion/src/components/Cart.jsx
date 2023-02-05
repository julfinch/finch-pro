import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { cartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Cart = () => {
  const { currentColor, isClicked, setIsClicked } = useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0  ">
      <div className="float-right h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-80 lg:w-400">
      <div className="flex justify-between items-center p-4 ml-4">
        <p className="font-semibold text-base md:text-lg lg:text-lg dark:text-gray-200">Shopping Cart</p>
        <button
          type="button"
          onClick={() => setIsClicked(!isClicked)}
          style= {{color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel/>
        </button>
      </div>
       
      <div className="p-0 lg:p-4 ml-4">
        {cartData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color py-4  hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <img
              src={item.image}
              alt="cart item image"
              className="rounded-lg h-16 w-16"
            />

            <div>
              <p className="text-sm lg:text-base font-medium lg:font-semibold dark:text-gray-200 ">{item.name}</p>
              <p className="text-gray-500 text-xs lg:text-base dark:text-gray-400"> {item.category} </p>
              <p className="text-xs lg:text-base font-medium lg:font-semibold dart:text-gray-200"> {item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-2 lg:p-4 ml-4">
      <div className="flex justify-between items-center mt-2 lg:mt-5">
        <p className="text-gray-500 ">Sub Total</p>
        <p className="font-semibold ">$890</p>
      </div>
      <div className="flex justify-between items-center mt-2 lg:mt-5">
        <p className="text-gray-500 ">Total</p>
        <p className="font-semibold ">$890</p>
      </div>

      <div className="mt-5 w-full flex justify-center items-center">
        <Button
          color="white"
          bgColor={currentColor}
          text="Place Order"
          borderRadius="10px"
          width="fit"
          padding="3"
        />
      </div>
      </div>
      
      </div>
    </div>

  );
};

export default Cart;
