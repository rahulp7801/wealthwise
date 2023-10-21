import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import {  Col, Row, Statistic } from 'antd';
import { ConfigProvider } from 'antd';
import { Layout } from 'antd';


const API_KEY = 'CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble';

const ProfitMargin1 = () => {
  const [netIncome1, setNetIncome1] = useState(null);
  const [totalRevenue1, setTotalRevenue1] = useState(null);
  const [netIncome2, setNetIncome2] = useState(null);
  const [totalRevenue2, setTotalRevenue2] = useState(null);

  const apiData = useSelector((state) => state.apiData);
  const terms = apiData.trim().split(' ');
  const STOCK_SYMBOL = terms[terms.length - 1];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.polygon.io/vX/reference/financials?ticker=${STOCK_SYMBOL}&apiKey=${API_KEY}`);
        const data = await response.json();

        if (data.status === 'OK' && data.results && data.results.length > 0) {
          const incomeStatement1 = data.results[2].financials.income_statement;
          const incomeStatement2 = data.results[1].financials.income_statement;
          setNetIncome1(incomeStatement1.net_income_loss.value);
          setTotalRevenue1(incomeStatement1.revenues.value);
          setNetIncome2(incomeStatement2.net_income_loss.value);
          setTotalRevenue2(incomeStatement2.revenues.value);
        } else {
          console.error('Data not found in API response.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  // Calculate profit margins and profit margin change
  const calculateProfitMargin = (netIncome, totalRevenue) => {
    if (netIncome !== null && totalRevenue !== null) {
      return (netIncome / totalRevenue) * 100;
    }
    return null;
  };

  const profitMargin1 = calculateProfitMargin(netIncome1, totalRevenue1);
  const profitMargin2 = calculateProfitMargin(netIncome2, totalRevenue2);

  const profitMarginChange = profitMargin2 !== null && profitMargin1 !== null
    ? profitMargin2 - profitMargin1
    : null;

  return (
    <div>
      <h2>Profit Margin for {apiData} Q1 of 2023</h2>
      {profitMargin1 !== null ? (
        <p>Profit Margin: {profitMargin1.toFixed(2)}%</p>
      ) : (
        <p>Loading...</p>
      )}
      <h2>Profit Margin for {apiData} Q2 of 2023</h2>
      {profitMargin2 !== null ? (
        <p>Profit Margin: {profitMargin2.toFixed(2)}%</p>
      ) : (
        <p>Loading...</p>
      )}
      <h2>Change in Profit Margin</h2>
      {profitMarginChange !== null ? (
        <ConfigProvider
          >
          <Row gutter={16} justify="center">
            <Col span={12}>
                <Statistic
                  value={profitMarginChange.toFixed(2)}
                  precision={2}
                  valueStyle={{
                    color: profitMarginChange >= 0 ? '#3f8600' : '#cf1322',
                  }}
                  prefix={
                    profitMarginChange >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />
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

export default ProfitMargin1;
