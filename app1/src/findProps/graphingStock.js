import 'assets/scss/portfolioTracker.scss';
import React, { useState, useEffect } from 'react';

const CryptoDetails = (props) => {
    // const { selectedCrypto } = useContext(AppContext).state;
    const [percentChange, setPercentChange] = useState('');

    const [priceData, setPriceData] = useState({ results: [] });
    const symbol = props.selectedStockSymbol;
    console.log("price dAata:", priceData)
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/minute/2023-10-24/2023-10-24?adjusted=true&sort=asc&limit=120&apiKey=CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble`
                );
                const data = await response.json();
                setPriceData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [symbol]);
    useEffect(() => {
        async function fetchStockData2() {
          try {
            const response = await fetch(
              `https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers/${symbol}?apiKey=CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble`
            );
            const data = await response.json();
            const formattedPercentChange = (data.ticker.todaysChangePerc ).toFixed(2);
            setPercentChange(formattedPercentChange);
            setPrice(data.ticker.day.o);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }

        fetchStockData2();
      }, [symbol]);




    return (
        <div id="crypto-details" >
            <div id="crypto-details-content">
                <div id="crypto-fields">
                    {/* ... */}
                </div>
                <h1 id="crypto-details-symbol">{symbol}</h1>
                <div>
                    <StockPriceGraph priceData={priceData} percentChange={percentChange} /> {/* Pass priceData as a prop */}
                </div>
            </div>
        </div>
    );


}

export default CryptoDetails