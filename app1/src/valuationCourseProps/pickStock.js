import { Grid, Card, CardContent, Typography, ListItemText, ListItem, List, Table, TableBody, TableCell, TableContainer, TableHead, TableRow   } from '@mui/material';
import React from 'react';

const MyComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Typography variant="h3">TOP ESG STOCKS</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Company</TableCell>
                    <TableCell>Ticker</TableCell>
                    <TableCell>Industry</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Worthington Industries</TableCell>
                    <TableCell>WOR</TableCell>
                    <TableCell>Cell 3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>J.B. Hunt Transport Services</TableCell>
                    <TableCell>JBHT</TableCell>
                    <TableCell>Cell 6</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Verisk Analytics</TableCell>
                    <TableCell>VRSK</TableCell>
                    <TableCell>Cell 6</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Texas Instruments</TableCell>
                    <TableCell>TXN</TableCell>
                    <TableCell>Cell 6</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Apple</TableCell>
                    <TableCell>AAPL</TableCell>
                    <TableCell>Cell 6</TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Typography variant="h2">Card Title</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Item 1" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Item 2" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Item 3" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Typography variant="h2">Card Title</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Item 1" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Item 2" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Item 3" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MyComponent;
