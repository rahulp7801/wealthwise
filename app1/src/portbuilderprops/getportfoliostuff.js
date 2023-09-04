import React, { Component } from 'react';
import Axios from 'axios';

class Portstuff extends Component {
  constructor() {
    super();
    this.state = {
      responseData: null,
    };
  }

  componentDidMount() {
    Axios.post('http://localhost:5000/api/get-portfolio-info', { "email": localStorage.getItem('userEmail') })
      .then((response) => {
        console.log(response.data);
        this.setState({ responseData: response.data });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    const { responseData } = this.state;

    return (
      <div>
        <h1>Portstuff Component</h1>
        {responseData ? (
          <div>
            <p>GOOGL: {responseData.GOOGL}</p>
            <p>HEPA: {responseData.HEPA}</p>
            <p>TSLA: {responseData.TSLA}</p>
            {/* Render other properties as needed */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default Portstuff;
