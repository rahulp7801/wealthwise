import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const API_KEY = 'CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble';

const ProfitMargin1 = () => {
  const [netIncome, setNetIncome] = useState(null);
  const [totalRevenue, setTotalRevenue] = useState(null);
  const apiData = useSelector((state) => state.apiData);
  const terms = apiData.trim().split(' ');
  const STOCK_SYMBOL = terms[terms.length - 1];

  // Extract the net income and total revenue values from the JSON data
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.polygon.io/vX/reference/financials?ticker=${STOCK_SYMBOL}&apiKey=${API_KEY}`);
        const data = await response.json();

        if (data.status === 'OK' && data.results && data.results.length > 0) {
          const incomeStatement = data.results[2].financials.income_statement;

          const netIncomeValue = incomeStatement.net_income_loss.value;
          const totalRevenueValue = incomeStatement.revenues.value;

          setNetIncome(netIncomeValue);
          setTotalRevenue(totalRevenueValue);
        } else {
          console.error('Data not found in API response.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const calculateProfitMargin = () => {
    if (netIncome !== null && totalRevenue !== null) {
      const profitMargin = (netIncome / totalRevenue) * 100;
      return profitMargin.toFixed(2);
    }
    return 'N/A';
  };

  return (
    <div>
      <h2>Profit Margin for {apiData} Q1 of 2023</h2>
      {netIncome !== null && totalRevenue !== null ? (
        <p>Profit Margin: {calculateProfitMargin()}%</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfitMargin1;
