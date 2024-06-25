import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import AlarmHistory from '../components/AlarmHistory'
import LocationSel from '../components/LocationSel'
import React, { useState, useEffect } from'react'
import { useSetRecoilState } from 'recoil';
import { alertCountState , alertState } from '../recoil/atoms';
import Footer from '../components/Footer';

export default function Alarm_Page() {
  const setAlertCount = useSetRecoilState(alertCountState);
  const setAlerts = useSetRecoilState(alertState);
  const [selectedLocation, setSelectedLocation] = useState({
    sido: '',
    gugun: '',
    eupmyeondong: ''
  });

  useEffect(() => {
    // 알람 이력을 확인하면 alertCount를 0으로 설정
    setAlertCount(0);
    setAlerts([]);
  }, [setAlertCount]);

  return (
    <div>
    <div 
  className="flex h-screen bg-[url('./components/background/bg4.png')] bg-cover"
  
>
  {/* <img src={bg1}/>  */}
  <Sidebar/>
    <div className="flex-grow flex flex-col items-center justify-start relative p-3 m-1">
      <Header title="알람이력"/>
      <div className='flex flex-col items-center justify-center w-full max-w-3xl mt-3 min-w-[300px]'>
        <LocationSel onChange={setSelectedLocation} className="min-w-[300px]"/>
      <AlarmHistory selectedLocation={selectedLocation}/>
      </div>
    </div>
</div>
<Footer/>
</div>
  )
}
