import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userLocationState, isLoggedInState } from '../recoil/atoms';
import axios from 'axios';
import AlarmList from './AlarmList';
import PowerGraph from './PowerGraph';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AlarmHistory({ selectedLocation }) {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const userLocation = useRecoilValue(userLocationState);
  const [data, setData] = useState([]);
  const [onedayPowerData, setOnedayPowerData] = useState([]);
  const [monthPowerData, setMonthPowerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let historyResponse;
        console.log("loc:", userLocation);
        if (selectedLocation.sido) {
          const { sido, gugun, eupmyeondong } = selectedLocation;
          const query = `sido=${sido}&gugun=${gugun}&eupmyeondong=${eupmyeondong}`;
          historyResponse = await axios.get(`http://10.125.121.224:8080/history?${query}`);
        } else if (isLoggedIn && userLocation) {
          historyResponse = await axios.get(`http://10.125.121.224:8080/history/${userLocation}`);
        } else {
          historyResponse = await axios.get('http://10.125.121.224:8080/history/all');
        }
        setData(historyResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isLoggedIn, userLocation, selectedLocation]);

  useEffect(() => {
    const DayfetchData = async () => {
      try {
        let onedayResponse;
        console.log("loc:", userLocation);

        if (selectedLocation.sido) {
          const { sido, gugun, eupmyeondong } = selectedLocation;
          const query = `sido=${sido}&gugun=${gugun}&eupmyeondong=${eupmyeondong}`;
          onedayResponse = await axios.get(`http://10.125.121.224:8080/predict/oneday?${query}`);
        } else if (isLoggedIn && userLocation) {
          onedayResponse = await axios.get(`http://10.125.121.224:8080/predict/oneday/${userLocation}`);
        } else {
          onedayResponse = await axios.get('http://10.125.121.224:8080/predict/oneday');
        }

        setOnedayPowerData(onedayResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    DayfetchData();
  }, [isLoggedIn, userLocation, selectedLocation]);

  useEffect(() => {
    const MonthfetchData = async () => {
      try {
        let monthResponse;
        console.log("loc:", userLocation);

        if (selectedLocation.sido) {
          const { sido, gugun, eupmyeondong } = selectedLocation;
          const query = `sido=${sido}&gugun=${gugun}&eupmyeondong=${eupmyeondong}`;
          monthResponse = await axios.get(`http://10.125.121.224:8080/predict/month?${query}`);
        } else if (isLoggedIn && userLocation) {
          monthResponse = await axios.get(`http://10.125.121.224:8080/predict/month/${userLocation}`);
        } else {
          monthResponse = await axios.get('http://10.125.121.224:8080/predict/month');
        }

        setMonthPowerData(monthResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    MonthfetchData();
  }, [isLoggedIn, userLocation, selectedLocation]);
  
  const formatDateTime = (dateTime) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateTime).toLocaleDateString(undefined, options);
  };

  return (
    <div className='m-5 w-9/12 min-w-[300px]'>
      <AlarmList data={data} formatDateTime={formatDateTime} height="h-cth"/>
      {/* <div className='bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-2xl my-3'>전력 이상 확인 그래프</div>
      <div className='bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-2xl my-3'>지역 / 단지 월평균 전력소비량 비교</div> */}
      <div className='my-3'>
      <PowerGraph powerData={onedayPowerData} title='작년대비 전력소모 비율'/>
      </div>
      <PowerGraph powerData={monthPowerData} title='한달 예측 전력 소모량'/>
    </div>
  );
}
