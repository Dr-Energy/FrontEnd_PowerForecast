import React from 'react'
import Main from '../components/Main'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Main_Page() {
  return (
    <div className="flex h-screen bg-[url('./components/background/bg4.png')] bg-cover"
  
>
  {/* <img src={bg1}/>  */}
  <Sidebar/>
    <div className="flex-grow flex flex-col items-center justify-start relative p-3 m-1">
      <Header title="Dashboard"/>
      <div className='flex flex-col items-center justify-center w-full max-w-3xl mt-3'>
      <Main/>
      </div>
    </div>
</div>
  )
}
