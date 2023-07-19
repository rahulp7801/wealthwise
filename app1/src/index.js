import { createRoot } from 'react-dom/client';
import React from 'react'
// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// project imports
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { store } from 'store';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// style + assets
import 'assets/scss/style.scss';
import config from './config';


// ==============================|| REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const firebaseConfig = {
  apiKey: "AIzaSyB-_yVx8sZYJ5-zlToQ5fKh3_hTS4uQ920",
  authDomain: "wealthwise-46f60.firebaseapp.com",
  databaseURL: "https://wealthwise-46f60-default-rtdb.firebaseio.com",
  projectId: "wealthwise-46f60",
  storageBucket: "wealthwise-46f60.appspot.com",
  messagingSenderId: "1038265631668",
  appId: "1:1038265631668:web:307904228298d125c0e8e1",
  measurementId: "G-NXKK636ZDL"
}; // yall rinks better not mess with this

firebase.initializeApp(firebaseConfig);

root.render(
  <Provider store={store}>
    <BrowserRouter basename={config.basename}>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
