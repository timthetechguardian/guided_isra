// src/SignInButton.js
import React from 'react';
import { useMsal } from '@azure/msal-react';

const signInButton = () => {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginPopup().catch(e => {
            console.error(e);
        });
    };

    return <button onClick={handleLogin}/>;
};

export default signInButton;
