import React from 'react'
import LocationSel from './LocationSel'

export default function MyPageEdit() {
  return (
    <div className="bg-white bg-opacity-30 p-10 rounded-lg shadow-lg w-full max-w-2xl h-auto">
      <div className="mb-8 flex justify-center items-center">
        <label className="block text-left text-2xl font-bold mb-2 text-white w-1/5">닉네임</label>
        <input 
          type="text" 
          className="w-full px-5 py-4 text-sm text-white bg-transparent placeholder-white border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md" 
          placeholder="닉네임을 입력하세요." 
        />
      </div>
      <div className="mb-8 flex justify-center items-center">
        <label className="block text-left text-2xl font-bold mb-2 text-white w-1/5">전화번호</label>
        <input 
          type="text" 
          className="w-full px-5 py-4 text-sm text-gray-500 bg-transparent placeholder-white border rounded-md border-gray-300 focus:outline-none focus:border-blue-500" 
          placeholder="전화번호를 입력하세요." 
        />
      </div>
      <div className="mb-8">
        <label className="block text-center text-2xl font-bold mb-2 text-white">주소</label>
        <LocationSel />
      </div>
      <div className='flex justify-center items-center'>
      <a href="/myPage" className="text-[#1F487E] hover:text-white border border-[#1F487E] hover:bg-[#1F487E] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5">완료</a>
      </div>
    </div>
  )
}
