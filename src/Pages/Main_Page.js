import React from 'react'
import Main from '../components/Main'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import'./Main.css';
import Footer from '../components/Footer';

export default function Main_Page() {
  return (
  <div  className="flex flex-col h-screen bg-[url('./components/background/bg4.png')] bg-cover">
    <div  className="flex flex-grow  overflow-hidden">
    <Sidebar/>
    <div className="flex flex-col flex-grow items-start justify-start relative p-3 m-1  w-full mt-3  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6">
      <Header title="Dashboard"/>
      <div className='flex-grow flex flex-col items-center justify-center w-full mt-3'>
      <Main/>
      </div>
    </div>
  </div>
    <Footer className="flex-none" />
  </div>
  )
}
