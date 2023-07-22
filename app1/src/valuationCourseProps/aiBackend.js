// Discarded component
// import { useState } from "react"
// const { Configuration, OpenAIApi } = require("openai");

// const ChatbotApp = () => {
//   const configuration = new Configuration({
//     apiKey: "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",
//   });

//   const openai = new OpenAIApi(configuration);
//   const [input, setInput] = useState("");
//   const [apiResponse, setApiResponse] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const character = "You determine if the words the user inputs correspond to a publicly traded company. Input can be a ticker or name. If it matches, You return: True, the company name, and the stock ticker; otherwise, You'll return: False. User Input:"; 
      
//       const result = await openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: [
//           {
//             "role": "system",
//             "content": character
//           },
//           {
//             "role": "user",
//             "content": input
//           }
//         ],
//         temperature: 1,
//         max_tokens: 256,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//       });
//       setApiResponse(result.data.choices[0].text);
//     } catch (e) {
//       console.log(e);
//       setApiResponse("Something is going wrong, Please try again.");
//     }
//     setLoading(false);
//   };


//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: '100vh',
//         }}
//       >
//         <form onSubmit={handleSubmit}>
//           <textarea
//             type="text"
//             value={input}
//             placeholder="Please ask to openai"
//             onChange={(e) => setInput(e.target.value)}
//           ></textarea>
//           <button
//             disabled={loading || input.length === 0}
//             type="submit"
//           >
//             {loading ? "Generating..." : "Generate"}
//           </button>
//         </form>
//       </div>
//       {apiResponse && (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <pre>
//             <strong>API response:</strong>
//             {apiResponse}
//           </pre>
//         </div>
//       )}
//     </>
//   );
// };


// export default ChatbotApp;