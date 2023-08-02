import React from "react";
import 'assets/scss/header-aurora.css';
import 'assets/scss/stock-select.css';
import 'assets/scss/styles.css';
import TotalRevenueComponent from "./financialKPI/incomeStat1";
import TotalRevenueComponent2 from "./financialKPI/incomeStat2";
import ProfitMarginComponent1 from "./financialKPI/profitMargin1";
import ProfitMarginComponent2 from "./financialKPI/profitMargin2";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store';

const FinancialKPI = () => {

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
                        <div className='card'>
                            <div className='card-content'>
                                <div>Total revenue measures the gross amount of money a company makes from selling all of its goods and/or services throughout the year. Thus, comparing your company's total revenue from 2022's Annual Report to the 2023 Annual Report can give insight to a company's financial performance. </div>
                                <div><TotalRevenueComponent /></div>
                                <div><TotalRevenueComponent2 /></div>
                            </div>
                        </div>
                        <div className='container-2'>
                            <div className='get-started'>
                                <div className='get-started-content'>
                                    <h6 className='get-started-title'>Profit Margin</h6>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-content'>
                                <div>Profit margin is a crucial metric revealing a company's profitability. It's the percentage of profit from total revenue after deducting all expenses. Comparing profit margins between 2022 and 2023 Annual Reports helps assess financial performance, with higher margins indicating efficient operations and lower ones suggesting cost or revenue challenges. Monitoring profit margin over time is vital for understanding a company's financial health and profitability. </div>
                                <div><ProfitMarginComponent1 /></div>
                                <div><ProfitMarginComponent2 /></div>
                            </div>
                        </div>

                    </div>
                </PersistGate>
            </Provider>
                    
        </div>
    )
}
export default FinancialKPI