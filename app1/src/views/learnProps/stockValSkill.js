import React from 'react';
//import { OrbitControls } from '@react-three/drei';
import MainCard from 'ui-component/cards/MainCard';
//import MainCardDark from 'ui-component/cards/MainCardDark';
import RelValTable2 from 'views/learnProps/stockScreeningTable2.js';
//import CardMedia from '@mui/material/CardMedia';
//import CollapsibleTable from 'views/learnProps/stockScreeningTable.js';
//import CollapsibleTable2 from 'views/learnProps/relValTable.js';
//import { createScene } from 'views/learnProps/threeShape.js';
import StockScreeningTable from 'views/learnProps/stockScreeningTable.js';
//import Box3D from 'views/learnProps/threeShape.js';
//import Graph33 from 'views/learnProps/Graph33';

//import { useLoader }  from '@react-three/fiber';
//import { TextureLoader } from 'three/src/loaders/TextureLoader';
//import texture from "views/learnProps/9964554_2142.jpg"


export default function StockValSkill() {
  return (
    <MainCard>
      <div className="stock-val-skill-container">
        Stock Valuation
      </div>
      <MainCard>
        <div>
          <StockScreeningTable />
        </div>
        <div className='gap'></div>
        <div>
          <RelValTable2 />
        </div>
      </MainCard>
    </MainCard>
  );
}
