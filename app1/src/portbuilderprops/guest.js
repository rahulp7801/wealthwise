import StockSurvey from "./stockSurveyGuest";
import 'assets/scss/header-aurora.css';
import 'assets/scss/stock-select.css'
const Guest = () => {
  return (
      <div className="card-body">
      <div className="card2">
          <div className="card2-content">
            <h2>Meet Wealth Wise, our proprietary financial advisor! Have a conversation with it to learn more about the financial world! </h2>

          </div>
        </div>
        <div className="card2">
          <div className="card2-content">

            <StockSurvey />
          </div>
        </div>
      </div>
  );
};

export default Guest;
