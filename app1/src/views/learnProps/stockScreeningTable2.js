import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

const style = {
  width: '100%',
  maxWidth: 750,
  border: '1px solid #697586',
  bgcolor: 'background.darkPaper',
  margin: 'auto',
  borderRadius: '10px',
};

export default function RelValTable2() {
  const [checkedItems, setCheckedItems] = useState({});

  const handleToggle = (value) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [value]: !prevState[value],
    }));
  };

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListSubheader
        sx={{
          color: 'white',
          backgroundColor: '#111936',
          fontSize: '18px',
          fontWeight: 'bold',
        }}
      >
        {`Relative Valuation/Understanding Multiples`}
      </ListSubheader>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checkedItems['Drafts']}
            tabIndex={-1}
            disableRipple
            onChange={() => handleToggle('Drafts')}
          />
        </ListItemIcon>
        <ListItemText primary={<Typography sx={{ color: 'white' }}>Introduction to the Multiple</Typography>} />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checkedItems['Trash']}
            tabIndex={-1}
            disableRipple
            onChange={() => handleToggle('Trash')}
          />
        </ListItemIcon>
        <ListItemText primary={<Typography sx={{ color: 'white' }}>Enterprise Value Multiples</Typography>} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checkedItems['Spam']}
            tabIndex={-1}
            disableRipple
            onChange={() => handleToggle('Spam')}
          />
        </ListItemIcon>
        <ListItemText primary={<Typography sx={{ color: 'white' }}>Equity Value Multiples</Typography>} />
      </ListItem>
      <Divider />
    </List>
  );
}
