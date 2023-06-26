import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import Reddash from 'views/sample-page/test.js'
// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

// ==============================|| APP ||============================== //



const App = () => {
  const customization = useSelector((state) => state.customization);
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
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
          <Reddash />
          <div className='App'>
            <h1>chart</h1>
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
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Close" stroke="#8884d8" dot={false}/>
               </LineChart>
            </div>
           </div>
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
