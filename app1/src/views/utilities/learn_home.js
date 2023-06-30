import React, { Component } from 'react'
import Greet from 'views/sample-page/greet.js';
import 'assets/scss/styles.css';
import Calendar from 'react-calendar';
import MainCard from 'ui-component/cards/MainCard';
import { Typography } from '@mui/material';
//import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

import TotalIncomeDarkCard from 'views/dashboard/Default/TotalIncomeDarkCard'
//import StockValSkill from 'views/sample-page/StockValSkill.js';
import EarningCard from 'views/dashboard/Default/EarningCard';

class Greeter extends Component {


  render() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    //const customShortWeekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return (
      <MainCard title={<Typography variant="h1" fontWeight="bold" style={{ textAlign: 'center' }}></Typography>}>
        <div className="grid-container">
            <MainCard className="grid-item wide-item" >
                <CalendarContainer >
                    <Calendar formatShortWeekday = {(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
                        tileClassName={({ date, view }) =>
                            view === 'month' &&
                            date.getFullYear() === currentYear &&
                            date.getMonth() === currentMonth &&
                            date.getDate() === currentDay
                              ? 'react-calendar__tile--active'
                              : null
                            } />
                </CalendarContainer>
                <div className="gap"></div>
                <TotalIncomeDarkCard />
              <Greet />

            </MainCard>
                <div className="grid-item">
                    <div className="skill-grid-container">
                      <div className="skill-item">
                        <EarningCard />
                      </div>
                      <div className="skill-item">
                        <EarningCard />
                      </div>
                    </div>
            </div>
        </div>

      </MainCard>
    )
  }
}

export default Greeter

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 1000px;
  margin: auto;
  margin-top: 20px;
  background-color: #616161;
  padding: 10px;
  border-radius: 10px;

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
      font-family: 'Montserrat',;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }

  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
  }

  /* ~~~ button styles ~~~ */
  button {
    margin: 10px;
    background-color: #616161;
    border: 0;
    border-radius: 100px;
    color: white;
    padding: 5px 5px;

    &:hover {
      background-color: #9E9E9E;
    }

    &:active {
      background-color: #B39DDB;
    }
  }

  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
    }

    .react-calendar__tile--range {
      box-shadow: 0 0 0px 0px black;
    }
  }

  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #F5F5F5;
  }
  .react-calendar__month-view__weekdays__weekday {
  color: white; /* Set the desired color for the day names */
    }

  /* ~~~ other view styles ~~~ */
  .react-calendar__tile--active {
    background-color: #B39DDB; /* Change the background color as desired */
    color: #F5F5F5; /* Change the text color as desired */

  .react-calendar__year-view__months, .react-calendar__decade-view__years, .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;
