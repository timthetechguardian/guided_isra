import './../Main.css';
import { useMsal } from "@azure/msal-react";

export const SignInButton = () => {
    const { instance } = useMsal();

    const handleSignIn = async () => {
        try {
            // Initiate the login process by calling the backend login route
            const response = await fetch('http://localhost:5050/login');
            if (response.ok) {
                const data = await response.json();
                window.location.href = data.authUrl;  // Redirect to the Azure AD login URL
            } else {
                console.error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div onClick={handleSignIn}>Single-Sign-On</div>
    );
};

