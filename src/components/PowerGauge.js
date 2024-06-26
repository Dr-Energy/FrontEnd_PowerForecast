import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GaugeChart from 'react-gauge-chart';

export default function PowerGauge({powerData}) {
    // const [powerData, setPowerData] = useState();
    const [p, setP] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(powerData){
            const minValue = 53;
            const maxValue = 270;
            console.log("useeffect", powerData/100);
            setP((powerData-minValue)/(maxValue-minValue));
            setIsLoading(false);
        }
    },[powerData])
    
    if (isLoading) {
        return (
            <div className="loader ease-linear rounded-full border-8 border-t-8 h-20 w-20"></div>
            );}
            
    if (!powerData) {
        return <p>전력소모 데이터가 없습니다.</p>;
    }

    //const percentage = parseFloat(powerData) / 100;
    return (
        <div className='flex flex-col items-center bg-white bg-opacity-80 rounded-lg p-5'>
        <h2>전력 소비 비율 게이지</h2>
        <GaugeChart id="gauge-chart1"
            nrOfLevels={25}
            colors={["#e03400", "#ffd60a", "#354f52"]}
            arcWidth={0.2}
            percent={p}
            textColor="#354f52"
            needleColor="#354f52"
            needleBaseColor="#354f52"
            needleScale={0.9}
            //customNeedleStyle
        />
        <div className='flex justify-between w-full mt-4'>
            <div>
            <p>95</p>
            <p>Total projects</p>
            </div>
            <div>
            <p style={{ color: '#354f52' }}>26</p>
            <p>Completed</p>
            </div>
            <div>
            <p style={{ color: '#ffd60a' }}>35</p>
            <p>Delayed</p>
            </div>
            <div>
            <p style={{ color: '#FF5F6D' }}>35</p>
            <p>On going</p>
            </div>
        </div>
        </div>
    )
}
