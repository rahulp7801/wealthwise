import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'assets/scss/stock-select.css'
// import EnterpriseValueSaless from 'valuationCourseProps/enterpriseValueMultiples';
import { Spin, Space } from 'antd';

const apiKey = "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";

const EVtoSales = () => {
  // const [stock1, setStock1] = useState("");
  // const [stock2, setStock2] = useState("");
  const [enterpriseValueSales1, setEnterpriseValueSales1] = useState("");
  const [enterpriseValueSales2, setEnterpriseValueSales2] = useState("");
  const [enterpriseValueSales3, setEnterpriseValueSales3] = useState("");
  const [validity, setValidity]  = useState("");
  const stock1 = useSelector((state) => state.stock1);
  const stock2 = useSelector((state) => state.stock2);
  const [loading, setLoading] = useState(true); // Add loading state
  const apiData = useSelector((state) => state.apiData);
  
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
  //     "temperature": 1,
  //     "max_tokens": 250,
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
            const response = await fetch(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${stock1}?apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();   
            console.log(data)
            setEnterpriseValueSales1(data[0].evToSalesTTM);
            console.log(enterpriseValueSales1)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, [stock1]);
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${stock2}?apikey=01e4bab5bf0732e8f24a4de466b692bb`);
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
            const response = await fetch(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${STOCK_SYMBOL}?apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();
            setEnterpriseValueSales3(data[0].evToSalesTTM);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);
      useEffect(() => {
        if (apiData && enterpriseValueSales3 && enterpriseValueSales1 && enterpriseValueSales2 !== null) {
          callOpenAIAPI2(apiData, enterpriseValueSales3, stock1, stock2, enterpriseValueSales1, enterpriseValueSales2);
        }
      }, [apiData, enterpriseValueSales3, stock1, stock2, enterpriseValueSales1, enterpriseValueSales2]);
      async function callOpenAIAPI2(apiData, enterpriseValueSales3, stock1, stock2, enterpriseValueSales1, enterpriseValueSales2) {



        const APIBody = {
          "model": "gpt-4",
          "messages": [
            {
              "role": "system",
              "content": `Write an analysis on the inputed company's EV/Sales which is ${enterpriseValueSales3}. Compare its EV/Sales to these two comapnies ${stock1}:${enterpriseValueSales1} and ${stock2}:${enterpriseValueSales2}. Do not explain what EV/Sales is. Response should be 6 sentences.`,
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
            setLoading(false);

            
    
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
    

  return (
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <h1>Enterprise Value over Sales Relative Analysis</h1>
            <div>
              {apiData} EV/Sales: {parseFloat(enterpriseValueSales3).toFixed(2)}
            </div>
            <div>
              {stock1} EV/Sales: {parseFloat(enterpriseValueSales1).toFixed(2)}
            </div>
            <div>
              {stock2} EV/Sales: {parseFloat(enterpriseValueSales2).toFixed(2)}
            </div>
            <div>
              {loading ? ( // Render Spin when loading is true
                <div style={{ paddingTop: '20px', height: '100%' }}>
                  <Space>
                    <Spin  size="large" className="custom-spin" >
                      <div className="content" />
                    </Spin>
                  </Space>
                </div>
                ) : (
                  <div>
                    {validity}
                  </div>
                )}
            </div>
              
            </div>
            );
          };

export default EVtoSales;
