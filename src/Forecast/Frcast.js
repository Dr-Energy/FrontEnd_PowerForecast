import { useState, useRef } from 'react';
import TailSelect from '../UI/TailSelect';
import TailInput from '../UI/TailInput';
import getxy from './getxy.json';
import TailButton from '../UI/TailButton';
import { useNavigate } from 'react-router-dom';
export default function Frcast() {
    const sRef=useRef();
    const dRef=useRef();
    const [area, setArea]=useState();
    const [X, setX]=useState()
    const [Y, setY]=useState()
    const [date, setDate]=useState()
    const navigator=useNavigate();
    const ops=getxy.map(item=>item["1단계"])
    const handleArea=()=>{
        if(sRef.current.value ===''||sRef.current.value===undefined) return
        const XY = getxy.filter(item=>item["1단계"]==sRef.current.value);
        console.log(XY[0])
        setArea(sRef.current.value)
        setX(XY[0]["격자 X"])
        setY(XY[0]["격자 Y"])
    }
    const handleDate=()=>{
        setDate(dRef.current.value.replaceAll('-',''))
    }
    const handleFrcst=(loc)=>{
        // 날짜와 지역이 선택되면 네비게이터로 프롭스를 모두 전달 해 준다.
        if(date===''||date===undefined){
            alert('날짜를 선택해주세요.')
            dRef.current.focus()
            return
        }
        if(area===''||area===undefined){
            alert('지역을 선택해주세요.')
            sRef.current.focus()
            return
        }
        let gubun='';
        if(loc==='ultra') gubun='초단기예보'
        else gubun='단기예보'
        
        // navigator(`/ultra/${date}/${area}/${X}/${Y}`) ->useParams로 전달하는 경우
        navigator(`flist?date=${date}&area=${area}&X=${X}&Y=${Y}&gubun=${gubun}`) //useSearchParams로 전달하는 경우
    }
  return (
    <div>
      {/* 지역선택 select 만들기 */}
      <TailSelect ops={ops}
                selRef={sRef}
                handleLocation={handleArea}
                opDefault="---지역선택---"
                />
      {/* 날짜선택 select 만들기 */}
      <TailInput type="date"
                ph="날짜선택"
                inputRef={dRef}
                handleChange={handleDate}
                />
    <TailButton caption="초단기예보" color="green" handleClick={()=>{handleFrcst('ultra')}}/>
    <TailButton caption="단기예보" color="green" handleClick={()=>{handleFrcst('village')}}/>
    </div>
  )
}
