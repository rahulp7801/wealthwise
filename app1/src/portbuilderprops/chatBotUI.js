import { useState } from 'react'
// import './App.css'
import axios from 'axios';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const ChatBot = () => {
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            message: "Hello, I am Wealth Wise",
            sender: "Bard"
        }
    ])

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing",
        }
    

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setTyping(true)

    await processMessageToBard(newMessages)
    }

    async function processMessageToBard(chatMessages) {
        try {
          const response = await axios.post('/api/get_answer', {
            prompt: chatMessages[chatMessages.length - 1].message,
          });
    
          const newMessage = {
            message: response.data, // Assuming the API response is the answer message
            sender: 'Bard',
          };
    
          const newMessages = [...chatMessages, newMessage];
          setMessages(newMessages);
          setTyping(false);
        } catch (error) {
          console.error('Error processing message:', error);
        }
      }

    return (
        <div className="App">
          <div style={{ position:"relative", height: "800px", width: "700px"  }}>
            <MainContainer>
              <ChatContainer>       
                <MessageList
                    typingIndicator={typing ? <TypingIndicator content="Wealth Wise is typing" /> : null}
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


export default ChatBot