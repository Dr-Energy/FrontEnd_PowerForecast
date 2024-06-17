import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';
import WeatherCard from './mainComponents/WeatherCard';
import LocationSel from './LocationSel';
import { WiRain } from "react-icons/wi";
import AlarmList from './AlarmList';

export default function Main() {
  const { isLoggedIn, userLocation } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({
    sido: '',
    gugun: '',
    eupmyeondong: ''
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (selectedLocation.sido) {
          const { sido, gugun, eupmyeondong } = selectedLocation;
          const query = `sido=${sido}&gugun=${gugun}&eupmyeondong=${eupmyeondong}`;
          console.log(query);
          response = await axios.get(`http://10.125.121.224:8080/history?${query}`);
        } else if (isLoggedIn && userLocation) {
          response = await axios.get(`http://10.125.121.224:8080/history/${userLocation}`);
        } else {
          response = await axios.get('http://10.125.121.224:8080/history/all');
        }
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [isLoggedIn, userLocation, selectedLocation]);
  
  const formatDateTime = (dateTime) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateTime).toLocaleDateString(undefined, options);
  };

  const weatherData = [
        {
          icon: <WiRain className="text-7xl" />, 
          title: 'Forecast Today', 
          description: '오늘의 기상', 
          value: ' 어제보다 3°C 상승', 
          change: 3, 
          changeDescription: 'increase'
        },
        {
          icon: '26°C', 
          title: 'Apparent Temperature', 
          description: '체감 온도', 
          value: ' 어제보다 1°C 하락', 
          change: -1, 
          changeDescription: 'decrease'
        },
        {
          icon: '71%', 
          title: 'Humidity', 
          description: '습도', 
          value: ' 어제보다 2% 상승', 
          change: 2, 
          changeDescription: 'increase'
        },
        {
          icon: '80%', 
          title: 'Rainfall', 
          description: '강수량', 
          value: '2.0mm 예상', 
          change: 2, 
          changeDescription: 'expected'
        }
      ];
  return (
    <div className='flex flex-col w-full'>
        <div className='flex justify-end items-center w-full'>
        <LocationSel onChange={setSelectedLocation}/>
        </div>
        <div className="grid gap-3">
            <div className="grid grid-cols-4 gap-1 w-full">
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
            <div className='flex justify-center items-start w-full'>
                <div className='w-5/6 mr-3'>
                    <div>
                        <img className="col-span-3 h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt=""/>
                    </div>
                    <div>
                    <div className='bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-2xl my-3'>전력 이상 확인 그래프</div>
                    <div className='bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-2xl my-3'>전력 이상 확인 그래프</div>
                    </div>
                </div>
                <div>
                  <AlarmList data={data} formatDateTime={formatDateTime} limit={5} />
                </div>
            </div>
        </div>
    </div>
  )
}