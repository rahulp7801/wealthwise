// import React, { useState } from 'react';
// import { AutoComplete, Button } from 'antd';
// import axios from 'axios';

// const apiKey = 'AMXAOB5BNQ7TZK65';

// const StockSelector = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedStocks, setSelectedStocks] = useState([]);
//   const [selectedStock, setSelectedStock] = useState(null);
//   const [options, setOptions] = useState([]);

//   const apiUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&apikey=${apiKey}`;

//   const handleStockInputChange = (value) => {
//     setStockInput(value);
//     handleSearchStocks(value);
//   };

//   const handleSearchStocks = async (value) => {
//     try {
//       const response = await axios.get(`${apiUrl}&keywords=${value}`);
//       setSearchResults(response.data.bestMatches);
//       const stockOptions = response.data.bestMatches.map((result) => ({
//         value: result['1. symbol'],
//         label: `${result['2. name']} (${result['1. symbol']})`,
//       }));
//       setOptions(stockOptions);
//     } catch (error) {
//       console.error('Error fetching stock data:', error);
//     }
//   };

//   const handleSelectStock = (value) => {
//     const stock = searchResults.find((result) => result['1. symbol'] === value);
//     if (stock) {
//       setSelectedStock(stock);
//     }
//   };

//   const handleSubmit = () => {
//     if (selectedStock) {
//       setSelectedStocks([...selectedStocks, selectedStock]);
//       setStockInput('');
//       setSelectedStock(null);
//     }
//   };

//   return (
//     <div>
//       <h1>Stock Selector</h1>
//       <div>
//         <AutoComplete
//           style={{ width: 300 }}
//           options={options}
//           onSelect={handleSelectStock}
//           onSearch={handleStockInputChange}
//           placeholder="Search for a stock"
//         />
//       </div>
//       <div>
//         <Button type="primary" onClick={handleSubmit}>
//           Submit
//         </Button>
//       </div>
//       <div>
//         <h2>Selected Stocks</h2>
//         <ul>
//           {selectedStocks.map((stock) => (
//             <li key={stock['1. symbol']}>
//               {stock['2. name']} ({stock['1. symbol']})
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default StockSelector;
