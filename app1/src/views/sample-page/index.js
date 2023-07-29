// import { Typography } from '@mui/material';
// import Quiz from 'valuationCourseProps/survey_grid';
// project imports
// import MainCard from 'ui-component/cards/MainCard';
import BlogSlider from "valuationCourseProps/survey_grid";
import 'assets/scss/header-aurora.css';
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
    
      <BlogSlider />
    </div>
  );
}

export default SamplePage;
