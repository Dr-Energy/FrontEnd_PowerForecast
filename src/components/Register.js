import React from 'react'
import LocationSel from './LocationSel'

export default function Register() {
  return (
    <div className="bg-white bg-opacity-30 p-10 rounded-md shadow-md w-full">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white">ID</label>
              <input type="text" id="username" name="username" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-transparent" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
              <input type="password" id="password" name="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-transparent" />
            </div>
            <div>
              <label htmlFor="nickname" className="block text-sm font-medium text-white">Nickname</label>
              <input type="text" id="nickname" name="nickname" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-transparent" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white">Cellphone</label>
              <input type="text" id="phone" name="phone" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-transparent" />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-white">Address</label>
              <div className='flex justify-start items-center py-2'>
              <LocationSel/>
              </div>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="w-full py-2 px-4 bg-[#153c27] text-white font-semibold rounded-md hover:bg-opacity-80">REGISTER</button>
            </div>
          </form>
        </div>
  )
}
