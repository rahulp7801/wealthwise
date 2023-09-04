import 'assets/scss/styles.css';
import CompanySearch from 'valuationCourseProps/stockSearch';
import Portstuff from './getportfoliostuff';
import 'assets/scss/header-aurora.css';
import 'assets/scss/stock-select.css'

const LilPortfolioCustomizer  = () => {

  return (
      <div>
        <div className="aurora-gradient">
          <div className="header-body">
            <div className="aurora-content">
              <h1 className="aurora-title">
                Portfolio Customizer
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
        <div className="grid-container3">
            <div className="grid-item2">
                <CompanySearch />
            </div>
            <div className="gird-item3">
                <h1 className="customizer-title"> Portfolio</h1>
                <Portstuff />
            </div>
        </div>
      </div>
  );
};

export default LilPortfolioCustomizer;
