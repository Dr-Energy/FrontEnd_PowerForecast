import { useEffect, useState } from "react";
import useCount from "./useCount"
const MAX_CAPACITY =10;
export default function Accomodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCount(0);

    useEffect(()=>{
        console.log("===================");
        console.log("useEffect is called");
        console.log(`isFull: ${isFull}`);
    })
    useEffect(()=>{
        setIsFull(count>=MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    },[count])
  return (
    <div>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      <button onClick={increaseCount} disabled={isFull}>입장</button>
      <button onClick={decreaseCount} disabled={count===0}>퇴장</button>
      {isFull && <p>정원이 가득 찼습니다.</p>}
    </div>
  )
}
