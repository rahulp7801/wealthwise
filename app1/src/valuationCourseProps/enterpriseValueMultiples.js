import React from "react";
import 'assets/scss/header-aurora.css';
import 'assets/scss/stock-select.css';
import 'assets/scss/styles.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store';
import EVtoEBITDA from "./relativeValuationCourseProps/evebitda";

const EnterpriseValueMultiples = () => {
    return (
        <div>
            <div className="aurora-gradient">
            <div className="header-body">
                <div className="aurora-content">
                <h1 className="aurora-title"> 
                    Enterprise Value Multiples
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
                        <div>Enterprise Value (EV) multiples serve as financial metrics for valuation, allowing assessment of a company&apos;s relative worth. These metrics are derived by dividing the Enterprise Value by specific financial indicators like EBITDA, EBIT, or Sales. They prove valuable for investors, analysts, and stakeholders to compare companies within an industry or across sectors, considering their financial structure and operational performance.</div>
                        <div>The Three Multiples Introduced in this Section:</div>
                        <ul>
                            <li>
                            <strong>EV/EBITDA</strong> 
                            </li>
                            <li>
                            <strong>EV/EBIT</strong> 
                            </li>
                            <li>
                            <strong>EV/Sales</strong> 
                            </li>
                        </ul>
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
                                        <h6 className='get-started-title'>EV/EBITDA</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                            <div className='card-content'>
                                <EVtoEBITDA />

                            </div>
                    </div>
                    <div className="gap2"></div>
                    </div>
                    <div className="gap2"></div>

                </PersistGate>
            </Provider >
        </div>
    )
}

export default EnterpriseValueMultiples