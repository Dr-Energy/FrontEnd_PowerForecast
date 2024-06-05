import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import MyPageEdit from '../components/MyPageEdit'

export default function Edit_Page() {
  return (
    <div 
  className="flex h-screen bg-[url('./components/background/bg4.png')] bg-cover"
  
>
  {/* <img src={bg1}/>  */}
  <Sidebar/>
    <div className="flex-grow flex flex-col items-center justify-start relative p-3 m-1">
      <Header title="회원정보 수정"/>
      <div className='flex-grow flex items-center justify-center w-full max-w-3xl'>
      <MyPageEdit/>
      </div>
    </div>
</div>
  )
}
