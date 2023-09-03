import React, { useState, useRef, useEffect } from 'react';
import { TextField } from '@mui/material';

const Guest = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const chatBoxRef = useRef(null);

  const handleSendMessage = async () => {
    if (userInput.trim() === '') return;
    console.log('handleSendMessage called');

    // Append user message to the existing messages array
    setMessages((prevMessages) => [...prevMessages, { text: userInput, type: 'user' }]);
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
      console.info("data: " + JSON.stringify(data));
      // Append bot message to the existing messages array
      setMessages((prevMessages) => [...prevMessages, { text: data.content, type: 'bot' }]);
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
          height: '300px',
          overflowY: 'auto',
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
            onChange={(e) => {
              console.log('User input changed:', e.target.value); // Add this line for debugging
              setUserInput(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Guest;
