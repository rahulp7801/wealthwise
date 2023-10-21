import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Col, Row, Statistic, ConfigProvider } from 'antd';

const API_KEY = 'CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble';

const OperatingCashflow1 = () => {
  const [opCashflow1, setOpCashflow1] = useState(null);
  const [opCashflow2, setOpCashflow2] = useState(null);
  const [percentChange, setPercentChange] = useState(null);

  const apiData = useSelector((state) => state.apiData);
  const terms = apiData.trim().split(' ');
  const STOCK_SYMBOL = terms[terms.length - 1];

  useEffect(() => {
    async function fetchOperatingCashflow() {
      try {
        const response = await fetch(
          `https://api.polygon.io/vX/reference/financials?ticker=${STOCK_SYMBOL}&apiKey=${API_KEY}`
        );
        const data = await response.json();

        if (data.status === 'OK' && data.results && data.results.length > 1) {
          const q1Cashflow = data.results[2].financials.cash_flow_statement.net_cash_flow.value;
          const q2Cashflow = data.results[1].financials.cash_flow_statement.net_cash_flow.value;

          setOpCashflow1(q1Cashflow);
          setOpCashflow2(q2Cashflow);

          // Calculate percent change
          const change = q2Cashflow - q1Cashflow;
          const percentChange = ((change / Math.abs(q1Cashflow)) * 100).toFixed(2);
          setPercentChange(percentChange);
        } else {
          console.error('Cashflow data not found in API response.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchOperatingCashflow();
  }, []);

  return (
    <div>
      <h2>Operating Cashflow for {apiData} for Quarter 1 of 2023</h2>
      {opCashflow1 !== null ? (
        <p>Operating Cashflow: ${opCashflow1.toFixed(2)}</p>
      ) : (
        <p>Loading...</p>
      )}
      <h2>Operating Cashflow for {apiData} for Quarter 2 of 2023</h2>
      {opCashflow2 !== null ? (
        <p>Operating Cashflow: ${opCashflow2.toFixed(2)}</p>
      ) : (
        <p>Loading...</p>
      )}
      <h2>Percent Change from Q1 to Q2</h2>
      {percentChange !== null ? (
        <ConfigProvider >
          <Row gutter={16} justify="center">
            <Col span={12}>
                <Statistic
                  value={percentChange}
                  precision={2}
                  valueStyle={{
                    color: percentChange >= 0 ? '#3f8600' : '#cf1322',
                  }}
                  prefix={percentChange >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
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

export default OperatingCashflow1;
