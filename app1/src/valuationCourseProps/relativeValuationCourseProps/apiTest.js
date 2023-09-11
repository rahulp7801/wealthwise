import React, { useState, useEffect } from 'react';
import 'assets/scss/stock-select.css'

const Test = () => {
  const url = "https://discountingcashflows.com/api/income-statement/quarterly/AAPL/";
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status code: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []); 
  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Test;
