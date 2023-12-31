import 'assets/scss/styles.css';
import 'assets/scss/header-aurora.css';
import 'assets/scss/stock-select.css';
import CompanySearch from 'valuationCourseProps/stockSearch';
// import Portstuff from './getportfoliostuff';
//import Bardie from './BardButton';
import WealthWiseCard from './bardCard';
import StockDisplay from './stockDisplayv2';
import { Row, Col } from 'antd';
// import StockSelector from './stockSearchv2';

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
        <Row gutter={8}>
            {/* Left column for CompanySearch */}
            <Col span={10}>
                <CompanySearch />
            </Col>
            {/* Middle column for WealthWiseCard with added spacing */}
            <Col span={7} >
                <StockDisplay />
            </Col>
            {/* Right column for StockDisplay */}
            <Col span={3}>
                <WealthWiseCard />
            </Col>
        </Row>
</div>
  );
};


export default LilPortfolioCustomizer;