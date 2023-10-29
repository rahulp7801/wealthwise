import React, { useState, useEffect, createContext, useRef  } from 'react';
import axios from 'axios';
import classNames from 'classnames'; // Please install 'classnames' package if not already
// import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from 'chart.js';
import 'assets/scss/portfolioTracker.scss';


const AppContext = createContext();

const CoinGeckoApi = {
  AllCoins: "coins/markets?vs_currency=usd&page=1&per_page=30&sparkline=false",
  Base: "https://api.coingecko.com/api/v3"
};




const RequestStatus = {
  Error: "Error",
  Idle: "Idle",
  Loading: "Loading",
  Success: "Success"
};

//const Color = {
//  Green: "76, 175, 80",
//  Red: "198, 40, 40"
//};
// const CryptoListToggle = () => {
//   const { state, toggleList } = React.useContext(AppContext);

//   if (state.status === RequestStatus.Success && state.cryptos.length > 0) {
//     const classes = classNames("fa-regular", {
//       "fa-bars": !state.listToggled,
//       "fa-xmark": state.listToggled
//     });

//     return (
//       <button
//         id="crypto-list-toggle-button"
//         onClick={() => toggleList(!state.listToggled)}
//       >
//         <i className={classes} />
//       </button>
//     );
//   }

//   return null;
// }



  // const specificStocks = [
  //   { symbol: 'MSFT' },
  //   { symbol: 'GOOGL' },
  //   { symbol: 'TSLA' },
  //   { symbol: 'LLY' },
  //   { symbol: 'GM' },


  // ];
  // const portielortie = localStorage.getItem('portfolio');
  // console.log(portielortie)
  const portielortie = localStorage.getItem('portfolio');
  console.log(portielortie)
    // Parse the JSON data
  const parsedData = JSON.parse(portielortie);

  // Extract symbols (keys) from the parsed data
  const symbols = Object.keys(parsedData);

  // Create an array of objects with symbols
  const portfolioArray = symbols.map(symbol => ({ symbol }));
  const StockListItem = (props) => {
    const { state, selectStock } = React.useContext(AppContext);
    const { symbol } = props;

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [percentChange, setPercentChange] = useState('');

  useEffect(() => {
    async function fetchStockData() {
        const response = await fetch(
          `https://api.polygon.io/v3/reference/tickers/${symbol}?apiKey=CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble`
        );
        const data = await response.json();
        const nameWords = data.results.name.split(' ');
        const truncatedName = nameWords.slice(0, 2).join(' ');
        setName(truncatedName);
        var logoUrl = ""
        try {
            logoUrl = `${data.results.branding.icon_url}?apiKey=CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble`;
        } catch (err) {
            logoUrl = 'https://t3.ftcdn.net/jpg/02/81/14/10/360_F_281141027_p3QurYdJnzbnf3Aola5uu0X6ElC5zVpf.jpg'
        }
        console.log(logoUrl + "\nLOGO URL");
        setImage(logoUrl);
    }

    fetchStockData();
  }, [symbol]);

  useEffect(() => {
    async function fetchStockData2() {
      try {
        const response = await fetch(
          `https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers/${symbol}?apiKey=CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble`
        );
        const data = await response.json();
        const formattedPercentChange = (data.ticker.todaysChangePerc ).toFixed(2) + '%';
        setPercentChange(formattedPercentChange);
        setPrice(data.ticker.day.o);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchStockData2();
  }, [symbol]);

  const getClasses = () => {
    const selected = state.selectedStock && state.selectedStock.symbol === symbol;
    return classNames('stock-list-item', { selected });
  };

  return (
    <button type="button" className={getClasses()} onClick={() => {
      // Log the stock state when a button is clicked
      selectStock(symbol)
    }}>
      <div className="stock-list-item-background">
        <h1 className="stock-list-item-symbol">{symbol}</h1>
        <img className="stock-list-item-background-image" src={image} alt={`${symbol} Logo`} />
      </div>
      <div className="stock-list-item-content">
        <img className="stock-list-item-image" src={image} alt={`${symbol} Logo`} />
        <div className="stock-list-item-details">
          <h1 className="stock-list-item-name">{name}</h1>
          <h1 className="stock-list-item-price"><strong> Current Price: $</strong>{price}</h1>
          <h1 className="stock-list-item-price"><strong>Percent Change: </strong>{percentChange}</h1>
        </div>
      </div>
    </button>
  );
};
const StockList = () => {
  const { state } = React.useContext(AppContext);
  const [specificStocks, setSpecificStocks] = useState([]);
  const [selectedStockSymbol, setSelectedStockSymbol] = useState('');

  useEffect(() => {
    // Retrieve data from local storage
    const portielortie = localStorage.getItem('portfolio');

    // Parse the JSON data
    const parsedData = JSON.parse(portielortie);

    // Extract symbols (keys) from the parsed data
    const symbols = Object.keys(parsedData);

    // Create an array of objects with symbols
    const portfolioArray = symbols.map(symbol => ({ symbol }));
    console.log(portfolioArray)
    setSpecificStocks(portfolioArray);

    if (portfolioArray.length > 0) {
      // Set the selected stock symbol to the first symbol in the portfolioArray
      setSelectedStockSymbol(portfolioArray[0].symbol);
    }

  }, []);

  if (state.status === RequestStatus.Success && specificStocks.length > 0) {
    return (
      <div id="stock-list">
        {specificStocks.map((item) => (
          <StockListItem key={item.symbol} symbol={item.symbol} />
        ))}
      </div>
    );
  }

  return console.log(selectedStockSymbol);
};

const CryptoUtility = {
  formatPercent(value) {
    return (value / 100).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 2 });
  },
  formatUSD(value) {
    return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
  },
  getByID(id, cryptos) {
    return cryptos.find(crypto => crypto.id === id) || null;
  },
  map(data) {
    return {
      change: data.price_change_percentage_24h,
      id: data.id,
      image: data.image,
      marketCap: this.formatUSD(data.market_cap),
      name: data.name,
      price: this.formatUSD(data.current_price),
      rank: data.market_cap_rank,
      supply: data.circulating_supply.toLocaleString(),
      symbol: data.symbol,
      volume: this.formatUSD(data.total_volume)
    }
  },
  mapAll(data) {
    return data.map(item => this.map(item));
  }
};

// const CryptoField = (props) => {
//   return (
//     <div className={classNames("crypto-field", props.className)}>
//       <h1 className="crypto-field-value">{props.value}</h1>
//       <h1 className="crypto-field-label">{props.label}</h1>
//     </div>
//   );
// }

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

  
  // const [state, setState] = useState({
  //   crypto: null,
  //   transitioning: true
  // });

  // const setTransitioning = (transitioning) => {
  //   setState(prevState => ({ ...prevState, transitioning }));
  // }

  // const { crypto } = state;

  

  

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






// const StockPriceGraph = ({priceData}) => {
//     // You don't need to declare a local priceData state variable here
//     // It's already passed as a prop

//     // You can access selectedStockSymbol directly if needed
//     // console.log("Selected Stock Symbol:", selectedStockSymbol);

//     return (
//         <div id="crypto-price-chart-wrapper">
//             <div>
//                 <PriceChart id="crypto-price-chart" priceData={priceData}  /> {/* Pass priceData as a prop */}
//             </div>
//         </div>
//     );
// };
const StockPriceGraph = ({ priceData, percentChange }) => {
    const canvasRef = useRef(null);
    const animationFrameRef = useRef(null);
    console.log("percent change", percentChange)
    const lineColor = percentChange >= 0 ? 'green' : 'red';
    const fillColor = percentChange >= 0 ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)';
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      let animationStartTime;
      const animationDuration = 1000; // 1 second animation
  
      const renderFrame = (timestamp) => {
        if (!animationStartTime) {
          animationStartTime = timestamp;
        }
        const progress = (timestamp - animationStartTime) / animationDuration;
      
        if (progress < 1) {
          // Clear the canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);
      
          const openingPrices = priceData.results.map((item) => item.o);
          const labels = openingPrices.map((_, index) => (index + 1).toString());
      
          const minY = Math.min(...openingPrices);
          const maxY = Math.max(...openingPrices);
      
          
      
          const suggestedMin = minY - 1;
          const suggestedMax = maxY + 1;
      
          // Calculate the new position for each point based on the progress
          const width = canvas.width;
          const height = canvas.height;
          const stepX = width / (labels.length - 1);
          const stepY = (height - 40) / (suggestedMax - suggestedMin);
      
          // Begin the path for the fill
          ctx.beginPath();
          ctx.moveTo(0, height - (openingPrices[0] - suggestedMin) * stepY * progress);
          
          for (let i = 1; i < openingPrices.length; i++) {
            const yPos = height - (openingPrices[i] - suggestedMin) * stepY * progress;
            ctx.lineTo(i * stepX, yPos);
          }
          
          // Close the path by connecting the last point to the bottom of the chart
          ctx.lineTo((openingPrices.length - 1) * stepX, height);
          ctx.lineTo(0, height);
          
          ctx.fillStyle = fillColor; // Light green fill color
          ctx.fill();
          
          // Draw the line on top of the filled area
          ctx.beginPath();
          ctx.moveTo(0, height - (openingPrices[0] - suggestedMin) * stepY * progress);
          
          for (let i = 1; i < openingPrices.length; i++) {
            const yPos = height - (openingPrices[i] - suggestedMin) * stepY * progress;
            ctx.lineTo(i * stepX, yPos);
          }
          
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 2;
          ctx.stroke();
      
          animationFrameRef.current = requestAnimationFrame(renderFrame);
        }
      };
      
  
      if (priceData.results && priceData.results.length > 0) {
        animationFrameRef.current = requestAnimationFrame(renderFrame);
      }
  
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [priceData]);
  
    return (
      <div id='crypto-price-chart-wrapper'>
         <canvas id='crypto-price-chart' ref={canvasRef} width={700} height={1000} style={{ marginBottom: '500px' }}></canvas>
      </div>
    );
  };
  


// const CryptoPriceChart = (props) => {
//   const { selectedCrypto: crypto } = useContext(AppContext).state;

//   const id = "crypto-price-chart";

//   const [state, setState] = useState({
//     chart: null,
//     points: [],
//     status: RequestStatus.Loading
//   });

//   const setStatus = (status) => {
//     setState(prevState => ({ ...prevState, status }));
//   }

//   const setChart = (chart) => {
//     setState(prevState => ({ ...prevState, chart }));
//   }

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setStatus(RequestStatus.Loading);

//         const res = await axios.get(ChartUtility.getUrl(crypto.id));

//         setState(prevState => ({
//           ...prevState,
//           points: ChartUtility.mapPoints(res.data),
//           status: RequestStatus.Success
//         }));
//       } catch (err) {
//         console.error(err);

//         setStatus(RequestStatus.Error);
//       }
//     }

//     fetchData();
//   }, [crypto]);

//   useEffect(() => {
//     if(!state.chart && state.status === RequestStatus.Success) {
//       setChart(ChartUtility.draw(id, state.points, crypto.change));
//     }
//   }, [state.status]);

//   useEffect(() => {
//     if(state.chart) {
//       const update = () => ChartUtility.update(state.chart, state.points, crypto.change);

//       update();
//     }
//   }, [state.chart, state.points]);

// //   const renderLoadingSpinner = () => {
// //     if(state.status === RequestStatus.Loading) {
// //       return (
// //         <div id="crypto-price-chart-loading-spinner">
// //           <LoadingSpinner />
// //         </div>
// //       );
// //     }
// //   }

//   return (
//     <div id="crypto-price-chart-wrapper">
//       <canvas id={id} />
//       {/* {renderLoadingSpinner()} */}
//     </div>
//   );
// }

//const ChartUtility = {
//  draw(id, points, change) {
//    const canvas = document.getElementById(id);
//
//    if (canvas) {
//      const context = canvas.getContext("2d");
//      return new ChartJS(context, {
//        type: "line",
//        data: {
//          datasets: [{
//            data: points.map(point => point.price),
//            ...this.getDatasetOptions(change)
//          }],
//          labels: points.map(point => point.timestamp)
//        },
//        options: this.getOptions(points)
//      });
//    }
//  },
//  getDatasetOptions(change) {
//    const color = change >= 0 ? Color.Green : Color.Red;
//
//    return {
//      backgroundColor: "rgba(" + color + ", 0.1)",
//      borderColor: "rgba(" + color + ", 0.5)",
//      fill: true,
//      tension: 0.2,
//      pointRadius: 0
//    };
//  },
//  getOptions(points) {
//    const min = Math.min(...points.map(point => point.price)),
//          max = Math.max(...points.map(point => point.price));
//
//    return {
//      maintainAspectRatio: false,
//      responsive: true,
//      scales: {
//        x: {
//          display: false,
//          gridLines: {
//            display: false
//          }
//        },
//        y: {
//          display: false,
//          gridLines: {
//            display: false
//          },
//          suggestedMin: min * 0.98,
//          suggestedMax: max * 1.02
//        }
//      },
//      plugins: {
//        legend: {
//          display: false
//        },
//        title: {
//          display: false
//        }
//      }
//    };
//  },
//  getUrl(id) {
//    return `${CoinGeckoApi.Base}/coins/${id}/market_chart?vs_currency=usd&days=1`;
//  },
//  mapPoints(data) {
//    return data.prices.map(price => ({
//      price: price[1],
//      timestamp: price[0]
//    }));
//  },
//  update(chart, points, change) {
//    chart.options = this.getOptions(points);
//
//    const options = this.getDatasetOptions(change);
//
//    chart.data.datasets[0].data = points.map(point => point.price);
//    chart.data.datasets[0].backgroundColor = options.backgroundColor;
//    chart.data.datasets[0].borderColor = options.borderColor;
//    chart.data.datasets[0].pointRadius = options.pointRadius;
//
//    chart.data.labels = points.map(point => point.timestamp);
//
//    chart.update();
//  }
//};


const PortfolioDisplay = () => {
    const [selectedStockSymbol, setSelectedStockSymbol] = useState(''); // Step 1
  
    const [state, setState] = useState({
      cryptos: [],
      listToggled: true,
      selectedCrypto: null,
      status: RequestStatus.Loading
    });
  
    const setStatus = (status) => {
      setState({ ...state, status });
    }
  
    const selectCrypto = (id) => {
      setState({
        ...state,
        listToggled: window.innerWidth > 800,
        selectedCrypto: CryptoUtility.getByID(id, state.cryptos)
      });
    }
  
    const selectStock = (symbol) => {
      setSelectedStockSymbol(symbol); // Step 2
    }

  const toggleList = (listToggled) => {
    setState({ ...state, listToggled });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus(RequestStatus.Loading);

        const res = await axios.get(`${CoinGeckoApi.Base}/${CoinGeckoApi.AllCoins}`);

        setState({
          ...state,
          cryptos: CryptoUtility.mapAll(res.data),
          status: RequestStatus.Success
        });
      } catch (err) {
        console.error(err);
        setStatus(RequestStatus.Error);
      }
    }

    fetchData();
  }, []);
  useEffect(() => {
    if (state.status === RequestStatus.Success) {
      // Select the first stock in the specificStocks list
      selectStock(portfolioArray[0].symbol);
    }
  }, [state.status]);
  useEffect(() => {
    if(state.status === RequestStatus.Success && state.cryptos.length > 0) {
      selectCrypto(state.cryptos[0].id);
    }
  }, [state.status]);

//   const renderLoadingSpinner = () => {
//     if(state.status === RequestStatus.Loading) {
//       return <LoadingSpinner />;
//     }
//   }

  ChartJS.register(CategoryScale);


  return (
    <AppContext.Provider value={{ state, selectCrypto, setState, toggleList, selectStock  }}>
      <div id="app" className={classNames({ "list-toggled": state.listToggled })}>
        <StockList />
        <CryptoDetails selectedStockSymbol={selectedStockSymbol}/>
        {/* <CryptoPriceChart  /> */}
        
        {/* <StockPriceGraph  /> */}

        {/* <CryptoListToggle /> */}
        {/* {renderLoadingSpinner()} */}
      </div>
    </AppContext.Provider>

  );
}

export default PortfolioDisplay;