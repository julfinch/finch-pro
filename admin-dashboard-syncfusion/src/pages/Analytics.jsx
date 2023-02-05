import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie,Area, Button, LineChart, ColorMapping, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import banner from '../data/illustration-john-2.png';
import useWindowSize from "../hooks/useWindowSize";

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Analytics = () => {
    const { width } = useWindowSize();
  const { currentColor, currentMode } = useStateContext();
  const user = JSON.parse(localStorage.getItem('user'));


  return (
    <div className="mt-4 ">
      <div className="flex flex-wrap px-4 lg:flex-nowrap justify-center gap-0 lg:gap-3 xl:gap-4">
        <div className="shadow flex-grow  bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-40 rounded-xl lg:pl-4 xl:px-8 mt-16 lg:my-3" style={{width: `${ width > 1100 ? "650px" : "415px"}`}}>
          <div className="flex flex-row justify-between items-center relative lg:static">
            <div className="absolute -bottom-36 lg:static p-4 lg:p-0 w-3/5 z-20 lg:w-full">
              <p className="text-xs lg:text-sm xl:text-xl">Congratulations, {user.firstName}! 🎉</p>
              <p className="text-xs lg:text-xs xl:text-sm text-gray-400 mt-4">You have done 72% 🤩 more sales today. Check your new raising badge in your profile.</p>
            </div>
              <img src={banner} alt="banner" className=" lg:w-72 xl:w-72 lg:-mr-20 lg:-ml-4 xl:-ml-0 xl:mr-0 h-36 lg:h-44 lg:-mt-4 lg:static absolute -bottom-40 -right-4"/>
          </div>
        </div>
        <div className="flex my-2 lg:m-1 flex-wrap justify-between lg:justify-center gap-1 lg:gap-4 items-center">
            <div  className="shadow bg-white h-40 dark:text-gray-200 dark:bg-secondary-dark-bg w-40 lg:w-48 xl:w-52  p-4 rounded-2xl ">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-light lg:font-semibold">Monthly Revenue</p>
                    <p className="text-xs font-light lg:font-semibold">$63,448</p>
                </div>
                <div className="w-6/12 md:w-full">
                    <SparkLine currentColor="#fff" id="column-sparkLine" height={width < 500 ? "90px" : "110px"} type="Column" data={SparklineAreaData} width={width > 1100 ? "180px" : width < 500 ? "120px" : "160px"} color={currentColor} />
                </div>
            </div>
            <div  className="shadow bg-white h-40 dark:text-gray-200 dark:bg-secondary-dark-bg lg:w-48 xl:w-52 w-40  p-4 rounded-2xl ">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-light lg:font-semibold">Yearly Sales</p>
                    <p className="text-xs font-light lg:font-semibold">$43,246</p>
                </div>
                <div className="md:w-full -mt-6 lg:-mt-8 xl:-mt-6">
                    <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height={width > 1100 ? "160px" : "170px"} />
                </div>
              
            </div>
        </div>
      </div>
        {/* SECOND ROW  - LEFT PANEL*/}
        <div className="flex px-2 gap-1 mx-2 lg:mx-0 flex-wrap justify-center lg:mt-3 xl:mt-0">
            <div className="shadow bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-2xl " style={{height: `${ width > 1100 ? "384px" : width < 500 ? "740px" : "400px"}` , width: `${ width > 1100 ? "766px" : "560px"}`}}>
                
                <div className="xl:mt-3 flex xl:gap-4 flex-wrap xl:justify-center">
                    <div className="xl:border-r-1 border-color m-4 xl:pr-1">
                    <div className='-ml-8 mr-2'>
                        <ColorMapping height="330px" width={width > 1100 ? "380px" : "290px"}/>
                    </div>
                    </div>
                <div>
                {/* RECENT TRANSACTIONS */}
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg lg:-mt-0 xl:-mt-3 rounded-2xl">
                    <div className="flex justify-between items-center gap-2">
                        <p className="text-base font-semibold">Transactions</p>
                        <DropDown currentMode={currentMode} />
                    </div>
                    <div className="mt-2 -pl-2 w-72 lg:w-56 xl:w-72">
                        {recentTransactions.map((item) => (
                        <div key={item.title} className="flex justify-between mt-4 lg:mt-5 xl:mt-4">
                            <div className="flex gap-4">
                            <button
                                type="button"
                                style={{
                                color: item.iconColor,
                                backgroundColor: item.iconBg,
                                }}
                                className="text-2xl rounded-lg p-2 hover:drop-shadow-xl"
                            >
                                {item.icon}
                            </button>
                            <div>
                                <p className="text-sm font-semibold">{item.title}</p>
                                <p className="text-xs text-gray-400">{item.desc}</p>
                            </div>
                            </div>
                            <p className={`text-${item.pcColor}`}>{item.amount}</p>
                        </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-5 border-t-1 border-color">
                        <div className="mt-3">
                        <Button
                        color="white"
                        size={`${ width > 1100 ? "sm" : "sm"}`}
                        bgColor={currentColor}
                        text="Add More"
                        borderRadius="10px"
                        padding={`${ width > 1100 ? "3" : "2"}`}
                        />
                        </div>

                        <p className="text-gray-400 text-sm">36 Transactions</p>
                    </div>
                </div>

            </div>
          </div>
        </div>
        {/* SECOND ROW  - RIGHT PANEL*/}
        <div className="shadow w-full md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl xl:w-80 lg:w-64 px-6 pt-6 mx-3 mt-1 mb-4 lg:mt-0 lg:mb-0">
          <div className="flex justify-between">
            <p className="text-base font-semibold">Weekly Stats</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>

          <div className="mt-4 ">
            {weeklyStats.map((item) => (
              <div key={item.title} className="flex justify-between mt-2 w-full">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-lg hover:drop-shadow-xl text-white rounded-full p-2"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                </div>

                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
            <div className="mt-3">
                <LineChart/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;