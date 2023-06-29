import React, { Component } from 'react'
import Greet from 'views/sample-page/greet.js';
import 'assets/scss/styles.css';
import Calendar from 'react-calendar';
import MainCard from 'ui-component/cards/MainCard';
import { Typography } from '@mui/material';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

class Greeter extends Component {
  render() {
    return (
      <MainCard title={<Typography variant="h1" fontWeight="bold" style={{ textAlign: 'center' }}></Typography>}>
        <div className="grid-container">
            <MainCard className="grid-item wide-item" >
                <CalendarContainer>
                    <Calendar />
                </CalendarContainer>
              <Greet />

            </MainCard>
            <div className="grid-item"><Greet /></div>
        </div>

      </MainCard>
    )
  }
}

export default Greeter

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  /* ~~~ navigation styles ~~~ */
  /* ~~~ label styles ~~~ */
  /* ~~~ button styles ~~~ */
  /* ~~~ day grid styles ~~~ */
  /* ~~~ neighboring month & weekend styles ~~~ */
  /* ... */

  /* ~~~ active day styles ~~~ */
  .react-calendar__tile--range {
      box-shadow: 0 0 6px 2px black;
  }
`;