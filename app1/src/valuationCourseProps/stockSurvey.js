// import { useState } from 'react'
// // import './App.css'
// import './chat-ui-kit-styles-for-WealthWise/themes/default/main.scss';
// import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

// const API_KEY = "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";
// const portielortie = localStorage.getItem('portfolio');

// const systemMessage = { 
//   "role": "system", "content": portielortie
  
  
// }

// function StockSurvey() {
//   const [messages, setMessages] = useState([
//     {
//       message: "Hello, My name is Wealth Wise! What is your investment goal?",
//     //   sentTime: "just now",
//       sender: "Wealth Wise"
//     }
//   ]);
//   const [isTyping, setIsTyping] = useState(false);

//   const handleSend = async (message) => {
//     if (message.trim() === '') return;
  
//     const newMessage = {
//       message,
//       direction: 'outgoing',
//       sender: "user"
//     };
  
//     const newMessages = [...messages, newMessage];
    
//     setMessages(newMessages);
  
//     setIsTyping(true);
  
//     try {
//       const portielortie = localStorage.getItem('portfolio');
//       const response = await fetch('http://localhost:5000/api/get_answer', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ prompt: message, portfolio: portielortie }),
//       });
  
//       if (!response.ok) {
//         throw new Error('Network response was not ok.');
//       }
  
//       const data = await response.json();
  
//       setMessages((prevMessages) => [...prevMessages, {
//         message: data.content,
//         sender: "ChatGPT"
//       }]);
//       setIsTyping(false);
//     } catch (error) {
//       console.error('Error occurred during API request:', error);
//       // Handle the error or show a message to the user
//     }
//   };
  

// //   async function processMessageToChatGPT(chatMessages) { 


// //     let apiMessages = chatMessages.map((messageObject) => {
// //       let role = "";
// //       if (messageObject.sender === "ChatGPT") {
// //         role = "assistant";
// //       } else {
// //         role = "user";
// //       }
// //       return { role: role, content: messageObject.message}
// //     });



// //     const apiRequestBody = {
// //       "model": "gpt-4",
// //       "messages": [
// //         systemMessage,  // The system message DEFINES the logic of our chatGPT
// //         ...apiMessages // The messages from our chat with ChatGPT
// //       ],
// //       "temperature": 1,
// //     }

// //     await fetch("https://api.openai.com/v1/chat/completions", 
// //     {
// //       method: "POST",
// //       headers: {
// //         "Authorization": "Bearer " + API_KEY,
// //         "Content-Type": "application/json"
// //       },
// //       body: JSON.stringify(apiRequestBody)
// //     }).then((data) => {
// //       return data.json();
// //     }).then((data) => {
// //       console.log(data);
// //       setMessages([...chatMessages, {
// //         message: data.choices[0].message.content,
// //         sender: "ChatGPT"
// //       }]);
// //       setIsTyping(false);
// //     });
// //   }

//   return (
//     <div className="App">
//       <div style={{ position:"relative", height: "700px", width: "700px"  }}>
//         <MainContainer>
//           <ChatContainer>       
//             <MessageList 
//               scrollBehavior="smooth" 
//               typingIndicator={isTyping ? <TypingIndicator content="Wealth Wise is typing" /> : null}
//             >
//               {messages.map((message, i) => {
//                 console.log(message)
//                 return <Message key={i} model={message} />
//               })}
//             </MessageList>
//             <MessageInput placeholder="Type message here" onSend={handleSend} />        
//           </ChatContainer>
//         </MainContainer>
//       </div>
//     </div>
//   )
// }

// export default StockSurvey


// import React, { useState, useRef, useEffect } from 'react';
// import { TextField, Paper } from '@mui/material';

// const Guest = () => {
//   const maxMessages = 10; // Set the maximum number of messages to display
//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState('');
//   const chatBoxRef = useRef(null);

//   const handleSendMessage = async () => {
//     if (userInput.trim() === '') return;

//     // Append user message to the existing messages array
//     setMessages((prevMessages) => [...prevMessages, { text: userInput, type: 'user' }]);
//     setUserInput('');

//     try {
//         const portielortie = localStorage.getItem('portfolio');
//         const response = await fetch('http://localhost:5000/api/get_answer', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ prompt: userInput, portfolio: portielortie }),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok.');
//       }

//       const data = await response.json();

//       // Append bot message to the existing messages array
//       setMessages((prevMessages) => [...prevMessages, { text: data.content, type: 'bot' }]);
//     } catch (error) {
//       console.error('Error occurred during API request:', error);
//       // Handle the error or show a message to the user
//     }
//   };

//   useEffect(() => {
//     chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
//   }, [messages]);

//   // Ensure there are no more than maxMessages in the messages array
//   useEffect(() => {
//     if (messages.length > maxMessages) {
//       const newMessages = messages.slice(messages.length - maxMessages);
//       setMessages(newMessages);
//     }
//   }, [messages]);

//   return (
//     <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#222', paddingBottom: '70px' }}>
//       <Paper
//         ref={chatBoxRef}
//         style={{
//           position: 'absolute',
//           top: '70px',
//           left: '15px',
//           right: '15px',
//           padding: '20px',
//           minHeight: '300px',
//           overflowY: 'auto',
//           backgroundColor: '#222',
//           borderRadius: '8px',
//         }}
//       >
//         <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               style={{
//                 display: 'flex',
//                 justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start',
//                 marginBottom: '10px',
//               }}
//             >
//               <div
//                 style={{
//                   background: message.type === 'user' ? '#007bff' : '#555',
//                   padding: '10px 20px',
//                   borderRadius: '8px',
//                   maxWidth: '70%',
//                   color: '#fff',
//                 }}
//               >
//                 {message.text}
//               </div>
//             </div>
//           ))}
//         </div>
//       </Paper>
//       <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#222' }}>
//         <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '20px' }}>
//           <TextField
//             fullWidth
//             label="Enter Your Prompt"
//             id="Text"
//             variant="filled"
//             color="primary"
//             value={userInput}
//             inputProps={{ style: { color: '#fff' } }}
//             onChange={(e) => setUserInput(e.target.value)}
//             onKeyPress={(e) => {
//               if (e.key === 'Enter') handleSendMessage();
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Guest;
