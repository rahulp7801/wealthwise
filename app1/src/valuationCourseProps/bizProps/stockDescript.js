import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'assets/scss/stock-select.css';
import { Card, Skeleton } from 'antd'; // Import Skeleton component
import { LoadingOutlined } from '@ant-design/icons';

const StockDescription = () => {
  const [validity, setValidity] = useState("");
  const apiData = useSelector((state) => state.apiData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const terms = apiData.trim().split(' ');
    const STOCK_SYMBOL = terms[terms.length - 1];

    async function fetchData() {
      try {
        const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${STOCK_SYMBOL}?apikey=01e4bab5bf0732e8f24a4de466b692bb`);
        const data = await response.json();
        setValidity(data[0].description);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);

      }
    }

    fetchData();
  }, []);

  const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card
        title="Company Stock Description"
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

export default StockDescription;
