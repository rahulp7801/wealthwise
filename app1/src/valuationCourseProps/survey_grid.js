import React, { useEffect, useRef } from 'react';

const CardGridComponent = () => {
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);

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
      const nextCard = cards[index + 1];
      const cardInner = card.querySelector('.card__inner');

      const handleScroll = () => {
        const scrollY = window.scrollY;
        const containerTop = cardsContainer.offsetTop;
        const containerHeight = cardsContainer.clientHeight;
        const cardTop = card.offsetTop;
        const cardBottom = cardTop + card.clientHeight;
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
          <div className="card__content">
            <h1 className="card__title">Card Title</h1>
            <p className="card__description">
              
            </p>
          </div>
        </div>
      </div>
      {/* Add more duplicated card elements as needed */}
    </div>
  );
};

export default CardGridComponent;
