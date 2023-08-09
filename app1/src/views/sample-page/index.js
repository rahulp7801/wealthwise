// import { Typography } from '@mui/material';
// import Quiz from 'valuationCourseProps/survey_grid';
// project imports
// import MainCard from 'ui-component/cards/MainCard';
import React from 'react';
// import BlogSlider from "valuationCourseProps/survey_grid";
// import LanguageProcessorComponent from "trainingSelector.js/trainer";
import 'assets/scss/header-aurora.css';
// import SurveyForm from "valuationCourseProps/surveyForm"
import StockSurvey from "valuationCourseProps/stockSurveyv2";
// import InteractiveSkill from "valuationCourseProps/interactIcon";

function SamplePage() {
  // const [surveyAnswers, setSurveyAnswers] = useState({});

  // const handleSurveySubmit = (answers) => {
  //   setSurveyAnswers(answers);
  // };
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
    
      {/* <BlogSlider /> */}
      <div className="space"></div>
      <div>
      
      <StockSurvey />
      
      </div>
    </div>
  );
}

export default SamplePage;
