import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row, ConfigProvider, theme } from 'antd';

const TopActive = () => {
  const [mostActiveStocks, setMostActiveStocks] = useState([]);
  const [topGainers, setTopGainers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=AMXAOB5BNQ7TZK65'
        );
        console.log(response.data);
        setMostActiveStocks(response.data.most_actively_traded.slice(0, 5));
        setTopGainers(response.data.top_gainers.slice(0, 5));
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ConfigProvider
        theme={{
          ...theme,
          algorithm: theme.darkAlgorithm,
        }}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Top ESG Companies" 
              bordered={false}
              headStyle={{
                background: '#1a223f',
                color: '#722ed1',
              }}>
              <p style={{ fontSize: '18px' }}>1. Nividia (NVDA)</p>
              <p style={{ fontSize: '18px' }}>2. Microsoft (MSFT)</p>
              <p style={{ fontSize: '18px' }}>3. Best Buy (BBY)</p>
              <p style={{ fontSize: '18px' }}>4. Adobe (ADBE)</p>
              <p style={{ fontSize: '18px' }}>5. Pool (POOL)</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Most Active"
              bordered={false}
              headStyle={{
                background: '#1a223f',
                color: '#722ed1',
              }}
            >
              {mostActiveStocks.map((stock, index) => (
                <div key={index}>
                  <p style={{ fontSize: '18px' }}>{index + 1}. {stock.ticker}</p>
                </div>
              ))}
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Top Price Gainers"
              bordered={false}
              headStyle={{
                background: '#1a223f',
                color: '#722ed1',
              }}
            >
              {topGainers.map((stock, index) => (
                <div key={index}>
                  <p style={{ fontSize: '18px' }}>{index + 1}. {stock.ticker}: +{stock.change_percentage}</p>
                </div>
              ))}
            </Card>
          </Col>
        </Row>
      </ConfigProvider>
    </div>
  );
};

export default TopActive;
