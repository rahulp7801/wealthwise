import React, { useState, useEffect, useRef } from 'react';

const CompanySearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stockInput, setStockInput] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchAlphaVantageData = async () => {
      const apiKey = 'P0JY4A01Y8RUNKGI';
      const apiUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockInput}&apikey=${apiKey}`;

      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log('Data from API:', data); // Check the API response in the console

        // Assuming the API returns a 'bestMatches' array with company information.
        setSearchResults(data.bestMatches);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    // Call the API only if there is a valid input (stock symbol)
    if (stockInput.trim() !== '') {
      fetchAlphaVantageData();
      setDropdownOpen(true); // Open the dropdown when the user starts typing
    } else {
      // Clear search results when stockInput is empty
      setSearchResults([]);
      setDropdownOpen(false); // Close the dropdown when the input is empty
    }
  }, [stockInput]);

  const handleSelectItem = (symbol) => {
    setStockInput(symbol);
    setDropdownOpen(false); // Close the dropdown after selecting an item
  };

  const handleTextareaChange = (e) => {
    setStockInput(e.target.value);
  };

  const handleTextareaFocus = () => {
    if (searchResults && searchResults.length > 0) {
      setDropdownOpen(true);
    }
  };

  const handleDropdownBlur = () => {
    // Check if the blur event happened within the dropdown before closing it
    if (dropdownRef.current && !dropdownRef.current.contains(document.activeElement)) {
      setDropdownOpen(false);
    }
  };

  return (
    <div>
      <div className='submit-stock-box'>
        <h2>Enter an Asset</h2>
        <form>
          <div className="user-box">
            <textarea
              ref={dropdownRef}
              value={stockInput}
              onChange={handleTextareaChange}
              onFocus={handleTextareaFocus}
              onBlur={handleDropdownBlur}
              placeholder="Submit Stock"
              rows={4}
            />
            {isDropdownOpen && searchResults && searchResults.length > 0 && (
              <div className="dropdown">
                <ul>
                  {searchResults.map((result) => (
                    <li key={result['1. symbol']}>
                      <button
                        type="button"
                        onClick={() => handleSelectItem(result['1. symbol'])}
                      >
                        {result['2. name']} - {result['1. symbol']} - {result['3. type']}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : null /* Remove the previous code to display search results */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanySearch;
