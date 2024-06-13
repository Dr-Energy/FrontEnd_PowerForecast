import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider, AuthContext } from './components/AuthContext'; //로그인 관리를 위한 컴포넌트

import My_Page from './Pages/My_Page.js';
import Main_Page from './Pages/Main_Page.js';
import Register_Page from './Pages/Register_Page.js';
import Login_Page from './Pages/Login_Page.js';
import Edit_Page from './Pages/Edit_Page.js';
import Alarm_Page from './Pages/Alarm_Page.js';
import FindId_Page from './Pages/FindId_Page.js';
import FindPw_Page from './Pages/FindPw_Page.js';

//로그인이 되어야 들어갈 수 있는 루트
const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = React.useContext(AuthContext);
  return isLoggedIn ? children : <Login_Page />;
};

function App() {
  
return (
<AuthProvider>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main_Page/>} />
        <Route path="/login" element={<Login_Page/>} />
        <Route path="/register" element={<Register_Page/>} />
        <Route path="/myPage" element={<PrivateRoute><My_Page /></PrivateRoute>} />
        <Route path='/mypageEdit' element={<PrivateRoute><Edit_Page /></PrivateRoute>} />
        <Route path='/findId' element={<FindId_Page/>} />
        <Route path='/findPw' element={<FindPw_Page/>} />
        <Route path="/history" element={<Alarm_Page/>} />
      </Routes>
  </BrowserRouter>
</AuthProvider>
);
}

export default App;
