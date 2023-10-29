import React from 'react';
import Icon, { LineChartOutlined, UserOutlined, RadarChartOutlined ,RobotOutlined } from '@ant-design/icons';
import { Card, Row, Col, ConfigProvider, theme, Typography, Button, Divider } from 'antd';
import styles from 'assets/scss/NewsCard.module.css';


const { Meta } = Card;
const { Title } = Typography;


const avatarStyle = {
  width: '64px',
  height: '64px',
};

const imageStyle = {
  height: '300px', // Set the height of the images to 300 pixels
};

const titleStyle = {
  fontSize: '24px', // Set the font size
  color: 'white', // Set the font color
  textAlign: 'left'
};

const DashboardCards = () => (
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
                description="This is the description for card 1"
              />
              <Divider />
              <Button type="primary" style={{ width: '100%' }}>
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
                  src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80&w=1664&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              <Button type="primary" style={{ width: '100%' }}>
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
                  src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80&w=1664&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{ ...imageStyle }}
                />
              }
            >
              <Meta
                avatar={
                  <LineChartOutlined style={{ ...avatarStyle, fontSize: '32px' }} />
                }
                title='Look at the latest news'
                description="This is the description for card 1"
              />
              <Divider />
              <Button type="primary" style={{ width: '100%' }}>
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
                  src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80&w=1664&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{ ...imageStyle }}
                />
              }
            >
              <Meta
                avatar={
                  <RadarChartOutlined style={{ ...avatarStyle, fontSize: '32px' }} />
                }
                title='Portfolio Customization'
                description="This is the description for card 3"
              />
              <Divider />
              <Button type="primary" style={{ width: '100%' }}>
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
                  src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto.format&fit=crop&q=80&w=1664&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{ ...imageStyle }}
                />
              }
            >
              <Meta
                avatar={
                  <RobotOutlined style={{ ...avatarStyle, fontSize: '32px' }} />
                }
                title='Wealth Wise Portfolio Advisor'
                description="This is the description for card 4"
              />
              <Divider />
              <Button type="primary" style={{ width: '100%' }}>
                Go
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  </div>
);

export default DashboardCards;
