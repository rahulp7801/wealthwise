import React, { useEffect, useState } from 'react';
import { Avatar, List, ConfigProvider, theme, Button } from 'antd';

const portfolioData = JSON.parse(localStorage.getItem('portfolio'));

const StockDisplay = () => {
  const [stockLogos, setStockLogos] = useState({});
  const [stocks, setStocks] = useState(portfolioData);

  useEffect(() => {
    async function fetchStockData(symbol) {
      try {
        const response = await fetch(
          `https://api.polygon.io/v3/reference/tickers/${symbol}?apiKey=CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble`
        );
        const data = await response.json();
        const logoUrl = `${data.results.branding.icon_url}?apiKey=CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble`;
        setStockLogos((prevLogos) => ({
          ...prevLogos,
          [symbol]: logoUrl,
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    for (const symbol of Object.keys(portfolioData)) {
      fetchStockData(symbol);
    }
  }, []);

  const handleRemoveStock = (symbol) => {
    const updatedStocks = { ...stocks };
    delete updatedStocks[symbol];
    setStocks(updatedStocks);
    localStorage.setItem('portfolio', JSON.stringify(updatedStocks));
  };

  return (
    <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,

      
    }}
    >
      <List
        itemLayout="horizontal"
        bordered
        header={<div>Portfolio</div>}
        dataSource={Object.entries(stocks)}
        renderItem={(entry) => (
          <List.Item>
            <List.Item.Meta
              title={entry[0]} // Use the stock name as the title
              description={entry[1]} // Use the symbol as the description
              avatar={
                <Avatar
                  src={stockLogos[entry[0]] || 'default_image_url'}
                  // Use a default image URL in case the logo isn't available
                />
              }
            />
            <Button danger  onClick={() => handleRemoveStock(entry[0])} >
              Remove
            </Button>
          </List.Item>
        )}
      />
    </ConfigProvider>
  );
};

export default StockDisplay;
