import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MsalProvider } from '@azure/msal-react';
import Grid from '@mui/material/Grid';

import ProfilePage from './pages/Profile';
import LoginPage from './pages/Login';
import Quest from './pages/Quest';
import FAQ from './pages/faq';
import Video from './pages/Intro';

export default function App({ msalInstance }) {
    return (
    <MsalProvider instance={msalInstance}>
        <Grid>
        <Router>
            <Switch>
                <Route path="/profile" component={ProfilePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/quest" component={Quest}/>
                <Route path="/faq" component={FAQ} />
                <Route path="/intro" component={Video} />
            </Switch>
        </Router>
        </Grid>
    </MsalProvider>
)};