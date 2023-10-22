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

  const { crypto } = props;
  const [name, setName] = useState("");

    async function fetchData() {
      try {
        const response = await fetch(`https://financialmodelingprep.com/api/v3/key-metrics-ttm/AAPL?limit=40&apikey=01e4bab5bf0732e8f24a4de466b692bb`);
        const data = await response.json();   
        console.log(data)
        setName(data[0].enterpriseValueOverEBITDATTM);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    fetchData();
  
  const getClasses = () => {
    const selected = state.selectedCrypto && state.selectedCrypto.id === crypto.id;

    return classNames("crypto-list-item", { selected });
  };

  return (
    <button type="button" className={getClasses()} onClick={() => selectCrypto(crypto.id)}>
      <div className="crypto-list-item-background">
        <h1 className="crypto-list-item-symbol">{crypto.symbol}</h1>
        <img className="crypto-list-item-background-image" src={crypto.image} />
      </div>
      <div className="crypto-list-item-content">
        <h1 className="crypto-list-item-rank">{crypto.rank}</h1>
        <img className="crypto-list-item-image" src={crypto.image} />
        <div className="crypto-list-item-details">
          <h1 className="crypto-list-item-name">{crypto.name}</h1>
          <h1 className="crypto-list-item-price">{name}</h1>
          <h1 className="crypto-list-item-price">{CryptoUtility.formatPercent(crypto.change)}</h1>
        </div>
      </div>
    </button>
  );
}

const CryptoList = () => {
  const { state } = React.useContext(AppContext);

  if (state.status === RequestStatus.Success && state.cryptos.length > 0) {
    const getItems = () => {
      return state.cryptos.map(crypto => (
        <CryptoListItem key={crypto.id} crypto={crypto} />
      ));
    };

    return (
      <div id="crypto-list">
        {getItems()}
      </div>
    );
  }

  return null;
}

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

const CryptoField = (props) => {
  return (
    <div className={classNames("crypto-field", props.className)}>
      <h1 className="crypto-field-value">{props.value}</h1>
      <h1 className="crypto-field-label">{props.label}</h1>
    </div>
  );
}

const CryptoDetails = () => {
  const { selectedCrypto } = useContext(AppContext).state;

  const [state, setState] = useState({
    crypto: null,
    transitioning: true
  });

  const setTransitioning = (transitioning) => {
    setState(prevState => ({ ...prevState, transitioning }));
  }

  const { crypto } = state;

  useEffect(() => {
    if (selectedCrypto) {
      setTransitioning(true);

      const timeout = setTimeout(() => {
        setState(prevState => ({ crypto: selectedCrypto, transitioning: false }));
      }, 500);

      return () => {
        clearTimeout(timeout);
      }
    }
  }, [selectedCrypto]);

  if (crypto) {
    const sign = crypto.change >= 0 ? "positive" : "negative";

    return (
      <div id="crypto-details" className={classNames(sign, { transitioning: state.transitioning })}>
        <div id="crypto-details-content">
          <div id="crypto-fields">
            {/* <CryptoField label="Rank" value={crypto.rank} />
            <CryptoField label="Name" value={crypto.name} />
            <CryptoField label="Price" value={crypto.price} />
            <CryptoField label="Market Cap" value={crypto.marketCap} />
            <CryptoField label="24H Volume" value={crypto.volume} />
            <CryptoField label="Circulating Supply" value={crypto.supply} />
            <CryptoField
              className={sign}
              label="24H Change"
              value={CryptoUtility.formatPercent(crypto.change)}
            /> */}
          </div>
          <CryptoPriceChart />
          <h1 id="crypto-details-symbol">{crypto.symbol}</h1>
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