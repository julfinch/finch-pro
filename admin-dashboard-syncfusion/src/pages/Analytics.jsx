import React from 'react';
import { BsCurrencyDollar, BsBarChartLineFill } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { HiDotsVertical } from 'react-icons/hi'
import { MdOpenInNew } from 'react-icons/md';
import { IoIosMore } from 'react-icons/io';
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from '@nivo/bar'

import { Button} from '../components';
import { earningData, medicalproBranding, monthlyBarData, transactionsLineData, transactionsPieData, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import banner from '../data/illustration-john-2.png';
import useWindowSize from "../hooks/useWindowSize";

const Analytics = () => {
  const { width } = useWindowSize();
  const { fontColor, currentColor } = useStateContext();
  const user = JSON.parse(localStorage.getItem('user'));
  const data = transactionsLineData
  const data3 = monthlyBarData


  return (
    <div className="mt-4 ">
      <div className="flex flex-wrap px-4 lg:flex-nowrap justify-center gap-0 lg:gap-3 xl:gap-4">
        <div className="shadow flex-1 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-40 rounded-xl lg:pl-4 xl:px-8 mt-16 lg:my-3" style={{width: `${ width > 1100 ? "650px" : "415px"}`}}>
          <div className="flex flex-row justify-between items-center relative lg:static">
            <div className="absolute -bottom-36 lg:static p-4 lg:p-0 w-3/5 z-20 lg:w-full xl:w-full ">
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
                <div className="w-6/12 md:w-full h-full">
                  {data ? (
                    <ResponsiveBar
                      data={data3}
                      groupMode="grouped"
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
                                color: "rgba(1,1,1,0.5)",
                              },
                            },
                          }}
                      keys={[
                          '2023',
                      ]}
                      indexBy="year"
                      margin={{ top: 5, right: 0, bottom: 40, left: 30 }}
                      padding={0.6}
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
                        legend: '',
                        legendPosition: 'middle',
                        legendOffset: 32
                      }}
                      axisLeft={{
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                          legend: '',
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
                      role="application"
                      ariaLabel="Monthly Revenue"
                      barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
                    />
                  ) : (
                    <>Loading...</>
                  )}     
                </div>
            </div>
            <div  className="shadow flex flex-col justify-between bg-white h-40 dark:text-gray-200 dark:bg-secondary-dark-bg lg:w-48 xl:w-52 w-40  p-4 rounded-2xl ">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-light lg:font-semibold">Sales Today</p>
                    {/* <p className="text-xs font-light lg:font-semibold">$943,246</p> */}
                    <BsBarChartLineFill/>
                </div>
                <div className="flex flex-row items-center justify-between mt-3">
                <div className="flex flex-row gap-2 items-center">
                  
                  <p className="text-3xl font-semibold">$ 1,246</p>
                </div>
                <p className="text-sm text-green-400 ml-2 flex flex-row items-center gap-2">
                  <MdOpenInNew/>
                  20%
                </p>
              </div>
              <p className="text-xs text-gray-400 text-right mt-1">Compared to yesterday</p>
              
            </div>
        </div>
      </div>
        
      <div className="flex w-full px-4 lg:flex-nowrap  lg:mx-0 flex-wrap justify-center lg:mt-3 xl:mt-0">
        {/* SECOND ROW  - LEFT PANEL*/}
        <div className="w-full lg:w-3/4 2xl:w-3/4 flex justify-center gap-2 shadow bg-white dark:text-gray-200 dark:bg-secondary-dark-bg px-4 pt-10 rounded-2xl" style={{height: `${ width > 1100 ? "384px" : width < 500 ? "740px" : "400px"}` }}>
          {/* width: `${ width > 1100 ? "766px" : "560px"}` */}
              <div className='w-2/3 h-96 -ml-10'>
                {data ? (
                <ResponsiveLine
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
                        color: "rgba(1,1,1,0.5)",
                      },
                    },
                  }}
                  colors={{ datum: "color" }}
                  margin={{ top: 10, right: 100, bottom: 110, left: 50 }}
                  xScale={{ type: 'point' }}
                  yScale={{
                      type: 'linear',
                      min: 'auto',
                      max: 'auto',
                      stacked: true,
                      reverse: false
                  }}
                  yFormat=" >-.2f"
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                      orient: 'bottom',
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'year',
                      legendOffset: 36,
                      legendPosition: 'middle'
                  }}
                  axisLeft={{
                      orient: 'left',
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'amount',
                      legendOffset: -40,
                      legendPosition: 'middle'
                  }}
                  pointSize={10}
                  pointColor={{ theme: 'background' }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  pointLabelYOffset={-12}
                  useMesh={true}
                  legends={[
                      {
                          anchor: 'bottom-right',
                          direction: 'column',
                          justify: false,
                          translateX: 100,
                          translateY: 0,
                          itemsSpacing: 0,
                          itemDirection: 'left-to-right',
                          itemWidth: 80,
                          itemHeight: 20,
                          itemOpacity: 0.75,
                          symbolSize: 12,
                          symbolShape: 'circle',
                          symbolBorderColor: 'rgba(0, 0, 0, .5)',
                          effects: [
                              {
                                  on: 'hover',
                                  style: {
                                      itemBackground: 'rgba(0, 0, 0, .03)',
                                      itemOpacity: 1
                                  }
                              }
                          ]
                      }
                  ]}
                />
                ) : (
                  <>Loading...</>
                )}
              </div>
              {/* RECENT TRANSACTIONS */}
              <div className="bg-white  dark:text-gray-200 dark:bg-secondary-dark-bg lg:-mt-0 xl:-mt-3 rounded-2xl w-1/4 ">
                  <div className="flex justify-between items-center gap-2">
                      <p className="text-base font-semibold">Transactions</p>
                      {/* <DropDown currentMode={currentMode} /> */}
                  </div>
                  <div className="mt-2 -pl-2 w-56 lg:w-56 xl:w-56 2xl:w-64">
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
                      text="Add"
                      borderRadius="10px"
                      padding={`${ width > 1100 ? "3" : "2"}`}
                      />
                      </div>

                      <p className="text-gray-400 text-sm">36 Transactions</p>
                  </div>
              </div>

        </div>
        {/* SECOND ROW  - RIGHT PANEL*/}
        <div className="shadow w-full md:w-full bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl xl:w-1/4 lg:w-1/4 2xl:w-1/4 px-6 pt-6 mx-3 mt-1 mb-4 lg:mt-0 lg:mb-0">
          <div className="flex justify-between">
            <p className="text-base font-semibold">Weekly Stats</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>

          <div className="mt-4 ">
            {weeklyStats.map((item) => (
              <div key={item.title} className="flex justify-between mt-4 w-full">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;