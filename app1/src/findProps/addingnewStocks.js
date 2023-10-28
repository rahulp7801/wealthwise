import React from 'react';
import 'assets/scss/styles.css';
import 'assets/scss/header-aurora.css';
import 'assets/scss/stock-select.css';
import CompanySearchv2 from './stockSearchv2';
import { Row, Col } from 'antd';
//import SearchSectionv2 from './searchSectionv2.js';
const AddingNewStocks = () => {


  return (
  <div>
    <div>
      <div className="aurora-gradient">
        <div className="header-body">
          <div className="aurora-content">
            <h1 className="aurora-title">
              Add to your Portfolio
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
    </div>
        <Row gutter={0}>
    {/* Left column for CompanySearch */}
    <Col span={16}>
        {/* <CompanySearch /> */}
        <CompanySearchv2 />
    </Col>
    {/* Right column for Bardie and StockDisplay */}
    <Col span={8}>
        <div className="gap2"></div>
            {/* <TextEffectComponent /> */}
            <div className="gap2"></div>
    </Col>
  </Row>
  </div>

  );
};

export default AddingNewStocks;
