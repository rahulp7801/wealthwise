import React from 'react';
import { Layout, Space } from 'antd';
import DashboardCards from './dashboardCards';
const { Content } = Layout;


const contentStyle = {
  textAlign: 'center',
  height: '100%',
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
        <Content style={contentStyle}><DashboardCards /></Content>
      </Layout>

  </Space>
);
export default Dashboard;