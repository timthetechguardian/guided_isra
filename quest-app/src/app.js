import { Router, Route, Switch } from 'react-router-dom';

import { MsalProvider } from '@azure/msal-react';
import Grid from '@mui/material/Grid';
import history from './history';

import ProfilePage from './pages/Profile';
// import LoginPage from './pages/Login';
import Quest from './pages/Quest';
import FAQ from './pages/faq';
import Video from './pages/Video';
import { SignIn } from './pages/SignInPage';

export default function App({ msalInstance }) {
    return (
    <MsalProvider instance={msalInstance}>
        <Grid>
        <Router history={history}>
            <Switch>
                <Route path="/profile" component={ProfilePage} />
                {/* <Route path="/login" component={LoginPage} /> */}
                <Route path="/quest/:id" component={Quest}/>
                <Route path="/faq" component={FAQ} />
                <Route path="/video" component={Video} />
                <Route path="/" component={SignIn} />
            </Switch>
        </Router>
        </Grid>
    </MsalProvider>
)};