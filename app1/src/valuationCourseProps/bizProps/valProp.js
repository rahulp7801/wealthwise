import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'assets/scss/stock-select.css'

const apiKey = "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";

const ValProposition = () => {
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
          "content": "Give a 1-2 sentence desription of the company's value proposition",
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
    <div>
        {validity !== "" ? (
          <p>{validity}</p>
        ) : null}
    </div>
  );
};

export default ValProposition;