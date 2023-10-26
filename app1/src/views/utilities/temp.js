import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import classNames from 'classnames'; // Please install 'classnames' package if not already
// import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from 'chart.js';
import 'assets/scss/portfolioTracker.scss';
// const apiKey = "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";

const AppContext = createContext();

const CoinGeckoApi = {
  AllCoins: "coins/markets?vs_currency=usd&page=1&per_page=30&sparkline=false",
  Base: "https://api.coingecko.com/api/v3"
};



const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-wrapper">
      <div className="loading-spinner">
        <i className="fa-regular fa-spinner-third" />
      </div>
    </div>
  );
}

const RequestStatus = {
  Error: "Error",
  Idle: "Idle",
  Loading: "Loading",
  Success: "Success"
};

const Color = {
  Green: "76, 175, 80",
  Red: "198, 40, 40"
};

const CryptoListToggle = () => {
  const { state, toggleList } = React.useContext(AppContext);

  if (state.status === RequestStatus.Success && state.cryptos.length > 0) {
    const classes = classNames("fa-regular", {
      "fa-bars": !state.listToggled,
      "fa-xmark": state.listToggled
    });

    return (
      <button
        id="crypto-list-toggle-button"
        onClick={() => toggleList(!state.listToggled)}
      >
        <i className={classes} />
      </button>
    );
  }

  return null;
}

const CryptoListItem = (props) => {
  const { state, selectCrypto } = React.useContext(AppContext);
  const { symbol } = props;
  const [selectedSymbol, setSelectedSymbol] = useState("")
  const handleItemClick = () => {
    setSelectedSymbol(symbol);
    console.log("Selected Symbol:", selectedSymbol);

    // You may also perform other actions when an item is selected
  };
  // const { symbol } = props; // Get the stock symbol from props
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [percentChange, setPercentChange] = useState("");

  useEffect(() => {
    async function fetchStockData() {
      try {
        const response = await fetch(
          `https://api.polygon.io/v3/reference/tickers/${symbol}?apiKey=CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble`
        );
        const data = await response.json();
        setName(data.results.name);
        const logoUrl = `${data.results.branding.logo_url}?apiKey=CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble`;
        setImage(logoUrl);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchStockData();
  }, [symbol]); // Pass symbol as a dependency to fetch data when it changes

  useEffect(() => {
    async function fetchStockData2() {
      try {
        const response = await fetch(
          `https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers/${symbol}?apiKey=CPgjfwDJOutj46KdeJhwtHC2UfQL5Ble`
        );
        const data = await response.json();
        const formattedPercentChange = (data.ticker.todaysChangePerc).toFixed(2) + '%';
        setPercentChange(formattedPercentChange);
        setPrice(data.ticker.day.o);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchStockData2();
  }, [symbol]);
  
  const getClasses = () => {
    const selected = state.selectedCrypto && state.selectedCrypto.id === crypto.id;

    return classNames("crypto-list-item", { selected });
  };

  return (
    <button type="button" className={getClasses()} onClick={handleItemClick}>
      <div className="crypto-list-item-background">
        <h1 className="crypto-list-item-symbol">{symbol}</h1>
        <img className="crypto-list-item-background-image" src={image} />
      </div>
      <div className="crypto-list-item-content">
        {/* <h1 className="crypto-list-item-rank">{crypto.rank}</h1> */}
        <img className="crypto-list-item-image" src={image} />
        <div className="crypto-list-item-details">
          <h1 className="crypto-list-item-name">{name}</h1>
          <h1 className="crypto-list-item-price">{price}</h1>
          <h1 className="crypto-list-item-price">{percentChange}</h1>
        </div>
      </div>
    </button>
  );
}

const CryptoList = () => {
  const { state } = React.useContext(AppContext);

  // Define an array of 30 stock symbols
  const stockSymbols = ["AAPL", "GOOGL", "MSFT", "TSLA", "AMZN"];
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  if (state.status === RequestStatus.Success && stockSymbols.length > 0) {
    return (
      <div id="crypto-list">
        {stockSymbols.map((symbol) => (
          <React.Fragment key={symbol}>
            <CryptoListItem symbol={symbol} setSelectedSymbol={setSelectedSymbol} />
            <CryptoDetails symbol={selectedSymbol} />
          </React.Fragment>
        ))}
      </div>
    );
  }

  return null;
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

  const [state, setState] = useState({
    crypto: null,
    transitioning: true
  });

  const setTransitioning = (transitioning) => {
    setState(prevState => ({ ...prevState, transitioning }));
  }

  const { crypto } = state;
  const { selectedSymbol } = props;
  
  useEffect(() => {
    console.log("Selected Symbol:", selectedSymbol); // Log the selectedSymbol whenever it changes

    if (selectedCrypto) {
      setTransitioning(true);

      const timeout = setTimeout(() => {
        setState(prevState => ({ crypto: selectedCrypto, transitioning: false }));
      }, 500);

      return () => {
        clearTimeout(timeout);
      }
    }
  }, [selectedCrypto, selectedSymbol]);

  if (crypto) {
    const sign = crypto.change >= 0 ? "positive" : "negative";

    return (
      <div id="crypto-details" className={classNames(sign, { transitioning: state.transitioning })}>
        <div id="crypto-details-content">
          <CryptoPriceChart />
          <h1 id="crypto-details-symbol">{selectedSymbol}</h1>
        </div>
      </div>
    );
  }

  return null;
}

const CryptoPriceChart = () => {
  const { selectedCrypto: crypto } = useContext(AppContext).state;

  const id = "crypto-price-chart";

  const [state, setState] = useState({
    chart: null,
    points: [],
    status: RequestStatus.Loading
  });

  const setStatus = (status) => {
    setState(prevState => ({ ...prevState, status }));
  }

  const setChart = (chart) => {
    setState(prevState => ({ ...prevState, chart }));
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus(RequestStatus.Loading);

        const res = await axios.get(ChartUtility.getUrl(crypto.id));

        setState(prevState => ({
          ...prevState,
          points: ChartUtility.mapPoints(res.data),
          status: RequestStatus.Success
        }));
      } catch (err) {
        console.error(err);

        setStatus(RequestStatus.Error);
      }
    }

    fetchData();
  }, [crypto]);

  useEffect(() => {
    if(!state.chart && state.status === RequestStatus.Success) {
      setChart(ChartUtility.draw(id, state.points, crypto.change));
    }
  }, [state.status]);

  useEffect(() => {
    if(state.chart) {
      const update = () => ChartUtility.update(state.chart, state.points, crypto.change);

      update();
    }
  }, [state.chart, state.points]);

  const renderLoadingSpinner = () => {
    if(state.status === RequestStatus.Loading) {
      return (
        <div id="crypto-price-chart-loading-spinner">
          <LoadingSpinner />
        </div>
      );
    }
  }

  return (
    <div id="crypto-price-chart-wrapper">
      <canvas id={id} />
      {renderLoadingSpinner()}
    </div>
  );
}

const ChartUtility = {
  draw(id, points, change) {
    const canvas = document.getElementById(id);

    if (canvas) {
      const context = canvas.getContext("2d");
      return new ChartJS(context, {
        type: "line",
        data: {
          datasets: [{
            data: points.map(point => point.price),
            ...this.getDatasetOptions(change)
          }],
          labels: points.map(point => point.timestamp)
        },
        options: this.getOptions(points)
      });
    }
  },
  getDatasetOptions(change) {
    const color = change >= 0 ? Color.Green : Color.Red;

    return {
      backgroundColor: "rgba(" + color + ", 0.1)",
      borderColor: "rgba(" + color + ", 0.5)",
      fill: true,
      tension: 0.2,
      pointRadius: 0
    };
  },
  getOptions(points) {
    const min = Math.min(...points.map(point => point.price)),
          max = Math.max(...points.map(point => point.price));

    return {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        x: {
          display: false,
          gridLines: {
            display: false
          }
        },
        y: {
          display: false,
          gridLines: {
            display: false
          },
          suggestedMin: min * 0.98,
          suggestedMax: max * 1.02
        }
      },
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: false
        }
      }
    };
  },
  getUrl(id) {
    return `${CoinGeckoApi.Base}/coins/${id}/market_chart?vs_currency=usd&days=1`;
  },
  mapPoints(data) {
    return data.prices.map(price => ({
      price: price[1],
      timestamp: price[0]
    }));
  },
  update(chart, points, change) {
    chart.options = this.getOptions(points);

    const options = this.getDatasetOptions(change);

    chart.data.datasets[0].data = points.map(point => point.price);
    chart.data.datasets[0].backgroundColor = options.backgroundColor;
    chart.data.datasets[0].borderColor = options.borderColor;
    chart.data.datasets[0].pointRadius = options.pointRadius;

    chart.data.labels = points.map(point => point.timestamp);

    chart.update();
  }
};


const PortfolioDisplay = () => {
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
    if(state.status === RequestStatus.Success && state.cryptos.length > 0) {
      selectCrypto(state.cryptos[0].id);
    }
  }, [state.status]);

  const renderLoadingSpinner = () => {
    if(state.status === RequestStatus.Loading) {
      return <LoadingSpinner />;
    }
  }

  ChartJS.register(CategoryScale);


  return (
    <AppContext.Provider value={{ state, selectCrypto, setState, toggleList }}>
      <div id="app" className={classNames({ "list-toggled": state.listToggled })}>
        <CryptoList />
        <CryptoDetails />
        <CryptoListToggle />
        {renderLoadingSpinner()}
      </div>
    </AppContext.Provider>
  );
}

export default PortfolioDisplay;