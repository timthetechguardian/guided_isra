
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './app';
import { msalConfig } from '../../quest-app-backend/auth-config';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { PublicClientApplication, EventType } from '@azure/msal-browser';


const pca = new PublicClientApplication(msalConfig);

//   // Default to using the first account if no account is active on page load
// if (!pca.getActiveAccount() && pca.getAllAccounts().length > 0) {
//   // Account selection logic is app dependent. Adjust as needed for different use cases.
//   pca.setActiveAccount(pca.getActiveAccount()[0]);
// }

// // Optional - This will update account state if a user signs in from another tab or window
// pca.enableAccountStorageEvents();

// // Listen for sign-in event and set active account
// pca.addEventCallback((event) => {
//   if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
//       const account = event.payload.account;
//       pca.setActiveAccount(account);
//   }
// });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App msalInstance={ pca }/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();