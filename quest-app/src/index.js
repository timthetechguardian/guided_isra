
// import { MsalProvider } from '@azure/msal-react';
// import { PublicClientApplication } from '@azure/msal-browser';
// import { msalConfig } from './pages/authConfig';
// import { msalInstance } from './pages/authConfig';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './app';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

import { PublicClientApplication, EventType } from '@azure/msal-browser';

const pca = new PublicClientApplication({
    auth: {
        clientId: 'c86a0422-a4b6-46e9-bef9-7f3035a4cb8c',
        authority: 'https://login.microsoftonline.com/975d243a-4e65-46df-b77f-8f73a893ca23',
        redirectUri: '/'
    }
    });

  // Default to using the first account if no account is active on page load
if (!pca.getActiveAccount() && pca.getAllAccounts().length > 0) {
  // Account selection logic is app dependent. Adjust as needed for different use cases.
  pca.setActiveAccount(pca.getAllAccounts()[0]);
}

// Optional - This will update account state if a user signs in from another tab or window
pca.enableAccountStorageEvents();

// Listen for sign-in event and set active account
pca.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
      const account = event.payload.account;
      pca.setActiveAccount(account);
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App msalInstance={ pca }/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();