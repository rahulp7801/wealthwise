import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import {  Col, Row, Statistic, ConfigProvider } from 'antd';


const API_KEY = 'CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble';

const TotalRevComponent1 = () => {
  const [totalRevenue1, setTotalRevenue1] = useState(null);
  const [totalRevenue2, setTotalRevenue2] = useState(null);
  const [percentChange, setPercentChange] = useState(null);

  const apiData = useSelector((state) => state.apiData);
  const terms = apiData.trim().split(' ');
  const STOCK_SYMBOL = terms[terms.length - 1];

  useEffect(() => {
    async function fetchTotalRevenue() {
      try {
        const response = await fetch(
          `https://api.polygon.io/vX/reference/financials?ticker=${STOCK_SYMBOL}&apiKey=${API_KEY}`
        );
        const data = await response.json();

        if (data.status === 'OK' && data.results && data.results.length > 1) {
          const q1Revenue = data.results[2].financials.income_statement.revenues.value;
          const q2Revenue = data.results[1].financials.income_statement.revenues.value;

          setTotalRevenue1(q1Revenue);
          setTotalRevenue2(q2Revenue);

          // Calculate percent change
          const change = q2Revenue - q1Revenue;
          const percentChange = (change / q1Revenue) * 100;
          setPercentChange(percentChange);
        } else {
          console.error('Revenues data not found in API response.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchTotalRevenue();
  }, []);

  return (
    <div>
          <h2>Total Revenue for {apiData} for Quarter 1 of 2023</h2>
          {totalRevenue1 !== null ? (
            <p>Total Revenue: ${totalRevenue1.toFixed(2)}</p>
          ) : (
            <p>Loading...</p>
          )}
          <h2>Total Revenue for {apiData} for Quarter 2 of 2023</h2>
          {totalRevenue2 !== null ? (
            <p>Total Revenue: ${totalRevenue2.toFixed(2)}</p>
          ) : (
            <p>Loading...</p>
          )}
          <h2>Percent Change from Q1 to Q2</h2>
          {percentChange !== null ? (
            <ConfigProvider 
            >
            <Row gutter={16} justify="center">
              <Col span={12}>
                  <Statistic
                    value={percentChange.toFixed(2)}
                    precision={2}
                    valueStyle={{
                      color: percentChange >= 0 ? '#3f8600' : '#cf1322',
                    }}
                    prefix={
                      percentChange >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                    }
                    suffix="%"
                  />
              </Col>
            </Row>
            </ConfigProvider>

          ) : (
            <p>Loading...</p>
          )}
          </div>
        
      
  );
};

export default TotalRevComponent1;
