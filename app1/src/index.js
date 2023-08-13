import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { store } from 'store';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import config from './config';

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase config here
};
firebase.initializeApp(firebaseConfig);

const container = document.getElementById('root');
const root = createRoot(container);

function AppWithLoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const jwtCookie = document.cookie
      .split('; ')
      .find(cookie => cookie.startsWith('jwt_token='));

    setIsLoggedIn(!!jwtCookie); // Set isLoggedIn to true if jwtCookie is present
  }, []);

  return (
    <App isLoggedIn={isLoggedIn} />
  );
}

root.render(
  <Provider store={store}>
    <BrowserRouter basename={config.basename}>
      <AppWithLoginStatus />
    </BrowserRouter>
  </Provider>
);

serviceWorker.unregister();
