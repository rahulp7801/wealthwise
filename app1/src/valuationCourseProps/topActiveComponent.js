import React, { useEffect } from 'react';
import request from 'request';

const TopActive = () => {
  useEffect(() => {
    // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
    const url = 'https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo';

    request.get({
      url: url,
      json: true,
      headers: { 'User-Agent': 'request' }
    }, (err, res, data) => {
      if (err) {
        console.log('Error:', err);
      } else if (res.statusCode !== 200) {
        console.log('Status:', res.statusCode);
      } else {
        // data is successfully parsed as a JSON object:
        console.log(data);
      }
    });
  }, []);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default TopActive;
