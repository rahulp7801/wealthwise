import * as THREE from 'three';
impoort { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.load(
    'views/learnProps/graph2/scene.gltf',
    ( gltf ) => {
        // called when the resource is loaded
        scene.add( gltf.scene );
    },
    ( xhr ) => {
        // called while loading is progressing
        console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
    },
    ( error ) => {
        // called when loading has errors
        console.error( 'An error happened', error );
    },
);