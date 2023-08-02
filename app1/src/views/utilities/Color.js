import React, { useState, useEffect } from 'react';

const Color = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/get_news') // Replace this with your Flask server's URL if necessary
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
      <h1>Financial News from Yahoo Finance</h1>
      {news.length > 0 ? (
        <ul>
          {news.map((headline, index) => (
            <li key={index}>{headline}</li>
          ))}
        </ul>
      ) : (
        <div>No headlines found.</div>
      )}
    </div>
  );
};

export default Color;
