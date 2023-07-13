import React, { useState } from 'react';
import axios from 'axios';

const TextBox = () => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
  event.preventDefault();

  axios.post('http://localhost:5000/api/post-db', { text })
    .then(response => {
      console.info(response);
    })
    .catch(error => {
      console.error("hello" + error);
    });
};

  return (
    <form onSubmit={handleSubmit}>
  <input
    type="text"
    value={text}
    onChange={(event) => setText(event.target.value)}
  />
  <button type="submit">Submit</button>
</form>
  );
};

export default TextBox;