import React, { useEffect, useRef, useState } from 'react'

export default function PublicParking() {
    const [Pdata,setPdata]=useState();
    const[selgu,setSelgu]=useState();
    const[guopt,setGuopt]=useState();
    const[card,setCard]=useState();
    const guRef=useRef();
    // const guSearch=()=>{
        
    // }
    useEffect(()=>{
      let url=`https://apis.data.go.kr/6260000/BusanPblcPrkngInfoService/getPblcPrkngInfo?`
      url=url+`serviceKey=${process.env.REACT_APP_MY_API}`
      url=url+`&pageNo=1&numOfRows=1000&resultType=json`
      console.log(url)

        fetch(url)
        .then(resp=>resp.json())
        .then(data=>setPdata(data.getPblcPrkngInfo.body.items.item))
        .catch(err=>console.log(err))
    },[]);
    useEffect(()=>{
        console.log("Pdata:",Pdata)
    },[]);
    //저장된 데이터를 확인해보자
    useEffect(() => {
      if (!Array.isArray(Pdata)) return; // Pdata가 배열이 아닌 경우, map 함수 호출을 방지
      let guCategory = Pdata.map(item => item["guNm"]);
      guCategory = new Set(guCategory);
      guCategory = [...guCategory].sort();
      console.log(guCategory);
      setSelgu(guCategory);
    }, [Pdata]);
    
    

    useEffect(()=>{
      if(!Pdata) return;
      let gusel=selgu.map(item=>
        <option key={item} value={item}>{item}</option>
      )
      setGuopt(gusel);
    },[selgu]);

    const handleSelGu=()=>{
      if (!Pdata) return;
      console.log(guRef.current.value)
      const gufilter=Pdata.filter(item=>item.guNm===guRef.current.value)
                          .map(item=>
      <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100" key={item.mgntNum}>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{item.pkNam}</h5>
      <p className="font-normal text-gray-700 ">{item.jibunAddr}</p>
      <p className="font-normal text-gray-700 ">{item.tponNum}</p>
      </a>
      )
      setCard(gufilter)
    }

  return (
    <div className='w-11/12 h-full'>
      <div className='flex justify-center items-center m-3'>
        <div className='m-2'>공영주차장 검색</div>
      <select id='gu' ref={guRef} onChange={handleSelGu} className='border-2'>
      <option defaultValue>구 선택</option>
      {guopt}
      </select>
      </div>
      <div className="grid grid-cols-3 gap-4">{card}</div>
    </div>
  )
}
