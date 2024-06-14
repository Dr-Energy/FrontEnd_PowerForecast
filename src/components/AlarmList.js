import { UserIcon } from '@heroicons/react/20/solid';
import React from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const AlarmList = ({ data, formatDateTime, limit }) => {
  const displayData = limit ? data.slice(0, limit) : data;

  return (
    <div className="flow-root bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-2xl h-96 overflow-auto">
      <ul role="list" className="mb-8">
        {displayData.map((event, eventIdx) => (
          <li key={event.alertTime + event.region.eupmyeondong + eventIdx}>
            <div className="relative pb-5">
              {/* {eventIdx !== displayData.length - 1 ? ( */}
                {/* <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" /> */}
              {/* ) : null} */}
              <div className="relative flex space-x-3">
                {/* <div>
                  <span
                    className={classNames(
                      'bg-gray-400',  // 알림 타입에 따라 색깔 변하게 하기
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <UserIcon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div> */}
                <div className="flex flex-col justify-center items-start min-w-0 flex-1 pt-1.5">
                    <div className="flex flex-wrap items-center">
                        <p className="text-sm text-gray-500">
                        {event.region.sido} {event.region.gugun} {event.region.eupmyeondong} - {event.alertType} 
                        </p>
                        <time dateTime={event.alertTime} className="text-sm text-gray-500">
                        {formatDateTime(event.alertTime)}
                        </time>
                    </div>
                    </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlarmList;
