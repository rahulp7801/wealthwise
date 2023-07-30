// guest.js
import React, { useState } from 'react';
import { TextField } from '@mui/material';

const Guest = () => {
  const [answer, setAnswer] = useState('');

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      try {
        const enteredPrompt = e.target.value;
        const response = await fetch('http://localhost:5000/api/get_answer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: enteredPrompt }), // Send user prompt in API request
        });

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const data = await response.json();

        // Check if the response has an 'answer' field
        if (Object.prototype.hasOwnProperty.call(data, 'answer')) {
          setAnswer(data.answer.content); // Render the 'content' of the answer
        } else {
          console.error('Invalid response from the backend:', data);
          // Handle the error or show a message to the user
        }
      } catch (error) {
        console.error('Error occurred during API request:', error);
        // Handle the error or show a message to the user
      }
    }
  };

  return (
    <div>
      <div className="top-active-stocks-container">
        Chat Bot
      </div>
      <div style={{ position: 'absolute', bottom: 0, width: '85%', padding: '70px' }}>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          {/* Display the generated answer */}
          {answer && <div style={{ marginBottom: '10px' }}>{answer}</div>}
          <TextField
            fullWidth
            label="Enter Your Prompt"
            id="Text"
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </div>
  );
};

export default Guest;
