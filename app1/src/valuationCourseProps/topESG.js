import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow   } from '@mui/material';
import 'assets/scss/styles.css';



const TopESGStocks = () => {
  return (
    <div className="block">
      <div className="block-border"> 
        <div className='block-content'>
          <MainCard>
            <CardContent>
              <Typography className="text-esg" variant="h3">TOP ESG STOCKS</Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Ticker</TableCell>
                      <TableCell>Industry</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>WOR</TableCell>
                      <TableCell>Metal </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>JBHT</TableCell>
                      <TableCell> Freight & Logistics</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>VRSK</TableCell>
                      <TableCell> Consulting </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>TXN</TableCell>
                      <TableCell>Semiconductors</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>AAPL</TableCell>
                      <TableCell> Electronics </TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </MainCard>
        </div>
      </div>
    </div>
  )
}
export default TopESGStocks;