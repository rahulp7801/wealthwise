import { useState } from 'react'
// import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

// const API_KEY = "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";
const systemMessage = { 
  "role": "system", "content": `
  You are a financial advisor. Ask each question after the user replies to the previous question.
  1. What is your investment goal?
  2. What is your risk tolerance level?
  3. How long do you plan to invest?
  4. Have you invested before?
  5. Are there any sectors or industries you are particularly interested in?
  6. Are you interested in income (dividends) or growth (increases in the stock price) investments?
  8. Do you have any ethical or social criteria for the companies you invest in?
  
  Provide 10 stock recommendations based on the inputs.
  `
}

function StockSurvey() {
  const [messages, setMessages] = useState([
    {
      message: "Hello",
    //   sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { 


    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });



    const apiRequestBody = {
      "model": "gpt-4",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // The messages from our chat with ChatGPT
      ]
    }

//     await fetch("https://api.openai.com/v1/chat/completions", 
//     {
//       method: "POST",
//       headers: {
//         "Authorization": "Bearer " + API_KEY,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(apiRequestBody)
//     }).then((data) => {
//       return data.json();
//     }).then((data) => {
//       console.log(data);
//       setMessages([...chatMessages, {
//         message: data.choices[0].message.content,
//         sender: "ChatGPT"
//       }]);
//       setIsTyping(false);
//     });
//   }
  await fetch('http://localhost:5000/api/get_answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userInput }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

        const data = await response.json();
        console.info("data: " + JSON.stringify(data));
        const botResponse = { text: data.content, type: 'bot', sender: "ChatGPT"
    };
        setMessages([...messages, botResponse]);
      } 
    //   catch (error) {
    //     console.error('Error occurred during API request:', error);
    //     // Handle the error or show a message to the user
    //   }
    
    // useEffect(() => {
    //   chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    // }, [messages]);

  return (
    <div className="App">
      <div style={{ position:"relative", height: "700px", width: "700px"  }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="Wealth Wise is typing" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default StockSurvey