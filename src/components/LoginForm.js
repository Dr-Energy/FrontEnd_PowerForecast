import React from 'react';

const LoginForm = () => {
return (

<div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-sm">
    <h2 className="text-2xl font-bold mb-6">로그인</h2>
        <input
        type="text"
        placeholder="ID"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-6 border border-gray-300 rounded"
        />
        <button className="w-full bg-[#1D3461] text-white p-2 rounded hover:bg-gray-500">
        Login
        </button>
        <div className='flex justify-between items-center text-sm py-3'>
            
            <button>아이디 찾기</button>
            <button>비밀번호 찾기</button>
            <a href='/register'>register</a>
            
        </div>
</div>
);
};

export default LoginForm;