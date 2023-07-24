import React from 'react';
import 'assets/scss/styles.css';
import 'assets/scss/style.scss';
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/guest');
  };
  const lilButtonClick = () => {
    navigate('/customize')
  };

  return (
    <div>
        <div className="top-active-stocks-container">
          Portfolio Builder
        </div>
        <div className="grid-container2">
            <div className="grid-item2">
                <button onClick={handleButtonClick} className='submit-button-reset-style '>
                    <div className='get-started-button'>
                        <div className='get-started-content-button'>
                          <h4 className='get-started-title-button'>
                            Artifical Intelligence: Guest Mode
                          </h4>
                          <h10 className='get-started-subheading-button'>
                            Engage our advanced AI software to inquire about financial matters, gaining deeper market acumen, thus empowering you to make astute investment choices. Maximize your potential by leveraging cutting-edge insights for smarter decisions.
                          </h10>
                        </div>
                    </div>
                </button>
            </div>

            <div className="grid-item3">
                <button onClick={lilButtonClick} className='submit-button-reset-style '>
                    <div className='get-started-button'>
                        <div className='get-started-content-button'>
                          <h4 className='get-started-title-button'>
                            Artifical Intelligence: User Mode
                          </h4>
                          <h10 className='get-started-subheading-button'>
                            Harness the power of specialized artificial intelligence software to elevate your portfolio. Input your holdings and gain invaluable insights to make well-informed financial decisions, shaping a prosperous future for your investments.
                          </h10>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
  );
};

export default MyComponent;
