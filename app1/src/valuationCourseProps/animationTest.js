import React, { useState } from 'react';

const TenInputSlotsComponent = () => {
  const placeholders = [
    'Enter sentence 1',
    'Enter sentence 2',
    'Enter sentence 3',
    'Enter sentence 4',
    'Enter sentence 5',
    'Enter sentence 6',
    'Enter sentence 7',
    'Enter sentence 8',
    'Enter sentence 9',
    'Enter sentence 10',
  ];

  const [inputs, setInputs] = useState(Array(10).fill('')); // Array to hold the user inputs

  const handleInputChange = (index, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };

  const handleSubmit = () => {
    // Do something with the array of inputs (e.g., send it to the server)
    console.log('User inputs:', inputs);
  };

  return (
    <div>
      <h2>Input Sentences:</h2>
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            type="text"
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder={placeholders[index]}
          />
        </div>
      ))}
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default TenInputSlotsComponent;
