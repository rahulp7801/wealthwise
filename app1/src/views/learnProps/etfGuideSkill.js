import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';


const style = {
  width: '100%',
  maxWidth: 750,
  bgcolor: 'background.paper',
  margin: 'auto',
};

export default function ListDividers() {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked); };
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListSubheader sx={{ fontSize: '18px', fontWeight: 'bold' }}>
        {`Header`}
      </ListSubheader>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={isChecked}
            tabIndex={-1}
            disableRipple
            onChange={handleToggle}
          />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={isChecked}
            tabIndex={-1}
            disableRipple
            onChange={handleToggle}
          />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={isChecked}
            tabIndex={-1}
            disableRipple
            onChange={handleToggle}
          />
        </ListItemIcon>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={isChecked}
            tabIndex={-1}
            disableRipple
            onChange={handleToggle}
          />
        </ListItemIcon>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
}