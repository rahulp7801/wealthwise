import React, { useEffect } from 'react';
import * as THREE from 'three';

const WaveCarousel = () => {
  useEffect(() => {
    // Move the non-React code into this useEffect
    const rgb = (r, g, b) => new THREE.Vector3(r, g, b);

    const loader = (path, texture) => {
        return new Promise((resolve, reject) => {
          let loader = new THREE.FileLoader();
          if (typeof texture !== "undefined") {
            loader = new THREE.TextureLoader();
          }
          loader.load(path, (item) => resolve(item));
        });
      }
  
      // Function to generate a random integer within a given range
    const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const config = {
    individualItem: '.album-item',
    carouselWidth: 1000,
    carouselId: '#album-rotator',
    carouselHolderId: '#album-rotator-holder',
    colors: [
        { low: rgb(0, 114, 255), high: rgb(48, 0, 255) },
        { low: rgb(236, 166, 15), high: rgb(233, 104, 0) },
        { low: rgb(43, 75, 235), high: rgb(213, 51, 248) },
        { low: rgb(175, 49, 49), high: rgb(123, 16, 16) }
    ]
    };

    // Move the rest of your code here
    createWave(config.individualItem, config.colors);

    // Cleanup code for unmounting
    return () => {
      // Add any necessary cleanup code here
    };
  }, []);

  return (
    <div id="album-rotator">
      <div id="album-rotator-holder">
        {/* Add your HTML content here */}
      </div>
    </div>
  );
};

export default WaveCarousel;
