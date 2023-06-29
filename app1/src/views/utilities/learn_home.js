import React, { Component } from 'react'
import Greet from 'views/sample-page/greet.js';
import 'assets/scss/styles.css';
import Calendar from 'react-calendar';
import MainCard from 'ui-component/cards/MainCard';
import { Typography } from '@mui/material';

class Greeter extends Component {
  render() {
    return (
      <MainCard title={<Typography variant="h1" fontWeight="bold" style={{ textAlign: 'center' }}></Typography>}>
        <div className="grid-container">
            <MainCard className="grid-item wide-item" >
                 <Calendar />
                 <Greet />

            </MainCard>
            <div className="grid-item"><Greet /></div>
        </div>

      </MainCard>
    )
  }
}

export default Greeter