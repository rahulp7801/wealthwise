import React from "react";
import 'assets/scss/header-aurora.css';
import 'assets/scss/stock-select.css';
import 'assets/scss/styles.css';
import { useNavigate } from 'react-router-dom';

import ProfitMargin1 from "./financialKPI/profitMargin1";
import OperatingCashflow1 from "./financialKPI/opCashflow1";
import TotalRevComponent1 from "./financialKPI/totalRevenue1";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store';
import SparkleButton3 from "./sparkleButton3";
import SparkleButton1 from "./sparkleButton1";
import { Col, Row } from 'antd';
const FinancialKPI = () => {
    const navigate = useNavigate();
    const handleNextPage = () => {
        navigate('/icons/rel-val-intro')
    }
    const handlePreviousPage = () => {
        navigate('/icons/financial-kpi')
    }
    return (
        <div>
            <div className="aurora-gradient">
            <div className="header-body">
                <div className="aurora-content">
                <h1 className="aurora-title"> 
                    Financial Key Performance Indicators
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
            <div className="card-body">
                <div className='card'>
                    <div className='card-content'>
                        <div>We will be analyzing three different pieces of financial data from your company that will give an indication on their financial performance.</div>
                        <div>These include:</div>
                        <div>Total Revenue</div>
                        <div>Profit Margin</div>
                        <div>Cash Flow from Operations</div>
                    </div>
                </div>
                <div className="gap2"></div>
            </div>
            <Provider store={store} >
                <PersistGate loading={null} persistor={persistor}>
                    <div className="card-body">
                        <div className='container-2'>
                            <div className='get-started'>
                                <div className='get-started-content'>
                                    <h6 className='get-started-title'>Total Revenue</h6>
                                </div>
                            </div>
                        </div>
                        <div className="gap2"></div>
                        <div className='card'>
                            <div className='card-content'>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <div>Total revenue by quarter measures the gross amount of money a company makes from selling all of its goods and/or services throughout the a 3 month period. Thus, comparing your company's total revenue from 2023 Q1 Report to 2023 Q2 Report can give insight to a company's financial performance. </div>
                                <div><TotalRevComponent1 /></div>
                            </div>
                        </div>
                        <div className="gap2"></div>

                        <div className='container-2'>
                            <div className='get-started'>
                                <div className='get-started-content'>
                                    <h6 className='get-started-title'>Profit Margin</h6>
                                </div>
                            </div>
                        </div>
                        <div className="gap2"></div>

                        <div className='card'>
                            <div className='card-content'>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <div>Profit margin is a crucial metric revealing a company's profitability. It's the percentage of profit from total revenue after deducting all expenses. Comparing profit margins between 2022 and 2023 Annual Reports helps assess financial performance, with higher margins indicating efficient operations and lower ones suggesting cost or revenue challenges. Monitoring profit margin over time is vital for understanding a company's financial health and profitability. </div>
                                <div><ProfitMargin1 /></div>
                            </div>
                        </div>
                        <div className="gap2"></div>

                        <div className='container-2'>
                            <div className='get-started'>
                                <div className='get-started-content'>
                                    <h6 className='get-started-title'>Cash Flow from Operations</h6>
                                </div>
                            </div>
                        </div>
                        <div className="gap2"></div>

                        <div className='card'>
                            <div className='card-content'>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <div>Cash flow from operations is a crucial metric showing a company's ability to generate cash from its core activities. Comparing 2022 and 2023 Annual Reports helps assess cash generation over time. Positive cash flow indicates financial strength and sustainability, while negative cash flow may raise concerns about operational efficiency and reliance on external financing. </div>
                                <div><OperatingCashflow1 /></div>
                            </div>
                        </div>
                    </div>
                </PersistGate>
            </Provider>
            <Row>
          <Col span={8}>
            <SparkleButton1 onClick={handleNextPage}/>

          </Col>
          <Col span={8} offset={8}>
            <SparkleButton3 onClick={handlePreviousPage}/>

          </Col>
        </Row>
        </div>
    )
}
export default FinancialKPI