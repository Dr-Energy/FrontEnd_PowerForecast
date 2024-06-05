import React from 'react';
import { GoArrowDownRight,GoArrowUpRight } from "react-icons/go";

const WeatherCard = ({ icon, title, description, value, change, changeDescription }) => {
    const ArrowIcon = change >= 0 ? GoArrowUpRight : GoArrowDownRight;
  return (
    <div className="bg-[#F4FAFF] bg-opacity-50 p-5 rounded-lg shadow-md flex flex-col items-start justify-start w-full m-1">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md mb-4">
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <h3 className="text-xs font-bold">{title}</h3>
      <p className="text-xl font-bold">{description}</p>
      <p className={change >= 0 ? "text-green-500" : "text-red-500"}><ArrowIcon className="inline-block w-4 h-4" />
      <span className='text-gray-500 text-xs'>{value}</span></p>
    </div>
  );
};

export default WeatherCard;
