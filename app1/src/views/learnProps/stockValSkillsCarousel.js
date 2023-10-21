// import React from 'react';
// import 'assets/scss/skillCarousel.css'
// import { useNavigate } from 'react-router-dom';
// import SparkleButton1 from 'valuationCourseProps/sparkleButton1';
// import StockSelectButton from './carouselButtons/stockSelectButton';
// const SkillCarousel = () => {
//   const navigate = useNavigate();
//   const handleButtonClick1 = () => {
//     navigate('/icons/pick-stock');
//   };
//   const handleButtonClick2 = () => {
//     navigate('/icons/understand-business')
//   }
//   const handleButtonClick3 = () => {
//     navigate('/icons/financial-kpi')
//   }
//   const handleButtonClick4 = () => {
//     navigate('/icons/rel-val-intro');
//   };
//   const handleButtonClick5 = () => {
//     navigate('/icons/enterprise-multiples')
//   }
//   const handleButtonClick6 = () => {
//     navigate('/icons/equity-multiples')
//   }
//   const handleButtonClick7 = () => {
//     navigate('/icons/discounted-cashflow');
//   };
//   return (
//     <div className='carousel_body'>
//         <main className="main flow">
//         <h1 className="main__heading">Understanding your Business</h1>
//         <div className="main__cards cards">
//             <div className="cards__inner">
//             <div className="cards__card card">
//                 <h2 className="card__heading">STOCK SELECTION</h2>
//                 {/* <p className="card__price">$9.99</p> */}
//                 <ul  className="card__bullets flow">
//                 <li>Begin your journey by choosing the company you want to value.</li>
//                 </ul>
//                 {/* <button onClick={handleButtonClick1} className="card__cta cta">Get Started</button> */}
//                 <StockSelectButton />
//             </div>

//             <div className="cards__card card">
//                 <h2 className="card__heading">OVERVIEW OF THE BUSINESS</h2>
//                 {/* <p className="card__price">$19.99</p> */}
//                 <ul  className="card__bullets flow">
//                 <li>Value Proposition</li>
//                 <li>Industry Analysis</li>
//                 <li>Related News Articles</li>

//                 </ul>
//                 <button onClick={handleButtonClick2} className="card__cta cta">Upgrade to Pro</button>
//             </div>

//             <div className="cards__card card">
//                 <h2 className="card__heading">KEY PERFORMANCE INDICATORS</h2>
//                 {/* <p className="card__price">$29.99</p> */}
//                 <ul  className="card__bullets flow">
//                 <li>Understand basic KPI that are vital to your business</li>
//                 <li>Total Revenue</li>
//                 <li>Profit Margin</li>
//                 <li>Cash Flow from Operations</li>

//                 </ul>
//                 <button onClick={handleButtonClick3} className="card__cta cta">Go Ultimate</button>
//             </div>
//             </div>

//             <div className="overlay cards__inner"></div>
//         </div>
//         <h1 className="main__heading">Relative Valuation</h1>
//         <div className="main__cards cards">
//             <div className="cards__inner">
//             <div className="cards__card card">
//                 <h2 className="card__heading">INTRODUCTION TO RELATIVE VALUATION</h2>
//                 {/* <p className="card__price">$9.99</p> */}
//                 <ul  className="card__bullets flow">
//                 <li>Learn about valuing your company to others in its industry using multiples</li>
//                 <li>Enterprise Multiples</li>
//                 <li>Equity Multiples</li>

//                 </ul>
//                 <button onClick={handleButtonClick4} className="card__cta cta">Get Started</button>
//             </div>

//             <div className="cards__card card">
//                 <h2 className="card__heading">ENTERPRISE VALUE MULTIPLES</h2>
//                 {/* <p className="card__price">$19.99</p> */}
//                 <ul  className="card__bullets flow">
//                 <li>Using enterprise value multiples to analyze your company</li>
//                 <li>EV/EBITDA</li>
//                 <li>Price/Cashflow</li>
//                 <li>EV/Sales</li>
//                 </ul>
//                 <button onClick={handleButtonClick5} className="card__cta cta">Upgrade to Pro</button>
//             </div>

//             <div className="cards__card card">
//                 <h2 className="card__heading">EQUITY VALUE MULTIPLES</h2>
//                 {/* <p className="card__price">$29.99</p> */}
//                 <ul  className="card__bullets flow">
//                 <li>Using equity value multiples to analyze your company</li>
//                 <li>PE/Growth</li>
//                 <li>Price/Book</li>
//                 <li>Price/Sales</li>
//                 </ul>
//                 <button onClick={handleButtonClick6} className="card__cta cta">Go Ultimate</button>
//             </div>
//             </div>
            

//             <div className="overlay cards__inner"></div>
//             <h1 className="main__heading">Intrinsic Valuation</h1>
//         <div className="main__cards cards">
//             <div className="cards__inner">
//             <div className="cards__card card">
//                 <h2 className="card__heading">INTRODUCTION TO INTRINSIC VALUATION</h2>
//                 {/* <p className="card__price">$9.99</p> */}
//                 <ul  className="card__bullets flow">
//                 <li>Learn about valuing your company to others in its industry using multiples</li>
//                 <li>Enterprise Multiples</li>
//                 <li>Equity Multiples</li>

//                 </ul>
//                 <button  className="card__cta cta">Get Started</button>
//             </div>
//             <div className="cards__card card">
//                 <h2 className="card__heading">DISCOUNTED CASHFLOW VALUATION</h2>
//                 {/* <p className="card__price">$9.99</p> */}
//                 <ul  className="card__bullets flow">
//                 <li>Learn about valuing your company to others in its industry using multiples</li>
//                 <li>Enterprise Multiples</li>
//                 <li>Equity Multiples</li>

//                 </ul>
//                 <button onClick={handleButtonClick7} className="card__cta cta">Get Started</button>
//             </div>

            
//             </div>
//             </div>
            

//             <div className="overlay cards__inner"></div>
//         </div>
//         </main>
//     </div>
//   );
// }

// export default SkillCarousel;
