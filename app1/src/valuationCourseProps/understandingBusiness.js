import React from "react";
import StockDescription from "./bizProps/stockDescript";
import ValProposition from "./bizProps/valProp";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store';
import 'assets/scss/header-aurora.css';
import 'assets/scss/stock-select.css'

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
        <div className="gap"></div>
        <div>
          <Provider store={store} >
            <PersistGate loading={null} persistor={persistor}>
              <div className="card-body">
                <div className='card'>
                  <div className='card-content'>
                    <h1>Stock Description</h1>
                    <StockDescription />
                  </div>
                </div>
                <div className='card'>
                  <div className='card-content'>
                    <h1>Value Proposition</h1>
                    <ValProposition />
                  </div>
                </div>
              </div>
            </PersistGate>
          </Provider>
          <div className="gap"></div>

        </div>
      </div>
  );
};

export default UnderstandBiz ;