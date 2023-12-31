import React from "react";
import 'assets/scss/header-aurora.css';
import 'assets/scss/stock-select.css';
import 'assets/scss/styles.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store';
import { Col, Row } from 'antd';
import SparkleButton7 from "./SparkleButton7";
import SparkleButton2 from "./sparkleButton2";
import PEGrowth from "./relativeValuationCourseProps/pegrowth";
import PricetoBook from "./relativeValuationCourseProps/priceBook";
import PricetoSales from "./relativeValuationCourseProps/priceSales";
import { useNavigate } from 'react-router-dom';

const EquityValueMultiples = () => {
    const navigate = useNavigate();
    const handleNextPage = () => {
        navigate('/icons/discounted-cashflow')
    }
    const handlePreviousPage = () => {
        navigate('/icons/enterprise-multiples')
    }
    return (
        <div>
            <div className="aurora-gradient">
            <div className="header-body">
                <div className="aurora-content">
                <h1 className="aurora-title"> 
                    Equity Value Multiples
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
                        <div>Equity value multiples, serve to assess a company&apos;s relative valuation by comparing its stock price or market capitalization to specific financial metrics. They help investors and analysts gauge how the market values a company&apos;s equity in relation to its earnings, book value, or other fundamental factors. These multiples aid in making informed investment decisions and identifying potentially overvalued or undervalued stocks within an industry or market.</div>
                        <div>The Three Multiples Introduced in this Section:</div>
                        <ul>
                            <li>
                            <strong>PE/Growth</strong> 
                            </li>
                            <li>
                            <strong>Price/Book</strong> 
                            </li>
                            <li>
                            <strong>Price/Sales</strong> 
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
                                        <h6 className='get-started-title'>PE / Growth</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="gap2"></div>

                            <div className='card2'>
                                <div className='card2-content'>
                                    <div>
                                        <p>
                                            The <strong>PE/Growth multiple</strong> is a financial metric used in relative valuation analysis to assess the attractiveness of a stock or a company as an investment. This multiple compares a company&apos;s <strong>Price-to-Earnings (P/E) ratio</strong> to its <strong>Expected Growth Rate</strong>. It is a popular tool among investors because it provides insights into how the market values a company&apos;s earnings relative to its growth potential.
                                        </p>

                                        <p>
                                            Here&apos;s a breakdown of the key components and the value the <strong>PE/Growth multiple</strong> provides to an independent investor making a decision to buy a stock:
                                        </p>

                                        <ol>
                                            <li>
                                            <strong>Price-to-Earnings (P/E) Ratio:</strong>
                                            <ul>
                                                <li>The P/E ratio represents the price of a company&apos;s stock divided by its earnings per share (EPS).</li>
                                                <li>It indicates how much investors are willing to pay for each dollar of earnings generated by the company.</li>
                                            </ul>
                                            </li>

                                            <li>
                                            <strong>Expected Growth Rate:</strong>
                                            <ul>
                                                <li>The Expected Growth Rate represents the anticipated rate at which a company&apos;s earnings are expected to grow in the future.</li>
                                                <li>It reflects the company&apos;s potential for expanding its profitability over time.</li>
                                            </ul>
                                            </li>
                                        </ol>

                                        <p>
                                            The <strong>PE/Growth multiple</strong> offers several advantages to independent investors:
                                        </p>

                                        <ul>
                                            <li><strong>Valuation Perspective:</strong> It provides a valuation perspective by comparing the P/E ratio to the expected growth rate, helping investors assess whether a stock is overvalued or undervalued.</li>
                                            <li><strong>Quality of Earnings:</strong> It can help investors evaluate the quality of a company&apos;s earnings by considering how much they are willing to pay relative to the expected growth rate.</li>
                                            <li><strong>Risk Assessment:</strong> A high PE/Growth multiple may indicate higher growth expectations and may carry higher risk, while a low multiple may suggest lower growth expectations or less risk.</li>
                                        </ul>

                                        <p>
                                            However, it&apos;s important for independent investors to interpret the <strong>PE/Growth multiple</strong> in the context of the industry, company-specific factors, and the broader market. Different industries and companies may have varying norms for this multiple, and it should be used alongside other financial metrics and qualitative analysis for well-informed investment decisions.
                                        </p>

                                        <p>
                                            In summary, the <strong>PE/Growth multiple</strong> is a valuable tool for independent investors in relative valuation because it provides insights into how the market values a company&apos;s earnings relative to its growth potential. However, it should be considered alongside other factors and industry benchmarks to make informed investment decisions.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        
                            <div className="gap2"></div>
    
                            <div className='card2'>
                                <div className='card2-content'>
                                    <PEGrowth />
                                    {/* <Test /> */}
                            </div>
                    </div>
                        <div className="card-body">
                            <div className="gap2"></div>

                            <div className='container-2'>
                                    <div className='get-started'>
                                        <div className='get-started-content'>
                                            <h6 className='get-started-title'>Price / Book</h6>
                                        </div>
                                    </div>
                            </div>
                            <div className="gap2"></div>

                                <div className='card2'>
                                    <div className='card2-content'>
                                    <div>
                                        <p>
                                            The <strong>Price/Book multiple</strong> is a financial metric used in relative valuation analysis to assess the attractiveness of a stock or a company as an investment. This multiple compares a company&apos;s <strong>Price</strong> to its <strong>Book Value</strong>. It is a popular tool among investors because it provides insights into how the market values a company&apos;s assets relative to its market price.
                                        </p>

                                        <p>
                                            Here&apos;s a breakdown of the key components and the value the <strong>Price/Book multiple</strong> provides to an independent investor making a decision to buy a stock:
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
                                            <strong>Book Value:</strong>
                                            <ul>
                                                <li>Book Value represents the net asset value of a company, calculated by subtracting its total liabilities from its total assets.</li>
                                                <li>It provides an estimate of the intrinsic value of a company&apos;s assets.</li>
                                            </ul>
                                            </li>
                                        </ol>

                                        <p>
                                            The <strong>Price/Book multiple</strong> offers several advantages to independent investors:
                                        </p>

                                        <ul>
                                            <li><strong>Valuation Perspective:</strong> It provides a valuation perspective by comparing the market price of a stock to its book value, helping investors determine whether a stock is overvalued or undervalued.</li>
                                            <li><strong>Asset Assessment:</strong> It can be used to assess how efficiently a company is using its assets. A low multiple may suggest that the market values the company&apos;s assets less than their book value.</li>
                                            <li><strong>Comparative Analysis:</strong> Investors can compare the Price/Book multiples of different companies in the same industry to identify potential investment opportunities.</li>
                                        </ul>

                                        <p>
                                            However, it&apos;s essential for independent investors to interpret the <strong>Price/Book multiple</strong> in the context of the industry, company-specific factors, and the broader market. A low multiple does not always indicate a bargain, and a high multiple may not necessarily mean an overvalued stock.
                                        </p>

                                        <p>
                                            In summary, the <strong>Price/Book multiple</strong> is a valuable tool for independent investors in relative valuation because it provides insights into how the market values a company&apos;s assets. However, it should be used alongside other financial metrics and qualitative analysis to make well-informed investment decisions.
                                        </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="gap2"></div>

                                <div className='card2'>
                                    <div className='card2-content'>
                                        <PricetoBook />
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="gap2"></div>

                        <div className='container-2'>
                                    <div className='get-started'>
                                        <div className='get-started-content'>
                                            <h6 className='get-started-title'>Price / Sales</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="gap2"></div>

                                <div className='card2'>
                                    <div className='card2-content'>
                                    <div>
                                        <p>
                                            The <strong>Price/Sales multiple</strong> is a financial metric used in relative valuation analysis to assess the attractiveness of a stock or a company as an investment. This multiple compares a company&apos;s <strong>Price</strong> to its <strong>Sales</strong>. It is a popular tool among investors because it provides insights into how the market values a company&apos;s revenue generation potential.
                                        </p>

                                        <p>
                                            Here&apos;s a breakdown of the key components and the value the <strong>Price/Sales multiple</strong> provides to an independent investor making a decision to buy a stock:
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
                                            <strong>Sales:</strong>
                                            <ul>
                                                <li>Sales, also known as revenue, represents the total income generated by a company from its core operations.</li>
                                                <li>It is a crucial indicator of a company&apos;s top-line performance and growth potential.</li>
                                            </ul>
                                            </li>
                                        </ol>

                                        <p>
                                            The <strong>Price/Sales multiple</strong> offers several advantages to independent investors:
                                        </p>

                                        <ul>
                                            <li><strong>Valuation Perspective:</strong> It provides a valuation perspective by comparing the market price of a stock to its sales, helping investors determine whether a stock is overvalued or undervalued.</li>
                                            <li><strong>Risk Assessment:</strong> It can be used to assess the risk associated with an investment, as a high multiple may indicate higher expectations for future sales, while a low multiple may signal lower expectations or higher risk.</li>
                                            <li><strong>Comparative Analysis:</strong> Investors can compare the Price/Sales multiples of different companies in the same industry to identify potential investment opportunities.</li>
                                        </ul>

                                        <p>
                                            However, it&apos;s essential for independent investors to interpret the <strong>Price/Sales multiple</strong> in the context of the industry, company-specific factors, and the broader market. A low multiple does not always indicate a bargain, and a high multiple may not necessarily mean an overvalued stock.
                                        </p>

                                        <p>
                                            In summary, the <strong>Price/Sales multiple</strong> is a valuable tool for independent investors in relative valuation because it provides insights into how the market values a company&apos;s sales. However, it should be used alongside other financial metrics and qualitative analysis to make well-informed investment decisions.
                                        </p>
                                    </div>


                                    </div>
                                </div>
                                <div className="gap2"></div>
                                <div className='card2'>
                                    <div className='card2-content'>
                                        <PricetoSales />
                                    </div>
                                </div>
                            </div>
                    <div className="gap2"></div>
                </PersistGate>
            </Provider >
            <Row>
          <Col span={8}>
            <SparkleButton2 onClick={handleNextPage}/>

          </Col>
          <Col span={8} offset={8}>
            <SparkleButton7 onClick={handlePreviousPage}/>

          </Col>
        </Row>
        </div>
    )
}

export default EquityValueMultiples