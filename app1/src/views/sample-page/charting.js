import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MSFT_Chart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/get-data', {
          params: {
            ticker: 'MSFT'
          }
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      <h1>MSFT</h1>
      <div style={{ width: '1000px', height: '300px' }}>
        <LineChart
          width={1000}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 300,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" >
            <text x={300} y={30} textAnchor="middle" fontSize={18} fontWeight="bold">
                MSFT Stock Price
            </text>
          </CartesianGrid>
          <XAxis dataKey="Price ($)" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Close" stroke="#8884d8" dot={false} />
        </LineChart>
      </div>
    </div>
  );
};

export default MSFT_Chart;


