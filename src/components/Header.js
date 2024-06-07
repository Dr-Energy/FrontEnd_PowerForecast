import React from 'react'

export default function Header({title}) {
  return (
    <header className="w-full flex justify-start items-center bg-white bg-opacity-20 p-3 shadow rounded-lg ">
        <div className="flex w-full justify-between items-center ml-4">
          <div className='justify-start items-center text-2xl text-white'>
          {/* <Routes>
            <Route path="/register" element={<span>회원가입</span>} />
            <Route path="/login" element={<span>로그인</span>} />
            <Route path="/alarmHistory" element={<span>알람이력</span>} />
            <Route path="/myPage" element={<span>마이페이지</span>} />
            <Route path="/" element={<span>메인</span>} />
            <Route path="/mypageEdit" element={<span>나의 정보 수정</span>} />

          </Routes> */}
          <span>{title}</span>
          </div>
          <div className='flex justify-center items-center'>
            {/* <Link to="/login"> */}
              <a href="/login" className=' bg-transparent text-white rounded-3xl p-2 mx-2 text-sm shadow  hover:bg-gray-200 hover:bg-opacity-20'>
                login</a>
            {/* </Link> */}
           
              <a href="/myPage" className="flex justify-center items-center font-bold text-sm bg-transparent text-white rounded-3xl p-1 px-2 mx-1 shadow hover:bg-gray-200 hover:bg-opacity-20">
                <img
                src="https://via.placeholder.com/40"
                alt="profile"
                className="w-10 h-10 rounded-full mr-2"
                />
                Hong Gil Dong
                </a>
             
            </div>
        </div>
      </header>
  )
}
