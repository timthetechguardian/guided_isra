import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './pages/authConfig';

// import LoginPage from './pages/Login';
// import ProfilePage from './pages/Profile';
// import Quest from './pages/Quest';
// import FAQ from './pages/faq';
import Video from './pages/Intro';
// import OutlinedCard from './components/card';
import { AlertProvider } from './alerts/useAlert';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <AlertProvider>
        <Video />
      </AlertProvider>
    </MsalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();