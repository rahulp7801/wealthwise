import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const API_KEY = 'CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble';

const PtoCashflow = () => {
  const [stock1, setStock1] = useState("");
  const [stock2, setStock2] = useState("");
  const [price1, setPrice1] = useState(null);
  const [calculatedRatio1, setCalculatedRatio1] = useState('N/A'); 
  const [calculatedRatio2, setCalculatedRatio2] = useState('N/A'); 
  const [calculatedRatio3, setCalculatedRatio3] = useState('N/A'); 
  const [validity, setValidity]  = useState("");
  const [cashflow1, setCashflow1] = useState(null);
  const [shares1, setShares1] = useState(null);
  const [price2, setPrice2] = useState(null);
  const [cashflow2, setCashflow2] = useState(null);
  const [shares2, setShares2] = useState(null);
  const [price3, setPrice3] = useState(null);
  const [cashflow3, setCashflow3] = useState(null);
  const [shares3, setShares3] = useState(null);
  const apiData = useSelector((state) => state.apiData);
  const terms = apiData.trim().split(' ');
  const STOCK_SYMBOL = terms[terms.length - 1];
  const apiKey = "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";

  useEffect(() => {
    if (apiData) {
      callOpenAIAPI(apiData);
       // Pass the apiData to the API call function
    }
  }, [apiData]);

//Determines 2 industry stocks for comparison
  async function callOpenAIAPI(apiData) {
    // Construct your APIBody using apiData from the Redux store
    const APIBody = {
      "model": "gpt-4",
      "messages": [
        {
          "role": "system",
          "content": "Given a stock, find two other stocks in the same specific sector as the stock. Once found output ONLY their stock ticker.",
        },
        {
          "role": "user",
          "content": apiData,
        },
      ],
      "temperature": 0,
      "max_tokens": 100,
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiKey,
          },
          body: JSON.stringify(APIBody),
        });
    
        const data = await response.json();
        const stocksList = data.choices[0].message.content; // Example: "GM, F"
        const stocksArray = stocksList.split(/[,\s]+/);
        setStock1(stocksArray[0]);
        setStock2(stocksArray[1]);

    } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
//User's Stock
  useEffect(() => {
    async function fetchCashFlow1() {
      try {
        const response = await fetch(`https://api.polygon.io/vX/reference/financials?ticker=${STOCK_SYMBOL}&apiKey=${API_KEY}`);
        const data = await response.json();
        if (data.status === 'OK' && data.results && data.results.length > 0) {
          const cashValue = data.results[2].financials.cash_flow_statement.net_cash_flow_from_operating_activities.value;
          setCashflow1(cashValue);
        } else {
          console.error('Revenues data not found in API response.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchCashFlow1();
  }, []);
  useEffect(() => {
    async function fetchPrice1() {
      try {
        const response = await fetch(`https://api.polygon.io/v1/open-close/${STOCK_SYMBOL}/2023-08-11?adjusted=false&apiKey=${API_KEY}`);
        const data = await response.json();
        if (data.status === 'OK') {
          const priceValue = data.close
          setPrice1(priceValue);
        } else {
          console.error('Revenues data not found in API response.');
        }
      } catch (error) {
            console.error('Error fetching data:', error);
      }
    }

    fetchPrice1();
  }, []);
  useEffect(() => {
    async function fetchShares1() {
      try {
        const response = await fetch(`https://api.polygon.io/v3/reference/tickers/${STOCK_SYMBOL}?apiKey=${API_KEY}`);
        const data = await response.json();
        if (data.status === 'OK') {
          const shareNumber = data.results.weighted_shares_outstanding
          setShares1(shareNumber);
        } else {
          console.error('Revenues data not found in API response.');
        }
      } catch (error) {
            console.error('Error fetching data:', error);
      }
    }

    fetchShares1();
  }, []);
  useEffect(() => {
    const calculateRatio1 = () => {
      if (cashflow1 !== null && shares1 !== null) {
        const cashflowPerShare1 = cashflow1 / shares1;
        if (price1 !== null) {
          const pToCashflowRatio1 = price1 / cashflowPerShare1;
          return pToCashflowRatio1.toFixed(2);
        }
      }
      return 'N/A';
    };

    const ratio = calculateRatio1();
    setCalculatedRatio1(ratio);
  }, [cashflow1, shares1, price1]);
  //1st Industury Stock
  useEffect(() => {
    async function fetchCashFlow2() {
      try {
        const response = await fetch(`https://api.polygon.io/vX/reference/financials?ticker=${stock1}&apiKey=${API_KEY}`);
        const data = await response.json();
        if (data.status === 'OK' && data.results && data.results.length > 0) {
          const cashValue = data.results[2].financials.cash_flow_statement.net_cash_flow_from_operating_activities.value;
          setCashflow2(cashValue);
        } else {
          console.error('Revenues data not found in API response.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchCashFlow2();
  }, [stock1]);
  useEffect(() => {
    async function fetchPrice2() {
      try {
        const response = await fetch(`https://api.polygon.io/v1/open-close/${stock1}/2023-08-11?adjusted=false&apiKey=${API_KEY}`);
        const data = await response.json();
        if (data.status === 'OK') {
          const priceValue = data.close
          setPrice2(priceValue);
        } else {
          console.error('Revenues data not found in API response.');
        }
      } catch (error) {
            console.error('Error fetching data:', error);
      }
    }

    fetchPrice2();
  }, [stock1]);
  useEffect(() => {
    async function fetchShares2() {
      try {
        const response = await fetch(`https://api.polygon.io/v3/reference/tickers/${stock1}?apiKey=${API_KEY}`);
        const data = await response.json();
        if (data.status === 'OK') {
          const shareNumber = data.results.weighted_shares_outstanding
          setShares2(shareNumber);
        } else {
          console.error('Revenues data not found in API response.');
        }
      } catch (error) {
            console.error('Error fetching data:', error);
      }
    }

    fetchShares2();
  }, [stock1]);
  useEffect(() => {
    const calculateRatio2 = () => {
      if (cashflow2 !== null && shares2 !== null) {
        const cashflowPerShare2 = cashflow2 / shares2;
        if (price2 !== null) {
          const pToCashflowRatio2 = price2 / cashflowPerShare2;
          return pToCashflowRatio2.toFixed(2);
        }
      }
      return 'N/A';
    };

    const ratio = calculateRatio2();
    setCalculatedRatio2(ratio);
  }, [cashflow2, shares2, price2]);
  //2nd Industury Stock
  useEffect(() => {
    async function fetchPrice3() {
      try {
        const response = await fetch(`https://api.polygon.io/v1/open-close/${stock2}/2023-08-11?adjusted=false&apiKey=${API_KEY}`);
        const data = await response.json();
        if (data.status === 'OK') {
          const priceValue = data.close
          setPrice3(priceValue);
        } else {
          console.error('Revenues data not found in API response.');
        }
      } catch (error) {
            console.error('Error fetching data:', error);
      }
    }

    fetchPrice3();
  }, [stock2]);
  useEffect(() => {
    async function fetchShares3() {
      try {
        const response = await fetch(`https://api.polygon.io/v3/reference/tickers/${stock2}?apiKey=${API_KEY}`);
        const data = await response.json();
        if (data.status === 'OK') {
          const shareNumber = data.results.weighted_shares_outstanding
          setShares3(shareNumber);
        } else {
          console.error('Revenues data not found in API response.');
        }
      } catch (error) {
            console.error('Error fetching data:', error);
      }
    }

    fetchShares3();
  }, [stock2]);
  useEffect(() => {
    async function fetchCashFlow3() {
      try {
        const response = await fetch(`https://api.polygon.io/vX/reference/financials?ticker=${stock2}&apiKey=${API_KEY}`);
        const data = await response.json();
        if (data.status === 'OK' && data.results && data.results.length > 0) {
          const cashValue = data.results[2].financials.cash_flow_statement.net_cash_flow_from_operating_activities.value;
          setCashflow3(cashValue);
        } else {
          console.error('Revenues data not found in API response.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchCashFlow3();
  }, [stock2]);
  useEffect(() => {
    const calculateRatio3 = () => {
      if (cashflow3 !== null && shares3 !== null) {
        const cashflowPerShare3 = cashflow3 / shares3;
        if (price3 !== null) {
          const pToCashflowRatio3 = price3 / cashflowPerShare3;
          return pToCashflowRatio3.toFixed(2);
        }
      }
      return 'N/A';
    };

    const ratio = calculateRatio3();
    setCalculatedRatio3(ratio);
  }, [cashflow3, shares3, price3]);
  useEffect(() => {
        if (apiData && calculatedRatio1 && calculatedRatio2 !== null) {
          callOpenAIAPI2(apiData, calculatedRatio1, stock1, stock2, calculatedRatio2, calculatedRatio3);
        }
      }, [apiData, calculatedRatio1, stock1, stock2, calculatedRatio2, calculatedRatio3]);
  async function callOpenAIAPI2(apiData, calculatedRatio3, stock1, stock2, calculatedRatio1, calculatedRatio2) {
    const APIBody = {
      "model": "gpt-4",
      "messages": [
        {
          "role": "system",
          "content": `Write an analysis on the inputed company's ${apiData} Price/Free Cashflow Multiple ${calculatedRatio1}. Compare its Price/Free Cashflow Multiple to these two comapnies ${stock1}:${calculatedRatio2} and ${stock2}:${calculatedRatio3}`,
        },
        {
          "role": "user",
          "content": apiData,
        },
      ],
      "temperature": 1,
      "max_tokens": 300,
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiKey,
          },
          body: JSON.stringify(APIBody),
        });
    
        const data = await response.json();
        setValidity(data.choices[0].message.content) 

        

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

  return (
    <div>
        <div>
            {apiData} Price/Cashflow {calculatedRatio1}
        </div>
        <div>
            {stock1} Price/Cashflow {calculatedRatio2}
        </div>
        <div>
            {stock2} Price/Cashflow {calculatedRatio3}
        </div>
        <div>{validity}</div>
    </div>
  );
};

export default PtoCashflow;
