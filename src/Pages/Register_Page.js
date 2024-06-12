import React from 'react'
import Register from '../components/Register'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Register_Page() {
  return (
  <div className="flex h-screen bg-[url('./components/background/bg4.png')] bg-cover">
  <Sidebar/>
    <div className="flex-grow flex flex-col items-center justify-start relative p-3 m-1">
      <Header title="회원가입"/>
      <div className='flex-grow flex items-center justify-center w-full'>
      <Register/>
      </div>
    </div>
  </div>
  )
}
