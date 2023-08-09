// import React, { useState } from 'react';
// import StockSurvey from './stockSurveyv2';

// const SurveyForm = () => {
//   const [ans1, setAns1] = useState("");
//   const [ans2, setAns2] = useState("");
//   const [ans3, setAns3] = useState("");
//   const [ans4, setAns4] = useState("");
//   const [ans5, setAns5] = useState("");
//   const [ans6, setAns6] = useState("");
//   const [ans7, setAns7] = useState("");
//   const [ans8, setAns8] = useState("");
//   const [ans9, setAns9] = useState("");
//   const [ans10, setAns10] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Construct APIBody and pass answers to StockSurvey component
//     const answers = {
//       ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10
//     };

//     // Call the StockSurvey component with answers
//     await StockSurvey(answers);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           1. What is your investment goal?
//           <input type="text" value={ans1} onChange={(e) => setAns1(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           2. What is your risk tolerance level?
//           <input type="text" value={ans2} onChange={(e) => setAns2(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           3. How long do you plan to invest?
//           <input type="text" value={ans3} onChange={(e) => setAns3(e.target.value)} />
//         </label>
//         <br />
//         {/* Repeat similar code for the other questions */}
//         <label>
//           4. Do you have an investment budget or a set amount you'd like to invest?
//           <input type="text" value={ans4} onChange={(e) => setAns4(e.target.value)} />
//         </label>
//         <br />
//         {/* ... */}
//         <label>
//           5. Are there any sectors or industries you are particularly interested in?
//           <input type="text" value={ans5} onChange={(e) => setAns5(e.target.value)} />
//         </label>
//         <br />
//         {/* ... */}
//         <label>
//           6. Are you interested in income (dividends) or growth (increases in the stock price) investments?
//           <input type="text" value={ans6} onChange={(e) => setAns6(e.target.value)} />
//         </label>
//         <br />
//         {/* ... */}
//         <label>
//           7. Do you want to invest in international stocks or prefer to stick to domestic ones?
//           <input type="text" value={ans7} onChange={(e) => setAns7(e.target.value)} />
//         </label>
//         <br />
//         {/* ... */}
//         <label>
//           8. Do you have any ethical or social criteria for the companies you invest in?
//           <input type="text" value={ans8} onChange={(e) => setAns8(e.target.value)} />
//         </label>
//         <br />
//         {/* ... */}
//         <label>
//           9. Are you interested in passive investment (like Index Funds, ETFs) or active investment (stocks picked based on research and analysis)?
//           <input type="text" value={ans9} onChange={(e) => setAns9(e.target.value)} />
//         </label>
//         <br />
//         {/* ... */}
//         <label>
//           10. How actively involved do you want to be in managing your investments?
//           <input type="text" value={ans10} onChange={(e) => setAns10(e.target.value)} />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default SurveyForm;
