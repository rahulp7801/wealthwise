import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'assets/scss/stock-select.css'
// import EnterpriseValueMultiples from 'valuationCourseProps/enterpriseValueMultiples';

const apiKey = "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";

const PEGrowth = () => {
  // const [stock1, setStock1] = useState("");
  // const [stock2, setStock2] = useState("");
  const [peGrowth1, setPeGrowth1] = useState("");
  const [peGrowth2, setPeGrowth2] = useState("");
  const [peGrowth3, setPeGrowth3] = useState("");
  const [validity, setValidity]  = useState("");
  const apiData = useSelector((state) => state.apiData);
  const stock1 = useSelector((state) => state.stock1);
  const stock2 = useSelector((state) => state.stock2);

  // useEffect(() => {
  //   if (apiData) {
  //     callOpenAIAPI(apiData);
  //      // Pass the apiData to the API call function
  //   }
  // }, [apiData]);


  // async function callOpenAIAPI(apiData) {
  //   // Construct your APIBody using apiData from the Redux store
  //   const APIBody = {
  //     "model": "gpt-4",
  //     "messages": [
  //       {
  //         "role": "system",
  //         "content": "Given a stock, find two other stocks in the same specific sector as the stock. Once found output ONLY their stock ticker.",
  //       },
  //       {
  //         "role": "user",
  //         "content": apiData,
  //       },
  //     ],
  //     "temperature": 0,
  //     "max_tokens": 100,
  //   };

  //   try {
  //       const response = await fetch("https://api.openai.com/v1/chat/completions", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Authorization": "Bearer " + apiKey,
  //         },
  //         body: JSON.stringify(APIBody),
  //       });
    
  //       const data = await response.json();
  //       const stocksList = data.choices[0].message.content;

  //       const [firstStock, secondStock] = stocksList.split(/,|\s+/).map(stock => stock.trim());

  //       setStock1(firstStock);
  //       setStock2(secondStock);
  //       console.log(stock1)
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/ratios/${stock1}?apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();   
            console.log(data)
            setPeGrowth1(data[0].priceEarningsToGrowthRatio);
            console.log(peGrowth1)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, [stock1]);
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/ratios/${stock2}?apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();
            setPeGrowth2(data[0].priceEarningsToGrowthRatio);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, [stock2]);
      useEffect(() => {
        const terms = apiData.trim().split(' ');
        const STOCK_SYMBOL = terms[terms.length - 1]

        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/ratios/${STOCK_SYMBOL}?apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();
            setPeGrowth3(data[0].priceEarningsToGrowthRatio);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);
      useEffect(() => {
        if (apiData && peGrowth3 && peGrowth1 && peGrowth2 !== null) {
          callOpenAIAPI2(apiData, peGrowth3, stock1, stock2, peGrowth1, peGrowth2);
        }
      }, [apiData, peGrowth3, stock1, stock2, peGrowth1, peGrowth2]);
      async function callOpenAIAPI2(apiData, peGrowth3, stock1, stock2, peGrowth1, peGrowth2) {



        const APIBody = {
          "model": "gpt-4",
          "messages": [
            {
              "role": "system",
              "content": `Write an analysis on the inputed company's Price Earnings to Growth Ratio which is ${peGrowth3}. Compare its Price Earnings to Growth Ratio to these two comapnies ${stock1}:${peGrowth1} and ${stock2}:${peGrowth2}. Do not explain what Price Earnings to Growth Ratio is. Response should be 6 sentences`,
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
    
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <h1>Price Earnings over Growth Relative Analysis</h1>
      <div>
        {apiData} PE/Growth:{peGrowth3}
      </div>
      <div>
        {stock1} PE/Growth:{peGrowth1}
      </div>
      <div>
        {stock2} PE/Growth:{peGrowth2}
      </div>
      <div>
        {validity}
      </div>
  </div>
  );
};

export default PEGrowth;
