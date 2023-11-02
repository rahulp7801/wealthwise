import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'assets/scss/stock-select.css';
import { Spin, Space } from 'antd';
const apiKey = "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";

const EVtoEBITDA = () => {
  // const [stock1, setStock1] = useState("");
  // const [stock2, setStock2] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state
  const [enterpriseValueMultiple1, setEnterpriseValueMultiple1] = useState("");
  const [enterpriseValueMultiple2, setEnterpriseValueMultiple2] = useState("");
  const [enterpriseValueMultiple3, setEnterpriseValueMultiple3] = useState("");
  const [validity, setValidity] = useState("");
  const stock1 = useSelector((state) => state.stock1);
  const stock2 = useSelector((state) => state.stock2);

  // Set stock1 and stock2 from Redux store to component state
  // useEffect(() => {
  //   setStock1(reduxStock1);
  //   setStock2(reduxStock2);
  // }, [reduxStock1, reduxStock2]);
  

  const apiData = useSelector((state) => state.apiData);
  

    useEffect(() => {
        async function fetchData() {
          try {
            console.log(stock1)
            const response = await fetch(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${stock1}?limit=40&apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();   
            console.log(data)
            setEnterpriseValueMultiple1(data[0].enterpriseValueOverEBITDATTM);
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
            const response = await fetch(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${stock2}?limit=40&apikey=01e4bab5bf0732e8f24a4de466b692bb`);
            const data = await response.json();
            setEnterpriseValueMultiple2(data[0].enterpriseValueOverEBITDATTM);
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
            setEnterpriseValueMultiple3(data[0].enterpriseValueOverEBITDATTM);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);
      useEffect(() => {
        if (apiData && enterpriseValueMultiple3 && enterpriseValueMultiple1 && enterpriseValueMultiple2 !== null) {
          callOpenAIAPI2(apiData, enterpriseValueMultiple3, stock1, stock2, enterpriseValueMultiple1, enterpriseValueMultiple2);
        }
      }, [apiData, enterpriseValueMultiple3, stock1, stock2, enterpriseValueMultiple1, enterpriseValueMultiple2]);
      async function callOpenAIAPI2(apiData, enterpriseValueMultiple3, stock1, stock2, enterpriseValueMultiple1, enterpriseValueMultiple2) {



        const APIBody = {
          "model": "gpt-4",
          "messages": [
            {
              "role": "system",
              "content": `Write an analysis on the inputed company's EV/EBITDA which is ${enterpriseValueMultiple3}. Compare its EV/EBITDA to these two comapnies ${stock1}:${enterpriseValueMultiple1} and ${stock2}:${enterpriseValueMultiple2}. Do not explain what EV/EBITDA is. Response should be 6 sentences`,
            },
            {
              "role": "user",
              "content": apiData,
            },
          ],
          "temperature": 1,
          "max_tokens": 200,
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
            <h1>Enterprise Value over EBITDA Relative Analysis</h1>
            <div>
              {apiData} EV/EBITDA: {parseFloat(enterpriseValueMultiple3).toFixed(2)}
            </div>
            <div>
              {stock1} EV/EBITDA: {parseFloat(enterpriseValueMultiple1).toFixed(2)}
            </div>
            <div>
              {stock2} EV/EBITDA: {parseFloat(enterpriseValueMultiple2).toFixed(2)}
            </div>
            {loading ? (
              <div style={{ paddingTop: '20px', height: '100%' }}>
                <Space>
                  <Spin size="large" className="custom-spin">
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
        );
      };
      
      export default EVtoEBITDA;