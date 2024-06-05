import React from 'react'

export default function MyPage() {
  const people = [
    { name: 'Hong gil dong', id: 'gildong0205', phone: '010-1234-5678', address: '부산광역시 금정구 구서동' },
    // More people...
  ]
  return (
    
    <div className='bg-white bg-opacity-50 p-10 rounded-lg shadow-lg w-full max-w-2xl'>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <tbody className="divide-y divide-gray-200">
                {people.map((person) => (
                  <React.Fragment key={person.email}>
                  <tr>
                    <th className="text-left px-4 py-2 text-white">이름</th>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-white">
                      {person.name}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left px-4 py-2 text-white">아이디</th>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{person.id}</td>
                  </tr>
                  <tr>
                    <th className="text-left px-4 py-2 text-white">전화번호</th>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{person.phone}</td>
                  </tr>
                  <tr>
                    <th className="text-left px-4 py-2 text-white">주소</th>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{person.address}</td>
                  </tr>
                </React.Fragment>
                ))}
              </tbody>
            </table>
            <div className='flex justify-end items-center'>
            <button type="button" className="text-[#1F487E] hover:text-white border border-[#1F487E] hover:bg-[#1F487E] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <a href="/mypageEdit">수정하기</a>
            </button>
            <button type="button" className="text-[#1F487E] hover:text-white border border-[#1F487E] hover:bg-[#1F487E] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <a href="/">탈퇴하기</a>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
