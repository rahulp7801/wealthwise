import React, { useState, useEffect } from 'react';
import 'assets/scss/styles.css';
import 'assets/scss/header-aurora.css';
import 'assets/scss/stock-select.css';
import StockPriceChart from './priceChart';
import CompanySearchv2 from './stockSearchv2';
import { Row, Col, Card, ConfigProvider, theme, Divider, Statistic  } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

const AddingNewStocks = () => {
    // Initialize selectedStock with a default value
    const [selectedStock, setSelectedStock] = useState(null); // Replace 'AAPL' with your desired default stock symbol
    const titleCard = `${selectedStock} Statistics`
    // Define a function to receive the selected stock from CompanySearchv2
    const handleStockSelection = (stock) => {
      setSelectedStock(stock);
    };

    const [percentChange, setPercentChange] = useState('');
    const [priceData, setPriceData] = useState({ results: [] });
    const [currentPrice, setCurrentPrice] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    `https://api.polygon.io/v2/aggs/ticker/${selectedStock}/range/1/day/2023-09-01/2023-10-28?adjusted=true&sort=asc&limit=120&apiKey=CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble`
                );
                const data = await response.json();
                setPriceData(data);
                if (data.results.length > 0) {
                  const latestDataPoint = data.results[data.results.length - 1];
                  setCurrentPrice(latestDataPoint.c);
              }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        
        if (selectedStock) {
            fetchData(); // Fetch data only if a stock is selected
        }
    }, [selectedStock]);

    useEffect(() => {
        async function fetchStockData2() {
          try {
            const response = await fetch(
              `https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers/${selectedStock}?apiKey=CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble`
            );
            const data = await response.json();
            const formattedPercentChange = (data.ticker.todaysChangePerc ).toFixed(2);
            setPercentChange(formattedPercentChange);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        
        if (selectedStock) {
            fetchStockData2(); // Fetch stock data only if a stock is selected
        }
      }, [selectedStock]);

  return (
    <div>
      <div>
        <div className="aurora-gradient">
          <div className="header-body">
            <div className="aurora-content">
              <h1 className="aurora-title">
                Add to your Portfolio
                <div className="aurora">
                  <div className="aurora__item"></div>
                  <div className="aurora__item"></div>
                  <div className="aurora__item"></div>
                  <div className="aurora__item"></div>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
      
        <Row gutter={0}>
          {/* Left column for CompanySearch */}
          <Col span={16}>
            <CompanySearchv2 onStockSelect={handleStockSelection} />
          </Col>
          {/* Right column for Bardie and StockDisplay */}
          <Col span={8}>
          <div className="gap2"></div>
          <ConfigProvider
            theme={{
              ...theme,
              algorithm: theme.darkAlgorithm,
            }}
          >
            {selectedStock && (
              <div>
                <Card title={titleCard} style={{ background: '#20243c' }}
>

                  <StockPriceChart priceData={priceData} />
                  <Divider />
                  {percentChange > 0 ? (
                    <div>
                      <Statistic
                          title="Daily Percent Change"
                          value={percentChange}
                          valueStyle={{ color: '#3f8600' }}
                          prefix={<ArrowUpOutlined />}
                          style={{ color: 'white' }}
                        />
                        <Statistic
                          title="Current Price"
                          value={`$${currentPrice}`}
                          valueStyle={{ color: '#3f8600' }}
                          style={{ color: 'white' }}
                        />
                        </div>
                      
                  ) : (
                    <div>
                      <Statistic
                        title="Daily Percent Change"
                        value={percentChange}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<ArrowDownOutlined />}
                        style={{ color: 'white' }}
                      />
                      <Statistic
                          title="Current Price"
                          value={`$${currentPrice}`}
                          valueStyle={{ color: '#cf1322' }}
                          style={{ color: 'white' }}
                        />
                        </div>
                  )}
                  </Card>

                </div>
              )}
            </ConfigProvider>
            <div className="gap2"></div>

          </Col>
        </Row>
    </div>
  );
};

export default AddingNewStocks;
