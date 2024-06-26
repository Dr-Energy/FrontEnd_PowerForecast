import React, { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { isLoggedInState, userState, userLocationState } from '../recoil/atoms';
import axios from 'axios';
import WeatherCard from './mainComponents/WeatherCard';
import LocationSel from './LocationSel';
import { WiDaySunny, WiDayCloudy, WiCloudy, WiRain, WiRainMix, WiSnow, WiShowers } from "react-icons/wi";
import AlarmList from './AlarmList';
import PowerGraph from './PowerGraph';
import PowerGauge from './PowerGauge';

const getIconByWeather = (value, category, temp) => {
  let icon;
  if (category === 'SKY') {
    switch (value) {
      case '1':
        icon = <WiDaySunny />;
        break;
      case '2':
      case '3':
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
  const [powerData, setPowerData] = useState([]);
  const [predictPower, setPredictPower] = useState([]);
  const [actualPower, setActualPower] = useState([]);
  const [isLoading, setIsLoading]=useState(false);
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
      setIsLoading(true);
      //날씨데이터 페치
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
            changeDescription: weather[0].rain > weather[1].rain ? '증가' : weather[0].rain < weather[1].rain ? '감소' : '예상'
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

  useEffect(() => {
    //그래프 데이터 페치
    const fetchPowerData = async () => {
      try {
        let response;
        if (selectedLocation.sido) {
          const { sido, gugun, eupmyeondong } = selectedLocation;
          const query = `sido=${sido}&gugun=${gugun}&eupmyeondong=${eupmyeondong}`;
          response = await axios.get(`http://10.125.121.224:8080/predict/oneday?${query}`);
        } else if (isLoggedIn && userLocation) {
          response = await axios.get(`http://10.125.121.224:8080/predict/oneday/${userLocation}`);
        } else {
          response = await axios.get('http://10.125.121.224:8080/predict/oneday');
        }
        setPowerData(response.data);
      } catch (error) {
        console.error('Error fetching power data:', error);
      }
    };

    fetchPowerData();
  },[isLoggedIn, userLocation, selectedLocation]);
  //
  useEffect(()=>{
    const fetchPredictGaugeData = async () => {
      try {
        let response;
        if (selectedLocation.sido) {
          const { sido, gugun, eupmyeondong } = selectedLocation;
          const query = `sido=${sido}&gugun=${gugun}&eupmyeondong=${eupmyeondong}`;
          response = await axios.get(`http://10.125.121.224:8080/predict/currentTime?${query}`);
        }else if (isLoggedIn && userLocation) {
          response = await axios.get(`http://10.125.121.224:8080/predict/currentTime/${userLocation}`);
        } else {
          response = await axios.get('http://10.125.121.224:8080/predict/currentTime');
        }
        setPredictPower(response.data.power);
      } catch (error) {
        console.error('Error fetching power gauge data:', error);
      }
    };
    fetchPredictGaugeData();
  },[isLoggedIn, userLocation, selectedLocation]);

  useEffect(()=>{
    const fetchActualGaugeData = async () => {
      try {
        let response;
        if (selectedLocation.sido) {
          const { sido, gugun, eupmyeondong } = selectedLocation;
          const query = `sido=${sido}&gugun=${gugun}&eupmyeondong=${eupmyeondong}`;
          response = await axios.get(`http://10.125.121.224:8080/actual/currentTime?${query}`);
        }else if (isLoggedIn && userLocation) {
          response = await axios.get(`http://10.125.121.224:8080/actual/currentTime/${userLocation}`);
        } else {
          response = await axios.get('http://10.125.121.224:8080/actual/currentTime');
        }
        setActualPower(response.data.power);
        console.log("response:",response.data.power);
      } catch (error) {
        console.error('Error fetching power gauge data:', error);
      }
    };
    fetchActualGaugeData();
  },[isLoggedIn, userLocation, selectedLocation]);
  return (
    <div className='flex flex-col justify-start w-full'>
        <div className='flex justify-start items-center w-full'>
        <LocationSel onChange={setSelectedLocation}/>
        </div>
        {/* <div className="grid gap-3">  */}
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 w-full mb-5">
                    {isLoading ? (
                      <div className='col-span-4 flex justify-center items-center py-4'>
                      <div className='loader ease-linear rounded-full border-8 border-t-8'></div>
                    </div>
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
                <div className='w-2/3 mr-3'>
                    <div className="col-span-2 h-auto rounded-lg">
                        <PowerGraph powerData={powerData}/>
                        <div className='flex mt-3'>
                          <div className='mr-3 flex-1 w-2/5'>
                            <PowerGauge powerData={predictPower}/>
                          </div>
                          <div className='flex-1 w-2/5'>
                            <PowerGauge powerData={actualPower}/>
                          </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/3'>
                  <p className='text-center border-2 bg-white bg-opacity-30 mb-3 py-3 rounded-lg Haeparang'>최근 알람 이력</p>
                  <AlarmList data={data} formatDateTime={formatDateTime} limit={5} height="h-cth2"/>
                </div>
            </div>
        </div>
    // </div>
  )
}
