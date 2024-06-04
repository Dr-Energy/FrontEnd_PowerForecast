import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom"
import TailSelect from "../UI/TailSelect";
import getcode from "./getcode.json"
export default function FrcastList() {
    const query=useSearchParams();
    const date=query.get('date');
    const area=query.get('area');
    const X=query.get('X');
    const Y=query.get('Y');
    const gubun=query.get('gubun');
    console.log(date, area, X, Y, gubun);
    const [wdata,setWdata]=useState();//날짜, 위치에 따른 제이슨데이터
    const [selcategory,setSelcategory]=useState();//정해진 itemRef값
    const itemRef=useRef();
    const ops=getcode.filter(item=>item["예보구분"]===gubun)
                    .map(item=>`${item["항목명"]}-${item["항목값"]}`)
                    // .map(item=>setSelcategory(item["항목값"]))
    const [wcard,setWcard]=useState();
    {/* 구분이 초단기예보일 경우와 단기예보일 경우 url을 다르게 패치한다. */}
    useEffect(()=>{
        let url='';
        if(gubun==='초단기예보'){
            url=`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`
            url=`${url}serviceKey=${process.env.REACT_APP_APIKEY}`
            url=`${url}&pageNo=1&numOfRows=1000&dataType=json&base_date=${date}&base_time=0630&nx=${X}&ny=${Y}`
        }else{
            url=`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`
            url=`${url}serviceKey=${process.env.REACT_APP_APIKEY}`
            url=`${url}&pageNo=1&numOfRows=1000&dataType=json&base_date=${date}&base_time=0630&nx=${X}&ny=${Y}`
        }

        fetch(url)
        .then(rsps=>rsps.json())
        .then(data=>setWdata(data.response.body.items.item))
        .catch(err=>console.log(err))
    },[]);
    //itemRef값이 정해지면 category를 필터링해서 map으로 테이블을 만든다.
    const handleItem=()=>{
        //itemRef의 항목값을 setSelcategory로 설정한다.->유즈이펙트로 테이블 만든다.
        if(itemRef.current.value===''){
            alert('항목을 선택해주세요.')
            itemRef.current.focus();
            return
        }
        setSelcategory(itemRef.current.value.split('-')[1])
    }
    useEffect(()=>{
        if(!selcategory)return;
        const precard=wdata.filter(item=>item.category===selcategory)
                        .map(item=>
                            <tr className="hover:bg-slate-200" key={item.fcstDate+item.fcstTime}>
                                <td>{`${item.baseDate.substring(0,4)}-${item.baseDate.substring(4,6)}-${item.baseDate.substring(6,8)}`}</td>
                                <td>{`${item.baseTime.substr(0,2)}:${item.baseTime.substr(2,4)}`}</td>
                                <td>{item.category}</td>
                                <td>{`${item.fcstDate.substring(0,4)}-${item.fcstDate.substring(4,6)}-${item.fcstDate.substring(6,8)}`}</td>
                                <td>{`${item.fcstTime.substr(0,2)}:${item.fcstTime.substr(2,4)}`}</td>
                                <td>{item.category==="T1H"? `${item.fcstValue}℃`:item.fcstValue}</td>
                            </tr>)
        setWcard(precard)
    },[selcategory]);
  return (
    <div>
        <div>
            <div>{area}의 {gubun}</div>
            <TailSelect ops={ops} 
                        selRef={itemRef}
                        handleLocation={handleItem} 
                        opDefault="---항목선택---"/>
        </div>
        <table>
            <thead>
                <th>관측시간</th>
                <th>예보시간</th>
                <th>기상상태</th>
                <th>예측날짜</th>
                <th>예측시간</th>
                <th>예측값</th>
            </thead>
            <tbody>
                {wcard}
            </tbody>
        </table>
    </div>
  )
}
