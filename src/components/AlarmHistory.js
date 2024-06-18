import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userLocationState, isLoggedInState } from '../recoil/atoms';
import axios from 'axios';
import AlarmList from './AlarmList';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AlarmHistory({ selectedLocation }) {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const userLocation = useRecoilValue(userLocationState);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        console.log("loc:",userLocation);
        if (selectedLocation.sido) {
          const { sido, gugun, eupmyeondong } = selectedLocation;
          const query = `sido=${sido}&gugun=${gugun}&eupmyeondong=${eupmyeondong}`;
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

  return (
    <div className='m-5 w-9/12 min-w-[300px]'>
      <AlarmList data={data} formatDateTime={formatDateTime} />
      <div className='bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-2xl my-3'>전력 이상 확인 그래프</div>
      <div className='bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-2xl my-3'>지역 / 단지 월평균 전력소비량 비교</div>
    </div>
  );
}
