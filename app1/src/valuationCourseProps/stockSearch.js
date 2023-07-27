import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const CompanySearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiData = useSelector((state) => state.apiData);

  useEffect(() => {
    const fetchAlphaVantageData = async () => {
      const apiKey = 'AMXAOB5BNQ7TZK65';
      const apiUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${apiData}&apikey=${apiKey}`;
      console.log(apiData)
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Assuming the API returns a 'bestMatches' array with company information.
        setSearchResults(data.bestMatches);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlphaVantageData();
  }, [apiData]);

  return (
    <div className='survey-card'>
      {loading ? (
        <p>Loading...</p>
      ) : searchResults.length > 0 ? ( 
        <>
          <div>
            <p>{searchResults[0]['2. name']} - {searchResults[0]['1. symbol']} - {searchResults[0]['3. type']}</p>
            
          </div>
        </>
      ) : (
        <p>No results found.</p>
      )}
    </div>

  );
};



export default CompanySearch;
 