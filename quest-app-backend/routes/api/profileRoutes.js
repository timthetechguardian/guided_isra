import express from 'express';

import db from '../../db/connection.js';

import { ObjectId } from 'mongodb';

const router1 = express.Router();

router1.get('/', async (req, res) => {
    let collection = await db.collection("questionnaires");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

export default router1;
