import React from "react";
import StockDescription from "./bizProps/stockDescript";
import ValProposition from "./bizProps/valProp";
import { Provider } from 'react-redux';
import store from './store';
import 'assets/scss/header-aurora.css';

const UnderstandBiz  = () => {
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
            <StockDescription />
            <ValProposition />
            
          </Provider>
        </div>
      </div>
  );
};

export default UnderstandBiz ;