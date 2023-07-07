import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
//import { OrbitControls } from '@react-three/drei';
//import MainCard from 'ui-component/cards/MainCard';
//import MainCardDark from 'ui-component/cards/MainCardDark';

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
    <div>
      <Canvas>
        <Suspense fallback={null}>
        </Suspense>
      </Canvas>
      <div>
        <StockScreeningTable />
      </div>
      <div className='gap'></div>
      <div className='gap'></div>
      <div>
        <StockScreeningTable />
      </div>
    </div>
  );
}
