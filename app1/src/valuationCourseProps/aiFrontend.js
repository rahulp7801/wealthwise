import axios from "axios";
import { useState } from "react";

function Chat() {
const questions = ["What sector are you interested in?"];
  const [responses, setResponses] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const handleQuestionChange = (e, index) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = e.target.value;
    setResponses(updatedResponses);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prompt = `Based on the user's answer, what are 5 stock recommendations for ${responses[0]} industry?`
    // Send user responses to the OpenAI API
    try {
      const res = await axios.post("http://localhost:8080/chat", {
        prompt,
      });
      setRecommendations(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const renderQuestions = () => {
    return questions.map((question, index) => (
      <div key={index}>
        <label>
          {question}
          <input
            type="text"
            value={responses[index] || ""}
            onChange={(e) => handleQuestionChange(e, index)}
          />
        </label>
      </div>
    ));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderQuestions()}
        <button type="submit">Submit</button>
      </form>

      {recommendations.length > 0 && (
        <div>
          <h2>Stock Recommendations:</h2>
          <ul>
            {recommendations.map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Chat;
