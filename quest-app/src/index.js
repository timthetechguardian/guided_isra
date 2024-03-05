
// import { MsalProvider } from '@azure/msal-react';
// import { PublicClientApplication } from '@azure/msal-browser';
// import { msalConfig } from './pages/authConfig';
// import { msalInstance } from './pages/authConfig';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Quest from './pages/Quest';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import FAQ from './pages/faq';
import Video from './pages/Intro';
// import OutlinedCard from './components/card';
// import { AlertProvider } from './alerts/useAlert';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/profile" component={ProfilePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/quest" component={Quest}/>
        <Route path="/faq" component={FAQ} />
        <Route path="/intro" component={Video} />
      </Switch>
    </Router>
  </React.StrictMode>
);

reportWebVitals();