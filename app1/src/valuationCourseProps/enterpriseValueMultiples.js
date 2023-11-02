import React from "react";
import 'assets/scss/header-aurora.css';
import 'assets/scss/stock-select.css';
import 'assets/scss/styles.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store';
import EVtoEBITDA from "./relativeValuationCourseProps/evebitda";
import PtoCashflow from "./relativeValuationCourseProps/pricefreecashflow";
import EVtoSales from "./relativeValuationCourseProps/evsales";
import SparkleButton5 from "./sparkleButton5";
import { useNavigate } from 'react-router-dom';
import SparkleButton3 from "./sparkleButton3";
import { Col, Row } from 'antd';

const EnterpriseValueMultiples = () => {
    const navigate = useNavigate();
    const handleNextPage = () => {
        navigate('/icons/equity-multiples')
    }
    const handlePreviousPage = () => {
        navigate('/icons/rel-val-intro')
    }
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
                        <div>Enterprise Value (EV) multiples serve as financial metrics for valuation, allowing assessment of a company&apos;s relative worth. These metrics are derived by dividing the Enterprise Value by specific financial indicators like EBITDA, Cashflow, or Sales. They prove valuable for investors, analysts, and stakeholders to compare companies within an industry or across sectors, considering their financial structure and operational performance.</div>
                        <div>The Three Multiples Introduced in this Section:</div>
                        <ul>
                            <li>
                            <strong>EV/EBITDA</strong> 
                            </li>
                            <li>
                            <strong>Price/Cashflow</strong> 
                            </li>
                            <li>
                            <strong>EV/Sales</strong> 
                            </li>
                        </ul>
                        <div> We will take your company&apos;s financial metrics and put them up against two leading competitors in your company&apos;s industry to make judgments on its performance and whether or not to buy.</div>
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
                            <div className="gap2"></div>

                            <div className='card2'>
                                <div className='card2-content'>
                                    <div>
                                        <p>
                                            The <strong>EV/EBITDA multiple</strong> is a financial metric used in relative valuation analysis to assess the attractiveness of a stock or a company as an investment. This multiple compares a company&apos;s <strong>Enterprise Value (EV)</strong> to its <strong>Earnings Before Interest, Taxes, Depreciation, and Amortization (EBITDA)</strong>. It is a popular tool among investors because it provides a comprehensive view of a company&apos;s financial health and operational performance by considering both its capital structure (<strong>EV</strong>) and its core operating profitability (<strong>EBITDA</strong>).
                                        </p>

                                        <p>
                                            Here&apos;s a breakdown of the key components and the value the <strong>EV/EBITDA multiple</strong> provides to an independent investor making a decision to buy a stock:
                                        </p>

                                        <ol>
                                            <li>
                                            <strong>Enterprise Value (EV):</strong>
                                            <ul>
                                                <li>Enterprise Value represents the total value of a company, taking into account its market capitalization (the value of its outstanding shares) plus its debt, minority interests, and any cash and cash equivalents.</li>
                                                <li>EV is a more comprehensive measure of a company&apos;s total worth compared to market capitalization alone, as it considers the impact of a company&apos;s debt and its ability to generate cash flow.</li>
                                            </ul>
                                            </li>

                                            <li>
                                            <strong>Earnings Before Interest, Taxes, Depreciation, and Amortization (EBITDA):</strong>
                                            <ul>
                                                <li>EBITDA is a measure of a company&apos;s operating profitability before accounting for interest, taxes, and non-cash expenses such as depreciation and amortization.</li>
                                                <li>It provides a clearer picture of a company&apos;s core operating performance by excluding items that can vary due to accounting rules or capital structure choices.</li>
                                            </ul>
                                            </li>
                                        </ol>

                                        <p>
                                            The <strong>EV/EBITDA multiple</strong> offers several advantages to independent investors:
                                        </p>

                                        <ul>
                                            <li><strong>Comparability:</strong> It allows investors to compare the valuation of different companies in the same industry or sector, regardless of differences in capital structure or tax treatments.</li>
                                            <li><strong>Simplicity:</strong> The metric is relatively straightforward to calculate and understand, making it accessible to a wide range of investors.</li>
                                            <li><strong>Cash Flow Focus:</strong> By using EBITDA, which is a proxy for cash flow from operations, the metric emphasizes a company&apos;s ability to generate cash, which is essential for growth, debt repayment, and shareholder returns.</li>
                                            <li><strong>Comprehensive Valuation:</strong> It considers both a company&apos;s debt and its operational performance, providing a holistic view of its financial health.</li>
                                        </ul>

                                        <p>
                                            However, it&apos;s important for independent investors to exercise caution when using the <strong>EV/EBITDA multiple</strong>:
                                        </p>

                                        <ul>
                                            <li><strong>Industry Variability:</strong> Different industries may have different typical EV/EBITDA multiples due to variations in growth prospects, risk profiles, and capital requirements. Understanding industry benchmarks is crucial.</li>
                                            <li><strong>Cyclicality:</strong> Some industries are more cyclical than others, which can impact the relevance of the EV/EBITDA multiple. In cyclical industries, a low multiple during a downturn might not necessarily indicate a poor investment.</li>
                                            <li><strong>Quality of Earnings:</strong> EBITDA can be manipulated by companies to some extent, so it&apos;s essential to scrutinize a company&apos;s financial statements and adjust for any one-time or non-recurring items.</li>
                                            <li><strong>Debt Levels:</strong> A high debt load can inflate the EV and make the EV/EBITDA multiple appear more attractive than it really is. Assess the company&apos;s ability to manage its debt.</li>
                                        </ul>

                                        <p>
                                            In summary, the <strong>EV/EBITDA multiple</strong> is a valuable tool for independent investors in relative valuation because it provides a comprehensive and comparable measure of a company&apos;s worth and operational performance.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                                
                            <div className='card2'>
                                <div className='card2-content'>
                                    <EVtoEBITDA />
                            </div>
                    </div>
                        <div className="card-body">
                            <div className="gap2"></div>

                            <div className='container-2'>
                                    <div className='get-started'>
                                        <div className='get-started-content'>
                                            <h6 className='get-started-title'>Price / Free Cashflow</h6>
                                        </div>
                                    </div>
                            </div>
                            <div className="gap2"></div>

                                <div className='card2'>
                                    <div className='card2-content'>
                                    <div>
                                        <p>
                                            The <strong>Price/Cash Flow multiple</strong> is a financial metric used in relative valuation analysis to assess the attractiveness of a stock or a company as an investment. This multiple compares a company&apos;s <strong>Price</strong> to its <strong>Cash Flow</strong>. It is a popular tool among investors because it provides insights into how the market values a company&apos;s cash generation potential.
                                        </p>

                                        <p>
                                            Here&apos;s a breakdown of the key components and the value the <strong>Price/Cash Flow multiple</strong> provides to an independent investor making a decision to buy a stock:
                                        </p>

                                        <ol>
                                            <li>
                                            <strong>Price:</strong>
                                            <ul>
                                                <li>Price represents the current market price of a company&apos;s stock, as determined by supply and demand in the market.</li>
                                                <li>It reflects what investors are willing to pay for a share of the company.</li>
                                            </ul>
                                            </li>

                                            <li>
                                            <strong>Cash Flow:</strong>
                                            <ul>
                                                <li>Cash Flow represents the amount of cash a company generates from its operations and is available to distribute to investors or reinvest in the business.</li>
                                                <li>It includes operating cash flow, free cash flow, or other variations depending on the context of the analysis.</li>
                                            </ul>
                                            </li>
                                        </ol>

                                        <p>
                                            The <strong>Price/Cash Flow multiple</strong> offers several advantages to independent investors:
                                        </p>

                                        <ul>
                                            <li><strong>Valuation Perspective:</strong> It provides a valuation perspective by comparing the market price of a stock to its cash flow, helping investors determine whether a stock is overvalued or undervalued.</li>
                                            <li><strong>Risk Assessment:</strong> It can be used to assess the risk associated with an investment, as a high multiple may indicate higher expectations for future cash flows, while a low multiple may signal lower expectations or higher risk.</li>
                                            <li><strong>Comparative Analysis:</strong> Investors can compare the Price/Cash Flow multiples of different companies in the same industry to identify potential investment opportunities.</li>
                                        </ul>

                                        <p>
                                            However, it&apos;s essential for independent investors to interpret the <strong>Price/Cash Flow multiple</strong> in the context of the industry, company-specific factors, and the broader market. A low multiple does not always indicate a bargain, and a high multiple may not necessarily mean an overvalued stock.
                                        </p>

                                        <p>
                                            In summary, the <strong>Price/Cash Flow multiple</strong> is a valuable tool for independent investors in relative valuation because it provides insights into how the market values a company&apos;s cash flow. However, it should be used alongside other financial metrics and qualitative analysis to make well-informed investment decisions.
                                        </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="gap2"></div>

                                <div className='card2'>
                                    <div className='card2-content'>
                                        <PtoCashflow />
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="gap2"></div>

                        <div className='container-2'>
                                    <div className='get-started'>
                                        <div className='get-started-content'>
                                            <h6 className='get-started-title'>EV / Sales</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="gap2"></div>

                                <div className='card2'>
                                    <div className='card2-content'>
                                    <div>
                                        <p>
                                            The <strong>EV/Sales multiple</strong> is a financial metric used in relative valuation analysis to assess the attractiveness of a stock or a company as an investment. This multiple compares a company&apos;s <strong>Enterprise Value (EV)</strong> to its <strong>Sales</strong>. It is a popular tool among investors because it provides insights into a company&apos;s valuation relative to its revenue.
                                        </p>

                                        <p>
                                            Here&apos;s a breakdown of the key components and the value the <strong>EV/Sales multiple</strong> provides to an independent investor making a decision to buy a stock:
                                        </p>

                                        <ol>
                                            <li>
                                            <strong>Enterprise Value (EV):</strong>
                                            <ul>
                                                <li>Enterprise Value represents the total value of a company, taking into account its market capitalization (the value of its outstanding shares) plus its debt, minority interests, and any cash and cash equivalents.</li>
                                                <li>EV is a more comprehensive measure of a company&apos;s total worth compared to market capitalization alone, as it considers the impact of a company&apos;s debt and its ability to generate cash flow.</li>
                                            </ul>
                                            </li>

                                            <li>
                                            <strong>Sales:</strong>
                                            <ul>
                                                <li>Sales, also known as revenue, represents the total income generated by a company from its core operations.</li>
                                                <li>It is a crucial indicator of a company&apos;s top-line performance and growth potential.</li>
                                            </ul>
                                            </li>
                                        </ol>

                                        <p>
                                            The <strong>EV/Sales multiple</strong> offers several advantages to independent investors:
                                        </p>

                                        <ul>
                                            <li><strong>Comparability:</strong> It allows investors to compare the valuation of different companies in the same industry or sector, using a straightforward metric based on sales.</li>
                                            <li><strong>Focus on Revenue:</strong> The multiple focuses on sales, making it useful for assessing valuation based on a company&apos;s ability to generate income.</li>
                                            <li><strong>Use in Various Industries:</strong> EV/Sales is applicable across different industries, although industry norms may vary.</li>
                                            <li><strong>Quick Assessment:</strong> It provides a quick and easy way to gauge a company&apos;s valuation relative to its revenue, which can be especially useful for screening potential investments.</li>
                                        </ul>

                                        <p>
                                            However, it&apos;s important for independent investors to consider the context and industry norms when using the <strong>EV/Sales multiple</strong>:
                                        </p>

                                        <ul>
                                            <li><strong>Industry Variability:</strong> Different industries may have different typical EV/Sales multiples due to variations in growth prospects, profit margins, and business models. It&apos;s essential to compare a company to its industry peers.</li>
                                            <li><strong>Profitability Matters:</strong> A low EV/Sales multiple may not necessarily indicate a good investment if a company has low or negative profit margins. Consider profitability alongside the multiple.</li>
                                            <li><strong>Growth Prospects:</strong> Companies with high growth potential may command higher EV/Sales multiples, but this should be assessed in the context of sustainable growth and market conditions.</li>
                                        </ul>

                                        <p>
                                            In summary, the <strong>EV/Sales multiple</strong> is a valuable tool for independent investors in relative valuation because it provides a simple and comparable measure of a company&apos;s valuation relative to its sales. However, like any financial metric, it should be used alongside other factors and industry benchmarks to make well-informed investment decisions.
                                        </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="gap2"></div>
                                <div className='card2'>
                                    <div className='card2-content'>
                                        <EVtoSales />
                                    </div>
                                </div>
                            </div>
                    <div className="gap2"></div>
                </PersistGate>
            </Provider >
            <Row>
          <Col span={8}>
            <SparkleButton3 onClick={handleNextPage}/>

          </Col>
          <Col span={8} offset={8}>
            <SparkleButton5 onClick={handlePreviousPage}/>

          </Col>
        </Row>
        </div>
    )
}

export default EnterpriseValueMultiples