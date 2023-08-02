import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const API_KEY = 'P0JY4A01Y8RUNKGI';

const TotalRevenueComponent = () => {
  const [totalRevenue, setTotalRevenue] = useState(null);
  const apiData = useSelector((state) => state.apiData);
  const API_URL = `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${apiData}&apikey=${API_KEY}`;

  useEffect(() => {
    fetchTotalRevenue();
  }, []);

  const fetchTotalRevenue = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      // Check if the API response contains the required data
      if (data && data.annualReports && data.annualReports.length > 0) {
        const { totalRevenue } = data.annualReports[1];
        setTotalRevenue(totalRevenue);
      } else {
        // Handle the case when the data is not available
        console.error('Total revenue data not available.');
      }
    } catch (error) {
      console.error('Error fetching total revenue:', error);
    }
  };

  return (
    <div>
      {totalRevenue !== null ? (
        <p>{apiData} Total Revenue 2021: ${totalRevenue}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TotalRevenueComponent;
