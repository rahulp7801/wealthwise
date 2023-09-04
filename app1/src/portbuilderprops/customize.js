import 'assets/scss/styles.css';
import CompanySearch from 'valuationCourseProps/stockSearch';
import Portstuff from './getportfoliostuff';
import 'assets/scss/header-aurora.css';
import 'assets/scss/stock-select.css';
import Bardie from './BardButton';

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
                <div className="gap2"></div>

                <div className="skill-grid-container">
                  <div className="skill-item">
                    <Bardie />
                    <div className="gap2"></div>
                    <Portstuff />
                  </div>
                </div>

            </div>
        </div>
      </div>
  );
};

export default LilPortfolioCustomizer;
