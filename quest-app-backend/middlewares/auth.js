import express from 'express';
import axios from 'axios';
import mongoose from 'mongoose';
import session from 'express-session';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '../auth-config.js';

const app = express();

// MongoDB connection
const dbURI = process.env.DATABASE_URI;
mongoose.connect(dbURI).then(() => {
    console.log("Successfully connected to MongoDB! New query attempt");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
});

const userSchema = new mongoose.Schema({ email: String });
const User = mongoose.model('users', userSchema);

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));

// MSAL configuration


const pca = new PublicClientApplication(msalConfig);

// Middleware to check if user is authenticated
export function ensureAuthenticated(req, res, next) {
    if (req.session.accessToken) {
        next();
    } else {
        res.redirect('/login');
    }
}


app.get('/redirect', async (req, res) => {
    const tokenRequest = {
        code: req.query.code,
        scopes: ["user.read"],
        redirectUri: process.env.REDIRECT_URI,
    };

    try {
        const response = await pca.acquireTokenByCode(tokenRequest);
        req.session.accessToken = response.accessToken;
        console.log('Access token set in session:', req.session.accessToken);
        res.redirect('/auth-azure');
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).send(error);
    }
});

// Middleware function to authenticate with Azure Graph API and check email in MongoDB
async function auth_azure(req, res, next) {
    try {
        if (!req.session.accessToken) {
            throw new Error('Access token is undefined');
        }

        const response = await axios.get('https://graph.microsoft.com/v1.0/me', {
            headers: {
                Authorization: `Bearer ${req.session.accessToken}`
            }
        });

        // Extract and log the response data
        const data = response.data;
        console.log('Response from Azure Graph API:', data);

        // Extract the email from the response data
        const email = data.mail || data.userPrincipalName;
        console.log('Extracted email:', email);

        // Query the MongoDB collection for the email
        const userExists = await User.exists({ email });

        // Log the result of the email query
        console.log('Email exists:', userExists);

        // Redirect based on email existence
        if (userExists) {
            res.redirect('/profile'); // Redirect to profile page if email exists
        } else {
            res.status(403).send('Access denied'); // Display access denied message if email does not exist
        }
    } catch (error) {
        // Log the error details
        console.error('Error calling Azure Graph API:', error.message);
        console.error(error.response ? error.response.data : 'No response data');

        // Pass the error to the next middleware for handling
        next(error);
    }
}

app.get('/auth-azure', ensureAuthenticated, auth_azure);

export default auth_azure;


