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
import { useNavigate } from 'react-router-dom';
import 'assets/scss/header-aurora.css';
// import 'assets/scss/stock-select.css'
import 'assets/scss/news-display.css';

const UnderstandBiz  = () => {
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate('/icons/financial-kpi')
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
                <div className='card'>
                  <div className='card-content'>
                    <h1>Stock Description</h1>
                    <StockDescription />
                  </div>
                </div>
                <div className="gape"></div>
                <div className='card'>
                  <div className='card-content'>
                    <h1>Value Proposition</h1>
                    <ValProposition />
                  </div>
                </div>
                <IndustryIdentify />


                <FiveForces />
                <div className="gap"></div>
               
              </div>
              <NewsDisplay />
            </PersistGate>
          </Provider>
          

        </div>
        <SparkleButton2 onClick={handleNextPage}/>

      </div>
  );
};

export default UnderstandBiz ;