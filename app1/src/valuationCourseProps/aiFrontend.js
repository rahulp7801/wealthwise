import { useState } from "react";
const { Configuration, OpenAIApi } = require("openai");

const Chat = () => {
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);
  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [userInputs, setUserInputs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Recommend 5 stocks for the user to invest in based on their interests.",
        temperature: 0.5,
        max_tokens: 4000,
      });

      // Store the entire prompt in the userInputs array
      setUserInputs([...userInputs, prompt]);

      setApiResponse(result.data.choices[0].text);
    } catch (e) {
      //console.log(e);
      setApiResponse("Something is going wrong, Please try again.");
    }
    setLoading(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            value={prompt}
            placeholder="Please ask to openai"
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
          <button disabled={loading || prompt.length === 0} type="submit">
            {loading ? "Generating..." : "Generate"}
          </button>
        </form>
      </div>
      <div className="response-card">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <pre>
            <strong>API response:</strong>
            {apiResponse}
          </pre>
        </div>
        {userInputs.length > 0 && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <pre>
              <strong>User Inputs:</strong> {JSON.stringify(userInputs)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
