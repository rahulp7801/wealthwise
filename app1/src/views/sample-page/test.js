import axios from 'axios';

const Reddash = () => { axios.get('http://localhost:5000/api/get-data', {
  params: {
    ticker: 'MSFT'
  }
}).then(data => {
    const value = data.request.response;
    console.info(value);
    return value;
  })
  .catch(error => {
    console.error('Error:', error);
  });
};

export default Reddash;