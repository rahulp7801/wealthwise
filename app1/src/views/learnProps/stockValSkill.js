import React from 'react';
import { Space } from 'antd';
import 'assets/scss/header-aurora.css';

import SkillsTable1 from './stockValuationTables.js/understandingBusinessTable';
import SkillsTable2 from './stockValuationTables.js/relValuationTable';
import SkillsTable3 from './stockValuationTables.js/intrinsicValuationTable';



export default function StockValSkill() {
  // const inlineFontStyle = {
  //   fontFamily: "'Nunito Sans', sans-serif",
  // };

  // const centeredDivStyle = {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // };

  return (
    <div>
      
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <div className="aurora-gradient">
            <div className="header-body">
              <div className="aurora-content">
                <h1 className="aurora-title"> 
                  Stock Valuation
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
        <SkillsTable1 />
        <SkillsTable2 />
        <SkillsTable3 />
      </Space>
    </div>
  );
}
