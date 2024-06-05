// import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
// import { ImAppleinc } from "react-icons/im";
// // import ButtonTest from "./Button/ButtonTest";
// // import MyClick from "./Clock/MyClick";
// import GalleryMain from "./Gallery/GalleryMain";
// // import RecoilMain from "./Recoil/RecoilMain";
// import PublicParking from "./Pages/PublicParking";
// import Frcast from "./Forecast/Frcast";
// import FrcastList from "./Forecast/FrcastList";
// import Accomodate from "./chp07/Accomodate";

// function App() {
//   return (
//     <>
//     <BrowserRouter>
//       <div className="flex flex-col 
//                       w-full max-w-screen-xl
//                       h-screen
//                       mx-auto
//                       overscroll-y-auto">
//         <header className="flex justify-between items-center
//                           h-20
//                           p-10
//                           text-2xl font-mono font-bold text-[#F2BB05]
//                           bg-[#124E78]
//                           scroll-auto">
//           <div>React Review</div>
//           <div className="flex justify-end items-center">
//             <div className="p-2 hover:text-green-950 m-2">
//               <Link to="/parking">Parking</Link>
//             </div>
//             <div className="p-2 hover:text-green-950 m-2">
//               <Link to="/gallery">Gallery</Link>
//             </div>
//             <div className="p-2 hover:text-green-950 m-2">
//               <Link to="/frcast">Forecast</Link>
//             </div>
//             <div className="p-2 hover:text-green-950 m-2">
//               <Link to="/accomodate">Count</Link>
//             </div>
//             <div className='p-2 m-2 text-5xl text-[#F2BB05]'><ImAppleinc /></div>
//           </div>
//           </header>
//         <main className="grow flex flex-col justify-center items-center">
//           {/* <ButtonTest/> */}
//           {/* <MyClick/> */}
//           {/* <PublicParking/> */}
//           {/* <GalleryMain/> */}
//           {/* <RecoilMain/> */}
//           <Routes>
//             <Route path="/parking" element={<PublicParking/>} />
//             <Route path="/gallery" element={<GalleryMain/>} />
//             <Route path="/frcast" element={<Frcast/>} />
//             <Route path="/flist" element={<FrcastList/>} />
//             <Route path="/accomodate" element={<Accomodate/>} />
//           </Routes>
//           </main>
//         <footer className="flex justify-center items-center
//                           h-20
//                           p-30
//                           text-xl font-mono text-[#F0F0C9]
//                           bg-[#6E0E0A]">
//           2024 kimujeong. All right reserved.
//           </footer>
          
//       </div>
//       </BrowserRouter>
//     </>
//   );
// }


// export default App;

import React, {useState} from 'react';
import {BrowserRouter, Router, Route, Routes, Link} from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import LoginForm from './components/LoginForm';
import Register from './components/Register.js';
import AlarmHistory from './components/AlarmHistory.js';
import Main from './components/Main.js';
import MyPage from './components/MyPage.js';
import MyPageEdit from './components/MyPageEdit.js';

function App() {
  
return (
<BrowserRouter>
<div className="flex h-screen bg-[#F4FAFF]">
  <Sidebar/>
    <div className="flex-grow flex flex-col items-center justify-start relative p-3">
      <header className="w-full flex justify-start items-center bg-white p-3 shadow rounded-lg ">
        <div className="flex w-full justify-between items-center ml-4">
          <div className='justify-start items-center font-extrabold text-2xl text-[#1D3461]'>
          <Routes>
            <Route path="/register" element={<span>회원가입</span>} />
            <Route path="/login" element={<span>로그인</span>} />
            <Route path="/alarmHistory" element={<span>알람이력</span>} />
            <Route path="/myPage" element={<span>마이페이지</span>} />
            <Route path="/" element={<span>메인</span>} />
            <Route path="/mypageEdit" element={<span>나의 정보 수정</span>} />

          </Routes>
          </div>
          <div className='flex justify-center items-center'>
            {/* <Link to="/login"> */}
              <a href="/login" className='bg-[#1D3461] text-white rounded-3xl p-2 mx-2 text-sm shadow shadow-slate-400 hover:bg-gray-500'>
                login</a>
            {/* </Link> */}
           
              <a href="/myPage" className="flex justify-center items-center font-bold text-sm bg-[#1D3461] text-white rounded-3xl p-1 px-2 mx-1 shadow shadow-slate-400 hover:bg-gray-500">
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
      <div className='flex-grow flex items-center justify-center w-full max-w-3xl'>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/alarmHistory" element={<AlarmHistory/>} />
        <Route path="/myPage" element={<MyPage/>} />
        <Route path="/" element={<Main/>} />
        <Route path='/mypageEdit' element={<MyPageEdit/>} />
      </Routes>
      </div>
    </div>
</div>
</BrowserRouter>
);
}

export default App;
