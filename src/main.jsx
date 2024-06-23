// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css';
// import { registerSW } from 'virtual:pwa-register';  // Import updateSW from virtual:pwa-register
// import swDev from './swDev';
// Register the Service Worker using Vite Plugin
// registerSW();
// import { registerSW } from 'virtual:pwa-register';
// const updateSW = registerSW({
//   onNeedRefresh() {},
//   onOfflineReady() {},
// });
// main.jsx or index.js

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/serviceWorker.js').then(registration => {
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, error => {
//       console.log('ServiceWorker registration failed: ', error);
//     });
//   });
// }

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// swDev()
