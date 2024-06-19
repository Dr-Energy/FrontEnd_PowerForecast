import React, { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { isLoggedInState, userState, userLocationState } from '../recoil/atoms';
import axios from 'axios';
import WeatherCard from './mainComponents/WeatherCard';
import LocationSel from './LocationSel';
import { WiDaySunny, WiDayCloudy, WiCloudy, WiRain, WiRainMix, WiSnow, WiShowers } from "react-icons/wi";
import AlarmList from './AlarmList';

const getIconByWeather = (value, category, temp) => {
  let icon;
  if (category === 'SKY') {
    switch (value) {
      case '1':
        icon = <WiDaySunny />;
        break;
      case '2':
        icon = <WiDayCloudy />;
        break;
      case '4':
        icon = <WiCloudy />;
        break;
      default:
        icon = null;
    }
  } else if (category === 'PTY') {
    switch (value) {
      case '0':
        icon = null; // PTY 0일 경우 SKY 아이콘 적용
        break;
      case '1':
        icon = <WiRain />;
        break;
      case '2':
        icon = <WiRainMix />;
        break;
      case '3':
        icon = <WiSnow />;
        break;
      case '4':
        icon = <WiShowers />;
        break;
      default:
        icon = null;
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">
      {icon && <span className="text-6xl">{icon}</span>}
      <span className="text-2xl ml-2">{temp}</span>
      </div>
    </div>
  );
};

export default function Main() {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const user = useRecoilValue(userState);
  const [userLocation, setUserLocation] = useRecoilState(userLocationState);
  const [data, setData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading]=useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    sido: '',
    gugun: '',
    eupmyeondong: ''
  });

  //날씨코드마다 웨더카드 중 날씨의 아이콘을 다르게 설정
  // const getIconByWeather = (sky, pty) => {
  //   if (pty !== 0) {
  //     if (pty === 1) return <WiRain className="text-8xl" />;
  //     if (pty === 2) return <WiRainMix className="text-8xl" />;
  //     if (pty === 3) return <WiSnow className="text-8xl" />;
  //     if (pty === 4) return <WiShowers className="text-8xl" />;
  //   } else {
  //     if (sky === 1) return <WiDaySunny className="text-8xl" />;
  //     if (sky === 3) return <WiDayCloudy className="text-8xl" />;
  //     if (sky === 4) return <WiCloudy className="text-8xl" />;
  //   }
  //   return <WiDaySunny className="text-7xl" />; // 기본 아이콘
  // };

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
      setIsLoading(true);
      try {
        let response;
        if (selectedLocation.sido) {
          const { sido, gugun, eupmyeondong } = selectedLocation;
          const query = `sido=${sido}&gugun=${gugun}&eupmyeondong=${eupmyeondong}`;
          console.log("query:",query);
          response = await axios.get(`http://10.125.121.224:8080/main/weather?${query}`);
        } else if (isLoggedIn && userLocation) {
          response = await axios.get(`http://10.125.121.224:8080/main/weather/${userLocation}`);
        }else {
          response = await axios.get('http://10.125.121.224:8080/main/weather');
        }
        console.log('weather:',response.data);
        const weather = response.data;

        const formattedWeatherData = [
          {
            icon: getIconByWeather(weather[1].value, weather[1].category, `${weather[1].temp}°C`), 
            description: '날씨', 
            value: `${weather[0].temp}°C`, 
            changeValue: `${Math.abs((weather[0].temp - weather[1].temp).toFixed(2))}°C`, 
            change: (weather[0].temp - weather[1].temp).toFixed(2), 
            changeDescription: weather[0].temp > weather[1].temp ? '상승' : '하락'
          },
          {
            icon: `${weather[0].bodyTemp}°C`, 
            description: '체감 온도', 
            value: `${weather[0].bodyTemp}°C`, 
            changeValue: `${Math.abs((weather[0].bodyTemp - weather[1].bodyTemp).toFixed(2))}°C`, 
            change: (weather[0].bodyTemp - weather[1].bodyTemp).toFixed(2), 
            changeDescription: weather[0].bodyTemp > weather[1].bodyTemp ? '상승' : '하락'
          },
          {
            icon: `${weather[0].humidity}%`, 
            description: '습도', 
            value: `${weather[0].humidity}%`, 
            changeValue: `${Math.abs((weather[0].humidity - weather[1].humidity).toFixed(2))}%`, 
            change: (weather[0].humidity - weather[1].humidity).toFixed(2), 
            changeDescription: weather[0].humidity > weather[1].humidity ? '증가' : '감소'
          },
          {
            icon: `${weather[0].rain}mm`, 
            description: '강수량', 
            value: `${weather[0].rain}mm 예상`, 
            changeValue: `${(weather[0].rain - weather[1].rain).toFixed(2)}mm`, 
            change: (weather[0].rain - weather[1].rain).toFixed(2), 
            changeDescription: '예상'
          }
        ];

        setWeatherData(formattedWeatherData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [isLoggedIn, userLocation, selectedLocation]);

  return (
    <div className='flex flex-col w-full'>
        <div className='flex justify-end items-center w-full'>
        <LocationSel onChange={setSelectedLocation}/>
        </div>
        <div className="grid gap-3">
          
            <div className="grid grid-cols-4 gap-1 w-full">
                    {isLoading ? (
                      <div className='col-span-4 flex justify-center items-center w-full py-4'>
                    <div className='loader ease-linear rounded-full border-8 border-t-8 h-20 w-20'></div></div>
                ) : (
                    weatherData.map((data, index) => (
                        <WeatherCard
                        key={index}
                        icon={data.icon}
                        title={data.title}
                        description={data.description}
                        value={data.value}
                        change={data.change}
                        changeValue={data.changeValue}
                        changeDescription={data.changeDescription}
                        />
                    )
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
                <div className='h-auto'>
                  <p className='text-center border-2 bg-white bg-opacity-30 mb-3 py-3 rounded-lg'>최근 알람 이력</p>
                  <AlarmList data={data} formatDateTime={formatDateTime} limit={5} />
                </div>
            </div>
        </div>
    </div>
  )
}
