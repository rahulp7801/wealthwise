import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'assets/scss/stock-select.css'
// import EnterpriseValueMultiples from 'valuationCourseProps/enterpriseValueMultiples';

const apiKey = "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";

const EVtoSales = () => {
  const [stock1, setStock1] = useState("");
  const [stock2, setStock2] = useState("");
  const [enterpriseValueSales1, setEnterpriseValueSales1] = useState("");
  const [enterpriseValueSales2, setEnterpriseValueSales2] = useState("");
  const [enterpriseValueSales3, setEnterpriseValueSales3] = useState("");
  const [validity, setValidity]  = useState("");


  const apiData = useSelector((state) => state.apiData);
  useEffect(() => {
    if (apiData) {
      callOpenAIAPI(apiData);
    }
  }, [apiData]);


  async function callOpenAIAPI(apiData) {
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
        const stocksList = data.choices[0].message.content; 

        const [firstStock, secondStock] = stocksList.split(',').map(stock => stock.trim());
        setStock1(firstStock);
        setStock2(secondStock);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${stock1}?limit=40&apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();    
            setEnterpriseValueSales1(data[0].evToSalesTTM);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, [enterpriseValueSales1]);
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${stock2}?limit=40&apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();
            setEnterpriseValueSales2(data[0].evToSalesTTM);
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
            const response = await fetch(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${STOCK_SYMBOL}?limit=40&apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();
            setEnterpriseValueSales3(data[0].evToSalesTTM);

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, [enterpriseValueSales3]);
      useEffect(() => {
        if (apiData && enterpriseValueSales3 && enterpriseValueSales1 !== null) {
          callOpenAIAPI2(apiData, enterpriseValueSales3, stock1, stock2, enterpriseValueSales1, enterpriseValueSales2);
        }
      }, [apiData, enterpriseValueSales3, stock1, stock2, enterpriseValueSales1]);
      async function callOpenAIAPI2(apiData, enterpriseValueSales3, stock1, stock2, enterpriseValueSales1, enterpriseValueSales2) {
        const APIBody = {
          "model": "gpt-4",
          "messages": [
            {
              "role": "system",
              "content": `Write an analysis on the inputed company's EV/Sales ${enterpriseValueSales3}. Compare its EV/EBITDA to these two comapnies ${stock1}:${enterpriseValueSales1} and ${stock2}:${enterpriseValueSales2}`,
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
        {validity}
    </div>
  );
};

export default EVtoSales;
