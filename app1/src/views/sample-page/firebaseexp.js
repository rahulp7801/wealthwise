import axios from 'axios';
import axiosRetry from 'axios-retry';

const customAxios = axios.create();

const retryDelay = (retryNumber = 0) => {
  const seconds = Math.pow(2, retryNumber) * 1000;
  const randomMs = 1000 * Math.random();
  return seconds + randomMs;
};

axiosRetry(customAxios, {
  retries: 2,
  retryDelay,
  retryCondition: axiosRetry.isRetryableError,
});

const Firebaseexp = () => {
  customAxios.get('http://localhost:5000/api/get-login', { timeout: 15000 })
    .then(response => {
      if (response.status === 200) {
        console.log('Response:', response.data);
      } else {
        console.error('Invalid response status:', response.status);
      }
    })
    .catch(error => {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Axios Response Error:', error.response.status);
          console.error('Response Data:', error.response.data);
        } else {
          console.error('Axios Network Error:', error.message);
        }
      } else {
        console.error('Other Error:', error.message);
      }
    });
};

export default Firebaseexp;
