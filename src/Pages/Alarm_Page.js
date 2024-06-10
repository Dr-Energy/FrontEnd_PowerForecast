
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import AlarmHistory from '../components/AlarmHistory'
import LocationSel from '../components/LocationSel'

export default function Alarm_Page() {

  return (
    <div 
  className="flex h-screen bg-[url('./components/background/bg4.png')] bg-cover"
  
>
  {/* <img src={bg1}/>  */}
  <Sidebar/>
    <div className="flex-grow flex flex-col items-center justify-start relative p-3 m-1">
      <Header title="알람이력"/>
      <div className='flex flex-col items-center justify-center w-full max-w-3xl mt-3'>
        <LocationSel/>
      <AlarmHistory/>
      </div>
    </div>
</div>
  )
}
