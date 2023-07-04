//import Greet from 'views/sample-page/greet.js';
import React, { Component } from 'react'
import MainCard from 'ui-component/cards/MainCard';
//import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
//import { Table, TableBody, TableRow, TableCell, Link } from '@material-ui/core';
//import { Link as RouterLink } from 'react-router-dom';
import CollapsibleTable from 'views/learnProps/stockScreeningTable.js';
import CollapsibleTable2 from 'views/learnProps/relValTable.js';



class StockValSkill extends Component {
  
  render() {
    return (
    <>
      <div className="background">

        <CardMedia
          component="img"
          alt=""
          height="250"
          src="https://i.postimg.cc/NMWtgphv/stockvalwall.png"
        />
        <div className='gap'>

        </div>
        <MainCard>
            <CollapsibleTable />
        </MainCard>
        <div className="gap"></div>
        <MainCard>
            <CollapsibleTable2 />
        </MainCard>
      </div>
    </>
    );
  }
}

export default StockValSkill;







