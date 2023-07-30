import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css';
import 'assets/scss/survey-styles.scss'
import TenInputSlotsComponent from './animationTest';
import StockSurvey from './stockSurvey';

const BlogSlider = () => {
  useEffect(() => {
    const swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: true,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      },
    });

    return () => {
      // Destroy Swiper instance when the component unmounts
      swiper.destroy();
    };
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
    <div className='blog-body'>
    <div className="blog-slider">
      <div className="blog-slider__wrp swiper-wrapper">
        {/* Slide 1 */}
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img src="https://img.freepik.com/free-vector/3d-abstract-wave-pattern-background-vector_53876-168032.jpg?w=740&t=st=1690611198~exp=1690611798~hmac=917f5dce04b61efec75619b13fcd026269c5d7f7a50e093c3df172ceb94aab90" alt="" />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">Question 1</span>
            <div className="blog-slider__title">What are your long-term financial goals and objectives?</div>
            <div className="blog-slider__text"></div>
            <div className="submit-card">
              <TenInputSlotsComponent index={0} onUserInput={handleUserInput} > </TenInputSlotsComponent>        
            </div>      
          </div>
        </div>
        {/* Slide 2 */}
        <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src="https://img.freepik.com/premium-photo/abstract-wave-pattern-technology-background-3d-render_79443-2320.jpg" alt="" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">Question 2</span>
              <div className="blog-slider__title">What is your preferred investment timeframe?</div>
              <div className="blog-slider__text"></div>
              <TenInputSlotsComponent index={1} onUserInput={handleUserInput} />
            </div>
          </div>
           {/* Slide 3 */}
           <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src="https://img.freepik.com/premium-vector/futuristic-black-funnel-wireframe-space-travel-tunnel-abstract-wormhole-with-surface-warp-vector-illustration_658411-402.jpg" alt="" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">Question 3</span>
              <div className="blog-slider__title">What is your risk tolerance?</div>
              <div className="blog-slider__text"></div>
              <TenInputSlotsComponent index={2} onUserInput={handleUserInput} />
            </div>
          </div>
          {/* Slide 4 */}
          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src="https://img.freepik.com/free-vector/3d-abstract-wave-pattern-background_53876-116945.jpg?t=st=1690611198~exp=1690611798~hmac=45fba368dd2ffdc75a7aaf0a6f4d35e3f522c1d3b7253b06f2f1cc1ddeab1318" alt="" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">Question 4</span>
              <div className="blog-slider__title">What is your investment experience? Are you a beginner or an experienced investor?</div>
              <div className="blog-slider__text"></div>
              <TenInputSlotsComponent index={3} onUserInput={handleUserInput} />
            </div>
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
        <div className="blog-slider__pagination"></div>
      </div>
      {/* Add more duplicated card elements as needed */}
    </div>
  );
};

export default BlogSlider;
