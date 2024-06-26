import './../Main.css';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from '../../../quest-app-backend/auth-config';

export const SignInButton = () => {
    const { instance } = useMsal();

    const handleSignIn = () => {
        instance
            .loginRedirect({
                ...loginRequest,
            })
            .then(() => {
                // Make a GET request to start the backend authentication flow
                fetch("http://localhost:5050/api/redirect")
                    .then((response) => {
                        // Handle the response
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => console.log(error));
    };

    return (
        <div onClick={handleSignIn}>Single-Sign-On</div>
    );
};

