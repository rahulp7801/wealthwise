// StockSurvey.js
import React, { useState } from 'react';

const apiKey = "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";

const StockSurvey = ({ userInputs }) => {
  const [validity, setValidity] = useState("");

  const stock = userInputs.join("\n")
  
  if (stock) {
    callOpenAIAPI(stock); // Pass the apiData to the API call function
  }
  
  

  async function callOpenAIAPI(stock) {
    // Construct your APIBody using apiData from the Redux store
    const APIBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": "You are a financial advisor that will give 10 stock (publicly traded company) recommendations based on the information the user inputs. Only list the company names",
        },
        {
          "role": "user",
          "content": stock,
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
    <div >
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

export default StockSurvey;
