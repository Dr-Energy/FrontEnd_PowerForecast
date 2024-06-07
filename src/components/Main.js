import React from 'react'
import WeatherCard from './mainComponents/WeatherCard';
import LocationSel from './LocationSel';

export default function Main() {
    const weatherData = [
        {
          icon: 'https://via.placeholder.com/40', 
          title: 'Forecast Today', 
          description: '오늘의 기상', 
          value: '3°C increase from yesterday', 
          change: 3, 
          changeDescription: 'increase'
        },
        {
          icon: 'https://via.placeholder.com/40', 
          title: 'Apparent Temperature', 
          description: '체감 온도', 
          value: '1°C decrease from yesterday', 
          change: -1, 
          changeDescription: 'decrease'
        },
        {
          icon: 'https://via.placeholder.com/40', 
          title: 'Humidity', 
          description: '습도', 
          value: '2% increase from yesterday', 
          change: 2, 
          changeDescription: 'increase'
        },
        {
          icon: 'https://via.placeholder.com/40', 
          title: 'Rainfall', 
          description: '강수량', 
          value: '2.0mm expected', 
          change: 2, 
          changeDescription: 'expected'
        }
      ];
  return (
    <div className='flex flex-col'>
        <div className='flex justify-end items-center w-full'>
        <LocationSel/>
        </div>
        <div class="grid gap-3">
            <div class="grid grid-cols-4 gap-1 w-full">
                {/* <div className='w-full flex justify-between items-center mt-4'> */}
                    {weatherData.map((data, index) => (
                        <WeatherCard
                        key={index}
                        icon={data.icon}
                        title={data.title}
                        description={data.description}
                        value={data.value}
                        change={data.change}
                        changeDescription={data.changeDescription}
                        />
                    ))}
                {/* </div> */}
            </div>
            <div className='flex justify-center items-start'>
                <div className='w-3/5 mr-3'>
                    <div>
                        <img className="col-span-3 h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt=""/>
                    </div>
                    <div>
                    <div className='bg-white bg-opacity-50 p-10 rounded-lg shadow-lg w-full max-w-2xl my-3'>전력 이상 확인 그래프</div>
                    <div className='bg-white bg-opacity-50 p-10 rounded-lg shadow-lg w-full max-w-2xl my-3'>전력 이상 확인 그래프</div>
                    </div>
                </div>
                <div className='w-2/5'>
                    <div className='bg-white bg-opacity-50 p-10 rounded-lg shadow-lg w-full max-w-2xl'>알람 이력</div>
                </div>
            </div>
        </div>
        

    </div>
  )
}
