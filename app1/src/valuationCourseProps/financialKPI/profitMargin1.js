import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const API_KEY = 'P0JY4A01Y8RUNKGI';


const ProfitMarginComponent1 = () => {
  const [profitMargin, setProfitMargin] = useState(null);
  const apiData = useSelector((state) => state.apiData);

  const API_URL = `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${apiData}&apikey=${API_KEY}`;
  useEffect(() => {
    fetchFinancialData();
  }, []);

  const fetchFinancialData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      // Check if the API response contains the required data
      if (data && data.annualReports && data.annualReports.length > 0) {
        const { netIncome, totalRevenue } = data.annualReports[0];

        // Calculate profit margin (net income / total revenue * 100)
        const profitMarginValue = (parseFloat(netIncome) / parseFloat(totalRevenue)) * 100;
        setProfitMargin(profitMarginValue);
      } else {
        // Handle the case when the data is not available
        console.error('Financial data not available.');
      }
    } catch (error) {
      console.error('Error fetching financial data:', error);
    }
  };

  return (
    <div>
      {profitMargin !== null ? (
        <p>Profit Margin 2022: {profitMargin.toFixed(2)}%</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfitMarginComponent1;
