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
      "You are a financial advisor that will give 5 stock (publicly traded company) recommendations based on the information the user inputs. The ten questions you ask are: 1. What are your long-term financial goals and objectives?', 2. What is your preferred investment timeframe?', 3. What is your risk tolerance?', 4. What is your investment experience? Are you a beginner or an experienced investor?', 5. What is your current financial situation?',6. What is your investment knowledge? ',7. What is your asset allocation preference? ',8. What industry sectors or themes are you interested in? ',9. Do you have any specific ethical or social considerations when selecting stocks for investment?',10. What is your desired level of involvement in managing your investments?' User input: " + userInputs.join("\n");

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
    <>
      <div >
        {!loading && apiResponse && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="textbb">
              {apiResponse}
            </div>
          </div>
        )}
      </div>

    </>
  );
};

export default StockSurvey;
