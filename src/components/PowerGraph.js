// PowerGraph.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const PowerGraph = () => {
  const [powerData, setPowerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPowerData = async () => {
      try {
        const response = await axios.get('http://10.125.121.224:8080/predict');
        setPowerData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching power data:', error);
        setIsLoading(false);
      }
    };

    fetchPowerData();
  }, []);

  const formatXAxis = (tickItem) => {
    return new Date(tickItem).toLocaleDateString();
  };

  const legendFormatter = (value) => {
    return value === 'power' ? '작년대비 전력소모 비율' : value;
  };

  return (
    <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-full ">
      {isLoading ? (
        <div className='flex justify-center items-center py-4'>
          <div className='loader ease-linear rounded-full border-8 border-t-8 h-20 w-20'></div>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={245}>
              <LineChart data={powerData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" tickFormatter={formatXAxis}/>
                <YAxis>
                  <Label value="Power (%)" angle={-90} position="insideLeft" />
                </YAxis>
                <Tooltip />
                <Legend formatter={legendFormatter} />
                <Line type="monotone" dataKey="power" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
      )}
    </div>
  );
};

export default PowerGraph;
