const express = require('express');
const router = express.Router();
const Model = require('../../models/model');

router.get('/', async (req, res) => {
    // res.send('This is profile route');
    // this gets executed when user visits http://localhost:3001/profile
    let collection = await db.collection('questionnaires');
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

// Add rules when using MSAL
router.get('/101', (req, res) => {
    res.send('This is profile 101 route');
    // this gets executed when user visits http://localhost:3001/profile/101
});

module.exports = router;