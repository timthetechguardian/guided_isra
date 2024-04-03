import './../Main.css'; 
import Login from './Login';
// import Video from './Video';

import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

export const SignIn = () => {
    return (
        <div>
            <AuthenticatedTemplate>
                {/* <Video /> */}
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <Login />
            </UnauthenticatedTemplate>
        </div>
    );
}