import { Grid } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import TopActive from './topActiveComponent';
import StockSurvey from './stockSurvey';
import 'assets/scss/styles.css';
import StockSelector from './stockSelect';
import TenInputSlotsComponent from './animationTest';
import TopESGStocks from './topESG';
import CompanySearch from './stockSearch';
import { Provider } from 'react-redux';
import store from './store';
import { useNavigate } from 'react-router-dom';
import CardGridComponent from './survey_grid';

const PickStock  = () => {
// Animation function for slide in Left
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el, index) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      });
      setTimeout(() => {
        observer.observe(el);
      }, index * 200); 

      return () => {
        observer.disconnect();
      };
    });
    // Animation Function for hover effect
    const blocksElement = document.getElementById('blocks');
    blocksElement.onmousemove = (e) => {
      for (const block of document.getElementsByClassName('block')) {
        const rect = block.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        block.style.setProperty('--mouse-x', `${x}px`);
        block.style.setProperty('--mouse-y', `${y}px`);
      }
    };
  }, []);
  const observerRef = useRef(null);

// Survey Card Animation
  useEffect(() => {
    const cards = document.querySelectorAll('.survey-card');
    const options = {
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);

    cards.forEach((card) => {
      observerRef.current.observe(card);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  // Animation for the Stock Personalized Card
  useEffect(() => {
    
    const subtitle = document.getElementsByClassName("get-started-2-subtitle")[0];

    const createWord = (text, index) => {
      const word = document.createElement("span");

      word.innerHTML = `${text} `;

      word.classList.add("get-started-2-subtitle-word");

      word.style.transitionDelay = `${index * 40}ms`;

      return word;
    };
    

    const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

    const createSubtitle = (text) => text.split(" ").map(addWord);
    

    createSubtitle("Take a short 10-question survey to get personalized stock recommendations!                        Want to skip the survey?")

  }, []);
  //Handling Inputs and Submittions for Open AI API
  const [userInputs, setUserInputs] = useState(Array(10).fill(''));
  // This submit state is for the survey submit button
  const [isSubmitted, setIsSubmitted] = useState(false); 
  // This submit state is for the stock search submit button
  const targetElementRef = useRef(null)

  const handleUserInput = (index, value) => {
    const updatedUserInputs = [...userInputs];
    updatedUserInputs[index] = value;
    setUserInputs(updatedUserInputs); }
  
  const handleSubmit = () => {
    console.log('User inputs:', userInputs);
    setIsSubmitted(true); 
    };
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate('/icons/understand-business')
  }
    
  
  const scrollToElement = () => {
    targetElementRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
      <div>
        <div className="top-active-stocks-container">
          Stock Selection
        </div>
        <div className='gap2'></div>

        <div className='container-2'>
          <div className='hidden'>
            <div className='get-started'>
              <div className='get-started-content'>
                <h6 className='get-started-title'>Browse relevant publicly traded companies to decide the first stock you want to analyze! </h6>
              </div>
            </div>
          </div>
        </div>
        <div className='gap'></div>
        <div className='fat'>
          <div id='blocks'>
            <Grid  container spacing={1}>
              <Grid item xs={4}>
                <div className='hidden'>
                    <TopESGStocks />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className='hidden'>
                  <div className="block">
                    <div className="block-border"> 
                      <div className='block-content'>
                        <MainCard>
                          <TopActive />
                        </MainCard>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className='hidden'>
                  <div className="block">
                    <div className="block-border"> 
                      <div className='block-content'>
                        <MainCard>
                          <TopActive />
                        </MainCard>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className='container-2'>
          <div className='hidden'>
            <div className='get-started-2'>
              <div className='get-started-2-content'>
                <h5 className='get-started-2-title'>Personalization Survey</h5>
                <h6 className='get-started-2-subtitle'>

                </h6>
                <div className='gap2'></div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <button className="custom-btn skip-button" onClick={scrollToElement}><span>Skip</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap2"></div>
        <div className="survey-container">
          <div className="survey-card">
            <TenInputSlotsComponent index={0} onUserInput={handleUserInput} > </TenInputSlotsComponent>  
          </div>
          <div className='gap2'>
          </div>
          <div className="survey-card">
            <TenInputSlotsComponent index={1} onUserInput={handleUserInput} />
          </div>
          <div className='gap2'>
          </div>
          <div className="survey-card">
            <TenInputSlotsComponent index={2} onUserInput={handleUserInput} />
          </div>
          <div className='gap2'>
          </div>
          <div className="survey-card">
            <TenInputSlotsComponent index={3} onUserInput={handleUserInput} />
          </div>
          <div className='gap2'></div>
          <div className="survey-card">
            <TenInputSlotsComponent index={4} onUserInput={handleUserInput} />
          </div>
          <div className='gap2'>
          </div>
          <div className="survey-card">
            <TenInputSlotsComponent index={5} onUserInput={handleUserInput} />
          </div>
          <div className='gap2'></div>
          <div className="survey-card">
            <TenInputSlotsComponent index={6} onUserInput={handleUserInput} />
          </div>
          <div className='gap2'>
          </div>
          <div className="survey-card">
            <TenInputSlotsComponent index={7} onUserInput={handleUserInput} />
          </div>
          <div className='gap2'></div>
          <div className="survey-card"> 
            <TenInputSlotsComponent index={8} onUserInput={handleUserInput} />
          </div>
          <div className='gap2'></div>
          <div className="survey-card" >
            <TenInputSlotsComponent index={9} onUserInput={handleUserInput} />
          </div>
          <div className='gap2' ></div>
          <div ref={targetElementRef}>
            <button onClick={handleSubmit}>Submit</button>
          </div>
          
          {isSubmitted && (
            <div className='survey-reponse-card'>
              <StockSurvey userInputs={userInputs} />
            </div>
              )}
          <div >
            <Provider store={store} >
                <StockSelector />
                <CompanySearch />
            </Provider>
          </div>
          <button onClick={handleNextPage}>submit</button>
          <CardGridComponent />
        </div>
      </div>
  );
};

export default PickStock ;
