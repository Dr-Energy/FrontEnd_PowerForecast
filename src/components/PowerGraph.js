// PowerGraph.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const PowerGraph = ({ powerData,title }) => {

  const formatXAxis = (tickItem) => {
    return new Date(tickItem).toLocaleDateString();
  };

  // const legendFormatter = (value) => {
  //   return value === 'power' ? {title} : value;
  // };
  const legendFormatter = () => {
    return title;
  };


  return (
    <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-full ">
        <ResponsiveContainer height={245}>
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
    </div>
  );
};

export default PowerGraph;
