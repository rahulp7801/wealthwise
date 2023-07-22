import { useState, useEffect } from "react";
const { Configuration, OpenAIApi } = require("openai");

const StockSurvey = ({ userInputs }) => {
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(true); 


  useEffect(() => {
    const fullPrompt =
      "You are a financial advisor that will give 5 stock (publicly traded company) recommendations based on the information the user inputs.  User input: " + userInputs.join("\n");

    const getApiResponse = async () => {
      try {
        const result = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: fullPrompt,
          temperature: 0.5,
          max_tokens: 4000,
        });

        setApiResponse(result.data.choices[0].text);
      } catch (e) {
        setApiResponse("Something is going wrong, Please try again.");
      } finally {
        setLoading(false); 
      }
    };

    getApiResponse();
  }, [userInputs]);

  return (

    <div >
      {!loading && apiResponse && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div >
            {apiResponse}
          </div>
        </div>
      )}
    </div>


  );
};

export default StockSurvey;
