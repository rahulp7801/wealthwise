import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'assets/scss/stock-select.css'
// import EnterpriseValueMultiples from 'valuationCourseProps/enterpriseValueMultiples';

const apiKey = "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";

const EVtoEBITDA = () => {
  const [stock1, setStock1] = useState("");
  const [stock2, setStock2] = useState("");
  const [enterpriseValueMultiple1, setEnterpriseValueMultiple1] = useState("");
  const [enterpriseValueMultiple2, setEnterpriseValueMultiple2] = useState("");
  const [enterpriseValueMultiple3, setEnterpriseValueMultiple3] = useState("");
  const [validity, setValidity]  = useState("");


  const apiData = useSelector((state) => state.apiData);
  useEffect(() => {
    if (apiData) {
      callOpenAIAPI(apiData);
       // Pass the apiData to the API call function
    }
  }, [apiData]);


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
            const response = await fetch(`https://financialmodelingprep.com/api/v3/ratios-ttm/${stock1}?apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();   
            setEnterpriseValueMultiple1(data[0].enterpriseValueMultipleTTM);

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/ratios-ttm/${stock2}?apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();
            setEnterpriseValueMultiple2(data[0].enterpriseValueMultipleTTM);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);
      useEffect(() => {
        const terms = apiData.trim().split(' ');
        const STOCK_SYMBOL = terms[terms.length - 1]

        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/ratios-ttm/${STOCK_SYMBOL}?apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();
            setEnterpriseValueMultiple3(data[0].enterpriseValueMultipleTTM);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);
      useEffect(() => {
        if (apiData && enterpriseValueMultiple3 && enterpriseValueMultiple1 !== null) {
          callOpenAIAPI2(apiData, enterpriseValueMultiple3, stock1, stock2, enterpriseValueMultiple1, enterpriseValueMultiple2);
        }
      }, [apiData, enterpriseValueMultiple3, stock1, stock2, enterpriseValueMultiple1]);
      async function callOpenAIAPI2(apiData, enterpriseValueMultiple3, stock1, stock2, enterpriseValueMultiple1, enterpriseValueMultiple2) {



        const APIBody = {
          "model": "gpt-4",
          "messages": [
            {
              "role": "system",
              "content": `Write an analysis on the inputed company's EV/EBITDA ${enterpriseValueMultiple3}. Compare its EV/EBITDA to these two comapnies ${stock1}:${enterpriseValueMultiple1} and ${stock2}:${enterpriseValueMultiple2}`,
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
        {apiData}:{enterpriseValueMultiple1}
        {stock1}:{enterpriseValueMultiple2}
        {stock2}:{enterpriseValueMultiple3}
      </div>

        
      <div>
        {validity}
      </div>
          
    </div>
  );
};

export default EVtoEBITDA;
