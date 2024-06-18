import React, { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { isLoggedInState, userState, userLocationState } from '../recoil/atoms';
import axios from 'axios';
import WeatherCard from './mainComponents/WeatherCard';
import LocationSel from './LocationSel';
import { WiRain } from "react-icons/wi";
import AlarmList from './AlarmList';

export default function Main() {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const user = useRecoilValue(userState);
  const [userLocation, setUserLocation] = useRecoilState(userLocationState);
  const [data, setData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({
    sido: '',
    gugun: '',
    eupmyeondong: ''
  });

  //지역별 알람이력을 표현하는 코드
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

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        let response;
        if (selectedLocation.sido) {
          const { sido, gugun, eupmyeondong } = selectedLocation;
          const query = `sido=${sido}&gugun=${gugun}&eupmyeondong=${eupmyeondong}`;
          response = await axios.get(`http://10.125.121.224:8080/main/weather?${query}`);
        } else {
          response = await axios.get('http://10.125.121.224:8080/main/weather');
        }
        console.log('weather:',response.data);
        const weather = response.data;

        const formattedWeatherData = [
          {
            icon: <WiRain className="text-7xl" />, 
            title: 'Temperature', 
            description: '기온', 
            value: `${weather[0].temp}°C`, 
            change: `${(weather[0].temp - weather[1].temp).toFixed(2)}°C`, 
            changeDescription: weather[0].temp > weather[1].temp ? '상승' : '하락'
          },
          {
            icon: `${weather[0].bodyTemp}°C`, 
            title: 'Apparent Temperature', 
            description: '체감 온도', 
            value: `${weather[0].bodyTemp}°C`, 
            change: `${(weather[0].bodyTemp - weather[1].bodyTemp).toFixed(2)}°C`, 
            changeDescription: weather[0].bodyTemp > weather[1].bodyTemp ? '상승' : '하락'
          },
          {
            icon: `${weather[0].humidity}%`, 
            title: 'Humidity', 
            description: '습도', 
            value: `${weather[0].humidity}%`, 
            change: `${(weather[0].humidity - weather[1].humidity).toFixed(2)}%`, 
            changeDescription: weather[0].humidity > weather[1].humidity ? '증가' : '감소'
          },
          {
            icon: `${weather[0].rain}mm`, 
            title: 'Rainfall', 
            description: '강수량', 
            value: `${weather[0].rain}mm 예상`, 
            change: `${(weather[0].rain - weather[1].rain).toFixed(2)}mm`, 
            changeDescription: '예상'
          }
        ];

        setWeatherData(formattedWeatherData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

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
