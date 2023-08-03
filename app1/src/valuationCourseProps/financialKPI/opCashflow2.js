import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const API_KEY = 'P0JY4A01Y8RUNKGI';

const OperatingCashflow2 = () => {
  const [operatingCashflow, setOperatingCashflow] = useState(null);
  const apiData = useSelector((state) => state.apiData);
  const API_URL = `https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${apiData}&apikey=${API_KEY}`;

  useEffect(() => {
    fetchCashFlow();
  }, []);

  const fetchCashFlow = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      // Check if the API response contains the required data
      if (data && data.annualReports && data.annualReports.length > 0) {
        const { operatingCashflow } = data.annualReports[1];
        setOperatingCashflow(operatingCashflow);
      } else {
        // Handle the case when the data is not available
        console.error('Cash Flow data not available.');
      }
    } catch (error) {
      console.error('Error fetching Cash Flow:', error);
    }
  };

  return (
    <div>
      {operatingCashflow !== null ? (
        <p>{apiData} Operating Cashflow 2021: ${operatingCashflow}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OperatingCashflow2;
