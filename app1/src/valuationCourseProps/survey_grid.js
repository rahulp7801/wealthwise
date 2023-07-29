import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css';
import 'assets/scss/survey-styles.scss'
import TenInputSlotsComponent from './animationTest';
import StockSurvey from './stockSurvey';
import { useNavigate } from 'react-router-dom';

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    const cards = cardsRef.current;
    const numCards = cards.length;

    cardsContainer.style.setProperty('--cards-count', numCards);
    cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`);

    cards.forEach((card, index) => {
      const offsetTop = 20 + index * 20;
      card.style.paddingTop = `${offsetTop}px`;

      if (index === numCards - 1) return;

      const toScale = 1 - (numCards - 1 - index) * 0.1;
      const cardInner = card.querySelector('.card__inner');

      const handleScroll = () => {
        const scrollY = window.scrollY;
        const containerTop = cardsContainer.offsetTop;
        const containerHeight = cardsContainer.clientHeight;
        const cardTop = card.offsetTop;
        const containerBottom = containerTop + containerHeight;
        const percentageY =
          (scrollY - cardTop + offsetTop) / (containerHeight + offsetTop - card.clientHeight);

        if (scrollY >= cardTop && scrollY <= containerBottom - card.clientHeight) {
          cardInner.style.transform = `scale(${toScale + (1 - toScale) * (1 - percentageY)})`;
          cardInner.style.filter = `brightness(${1 - (1 - 0.6) * (1 - percentageY)})`;
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  }, []);
  const [userInputs, setUserInputs] = useState(Array(10).fill(''));
  
  const handleUserInput = (index, value) => {
    const updatedUserInputs = [...userInputs];
    updatedUserInputs[index] = value;
    setUserInputs(updatedUserInputs); }
  
  const handleSubmit = () => {
    console.log('User inputs:', userInputs);
    setIsSubmitted(true); 
    };

  return (
    <div className="question-cards" ref={cardsContainerRef}>
      <div className="question-card" data-index="0" ref={(el) => (cardsRef.current[0] = el)}>
        <div className="question-card__inner">
          <div className="question-card__image-container">
            <img
              className="question-card__image"
              src="https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
              alt=""
            />
          </div>
          <div className="question-card__content">
            <h1 className="question-card__title">Card Title</h1>
            <p className="question-card__description">
           
            </p>
          </div>
        </div>
      </div>
      {/* Duplicate the above card element for additional cards */}
      <div className="card" data-index="1" ref={(el) => (cardsRef.current[1] = el)}>
        <div className="card__inner">
          <div className="card__image-container">
            <img
              className="card__image"
              src="https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
              alt=""
            />
          </div>
          {/* Slide 5 */}
          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src="https://img.freepik.com/premium-vector/futuristic-black-funnel-wireframe-space-travel-tunnel-abstract-wormhole-with-surface-warp-vector-illustration_658411-410.jpg?w=826" alt="" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">Question 5</span>
              <div className="blog-slider__title">What is your current financial situation?</div>
              <div className="blog-slider__text"></div>
              <TenInputSlotsComponent index={4} onUserInput={handleUserInput} />
            </div>
          </div>
          {/* Slide 6 */}
          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src="https://img.freepik.com/premium-vector/wireframe-abstract-tunnel-3d-tunnel-grid-futuristic-3d-portal-network-cyber-technology-vector-illustration_634443-199.jpg" alt="" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">Question 6</span>
              <div className="blog-slider__title">What is your investment knowledge? </div>
              <div className="blog-slider__text"></div>
              <TenInputSlotsComponent index={5} onUserInput={handleUserInput} />
            </div>
          </div>
          {/* Slide 7 */}
          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src="https://img.freepik.com/free-vector/white-wireframe-wormhole-tunnel-black-background_107791-18866.jpg?w=826&t=st=1690618026~exp=1690618626~hmac=3092a97fe728ad5fbcf96fabcac47e8e176b07a8ab4c8c88843a17ee2641c1fb" alt="" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">Question 7</span>
              <div className="blog-slider__title">What is your asset allocation preference? </div>
              <div className="blog-slider__text"></div>
              <TenInputSlotsComponent index={6} onUserInput={handleUserInput} />
            </div>
          </div>
          {/* Slide 8 */}
          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src="https://img.freepik.com/premium-vector/digital-technology-wave-abstract-background-with-dots-lines-moving-space-futuristic-modern-dynamic-wave-vector-illustration_658411-502.jpg" alt="" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">Question 8</span>
              <div className="blog-slider__title">What industry sectors or themes are you interested in? </div>
              <div className="blog-slider__text"></div>
              <TenInputSlotsComponent index={7} onUserInput={handleUserInput} />
            </div>
          </div>
          {/* Slide 9 */}
          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src="https://img.freepik.com/premium-vector/technology-wireframe-landscape-futuristic-polygonal-terrain-background-digital-vector-illustration-retro-design_658411-471.jpg?w=826" alt="" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">Question 9</span>
              <div className="blog-slider__title">Do you have any specific ethical or social considerations when selecting stocks for investment?</div>
              <div className="blog-slider__text"></div>
              <TenInputSlotsComponent index={8} onUserInput={handleUserInput} />
            </div>
          </div>
          {/* Slide 10 */}
          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src="https://img.freepik.com/free-vector/3d-abstract-wave-pattern-background-vector_53876-136688.jpg?t=st=1690618078~exp=1690618678~hmac=47eb25aa82ef13c9896a44a07223ffc9c7083733be8f7a0f14e9c5b42acc08a6" alt="" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">Question 10</span>
              <div className="blog-slider__title">What is your desired level of involvement in managing your investments?</div>
              <div className="blog-slider__text"></div>
              <TenInputSlotsComponent index={9} onUserInput={handleUserInput} />
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src="https://img.freepik.com/free-vector/3d-abstract-wave-pattern-background-vector_53876-168032.jpg?w=740&t=st=1690611198~exp=1690611798~hmac=917f5dce04b61efec75619b13fcd026269c5d7f7a50e093c3df172ceb94aab90" alt="" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code"></span>
              <div className="blog-slider__title">Survey Results</div>
              <div className="blog-slider__text"></div>
              <StockSurvey userInputs={userInputs} />
            </div>
          </div>
        </div>
      </div>
      {/* Add more duplicated card elements as needed */}
    </div>
  );
};

export default CardGridComponent;
