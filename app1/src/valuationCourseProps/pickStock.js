import React, { useEffect, useRef } from 'react';
import TopActive from './topActiveComponent';
// import StockSurvey from './stockSurvey';
import StockSelector from './stockSelect';
import SectorCarousel from './sectorCarouselProps/sectorCarousel';
// import TenInputSlotsComponent from './animationTest';
import SparkleButton1 from './sparkleButton1';
// import CompanySearch from './stockSearch';
import { Provider } from 'react-redux';
import store from './store';
import { useNavigate } from 'react-router-dom';
// import CardGridComponent from './survey_grid';
import 'assets/scss/header-aurora.css';
import 'assets/scss/stock-select.css'
import 'assets/scss/styles.css';
import 'assets/scss/sectorCarousel.css'

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
    // const blocksElement = document.getElementById('blocks');
    // blocksElement.onmousemove = (e) => {
    //   for (const block of document.getElementsByClassName('block')) {
    //     const rect = block.getBoundingClientRect();
    //     const x = e.clientX - rect.left;
    //     const y = e.clientY - rect.top;

    //     block.style.setProperty('--mouse-x', `${x}px`);
    //     block.style.setProperty('--mouse-y', `${y}px`);
    //   }
    // };
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
    

    createSubtitle("Take a short 10-question survey to get personalized stock recommendations!")

  }, []);
  //Handling Inputs and Submittions for Open AI API
  // This submit state is for the survey submit button
  // This submit state is for the stock search submit button


  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate('/icons/understand-business')
  }
    
  
  const scrollToElement = () => {
    navigate('/recommendation-survey');
  };
  return (
      <div>
        <div className="aurora-gradient">
        <div className="header-body">
          <div className="aurora-content">
            <h1 className="aurora-title"> 
              Stock Selection
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
          <TopActive />
        <div className='gap'></div>
        <div className='container-2'>
          <div className='hidden'>
            <div className='get-started'>
              <div className='get-started-content'>
                <h6 className='get-started-title'>Understand the 11 GICS Sectors and their Risk Profile in the Economy </h6>
              </div>
            </div>
          </div>
        </div>
        <div className='gap'></div>
        <SectorCarousel />
        <div className="gap2"></div>
        
        <div className='container-2'>
          <div className='hidden'>
            <div className='get-started-2'>
              <div className='get-started-2-content'>
                <h5 className='get-started-2-title'>Personalization Survey</h5>
                <h6 className='get-started-2-subtitle'>

                </h6>
                <div className='gap2'></div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <button className="custom-btn skip-button" onClick={scrollToElement}><span>Take It!</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap2"></div>
        <div className="survey-container">
          <div >
            <Provider store={store} >
                <StockSelector />
            </Provider>
          </div>
          {/* <StockSearchAlt /> */}
          <div className="gap2"></div>
          <SparkleButton1 onClick={handleNextPage}/>
        </div>
      </div>
  );
};

export default PickStock ;
