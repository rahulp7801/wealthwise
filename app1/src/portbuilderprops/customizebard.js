import { useState } from 'react'
// import './App.css'
import 'valuationCourseProps/chat-ui-kit-styles-for-WealthWise/themes/default/main.scss';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import {marked} from 'marked';




function StockSurvey() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, My name is Wealth Wise, your personal financial advisor!",
    //   sentTime: "just now",
      sender: "Wealth Wise"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  function MarkdownRenderer({ markdown }) {
  const createMarkup = (text) => {
    return { __html: marked(text) };
  };

  return <div dangerouslySetInnerHTML={createMarkup(markdown)} />;
}
  const handleSend = async (message) => {
    if (message.trim() === '') return;

    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);

    try {
      const portielortie = localStorage.getItem('portfolio');
      const response = await fetch('http://localhost:5000/api/get_answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: message, portfolio: portielortie }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();

      setMessages((prevMessages) => [...prevMessages, {
        message: data.content,
        sender: "ChatGPT",
        direction: "incoming"
      }]);
      setIsTyping(false);
    } catch (error) {
      console.error('Error occurred during API request:', error);
      // Handle the error or show a message to the user
    }
  };
  

//   async function processMessageToChatGPT(chatMessages) { 


//     let apiMessages = chatMessages.map((messageObject) => {
//       let role = "";
//       if (messageObject.sender === "ChatGPT") {
//         role = "assistant";
//       } else {
//         role = "user";
//       }
//       return { role: role, content: messageObject.message}
//     });



//     const apiRequestBody = {
//       "model": "gpt-4",
//       "messages": [
//         systemMessage,  // The system message DEFINES the logic of our chatGPT
//         ...apiMessages // The messages from our chat with ChatGPT
//       ],
//       "temperature": 1,
//     }

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

return (
  <div className="App">
<div style={{ position:"relative", height: "700px", width: "100%"  }}>
        <MainContainer>
        <ChatContainer>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={isTyping ? <TypingIndicator content="Wealth Wise is typing" /> : null}
          >
            {messages.map((message, i) => {
              console.log(message)
              return (<Message key={i} model={{ sender: message.sender, message: message.message, direction: message.direction }}>
                <Message.CustomContent>
                  <MarkdownRenderer markdown={message.message.trim()} />
                </Message.CustomContent>
              </Message>
                      )
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