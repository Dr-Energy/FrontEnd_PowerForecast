import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
// 전역 상태관리를 할 수 있는 createContext컴포넌트를 만든다.

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
    // 로그인 하지 않은 사용자를 구별하기 위함

  const login = (location) => {
    setIsLoggedIn(true);
    setUserLocation(location);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserLocation(null);
    localStorage.removeItem('token');
    localStorage.removeItem('nickname');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userLocation }}>
      {children}
    </AuthContext.Provider>
  );
};
