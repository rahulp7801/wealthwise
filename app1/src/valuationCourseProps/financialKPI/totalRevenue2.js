import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const API_KEY = 'CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble';

const TotalRevComponent2 = () => {
  const [totalRevenue, setTotalRevenue] = useState(null);
  const apiData = useSelector((state) => state.apiData);
  const terms = apiData.trim().split(' ');
  const STOCK_SYMBOL = terms[terms.length - 1];

  useEffect(() => {
    async function fetchTotalRevenue() {
      try {
        const response = await fetch(`https://api.polygon.io/vX/reference/financials?ticker=${STOCK_SYMBOL}&apiKey=${API_KEY}`);
        const data = await response.json();
        console.log(data)
        if (data.status === 'OK' && data.results && data.results.length > 9) {
          const revenueValue = data.results[1].financials.income_statement.revenues.value;
          setTotalRevenue(revenueValue);
        } else {
          console.error('Revenues data not found in API response.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchTotalRevenue();
  }, []);

  return (
    <div>
      <h2>Total Revenue for {apiData} for Quarter 2 of 2023</h2>
      {totalRevenue !== null ? (
        <p>Total Revenue: ${totalRevenue.toFixed(2)}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TotalRevComponent2;
