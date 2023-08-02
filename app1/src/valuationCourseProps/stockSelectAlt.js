// import React, { useState } from 'react';

// const AlphaVantageSearchComponent = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [userChoice, setUserChoice] = useState('');

//   const apiKey = 'P0JY4A01Y8RUNKGI';

//   const handleSearchChange = (event) => {
//     const { value } = event.target;
//     setSearchTerm(value);
//     if (value.trim() !== '') {
//       fetchStockSymbols(value);
//     } else {
//       setSearchResults([]);
//     }
//   };

//   const handleUserChoice = (symbol) => {
//     setUserChoice(`${symbol} is cool`);
//   };

//   const fetchStockSymbols = (searchTerm) => {
//     const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=${apiKey}`;

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.bestMatches) {
//           setSearchResults(data.bestMatches);
//         } else {
//           setSearchResults([]);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching stock symbols:', error);
//         setSearchResults([]);
//       });
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search Stock Symbols"
//         value={searchTerm}
//         onChange={handleSearchChange}
//       />
//       <ul>
//         {searchResults.map((result) => (
//           <li key={result['1. symbol']} onClick={() => handleUserChoice(result['1. symbol'])}>
//             {result['1. symbol']} - {result['2. name']}
//           </li>
//         ))}
//       </ul>
//       {userChoice && <p>{userChoice}</p>}
//     </div>
//   );
// };

// export default AlphaVantageSearchComponent;
