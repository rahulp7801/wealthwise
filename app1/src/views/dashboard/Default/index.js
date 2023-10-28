import React from 'react';
import { Layout, Space } from 'antd';
import WealthWiseCard from 'portbuilderprops/bardCard';
const { Footer, Sider, Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  height: '1000px',
  color: '#fff',
  backgroundColor: '#20243c',
};
const siderStyle = {
  textAlign: 'center',
  width:'200px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};
const Dashboard = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    
    <Layout>
      <Layout hasSider>
        <Content style={contentStyle}><WealthWiseCard /></Content>
        <Sider style={siderStyle}>Sider</Sider>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
    
  </Space>
);
export default Dashboard;