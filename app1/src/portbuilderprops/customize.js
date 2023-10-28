import 'assets/scss/styles.css';
import CompanySearch from 'valuationCourseProps/stockSearch';
// import Portstuff from './getportfoliostuff';
import 'assets/scss/header-aurora.css';
import 'assets/scss/stock-select.css';
import Bardie from './BardButton';
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
        <Row gutter={0}>
        {/* Left column for CompanySearch */}
        <Col span={16}>
            {/* <CompanySearch /> */}
            <CompanySearch />
        </Col>
        {/* Right column for Bardie and StockDisplay */}
        <Col span={8}>
            <div className="gap2"></div>
                <WealthWiseCard />
                {/* <TextEffectComponent /> */}
                <div className="gap2"></div>
                <StockDisplay />
        </Col>
      </Row>
    </div>
  );
};


export default LilPortfolioCustomizer;
