import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();
// 전역 상태관리를 할 수 있는 createContext컴포넌트를 만든다.

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [user, setUser] = useState(null);
    // 로그인 하지 않은 사용자를 구별하기 위함

  // const login = (location) => {
  //   setIsLoggedIn(true);
  //   setUserLocation(location);
  // };

  // const logout = () => {
  //   setIsLoggedIn(false);
  //   setUserLocation(null);
  //   localStorage.removeItem('ACCESS_TOKEN');
  //   localStorage.removeItem('nickname');
  // };

  // useEffect(()=>{
  //   console.log(localStorage.getItem('ACCESS_TOKEN')+"loc:"+userLocation);
  //   if(localStorage.getItem('ACCESS_TOKEN')!=null)
  //   setIsLoggedIn(true);
  // },[])

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const token = localStorage.getItem('ACCESS_TOKEN');
  //     if (token) {
  //       try {
  //         const response = await axios.get('http://10.125.121.224:8080/user/profile', {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //         setUser(response.data);
  //         setUserLocation(response.data.regionId);
  //         setIsLoggedIn(true);
  //       } catch (error) {
  //         console.error('Failed to fetch user data:', error);
  //         setIsLoggedIn(false);
  //         localStorage.removeItem('ACCESS_TOKEN');
  //       }
  //     }
  //   };

  //   const storedUser = localStorage.getItem('USER');
  //   const storedLocation = localStorage.getItem('USER_LOCATION');
  //   if (storedUser) {
  //     const userData = JSON.parse(storedUser);
  //     setUser(userData);
  //     setUserLocation(storedLocation);
  //     setIsLoggedIn(true);
  //   } else {
  //     fetchUser();
  //   }
  // }, []);

  useEffect(() => {
    //token o
    //user o
    //isloggedin x
    const storedUser = localStorage.getItem('USER');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setIsLoggedIn(true);
      setUserLocation(userData.regionId);
    } 
  }, []);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem('USER', JSON.stringify(userData));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('USER');
    localStorage.removeItem('nickname');
    localStorage.removeItem('memberId');
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userLocation, setUserLocation, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};