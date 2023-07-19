import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Paper from '@mui/material/Paper';

const style = {
  width: '100%',
  maxWidth: 750,
  margin: 'auto',
  borderRadius: '10px',
  backgroundColor: '#29314f',
  marginBottom: '100px',
};

export default function StockTaskTable() {
  const [checkedItems, setCheckedItems] = useState({});

  const handleToggle = (value) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [value]: !prevState[value],
    }));
  };

  return (
    <Paper sx={style} elevation={0}>
      <List component="nav" aria-label="mailbox folders">
        <ListSubheader
          sx={{
            color: 'white',
            backgroundColor: '#1e253f',
            fontSize: '18px',
            fontWeight: 'bold',
            borderRadius: '10px 10px 0 0',
            textAlign: 'center',
          }}
        >
          Relative Valuation/Understanding Multiples
        </ListSubheader>
        <ListItemButton>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checkedItems['Drafts']}
              tabIndex={-1}
              disableRipple
              onChange={() => handleToggle('Drafts')}
            />
          </ListItemIcon>
          <ListItemText primary={<Typography sx={{ color: 'white', fontWeight: 'bold' }}>Introduction to the Multiple</Typography>} />
        </ListItemButton>
        <ListItemButton divider>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checkedItems['Trash']}
              tabIndex={-1}
              disableRipple
              onChange={() => handleToggle('Trash')}
            />
          </ListItemIcon>
          <ListItemText primary={<Typography sx={{ color: 'white', fontWeight: 'bold' }}>Enterprise Value Multiples</Typography>} />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checkedItems['Spam']}
              tabIndex={-1}
              disableRipple
              onChange={() => handleToggle('Spam')}
            />
          </ListItemIcon>
          <ListItemText primary={<Typography sx={{ color: 'white', fontWeight: 'bold' }}>Equity Value Multiples</Typography>} />
        </ListItemButton>
      </List>
    </Paper>
  );
}
