import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react'
import { AuthContext } from './AuthContext';

export default function MyPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('ACCESS_TOKEN');
      const memberId = localStorage.getItem('memberId');
      // console.log("memberID:"+memberId);
      if (!token) {
        navigate('/login'); // 토큰이 없으면 로그인 페이지로 리디렉션
        return;
      }

      try {
        const response = await axios.get(`http://10.125.121.224:8080/user/profile/${memberId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        localStorage.clear();
        navigate('/login'); // 실패하면 로그인 페이지로 리디렉션
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleDeleteProfile = (e) => {
    e.preventDefault();
    if (window.confirm('확인을 누르면 회원 정보가 삭제됩니다.')) {
      const token = localStorage.getItem('ACCESS_TOKEN');
      const memberId = localStorage.getItem('memberId');
      axios
        .delete(
          `http://10.125.121.224:8080/user/profile/${memberId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          localStorage.clear();
          logout();
          alert('그동안 이용해주셔서 감사합니다.');
          navigate('/');
        })
        .catch((err) => alert(err.response.data.message));
    } else {
      return;
    }
  };
  if (!user) {
    return <div>Loading...</div>;
  }
  return (

    <div className='bg-white bg-opacity-50 p-10 rounded-lg shadow-lg w-full max-w-2xl'>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <th className="text-left px-4 py-2 text-white">이름</th>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-white">
                    {user.nickname}
                  </td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-2 text-white">아이디</th>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{user.memberId}</td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-2 text-white">전화번호</th>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{user.phoneNumber}</td>
                </tr>
                <tr>
                  <th className="text-left px-4 py-2 text-white">주소</th>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{user.region.sido} {user.region.gugun} {user.region.eupmyeondong}</td>
                </tr>
              </tbody>
            </table>
            <div className='flex justify-end items-center'>
              <Link to="/mypageEdit" className="text-[#1F487E] hover:text-white border border-[#1F487E] hover:bg-[#1F487E] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                수정하기
              </Link>
              <button
                onClick={handleDeleteProfile}
                className="text-[#1F487E] hover:text-white border border-[#1F487E] hover:bg-[#1F487E] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                탈퇴하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
