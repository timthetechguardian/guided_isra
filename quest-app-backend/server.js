import express from 'express';
import cors from 'cors';
import routeQuest from './routes/api/routeQuest.js';
import routeProfile from './routes/api/routeProfile.js';
import auth_azure from './middlewares/auth.js';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

//middlewares
app.use('/api', auth_azure);
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});

app.use('/quest', routeQuest);
app.use('/profile', routeProfile);

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;