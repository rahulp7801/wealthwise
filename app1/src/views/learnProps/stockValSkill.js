//import Greet from 'views/sample-page/greet.js';
import React, { Component } from 'react'
import MainCard from 'ui-component/cards/MainCard';
import myImage from 'app1/src/views/learnProps/stockvalwall.png';




class StockValSkill extends Component {
    render() {

        return (
          <MainCard >
            <img src={myImage} alt=" " />
          </MainCard>
          )
          }}
export default StockValSkill
