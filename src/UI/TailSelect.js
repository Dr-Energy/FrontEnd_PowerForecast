import React from 'react'

export default function TailSelect({ops, selRef, handleLocation, opDefault}) {
    const opTags=ops.map(item=>
                <option key={item} value={item}>{item}</option>);
  return (
    <select id='sel'
            onChange={handleLocation}
            ref={selRef}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5'>
                <option defaultValue>{opDefault}</option>
                {opTags}</select>
  )
}
