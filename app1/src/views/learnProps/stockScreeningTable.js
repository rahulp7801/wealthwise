import React, { useState } from 'react';
import List from '@mui/material/List';
//import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';



const style = {
  width: '100%',
  maxWidth: 750,
  border: '1px solid #697586',
  bgcolor: 'background.darkPaper',
  margin: 'auto',
  borderRadius: '10px',
};

export default function StockScreeningTable() {
  const [checkedItems, setCheckedItems] = useState({});
  const handleButtonClick = () => {
    alert('Clicked');
    navigate('/icons/pick-stock');
  };

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
          backgroundColor: '#29314f',
          fontSize: '18px',
          fontWeight: 'bold',
        }}
      >
        {`Stock Screening`}
      </ListSubheader>
      <Divider />
      <ListItemButton >
        <Button onClick={handleButtonClick}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checkedItems['Drafts']}
            tabIndex={-1}
            disableRipple
            onChange={() => handleToggle('Drafts')}
          />
        </ListItemIcon>
        <ListItemText primary={<Typography sx={{ color: 'white' }}>Pick a Stock</Typography>} />
        </Button>
      </ListItemButton>
      <Divider />
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
        <ListItemText primary={<Typography sx={{ color: 'white' }}>Understanding the Business</Typography>} />
      </ListItemButton>
      <Divider />
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
        <ListItemText primary={<Typography sx={{ color: 'white' }}>KPI (Key Performance Indicators)</Typography>} />
      </ListItemButton>
      <Divider />
    </List>
  );
}
