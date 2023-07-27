// StockDescription.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const apiKey = "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";

const StockDescription = () => {
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
          "content": "You are a financial advisor. Give a 3 sentence description of the company's business model.",
        },
        {
          "role": "user",
          "content": apiData,
        },
      ],
      "temperature": 0,
      "max_tokens": 1024,
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
    // Your JSX for the StockDescription component, including rendering the 'validity' variable
    <div className="submit-stock-box">
      <h2>Stock Description</h2>
      <form>
        <div>
          {validity !== "" ? (
            <h3>{validity}</h3>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default StockDescription;
