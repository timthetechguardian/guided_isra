import './../Main.css';

import { useMsal } from "@azure/msal-react";

export const SignInButton = () => {
    const {instance} = useMsal();

    const handleSignIn = () => {
        instance.loginRedirect(
            {
                scopes: ['user.read'],
            }
        );
    }

    return(
        <button className="SSO" onClick={ handleSignIn }>Single-Sign-On</button>
    )
};