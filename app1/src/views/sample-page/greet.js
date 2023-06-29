import React from 'react'
import { Typography } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';

const Greet = () => (
<MainCard title={<Typography variant="h3" fontWeight="bold" style={{ textAlign: 'center' }}>Current Skills</Typography>}>
    <Typography variant="body2">
      Skill 1
      Skill 2
    </Typography>
  </MainCard>
);

export default Greet