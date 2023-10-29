import React from 'react';
import { Card, ConfigProvider, theme } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;

const cardStyle = {
  width: 365,
  border: '3px solid #4527A0', // Add the purple border here
  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
  marginTop: '3rem',
  marginLeft: '3rem'
};

const WealthWiseCard = () => (
  <ConfigProvider
    theme={{
      ...theme,
      algorithm: theme.darkAlgorithm,
    }}>
    <Link to="/wealthwise">
      <Card
        hoverable
        style={cardStyle} // Apply the cardStyle here
        cover={<img alt="example" src="https://images.unsplash.com/photo-1625314887424-9f190599bd56?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />}
      >
        <Meta title="Wealth Wise" />
      </Card>
    </Link>
  </ConfigProvider>
);

export default WealthWiseCard;
