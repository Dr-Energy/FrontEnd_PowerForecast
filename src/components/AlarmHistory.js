import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';
import AlarmList from './AlarmList';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AlarmHistory({selectedLocation}) {
  const { isLoggedIn, userLocation } = useContext(AuthContext);
  const [data, setData] = useState([]);
  

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
  return (
    <div className='m-5 w-9/12 min-w-[300px]'>
      {/* <div className="flow-root bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-2xl h-96 overflow-auto min-w-96">
        <ul role="list" className="-mb-8">
          {data.map((event, eventIdx) => (
            <li key={event.alertTime + event.region.eupmyeondong+ eventIdx}>
              <div className="relative pb-8">
                {eventIdx !== data.length - 1 ? (
                  <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={classNames(
                        'bg-gray-400',  //알림타입에 따라 색깔 변하게 하기
                        'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                      )}
                    >
                      <UserIcon className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                      {event.region.sido} {event.region.gugun} {event.region.eupmyeondong} - {event.alertType}
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime={event.alertTime}>{formatDateTime(event.alertTime)}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
      <AlarmList data={data} formatDateTime={formatDateTime} />
      <div className='bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-2xl my-3'>전력 이상 확인 그래프</div>
      <div className='bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-2xl my-3'>지역 / 단지 월평균 전력소비량 비교</div>
    </div>

  );
}
