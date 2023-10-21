import React from 'react';
import 'assets/scss/sparkle-button.css';
import { useNavigate } from 'react-router-dom';

const StockSelectButton = () => {
    const navigate = useNavigate();
    const handleNextPage = () => {
      navigate('/icons/pick-stock')
    }
    return (
        <div >
            {/* eslint-disable jsx-a11y/click-events-have-key-events */}
            {/* eslint-disable jsx-a11y/no-static-element-interactions  */}
            <div className='sparkle-button' onClick={handleNextPage}>
                <span className="spark"></span>
                <span className="backdrop"></span>
                <span className="text">Get Started!</span>
            </div>
            <div className="bodydrop"></div>
        </div>
    )
}
export default StockSelectButton