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

import AlarmHistory from './components/AlarmHistory.js';
import My_Page from './Pages/My_Page.js';
import FindId from './components/FindId.js';
import FindPw from './components/FindPw.js';
import Main_Page from './Pages/Main_Page.js';
import Register_Page from './Pages/Register_Page.js';
import Login_Page from './Pages/Login_Page.js';
import Edit_Page from './Pages/Edit_Page.js';
import Alarm_Page from './Pages/Alarm_Page.js';
import FindId_Page from './Pages/FindId_Page.js';
import FindPw_Page from './Pages/FindPw_Page.js';


function App() {
  
return (
<BrowserRouter>

  {/* <img src={bg1}/>  */}


      <Routes>
        <Route path="/" element={<Main_Page/>} />
        <Route path="/login" element={<Login_Page/>} />
        <Route path="/register" element={<Register_Page/>} />
        <Route path="/myPage" element={<My_Page/>} />
        <Route path='/mypageEdit' element={<Edit_Page/>} />
        <Route path='/findId' element={<FindId_Page/>} />
        <Route path='/findPw' element={<FindPw_Page/>} />
        <Route path="/alarmHistory" element={<Alarm_Page/>} />
        
      </Routes>


</BrowserRouter>
);
}

export default App;
