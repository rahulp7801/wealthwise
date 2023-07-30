import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'assets/scss/stock-select.css';

const StockTitle = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const apiData = useSelector((state) => state.apiData);
//   const [text, setText] = useState(apiData);
  const [iteration, setIteration] = useState(0);
  const maxIterations = apiData.length * 3;
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setText(apiData);
    setIteration(0);
  }, [apiData]);

  useEffect(() => {
    if (animationStarted) {
      const intervalId = setInterval(() => {
        if (iteration < maxIterations) {
          setIteration((prevIteration) => prevIteration + 1);
        } else {
          clearInterval(intervalId);
        }
      }, 1000 / 30);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [animationStarted, iteration, maxIterations]);

  const getRandomLetter = () => {
    return letters[Math.floor(Math.random() * 26)];
  };

  const getAnimatedText = () => {
    return apiData
      .split("")
      .map((letter, index) => {
        if (index < iteration / 3) {
          return apiData[index];
        }
        return getRandomLetter();
      })
      .join("");
  };

  const handleMouseOver = () => {
    if (!animationStarted) {
      setAnimationStarted(true);
    }
  };

  const handleMouseLeave = () => {
    if (animationStarted) {
      setAnimationStarted(false);
    }
  };

  return (
    <div className='title-body'>
        <div
      className='title-h1'
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus} // Add an empty onFocus handler
    >
            {animationStarted ? getAnimatedText() : apiData}
        </div>
    </div>
  );
};

export default StockTitle;
