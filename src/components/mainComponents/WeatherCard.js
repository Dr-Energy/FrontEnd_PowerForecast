import React from 'react';
import { GoArrowDownRight, GoArrowUpRight, GoArrowRight } from "react-icons/go";

const WeatherCard = ({ icon, description, changeValue, change, changeDescription}) => {
    const ArrowIcon = change > 0 ? GoArrowUpRight : change < 0 ? GoArrowDownRight : GoArrowRight;
    const fontColor = change > 0 ? '#2587bd' : change < 0 ? '#cb7123' : '#2E7549';
    const textColor = change > 0 ? "text-blue-500" : change < 0 ? "text-red-500" : "text-[#2E7549]";
    // const opacity = 0.8;
  return (
    <div /* style={{backgroundColor, opacity}}*/ className="bg-white bg-opacity-80 p-5 rounded-lg shadow-md flex flex-col items-center justify-between w-full mt-5">
      <div className='flex flex-col justify-start items-start w-full'>
        {/* <h3 className="text-xs font-bold">{title}</h3> */}
        <p className="text-xl font-bold">{description}</p>
      </div>
      <div style={{ color: fontColor}} className="flex items-center justify-center w-20 h-20 rounded-lg m-2 text-4xl">
        {icon}
      </div>
      <div className='flex justify-center items-center w-full'>
        <p className={textColor}><span className="inline-block w-4 h-4 text-xl mr-1"><ArrowIcon /></span>
        <span className='text-black text-sm'>{changeValue} {changeDescription}</span></p>
      </div>
    </div>
  );
};

export default WeatherCard;
