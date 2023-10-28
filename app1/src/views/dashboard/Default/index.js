import React from 'react';
import { Layout, Space } from 'antd';
import DashboardCards from './dashboardCards';
const { Footer, Sider, Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  height: '100%',
  color: '#fff',
  backgroundColor: '#20243c',
};
const siderStyle = {
  textAlign: 'center',
  width:'200px',
  color: '#fff',
  backgroundColor: '#20243c',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#20243c',
};
const Dashboard = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
      backgroundColor: '#20243c',

    }}
    size={[0, 48]}
  >
    
    <Layout>
      <Layout hasSider>
        <Content style={contentStyle}><DashboardCards /></Content>
        <Sider style={siderStyle}>Sider</Sider>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
    
  </Space>
);
export default Dashboard;