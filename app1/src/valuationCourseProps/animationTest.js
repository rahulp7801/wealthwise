import React from 'react';

const TenInputSlotsComponent = ({ index, onUserInput }) => {
  // const placeholders = [
  //   '1. What are your long-term financial goals and objectives?',
  //   '2. What is your preferred investment timeframe?',
  //   '3. What is your risk tolerance?',
  //   '4. What is your investment experience? Are you a beginner or an experienced investor?',
  //   '5. What is your current financial situation?',
  //   '6. What is your investment knowledge? ',
  //   '7. What is your asset allocation preference? ',
  //   '8. What industry sectors or themes are you interested in? ',
  //   '9. Do you have any specific ethical or social considerations when selecting stocks for investment?',
  //   '10. What is your desired level of involvement in managing your investments?',
  // ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    onUserInput(index, value);
  };

  return (
    <div >
      {/* {placeholders[index]} */}
      <input
        type="text"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TenInputSlotsComponent;
