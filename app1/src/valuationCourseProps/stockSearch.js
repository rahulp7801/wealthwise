import React, { useState, useEffect, useRef } from 'react';
import 'assets/scss/CompanySearch.css'; // Import your CSS file
import Axios from 'axios';
const CompanySearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [stockInput, setStockInput] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [userCorrected, setUserCorrected] = useState(false);
  const dropdownRef = useRef(null);
const handleSubmit = () => {


        const portiefortie = localStorage.getItem('portfolio')
        console.log(portiefortie);
        const parsedData = JSON.parse(portiefortie);
        console.log(1, parsedData);

        parsedData[searchResults[0].ticker] = searchResults[0].name;
        console.log(2, parsedData);
        Axios.post('http://localhost:5000/api/post-portfolio-info', {parsedData, "email": localStorage.getItem('userEmail')})
            .then((response) => {
              // Handle the response from the server here
              console.log(response.data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        localStorage.setItem('portfolio', JSON.stringify(parsedData));

        const event = new Event('portfolioChanged');
        window.dispatchEvent(event);


//        console.log(searchResults[0].ticker, searchResults[1])
    };

  useEffect(() => {
    const fetchPolygonData = async () => {
      const apiKey = 'CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble';
      const apiUrl = `https://api.polygon.io/v3/reference/tickers?search=${stockInput}&apiKey=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        setSearchResults(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (stockInput.trim() !== '') {
      fetchPolygonData();
      setDropdownOpen(true);
    } else {
      setSearchResults([]);
      setDropdownOpen(false);
    }
  }, [stockInput]);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleSelectItem = (symbol) => {
    setStockInput(symbol);
    setDropdownOpen(false);
    setUserCorrected(true);
  };

  const handleTextareaChange = (e) => {
    const newText = e.target.value;
    setStockInput(newText);
    setDropdownOpen(newText.trim() !== '' && !userCorrected);
  };

  const handleTextareaBlur = () => {
    if (!stockInput.trim()) {
      setDropdownOpen(false);
    }
  };

  const handleDropdownItemClick = (e, symbol) => {
    e.preventDefault();
    handleSelectItem(symbol);
  };

  return (
    <div className='submit-stock-box'>
      <h2>Enter an Asset</h2>
      <form>
        <div className="user-box">
          <div style={{ position: 'relative' }}>
            <textarea
              ref={dropdownRef}
              value={stockInput}
              onChange={handleTextareaChange}
              onBlur={handleTextareaBlur}
              placeholder="Submit Stock"
              style={{
                background: '#444',
                color: 'white',
                width: '100%',
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
              }}
            />
            {isDropdownOpen && searchResults && searchResults.length > 0 && (
              <ul
                className="dropdown"
                style={{
                  position: 'absolute',
                  top: '70%',
                  left: 0,
                  background: '#666',
                  color: '#ffffff',
                  listStyleType: 'none',
                  padding: '0',
                  margin: '5px 0 0 0',
                  borderRadius: '5px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                {searchResults.slice(0, 4).map((result) => (
                  <li key={result.ticker}>
                    <a
                      href="#"
                      onClick={(e) => {
                        handleDropdownItemClick(e, result.ticker);
                      }}
                      style={{
                        display: 'block',
                        padding: '8px 10px',
                        textDecoration: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                      }}
                    >
                      {result.name} - {result.ticker}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
            <a style={{ marginTop: '20rem' }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

                <button
                    className="submit-button-reset-style"
                    type="button"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </a>
        </div>
      </form>
    </div>
  );
};

export default CompanySearch;