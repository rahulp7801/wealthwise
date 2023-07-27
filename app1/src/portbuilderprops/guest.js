import 'assets/scss/styles.css';
import 'assets/scss/style.scss';
import React from 'react';
import { TextField } from '@mui/material';
const LilGuestAction = () => {


  return (
    <div>
        <div className="top-active-stocks-container">
          Chat Bot
        </div>
        <div style={{ position: 'absolute', bottom: 0, width: '85%', padding: '70px' }}>
          <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
            <TextField fullWidth label="Enter Your Prompt" id="Text" onKeyPress={(e) => {if (e.key === 'Enter') {console.log(e.target.value);}}}/>
          </div>
        </div>
    </div>
  );
};

export default LilGuestAction;