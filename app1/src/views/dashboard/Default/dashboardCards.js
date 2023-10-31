import React from 'react';
import { LineChartOutlined, UserOutlined, RadarChartOutlined ,RobotOutlined } from '@ant-design/icons';
import { Card, Row, Col, ConfigProvider, theme, Typography, Button, Divider } from 'antd';
import styles from 'assets/scss/NewsCard.module.css';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;
const { Title } = Typography;

const avatarStyle = {
  width: '64px',
  height: '64px',
};

const imageStyle = {
  height: '300px',
};

const titleStyle = {
  fontSize: '24px',
  color: 'white',
  textAlign: 'left'
};

const DashboardCards = () => {
  const navigate = useNavigate(); // Move useNavigate inside the component

  const handleNav1 = () => {
    navigate('/icons/stock-val');
  }

  const handleNav2 = () => {
    navigate('/recommendation-survey');
  }

  const handleNav3 = () => {
    navigate('/utils/news-feed');
  }

  const handleNav4 = () => {
    navigate('/utils/portfolio-customization');
  }

  const handleNav5 = () => {
    navigate('/utils/portfolio-advisor-home');
  }

  return (
    <div className={styles.cardContainer1} >
    <ConfigProvider
      theme={{
        ...theme,
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div>
      <Title level={3} style={{titleStyle}}>Learn Features</Title>

        <Row gutter={16}>

          <Col span={8}>
            <Card
              className={styles.card1}
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80&w=1664&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  style={{ ...imageStyle }}
                />
              }
            >
              <Meta
                avatar={
                  <LineChartOutlined style={{ ...avatarStyle, fontSize: '32px' }} />
                }
                title='Stock Valuation Course'
                description="Begin your stock valuation journey with this interactive course!"
              />
              <Divider />
              <Button onClick={handleNav1} type="primary" style={{ width: '100%' }}>
                Go
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card
            className={styles.card1}
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1553316045-e56f8b09f0ed?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{ ...imageStyle }}
                />
              }
            >
              <Meta
                avatar={
                  <UserOutlined style={{ ...avatarStyle, fontSize: '32px' }} />
                }
                title='Stock Recommendation Survey'
                description="Wondering what stocks fit your investment needs? Let WealthWise guide you!"
              />
              <Divider />
              <Button onClick={handleNav2} type="primary" style={{ width: '100%' }}>
                Go
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              className={styles.card1}
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1486783046960-64d2ef697c46?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{ ...imageStyle }}
                />
              }
            >
              <Meta
                avatar={
                  <LineChartOutlined style={{ ...avatarStyle, fontSize: '32px' }} />
                }
                title='Look at the latest news'
                description="Stay updated on market news and reports!"
              />
              <Divider />
              <Button onClick={handleNav3} type="primary" style={{ width: '100%' }}>
                Go
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
      <div>
      <Title level={3} style={{titleStyle}}>Wealth Wise Portfolio Advisor</Title>
        <Row gutter={16}>

          <Col span={12}>
            <Card
            className={styles.card1}
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1468254095679-bbcba94a7066?auto=format&fit=crop&q=80&w=1738&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{ ...imageStyle }}
                />
              }
            >
              <Meta
                avatar={
                  <RadarChartOutlined style={{ ...avatarStyle, fontSize: '32px' }} />
                }
                title='Portfolio Customization'
                description="Add and manage the stocks in your portfolio!"
              />
              <Divider />
              <Button onClick={handleNav4} type="primary" style={{ width: '100%' }}>
                Go
              </Button>
            </Card>
          </Col>
          <Col span={12}>
            <Card
            className={styles.card1}
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1534469650761-fce6cc26ac0d?auto=format&fit=crop&q=80&w=1742&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{ ...imageStyle }}
                />
              }
            >
              <Meta
                avatar={
                  <RobotOutlined style={{ ...avatarStyle, fontSize: '32px' }} />
                }
                title='Wealth Wise Portfolio Advisor'
                description="Allow Wealth Wise AI to give you tailored analysis on your specific portfolio!"
              />
              <Divider />
              <Button onClick={handleNav5} type="primary" style={{ width: '100%' }}>
                Go
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  </div>
  );
};

export default DashboardCards;
