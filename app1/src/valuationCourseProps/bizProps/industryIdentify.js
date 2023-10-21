// IndustryIdentify.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'assets/scss/stock-select.css'


const IndustryIdentify = () => {
  const [validity, setValidity] = useState("");
  const apiData = useSelector((state) => state.apiData);
  
  useEffect(() => {
    const terms = apiData.trim().split(' ');
    const STOCK_SYMBOL = terms[terms.length - 1]

    async function fetchData() {
      try {
        const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${STOCK_SYMBOL}?apikey=01e4bab5bf0732e8f24a4de466b692bb`);
        const data = await response.json();
        setValidity(data[0].industry);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  

  return (
    <div className='industry-title'>
          {validity !== "" ? (
            <p>{validity} Industry Analysis</p>
          ) : null}
        </div>
  );
};

export default IndustryIdentify;
