import React, { useState } from 'react';
import 'assets/scss/bard-card.css';

const TextEffectComponent = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [intervalId, setIntervalId] = useState(null);
  const nameRef = React.createRef();

  const handleMouseEnter = () => {
    let iteration = 0;

    clearInterval(intervalId);

    const interval = setInterval(() => {
      nameRef.current.innerText = nameRef.current.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return nameRef.current.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= nameRef.current.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    setIntervalId(interval);
  };

  return (
    <div className="body">
    <div className="screen" onMouseEnter={handleMouseEnter}>
      <div className="screen-image"></div>
      <div className="screen-overlay"></div>
      <div className="screen-content">
        <i className="screen-icon fa-brands fa-codepen"></i>
        <div className="screen-user">
          <span className="name" data-value="CODEPEN" ref={nameRef}>CODEPEN</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TextEffectComponent;
