import axios from 'axios';

const Firebaseexp = () => { axios.get('http://localhost:5000/api/get-login').then(data => {
    const value = data.request.response;
    console.info(value);
    return value;
  })
  .catch(error => {
    console.error('Error:', error);
  });
};



export default Firebaseexp;
