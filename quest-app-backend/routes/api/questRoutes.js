const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    console.log('Hit');

    // this gets executed when user visits http://localhost:3001/quest
});

// Add rules when using MSAL
router.get('/1011', (req, res) => {
    res.send('This is quest 1011 route');
    // this gets executed when user visits http://localhost:3001/quest/1011
});

module.exports = router;