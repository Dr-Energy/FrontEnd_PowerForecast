import React from 'react'
import WeatherCard from './mainComponents/WeatherCard';
import TailSelect from '../UI/TailSelect';

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
        <div className='flex justify-end items-end w-full'>
            <label for="countries" class="block mb-2 text-xs font-medium text-gray-900 px-2 text-center">지역을 선택해 주세요</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5">
                <option selected>시 / 군</option>
                <option value="부산광역시">부산광역시</option>
                <option value="서울특별시">서울특별시</option>
                <option value="대구광역시">대구광역시</option>
                <option value="김해시">김해시</option>
            </select>
        </div>
        <div class="grid gap-4">
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
            <div className='flex justify-center items-center'>
                <div className='w-3/5 mr-3'>
                    <div>
                        <img className="col-span-3 h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt=""/>
                    </div>
                    <div>
                        <div>기존 전력 부하정도</div>
                        <div>예측 전력 부하정도</div>
                    </div>
                </div>
                <div className='w-2/5'>
                    <div className='col-span-1 bg-white rounded-md'>알림이력</div>
                </div>
            </div>
        </div>
        

    </div>
  )
}
