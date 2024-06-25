import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GaugeChart from 'react-gauge-chart';

export default function PowerGauge() {
    const [powerData, setPowerData] = useState();
    const [p, setP] = useState();
    const [isLoading, setIsLoading] = useState(true);
    // const { power } = powerData; //????
    
    const fetchPowerData = async () => {
        try {
            const response = await axios.get('http://10.125.121.224:8080/predict/currentTime');
            setPowerData(response.data.power);
            console.log("power:",response.data.power);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching power data:', error);
            setIsLoading(false);
        }
    };
    useEffect(() => {

        
        fetchPowerData();
    }, []);

    useEffect(() => {
        if(powerData){
            console.log("useeffect", powerData/100);
            setP((powerData-53)/(270-53));
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

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { RadialBarChart, RadialBar, Legend, Tooltip} from 'recharts';

// export default function PowerGauge() {
//     const [powerData, setPowerData] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [percentage, setPercentage] = useState(0);

//     const [cPower, setCpower] = useState();
//     const [pPower, setPpower] = useState();

//     useEffect(() => {
//         const fetchPowerData = async () => {
//         try {
//             //const response = await axios.get('http://10.125.121.224:8080/predict/currentTime');
//             const currentPower = 90 /*response.data.cPower;*/
//             const pastPower = 100 /*response.data.pPower;*/
//             setCpower(currentPower);
//             setPpower(pastPower);

//             // 과거 대비 현재 비율 계산
//             // const percentage = (currentPower / pastPower) * 100;
//             // setPercentage(percentage);

//             // setPowerData({
//             // name: 'Power Consumption',
//             // currentPower,
//             // pastPower,
//             // percentage
//             // });

//             setIsLoading(false);
//         } catch (error) {
//             console.error('Error fetching power data:', error);
//             setIsLoading(false);
//         }
//         };

//         fetchPowerData();
//     }, []);

//     if (isLoading) {
//         return (
//         <div className="loader ease-linear rounded-full border-8 border-t-8 h-20 w-20"></div>
//         );
//     }

//     if (!powerData) {
//         return <p>전력소모 데이터가 없습니다.</p>;
//     }

//     const data = [
//         {
//         name: 'Power Consumption',
//         uv: cPower,
//         fill: '#8884d8'
//         },
//         {
//         name: 'Power Consumption',
//         uv: pPower,
//         fill: '#8884d8'
//         }
//     ];

//     return (
//         <div className='flex flex-col items-center bg-white bg-opacity-80 rounded-lg p-5'>
//         <h2>기존 전력 소비량 대비 예측 전력 소비량</h2>
//         <RadialBarChart
//             width={300}
//             height={300}
//             cx={150}
//             cy={150}
//             innerRadius={100}
//             outerRadius={140}
//             barSize={20}
//             data={data}
//             startAngle={180}
//             endAngle={0}
//         >
//             <RadialBar
//             minAngle={15}
//             label={{ position: 'insideStart', fill: '#fff' }}
//             background
//             clockWise
//             dataKey='uv'
//             />
//             <Legend iconSize={10} layout='vertical' verticalAlign='middle' align='right' />
//             <Tooltip />
//         </RadialBarChart>
//         <div className='flex justify-between w-full mt-4'>
//             <div>
//             <p>{powerData.pastPower}</p>
//             <p>Past Power</p>
//             </div>
//             <div>
//             <p style={{ color: '#8884d8' }}>{powerData.currentPower}</p>
//             <p>Current Power</p>
//             </div>
//             <div>
//             <p style={{ color: '#82ca9d' }}>{percentage.toFixed(2)}%</p>
//             <p>Percentage</p>
//             </div>
//         </div>
//         </div>
//     );
// }
