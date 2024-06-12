import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';//로그인 상태를 알기위함

const LoginForm = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
      memberId: '',
      password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://10.125.121.224:8080/login', formData);
      console.log('Login successful:', response.data.nickname);
      localStorage.setItem('ACCESS_TOKEN', response.headers['authorization']);
      //헤더에서 authorization을 당겨와서 스토리지에 저장하고 마이페이지 등 개인정보가 필요한 곳에서 서버로 보내서 정보를 다시 당겨올 수 있다.
      localStorage.setItem('nickname', response.data.nickname);//헤더의 유저정보에 넣을 닉네임 저장
      localStorage.setItem('memberId', response.data.memberId);//

      const userLocation = response.data.location;  // 서버에서 위치 정보를 가져온다.
      login(userLocation);

        navigate("/");
      // 로그인 성공 후 처리
    } catch (error) {
      console.error('Login error:', error);
      // 로그인 실패 후 처리
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white bg-opacity-50 p-10 rounded-lg shadow-lg w-full max-w-sm">
      <input
        type="text"
        name="memberId"
        placeholder="ID"
        value={formData.memberId}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded bg-white bg-opacity-50 mt-7"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 mb-6 border border-gray-300 rounded bg-white bg-opacity-50"
      />
      <button type="submit" className="w-full bg-[#1D3461] bg-opacity-50 text-white p-2 rounded hover:bg-gray-500">
        Login
      </button>
      <div className='flex justify-between items-center text-sm pt-5 text-white'>
        <a href='/findId'>Find ID</a>
        <a href='/findPw'>Find Password</a>
        <a href='/register'>Register</a>
      </div>
    </form>
  );
};

export default LoginForm;
