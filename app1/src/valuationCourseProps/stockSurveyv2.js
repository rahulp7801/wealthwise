import { useState } from 'react'
// import './App.css'
import './chat-ui-kit-styles-for-WealthWise/themes/default/main.scss';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";
const systemMessage = { 
  "role": "system", "content": `
  You are a financial advisor. Ask each question after the user replies to the previous question.
  1. Hello, My name is Wealth Wise! What is your investment goal?
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
      message: "Hello, My name is Wealth Wise! What is your investment goal?",
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
      ],
      "temperature": 1,
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }

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