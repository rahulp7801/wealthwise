import React from 'react';
import 'assets/scss/sparkle-button.css';
import { useNavigate } from 'react-router-dom';

const SparkleButton4 = () => {
    const navigate = useNavigate();
    const handleNextPage = () => {
      navigate('/icons/enterprise-multiples')
    }
    return (
        <div >
            {/* eslint-disable jsx-a11y/click-events-have-key-events */}
            {/* eslint-disable jsx-a11y/no-static-element-interactions  */}
            <div className='sparkle-button' onClick={handleNextPage}>
                <span className="spark"></span>
                <span className="backdrop"></span>
                <span className="text">EnterpriseMultiples</span>
            </div>
            <div className="bodydrop"></div>
        </div>
    )
}
export default SparkleButton4