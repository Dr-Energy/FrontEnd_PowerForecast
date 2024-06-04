import React from 'react'
import { useRecoilState } from 'recoil'
import { countState } from './ReAtom'
import RecoilDisplay from './RecoilDisplay';
export default function CoilMail() {
    const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      {count}
      <div>
        <RecoilDisplay/>
      </div>
    </div>
  )
}
