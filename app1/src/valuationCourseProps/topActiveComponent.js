import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow   } from '@mui/material';

const TopActive = () => {
  const [mostActiveStocks, setMostActiveStocks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=AMXAOB5BNQ7TZK65'
        );
        setMostActiveStocks(response.data.most_actively_traded.slice(0,5));
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <CardContent>
        <Typography variant="h3" style={{ textAlign: 'center' }}>TOP ACTIVE STOCKS</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ticker</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mostActiveStocks.map((stock, index) => (
                <TableRow key={index}>
                  <TableCell>{stock.ticker}</TableCell>
                  <TableCell>{stock.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </div>
  );
};

export default TopActive;
