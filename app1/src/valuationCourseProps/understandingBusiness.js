import React from "react";
import StockDescription from "./bizProps/stockDescript";
import ValProposition from "./bizProps/valProp";
// import StockTitle from "./bizProps/stockTitle";
// import StockTweetHandle from "./bizProps/industryDescript";
import FiveForces from "./bizProps/forceDropdown";
import NewsDisplay from "./bizProps/newsDisplay"
import IndustryIdentify from "./bizProps/industryIdentify";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store';
import SparkleButton2 from "./sparkleButton2";
import SparkleButton6 from "./sparkleButton6";
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'antd';
import 'assets/scss/header-aurora.css';
import 'assets/scss/stock-select.css'
import 'assets/scss/news-display.css';

const UnderstandBiz  = () => {
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate('/icons/financial-kpi')
  }
  const handlePreviousPage = () => {
    navigate('/icons/pick-stock')
  }
  return (
      <div>
        <div className="aurora-gradient">
          <div className="header-body">
            <div className="aurora-content">
              <h1 className="aurora-title"> 
                Understanding the Business
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
        <div>
          <Provider store={store} >
            <PersistGate loading={null} persistor={persistor}>
                            {/* <StockTitle /> */}
              <div className="card-body">

                <div className="gape"></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ flex: 1, paddingRight: '10px' }}>
                        <StockDescription />
                    </div>

                    <div style={{ flex: 1, paddingLeft: '10px' }}>
                        <ValProposition />
                    </div>
                </div>
                <IndustryIdentify />
                <FiveForces />
                <div className="gap"></div>
                <div className='card3'>
                  <div className='card3-content'>
                    <h1>Related News Articles</h1>
                    <div>It&apos;s crucial to read news articles about a company before investing because they provide valuable insights into the company&apos;s performance, strategy, and potential risks. News articles help you stay informed about recent developments, such as earnings reports, partnerships, or regulatory changes, which can impact stock prices. By staying updated, investors can make more informed decisions and adapt their investment strategies to market dynamics, ultimately aiming for better financial outcomes.</div>
                    <NewsDisplay />
                  </div>
                </div>
              </div>
              
              
            </PersistGate>
          </Provider>
          

        </div>
        <Row>
          <Col span={8}>
            <SparkleButton6 onClick={handlePreviousPage}/>
          </Col>
          <Col span={8} offset={8}>
            <SparkleButton2 onClick={handleNextPage}/>
          </Col>
        </Row>
        

      </div>
  );
};

export default UnderstandBiz ;