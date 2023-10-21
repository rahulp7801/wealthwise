import React from 'react';
import { Table, Button, ConfigProvider, theme, Progress } from 'antd';
import { RiseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const SkillsTable1 = () => {
  const navigate = useNavigate();

  // Define the purple color palette
  const purplePalette = {
    purple1: '#f9f0ff',
    purple2: '#efdbff',
    purple3: '#d3adf7',
    purple4: '#b37feb',
    purple5: '#9254de',
    purple6: '#722ed1',
    purple7: '#531dab',
    purple8: '#391085',
    purple9: '#22075e',
    purple10: '#120338',
    grey: '#1a223f',
  };

  

  // Define different handleButtonClick functions for each row
  const handleButtonClick = (record) => {
    switch (record.key) {
      case '1':
        navigate('/icons/pick-stock');
        break;
      case '2':
        navigate('/icons/understand-business');
        break;
      case '3':
        navigate('/icons/financial-kpi');
        break;
      default:
        // Handle other cases if needed
        break;
    }
  };

  const columns = [
    {
      title: (
        <>
          <RiseOutlined style={{ fontSize: '24px', marginRight: 30, color: purplePalette.purple5 }} />
          Understanding your Business
        </>
      ),
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Button
          onClick={() => handleButtonClick(record)}
          style={{
            width: '100%',
            border: 'none',
            backgroundColor: purplePalette.purple8, // Apply purple background color
            color: '#fff', // Set text color to white
            transition: 'background-color 0.3s, box-shadow 0.3s', // Add a transition effect
            ':hover': {
              backgroundColor: purplePalette.purple3, // Change the background color on hover
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', // Add a box shadow on hover
            },
          }}
        >
          {text}
        </Button>
      ),
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      render: (text, record) => (
        <Progress percent={record.progress} />
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'STOCK SELECTION',
      progress: 0,
      description: 'Begin your journey by choosing the company you want to value.',
    },
    {
      key: '2',
      name: 'OVERVIEW OF THE BUSINESS',
      progress: 0,
      description: '1. Value Proposition' + '\n' + '2. Industry Analysis' + '\n' + '3. Related News Articles',
    },
    {
      key: '3',
      name: 'KEY PERFORMANCE INDICATORS',
      progress: 0,
      description: 'Understand basic KPI that are vital to your business' + '\n' + '1. Total Revenue' + '\n' + '2. Profit Margin' + '\n' + '3. Cash Flow from Operations',
    },
  ];

  const expandedRowRender = (record) => (
    <p style={{ margin: 0 }}>{record.description}</p>
  );

  return (
    <ConfigProvider theme={{
      // 1. Use dark algorithm
      algorithm: theme.darkAlgorithm,

    }}>
      <Table
        columns={columns}
        dataSource={data}
        expandedRowRender={expandedRowRender}
        pagination={false}
      />
    </ConfigProvider>
  );
};

export default SkillsTable1;
