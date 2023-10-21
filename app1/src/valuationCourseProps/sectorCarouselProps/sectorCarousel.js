import React from 'react';
import { Carousel } from 'antd';
import Image1 from './1.png';
import Image2 from './2.png';
import Image3 from './3.png';
import Image4 from './4.png';
import Image5 from './5.png';
import Image6 from './6.png';
import Image7 from './7.png';
import Image8 from './8.png';
import Image9 from './9.png';
import Image10 from './10.png';
import Image11 from './11.png';

const SectorCarousel = () => (
  <Carousel effect="fade">
    <div>
      <img src={Image1} alt=" 100it" style={{ width: '100%', height: '550px' }} />
    </div>
    <div>
      <img src={Image2} alt=" 2" style={{ width: '100%', height: '550px' }} />
    </div>
    <div>
      <img src={Image3} alt=" 3" style={{ width: '100%', height: '550px' }} />
    </div>
    <div>
      <img src={Image4} alt=" 4" style={{ width: '100%', height: '550px' }} />
    </div>
    <div>
      <img src={Image5} alt=" 5" style={{ width: '100%', height: '550px' }} />
    </div>
    <div>
      <img src={Image6} alt=" 6" style={{ width: '100%', height: '550px' }} />
    </div>
    <div>
      <img src={Image7} alt=" 7" style={{ width: '100%', height: '550px' }} />
    </div>
    <div>
      <img src={Image8} alt=" 8" style={{ width: '100%', height: '550px' }} />
    </div>
    <div>
      <img src={Image9} alt=" 9" style={{ width: '100%', height: '550px' }} />
    </div>
    <div>
      <img src={Image10} alt=" 10" style={{ width: '100%', height: '550px' }} />
    </div>
    <div>
      <img src={Image11} alt=" 11" style={{ width: '100%', height: '550px' }} />
    </div>
  </Carousel>
);

export default SectorCarousel;
