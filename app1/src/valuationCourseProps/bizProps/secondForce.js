// SecondForce.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'assets/scss/stock-select.css'
import { Spin, Space } from 'antd';

const apiKey = "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";

const SecondForce = () => {
  const [validity, setValidity] = useState("");
  const apiData = useSelector((state) => state.apiData);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (apiData) {
      callOpenAIAPI(apiData); // Pass the apiData to the API call function
    }
  }, [apiData]);

  async function callOpenAIAPI(apiData) {
    // Construct your APIBody using apiData from the Redux store
    const APIBody = {
      "model": "gpt-4",
      "messages": [
        {
          "role": "system",
          "content": "Given a company, write a concise 3 sentence analysis on the the bargaining power of buyers in the company's industry.",
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
      console.log(data.choices[0].message.content);
      setValidity(data.choices[0].message.content);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false)

    }
  }

  return (
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
        
  );
};

export default SecondForce;
