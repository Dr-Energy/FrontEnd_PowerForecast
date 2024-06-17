import { useContext, useEffect } from 'react'
import { AuthContext } from './AuthContext';
import { Link } from 'react-router-dom';

export default function Header({title}) {
  // useEffect(()=>{
  //   console.log(localStorage.getItem('nickname'))
  // },[])
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <header className="w-full flex justify-start items-center bg-white bg-opacity-20 p-3 shadow rounded-lg ">
        <div className="flex w-full justify-between items-center ml-4">
          <div className='justify-start items-center text-2xl text-white'>
          <span>{title}</span>
          {/* 컴포넌트의 이름을 표현해 주기 위한 title 입니다. */}
          </div>
          <div className='flex justify-center items-center'>
            {isLoggedIn ? (
              <>
              <button onClick={logout} className='bg-transparent text-white rounded-3xl p-2 mx-2 text-sm shadow hover:bg-gray-200 hover:bg-opacity-20'>
              Logout
            </button>
              <Link to="/myPage" className="flex justify-center items-center font-bold text-sm bg-transparent text-white rounded-3xl p-1 px-2 mx-1 shadow hover:bg-gray-200 hover:bg-opacity-20">
                <img
                src="https://via.placeholder.com/40"
                alt="profile"
                className="w-10 h-10 rounded-full mr-2"
                />
                {localStorage.getItem('nickname')}
                </Link>
            </>
            ) : (
              <Link to="/login" className=' bg-transparent text-white rounded-3xl p-2 mx-2 text-sm shadow  hover:bg-gray-200 hover:bg-opacity-20'>
                login</Link>
            )}           
            </div>
        </div>
      </header>
  )
}
