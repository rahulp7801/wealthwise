import React, { Component } from 'react'
import Greet from 'views/sample-page/greet.js';
import 'assets/scss/styles.css';

class Greeter extends Component {
  render() {
    return (
      <div className="Greet">
        <div className="grid-container">
            <div className="grid-item wide-item"><Greet /></div>
            <div className="grid-item"><Greet /></div>
        </div>

      </div>
    )
  }
}

export default Greeter