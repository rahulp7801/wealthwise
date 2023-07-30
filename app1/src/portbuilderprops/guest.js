import React, { useState, useRef, useEffect } from 'react';
import { TextField } from '@mui/material';

const Guest = () => {  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const chatBoxRef = useRef(null);

  const handleSendMessage = async () => {
    if (userInput.trim() === '') return;

    const newMessage = { text: userInput, type: 'user' };
    setMessages([...messages, newMessage]);
    setUserInput('');

    try {
      const response = await fetch('http://localhost:5000/api/get_answer', {
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
        const botResponse = { text: data.answer.content, type: 'bot' };
        setMessages([...messages, botResponse]);
      } catch (error) {
        console.error('Error occurred during API request:', error);
        // Handle the error or show a message to the user
      }
    };
    useEffect(() => {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }, [messages]);
  
    return (
      <div>
        <div className="top-active-stocks-container">
          Chat Bot
        </div>
        <div
          ref={chatBoxRef}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '85%',
            padding: '70px',
            height: '300px', // Set a fixed height for the chat box to enable scrolling
            overflowY: 'auto', // Enable vertical scrolling
          }}
        >
          <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start',
                  marginBottom: '10px',
                }}
              >
                <div
                  style={{
                    background: message.type === 'user' ? '#000000' : '#000000',
                    padding: '10px 20px',
                    borderRadius: '20px',
                    maxWidth: '70%',
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, width: '85%', padding: '70px' }}>
          <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
            <TextField
              fullWidth
              label="Enter Your Prompt"
              id="Text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
            />
          </div>
        </div>
      </div>)
}
export default Guest;