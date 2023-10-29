import React, { useState, useEffect } from 'react';
import NewsCard from "portbuilderprops/newsCard.js";
import styles from 'assets/scss/NewsCard.module.css';
import 'assets/scss/header-aurora.css';

const Color = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/get-news-data') // Replace this with your Flask server's URL if necessary
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the fetched data to the console
        setNews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="aurora-gradient">
            <div className="header-body">
                <div className="aurora-content">
                <h1 className="aurora-title"> 
                    News Feed
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
      <div className={styles.cardContainer}>
        {news.map((article, index) => (
          <div key={index} className={styles.card}>
            <NewsCard
                      key={index}
                      imageUrl={article[4]}
                      header={article[1]}
                      paragraph={article[2]}
                      link={article[3]}
                  />
          </div>
        ))}
      </div>
    </div>
  );

};

export default Color;
