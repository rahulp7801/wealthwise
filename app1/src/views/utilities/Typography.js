import React from 'react';
import 'assets/scss/styles.css';
import 'assets/scss/style.scss';
import 'assets/scss/header-aurora.css';

import { useNavigate } from 'react-router-dom';
// ==============================|| TYPOGRAPHY ||============================== //

//const Typography = () => (
//  <div  className= 'body' style={{height: '100%', width: "100%", display: 'flexbox'}}>
//    <PortfolioDisplay />
//    </div>
//
//
//);

const Typography = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/portfoliodisplay');
  };
  const lilButtonClick = () => {
    navigate('/addingnewStocks')
  };

  return (
    <div>
        <div className="aurora-gradient">
            <div className="header-body">
                <div className="aurora-content">
                <h1 className="aurora-title">
                    Find and Analyze Stocks
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
            <div className="gap2"></div>

        <div className="grid-container2">
            <div className="grid-item2">
                <button onClick={handleButtonClick} className='submit-button-reset-style '>
                    <div className='get-started-button'>
                        <div className='get-started-content-button'>
                          <h4 className='get-started-title-button' style={{ textAlign: 'center' }}>
                            Check Your Portfolio Performance
                          </h4>
                          <h10 className='get-started-subheading-button'>
                            Catch real-time insights! Click to track your portfolio performance effortlessly, staying updated on investments, gains, and trends. Your financial journey, simplified.
                          </h10>
                        </div>
                    </div>
                </button>
            </div>

            <div className="grid-item3">
                <button onClick={lilButtonClick} className='submit-button-reset-style '>
                    <div className='get-started-button'>
                        <div className='get-started-content-button' style={{ textAlign: 'center' }}>
                          <h4 className='get-started-title-button'>
                            Add New Stocks to your Portfolio
                          </h4>
                          <h10 className='get-started-subheading-button'>
                            Explore any stock instantly! Enter the ticker symbol and dive into comprehensive data – price trends, company info, and news. Empower your investment decisions with a single click.                          </h10>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
  );
};
export default Typography;
