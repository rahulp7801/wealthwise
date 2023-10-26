import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'assets/scss/stock-select.css'
// import EnterpriseValueMultiples from 'valuationCourseProps/enterpriseValueMultiples';
import { Spin, Space } from 'antd';

const apiKey = "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";

const PriceFreeCashflow = () => {
  // const [stock1, setStock1] = useState("");
  // const [stock2, setStock2] = useState("");
  const [pricefcfratio1, setPricefcfratio1] = useState("");
  const [pricefcfratio2, setPricefcfratio2] = useState("");
  const [pricefcfratio3, setPricefcfratio3] = useState("");
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
            const response = await fetch(`https://financialmodelingprep.com/api/v3/ratios-ttm/${stock1}?apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();   
            console.log(data)
            setPricefcfratio1(data[0].priceToFreeCashFlowsRatioTTM);
            console.log(enterpriseValueMultiple1)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, [stock1]);
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://financialmodelingprep.com/api/v3/ratios-ttm/${stock2}?apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();
            setPricefcfratio2(data[0].priceToFreeCashFlowsRatioTTM);
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
            const response = await fetch(`https://financialmodelingprep.com/api/v3/ratios-ttm/${STOCK_SYMBOL}?apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();
            setPricefcfratio3(data[0].priceToFreeCashFlowsRatioTTM);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);
      useEffect(() => {
        if (apiData && pricefcfratio3 && pricefcfratio1 && pricefcfratio2 !== null) {
          callOpenAIAPI2(apiData, pricefcfratio3, stock1, stock2, pricefcfratio1, pricefcfratio2);
        }
      }, [apiData, pricefcfratio3, stock1, stock2, pricefcfratio1, pricefcfratio2]);
      async function callOpenAIAPI2(apiData, pricefcfratio3, stock1, stock2, pricefcfratio1, pricefcfratio2) {



        const APIBody = {
          "model": "gpt-4",
          "messages": [
            {
              "role": "system",
              "content": `Write an analysis on the inputed company's Price to Free Cashflow ratio which is ${pricefcfratio3}. Compare its EV/EBITDA to these two comapnies ${stock1}:${pricefcfratio1} and ${stock2}:${pricefcfratio2}. Do not explain what Price to Free Cashflow ratio is. Response should be 6 sentences`,
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
            setLoading(false);

          }
        }
    

  return (
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <h1>Price over Free Cashflow Relative Analysis</h1>
            <div>
              {apiData} Price/Cashflow:{pricefcfratio3}
            </div>
            <div>
              {stock1} Price/Cashflow:{pricefcfratio1}
            </div>
            <div>
              {stock2} Price/Cashflow:{pricefcfratio2}
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

export default PriceFreeCashflow;
