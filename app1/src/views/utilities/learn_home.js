import React, { Component } from 'react'
import Greet from 'views/sample-page/greet.js';

class Greeter extends Component {
  render() {
    return (
      <div className="Greet">
        <Greet />
      </div>
    )
  }
}

export default Greeter