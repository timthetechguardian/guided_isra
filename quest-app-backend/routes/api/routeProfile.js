import express from 'express';

import db from '../../db/connection.js';

const router1 = express.Router();

router1.get('/', async (req, res) => {
    let collection = await db.collection("questionnaires");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

router1.get('/:id', async (req, res) => {
    let collection = await db.collection("questionnaires");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("No result found!").status(404);
    else res.send(result).status(200);
});

router1.patch("/:id", async (req, res) => {
    try {
      const query = { _id: new ObjectId(req.params.id) };
      const updates = {
        $set: {
          software_owner: {
            name: req.body.software_owner.name,
            e_mail: req.body.software_owner.e_mail,
            position: req.body.software_owner.position,
            department: req.body.software_owner.department,s
          },
        },
      };
      let collection = await db.collection("questionnaires");
      let result = await collection.update(query, updates);
      res.send(result).status(200);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error updating record");
    }
  });


export default router1;