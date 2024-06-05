import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import FindPw from '../components/FindPw'

export default function FindPw_Page() {
  return (
    <div 
  className="flex h-screen bg-[url('./components/background/bg4.png')] bg-cover"
  
>
  {/* <img src={bg1}/>  */}
  <Sidebar/>
    <div className="flex-grow flex flex-col items-center justify-start relative p-3 m-1">
      <Header title="비밀번호 찾기"/>
      <div className='flex-grow flex items-center justify-center w-full max-w-3xl'>
      <FindPw/>
      </div>
    </div>
</div>
  )
}
