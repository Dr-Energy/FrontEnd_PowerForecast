import React from 'react'
import LocationSel from './LocationSel'

export default function MyPageEdit() {
  return (
    <div className='bg-white bg-opacity-50 p-10 rounded-lg shadow-lg w-full max-w-2xl'>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <tbody className="divide-y divide-gray-200">
                
                  
                  <tr>
                    <th className="text-left px-4 py-2">닉네임</th>
                    <input type='text' className="whitespace-nowrap px-5 py-4 text-sm text-gray-500 bg-white bg-transparent"/>
                  </tr>
                  <tr>
                    <th className="text-left px-4 py-2">전화번호</th>
                    <input type='text' className="whitespace-nowrap px-5 py-4 text-sm text-gray-500 bg-white bg-transparent"/>
                  </tr>
                  <tr>
                    <th className="text-left px-5 py-2">주소</th>
                    <LocationSel/>
                  </tr>
                
              </tbody>
            </table>
            <div className='flex justify-end items-center'>
            <button type="button" className="text-[#1F487E] hover:text-white border border-[#1F487E] hover:bg-[#1F487E] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <a href="/myPage">완료</a>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
