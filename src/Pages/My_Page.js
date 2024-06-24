import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import MyPage from '../components/MyPage'
import Footer from '../components/Footer';

export default function My_Page() {
  return (
    <div>
    <div 
  className="flex h-screen bg-[url('./components/background/bg4.png')] bg-cover"
  
>
  {/* <img src={bg1}/>  */}
  <Sidebar/>
    <div className="flex-grow flex flex-col items-center justify-start relative p-3 m-1">
      <Header title="마이페이지"/>
      <div className='flex-grow flex items-center justify-center w-full max-w-3xl'>
      <MyPage/>
      </div>
    </div>
</div>
<Footer/>
</div>
  )
}
