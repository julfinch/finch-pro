import React, { useMemo, useEffect, useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai'
import { HiDotsVertical,HiTrendingUp, HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { BsArrowUp } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { MdOpenInNew } from 'react-icons/md';
import useWindowSize from "../hooks/useWindowSize";
import { ResponsiveBar } from '@nivo/bar'
import { ResponsiveLine } from "@nivo/line";
import { Box, useTheme } from "@mui/material";
import { Button } from '../components';
import { earningData, topSales, topCountries, budgetBarData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { useNavigate } from "react-router-dom";


const Ecommerce = () => {
  const [startDate, setStartDate] = useState(new Date("2021-02-01"));
  const [endDate, setEndDate] = useState(new Date("2021-03-01"));
  const data = budgetBarData
  const { width } = useWindowSize();
  const { currentColor, currentMode, fontColor } = useStateContext();
  const navigate = useNavigate();
  // const [user, setUser] = useState({})
  const user = JSON.parse(localStorage.getItem('user'))
  // const user = localStorage.getItem('user')
  // useEffect(() => {
  //   if (!user || user === 'undefined' || user === 'null') {
  //     navigate("/");
  //   }
  // }, [])
  
 
  return (
    <div className="mt-4">
      {/*Dashboard Header*/}
        <div className="flex flex-row mx-4 mt-20 sm:mt-2 mb-2 justify-between">
          <p className="font-bold dark:text-gray-400 text-xl">Dashboard</p>
          <p className="text-xs text-gray-500 flex flex-row items-center gap-2"><AiOutlineCalendar/>Sep 12,2022 - Sep 21, 2022</p>
        </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-between ">
        
        <div className="flex flex-wrap w-full mx-4 mb-3 justify-between gap-2 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="shadow-sm flex-grow bg-white h-28 dark:text-gray-200 dark:bg-secondary-dark-bg mt-2 sm:mt-0 w-full lg:w-48 xl:w-64 p-3 rounded-2xl ">
              <div className="flex flex-row justify-between items-center">
                <h4 className=" text-gray-400 ">{item.title}</h4>
                <HiDotsVertical/>
              </div>
              <div className="flex flex-row items-center justify-between mt-3">
                <div className="flex flex-row gap-2 items-center">
                  <button
                    type="button"
                    style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                    className="text-xl opacity-0.9 rounded-md  p-2 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <p className="text-lg font-semibold">{item.amount}</p>
                </div>
                <p className={`text-sm ${item.pcColor} ml-2 flex flex-row items-center gap-2`}>
                  <MdOpenInNew/>
                  {item.percentage}
                </p>
              </div>
              <p className="text-xs text-gray-400 text-right mt-1">Compared to Jan 2022</p>
            </div>
          ))}
        </div>
      </div>
      
      {/*Main Chart*/}
      <div className="flex gap-1 lg:pl-3 flex-wrap justify-center lg:p-0 ">
        <div className="shadow flex-1 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg px-4 pt-4 pb-10 rounded-2xl h-96 w-64">
          <div className="flex justify-between border-b pb-2">
            <p className="font-semibold text-sm">Revenue Updates</p>
            <div className="flex items-center gap-4">
              {/* <p className="flex items-center text-xs gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center text-xs gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p> */}
            </div>
          </div>

          {data ? (
            <ResponsiveBar
              data={data}
              theme={{
                    axis: {
                      domain: {
                        line: {
                          stroke: fontColor,
                        },
                      },
                      legend: {
                        text: {
                          fill: fontColor,
                        },
                      },
                      ticks: {
                        line: {
                          stroke: fontColor,
                          strokeWidth: 1,
                        },
                        text: {
                          fill: fontColor,
                        },
                      },
                    },
                    legends: {
                      text: {
                        fill: fontColor,
                      },
                    },
                    tooltip: {
                      container: {
                        color: "rgba(1,1,1,0.8)",
                      },
                    },
                  }}
              keys={[
                  'USA',
                  'INDIA',
                  'GERMANY',
                  'UK',
                  'AUSTRALIA',
                  'CHINA'
              ]}
              indexBy="year"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: 'linear' }}
              indexScale={{ type: 'band', round: true }}
              colors={{ scheme: 'nivo' }}
              defs={[
                  {
                      id: 'dots',
                      type: 'patternDots',
                      background: 'inherit',
                      color: '#38bcb2',
                      size: 4,
                      padding: 1,
                      stagger: true
                  },
                  {
                      id: 'lines',
                      type: 'patternLines',
                      background: 'inherit',
                      color: '#eed312',
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10
                  }
              ]}
              fill={[
                  {
                      match: {
                          id: 'AUSTRALIA'
                      },
                      id: 'dots'
                  },
                  {
                      match: {
                          id: 'GERMANY'
                      },
                      id: 'lines'
                  }
              ]}
              borderColor={{
                  from: 'color',
                  modifiers: [
                      [
                          'darker',
                          1.6
                      ]
                  ]
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'year',
                  legendPosition: 'middle',
                  legendOffset: 32
              }}
              axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'revenue($)',
                  legendPosition: 'middle',
                  legendOffset: -40
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{
                  from: 'color',
                  modifiers: [
                      [
                          'darker',
                          1.6
                      ]
                  ]
              }}
              legends={[
                  {
                      dataFrom: 'keys',
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 120,
                      translateY: 0,
                      itemsSpacing: 2,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemDirection: 'left-to-right',
                      itemOpacity: 0.85,
                      symbolSize: 20,
                      effects: [
                          {
                              on: 'hover',
                              style: {
                                  itemOpacity: 1
                              }
                          }
                      ]
                  }
              ]}
              role="application"
              ariaLabel="Revenue Updates"
              barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
            />
          ) : (
            <>Loading...</>
          )}         
        </div>
        
        {/*RIGHT BARS*/}
        <div className='flex flex-col mt-2 lg:mt-0'>
          {/*1st Right Bar*/}
          {topSales.map((item) => (
          <div key={item.name} className="flex flex-col flex-grow gap-1 dark:text-gray-200 dark:bg-secondary-dark-bg shadow rounded-2xl w-full lg:w-80 xl:w-400 p-1 mx-0 lg:mx-2 xl:mx-2 mb-4 lg:mb-2.5 xl:mb-1 bg-white">
            <div className="flex flex-row p-2 items-center justify-between">
              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-1">
                  <div className="flex flex-row items-center">
                    <button>
                      <img
                        className="rounded-full w-11 h-11 mr-4 hover:ring"
                        src={item.image}
                        alt="user-profile"
                      />
                    </button>
                    <div className="flex flex-col">
                      <p className="font-semibold text-base">{item.name}</p>
                      <p className="text-xs text-gray-400 font-base">{item.title}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-500 text-xs font-normal">{item.desc}</p>
              </div>

              <div className="flex flex-col items-center">
                <HiTrendingUp size={30} style={{color: 'green'}}/>
                <p className="text-sm font-medium text-green-500">{item.amount}</p>
                <p className="text-xs font-normal text-gray-500">Last 6 months</p>
              </div>
            </div>
          </div>
          ))}
          {/*2nd Right Bar*/}
          <div className="shadow bg-white flex-col dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl lg:w-80 xl:w-400 lg:mx-2 lg:mt-2 flex px-4 py-2">
            <p className="text-sm font-semibold mb-2  text-left">Top Countries</p>
              {topCountries.map((item) => (
                <div key={item.rank} className='flex flex-row items-center justify-between text-sm gap-6 font-normal text-gray-500 '>
                  <div className="flex flex-row items-center gap-2">
                    <p className="">{item.rank}. {item.country}</p>
                    <img
                      className="rounded-full w-5 h-5 mr-4 hover:ring"
                      src={item.image}
                      alt="country flag"
                    />
                  </div>
                  <p className="text-gray-400 flex flex-row gap-2 items-center">{item.amount}<BsArrowUp size={20} style={{color: 'green'}}/> <HiOutlineDotsCircleHorizontal size={25}/></p>
                </div>
              ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
