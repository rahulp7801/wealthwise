// import { Typography } from '@mui/material';
// import Quiz from 'valuationCourseProps/survey_grid';
// project imports
// import MainCard from 'ui-component/cards/MainCard';
import React from 'react';
// import BlogSlider from "valuationCourseProps/survey_grid";
// import LanguageProcessorComponent from "trainingSelector.js/trainer";
import 'assets/scss/header-aurora.css';
import 'assets/scss/stock-select.css'
// import ChatBot from "portbuilderprops/chatBotUI.js"
// import SurveyForm from "valuationCourseProps/surveyForm"
import StockSurvey from "valuationCourseProps/stockSurveyv2";
// import InteractiveSkill from "valuationCourseProps/interactIcon";

function SamplePage() {

  return (
    <div>
      <div className="aurora-gradient">
        <div className="header-body">
          <div className="aurora-content">
            <h1 className="aurora-title"> 
              Personalization Survey
              <div className="aurora">
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
              </div>
            </h1>
          </div>
        </div>
      </div>
      
      <div className="space"></div>
    
      <div className="space"></div>

      <div className="card-body">
      <div className="card2">
          <div className="card2-content">
            <h2>Meet Wealth Wise, our proprietary financial advisor! Have a conversation with him and Wealth Wise will provide you with 10 personalized stock recommendations. Then you can direct yourself to the stock selection page and enter in the stock you want to analyze.</h2>

          </div>
        </div>
        <div className="card2">
          <div className="card2-content">

            <StockSurvey />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SamplePage;
