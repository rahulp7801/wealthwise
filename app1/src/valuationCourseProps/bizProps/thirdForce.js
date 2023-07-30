// ThirdForce.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'assets/scss/stock-select.css'

const apiKey = "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";

const ThirdForce = () => {
  const [validity, setValidity] = useState("");
  const apiData = useSelector((state) => state.apiData);

  useEffect(() => {
    if (apiData) {
      callOpenAIAPI(apiData); // Pass the apiData to the API call function
    }
  }, [apiData]);

  async function callOpenAIAPI(apiData) {
    // Construct your APIBody using apiData from the Redux store
    const APIBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": "Given a company, write a concise 3 sentence analysis on the bargaining power of suppliers in the company's industry.",
        },
        {
          "role": "user",
          "content": apiData,
        },
      ],
      "temperature": 0,
      "max_tokens": 100,
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + apiKey,
        },
        body: JSON.stringify(APIBody),
      });

      const data = await response.json();
      console.log(data.choices[0].message.content);
      setValidity(data.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
          {validity !== "" ? (
            <p>{validity}</p>
          ) : null}
        </div>
  );
};

export default ThirdForce;
