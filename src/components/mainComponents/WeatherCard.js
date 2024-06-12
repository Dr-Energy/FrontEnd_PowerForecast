import React from 'react';
import { GoArrowDownRight,GoArrowUpRight } from "react-icons/go";

const WeatherCard = ({ icon, title, description, value, change}) => {
    const ArrowIcon = change >= 0 ? GoArrowUpRight : GoArrowDownRight;
    const fontColor = change > 0 ? '#2587bd' : '#cb7123';
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
        <p className={change >= 0 ? "text-green-500" : "text-red-500"}><span className="inline-block w-4 h-4 text-xl mr-1"><ArrowIcon /></span>
        <span className='text-black text-sm'>{value}</span></p>
      </div>
    </div>
  );
};

export default WeatherCard;
