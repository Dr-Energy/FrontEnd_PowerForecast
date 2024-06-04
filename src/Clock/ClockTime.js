import { useEffect, useState } from "react"

export default function ClockTime() {
    const [currentTime, setCurrentTime] =useState();
    //State 함수를 이용해 시간을 저장할 변수를 만들어 준다.
    useEffect(()=>{
        //useEffect함수를 이용해 랜더링할 부분을 만들어 준다.
        const t= setInterval(()=>{//setInterval함수는 시간을 계속 흐르게 할 때 사용하는 함수
            setCurrentTime(new Date());
            //현재 시간을 state함수에 입력해 준다. setInterval이 없으면 계속 새로고침해야지 현재 시간을 알 수 있음
        },1000);
        return ()=>{
            clearInterval(t);
        }
    },[]);
  return (
    <div className="font-bold flex justify-center items-center">
      {currentTime && `REALTIME: ${currentTime.toLocaleString()}`}
    </div>
  )
}
