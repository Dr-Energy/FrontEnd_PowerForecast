import React, { useState } from 'react';
import axios from 'axios';
import LocationSel from './LocationSel'

export default function Register() {
  const [formData, setFormData]=useState({
    memberId:'',
    nickname:'',
    password:'',
    phoneNumber:'',
    region:{
      sido:'',
      gugun:'',
      eupmyeondong:''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:value
    });
  };
  
  const handleRegionChange = (region) => {
    setFormData({
      ...formData,
      region: {
        ...formData.region,
        ...region
      }
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://10.125.121.224:8080/user/register', formData)
      .then(response => {
        console.log('Data sent successfully:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-xl mx-auto'>
    <div className="bg-white bg-opacity-30 p-10 rounded-md shadow-md w-full">
          {/* <form action="#" method="POST" className="space-y-6"> */}
            <div>
              <label htmlFor="memberId" className="block text-sm font-medium text-white">ID</label>
              <input type="text" id="memberId" name="memberId" value={formData.memberId} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-transparent" />
            </div>
            <div>
              <label htmlFor="nickname" className="block text-sm font-medium text-white">Nickname</label>
              <input type="text" id="nickname" name="nickname" value={formData.nickname} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-transparent" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-transparent" />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-white">Cellphone</label>
              <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-transparent" />
            </div>
            <div>
              <label htmlFor="region" className="block text-sm font-medium text-white">Address</label>
              <div className='flex justify-start items-center py-2'>
              <LocationSel onChange={handleRegionChange}/>
              </div>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="w-full py-2 px-4 bg-[#153c27] text-white font-semibold rounded-md hover:bg-opacity-80">REGISTER</button>
            </div>
          {/* </form> */}
        </div>
        </form>
  )
}
