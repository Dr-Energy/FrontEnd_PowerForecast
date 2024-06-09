import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
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
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data);

        navigate("/");
      // 로그인 성공 후 처리
    } catch (error) {
      console.error('Login error:', error);
      // 로그인 실패 후 처리
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white bg-opacity-40 p-10 rounded-lg shadow-lg w-full max-w-sm">
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
