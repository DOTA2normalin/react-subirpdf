import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

  
firebase.initializeApp({
  apiKey: "AIzaSyBC4oXTnz5HaWPtzlxKJyP0fvz45isKSyw",
    authDomain: "subirpdf-eff1d.firebaseapp.com",
    databaseURL: "https://subirpdf-eff1d.firebaseio.com",
    projectId: "subirpdf-eff1d",
    storageBucket: "subirpdf-eff1d.appspot.com",
    messagingSenderId: "859433726488",
    appId: "1:859433726488:web:534d261f017adc7bb9896d",
    measurementId: "G-T1CX2Q575Z"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
