import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'assets/scss/stock-select.css'
import { Spin, Space, Card, Skeleton } from 'antd'; // Import Skeleton component
import { LoadingOutlined } from '@ant-design/icons';

const apiKey = "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";

const ValProposition = () => {
  const [validity, setValidity] = useState("");
  const apiData = useSelector((state) => state.apiData);
  const [loading, setLoading] = useState(true);

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
          "content": "Give a 1-2 sentence description of the company's value proposition",
        },
        {
          "role": "user",
          "content": apiData,
        },
      ],
      "temperature": 0,
      "max_tokens": 1024,
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
      setLoading(false);

    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);

    }
  }

  const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card
        title="Company Value Proposition"
        bordered={false}
        style={{
          width: 450,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          border: '1px solid',
          borderRadius: '15px'
        }}
        headStyle={{
          backgroundColor: '#20243c',
          color: '#fff',
          fontSize: '25px',
          fontWeight: '600',
          textAlign: 'center',
        }}
        bodyStyle={{
          padding: '20px',
          display: loading ? 'flex' : 'block',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#181c34',
          color: 'white'

        }}
        loading={loading}
      >
        {loading ? <Skeleton active /> : validity}
      </Card>
    </div>
  );
};

export default ValProposition;
