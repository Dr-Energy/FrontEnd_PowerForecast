import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LocationSel from './LocationSel'
import { AuthContext } from './AuthContext';

export default function MyPageEdit() {
  const navigate = useNavigate();
  //로그인한 사용자의 정보를 저장할 useState
  const { setUserLocation, userLocation } = useContext(AuthContext);
  const [user, setUser] = useState({
    memberId: '',
    nickname: '',
    phoneNumber: '',
    password: '',
    region: {
      sido: '',
      gugun: '',
      eupmyeondong: '',
    },
  });

  const fetchUserData = async () => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    const memberId = localStorage.getItem('memberId');
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
  
  useEffect(() => {
    fetchUserData();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleRegionChange = (newRegion) => {
    //console.log("new region"+newRegion.target.value);
    //setUserLocation(newRegion);
    setUser({
      ...user,
      region: newRegion,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (!user.password) {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    try {
      const response = await axios.put(`http://10.125.121.224:8080/user/profile`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('회원 정보가 성공적으로 수정되었습니다.');
      //handleRegionChange(response.data.regionId);
      setUserLocation(response.data.regionId); // 수정된 지역 정보를 AuthContext에 반영
      
      //localStorage.setItem 0618에 고칠 내용 -> 회원정보 수정 시 닉네임 미적용
      navigate('/mypage');
    } catch (error) {
      console.error('Failed to update user data:', error);
      alert('회원 정보 수정에 실패했습니다.');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="bg-white bg-opacity-30 p-10 rounded-lg shadow-lg w-full max-w-2xl h-auto">
      <div className="mb-8 flex justify-center items-center">
        <label className="block text-left text-2xl font-bold mb-2 text-white w-1/5">닉네임</label>
        <input 
          type="text" 
          name="nickname"
          className="w-full px-5 py-4 text-sm text-white bg-transparent placeholder-white border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md" 
          placeholder="닉네임을 입력하세요." 
          value={user.nickname|| ''}
          onChange={handleChange}
        />
      </div>
      <div className="mb-8 flex justify-center items-center">
        <label className="block text-left text-2xl font-bold mb-2 text-white w-1/5">전화번호</label>
        <input 
          type="text" 
          name="phoneNumber"
          className="w-full px-5 py-4 text-sm text-white bg-transparent placeholder-white border rounded-md border-gray-300 focus:outline-none focus:border-blue-500" 
          placeholder="전화번호를 입력하세요." 
          value={user.phoneNumber|| ''}
          onChange={handleChange}
        />
      </div>
      <div className="mb-8 flex justify-center items-center">
        <label className="block text-left text-2xl font-bold mb-2 text-white w-1/5">비밀번호</label>
        <input 
          type="password" 
          name="password"
          className="w-full px-5 py-4 text-sm text-white bg-transparent placeholder-white border rounded-md border-gray-300 focus:outline-none focus:border-blue-500" 
          placeholder="비밀번호를 입력하세요." 
          value={user.password|| ''}
          onChange={handleChange}
        />
      </div>
      <div className="mb-8">
        <label className="block text-center text-2xl font-bold mb-2 text-white">주소</label>
        <LocationSel onChange={handleRegionChange} />
      </div>
      <div className='flex justify-center items-center'>
      <button type='submit' className="text-[#1F487E] hover:text-white border border-[#1F487E] hover:bg-[#1F487E] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5">완료</button>
      </div>
    </form>
  )
}
