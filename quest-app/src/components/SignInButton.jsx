import './../Main.css';

import { useMsal } from "@azure/msal-react";
import { Button } from '@mui/material';

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
        <div onClick={handleSignIn}>Single-Sign-On</div>
    )
};