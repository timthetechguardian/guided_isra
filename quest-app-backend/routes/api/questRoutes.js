import express from 'express';

import db from '../../db/connection.js';

import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/:id', async (req, res) => {
    let collection = await db.collection("questionnaires");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("No result found!").status(404);
    else res.send(result).status(200);
});

router.post('/', async (req, res) => {
    try {
        let newDocument = {
            asset_name: "",
            asset_description: "",
            additional_notes: "",
            personal_data_cat: [],
            confidential_business_data_cat: [],
            no_data_cat: false,
            userkind: "",
            shared_user: "",
            usercred: "",
            password_complex: "",
            mfa_opt: "",
            mfa_use: "",
            mfa_name: "",
            passwd_change: "",
            passwdmng_use: "",
            passwdmg_name: "",
        };
      let collection = await db.collection("questionnaires");
      let result = await collection.insertOne(newDocument);
      res.send(result).status(204);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error adding record");
    }
});

// router.patch("/:id", asnyc (req, res) => {
//     try {
//       const query = { _id: new ObjectId(req.params.id) };
//       const updates = {
//         $set: {
//             asset_name: "",
//             asset_description: "",
//             additional_notes: "",
//             personal_data_cat: [],
//             confidential_business_data_cat: [],
//             no_data_cat: false,
//             userkind: "",
//             shared_user: "",
//             usercred: "",
//             password_complex: "",
//             mfa_opt: "",
//             mfa_use: "",
//             mfa_name: "",
//             passwd_change: "",
//             passwdmng_use: "",
//             passwdmg_name: "",
//         },
//       };
//       let collection = await db.collection("questionnaires");
//       let result = await collection.updateOne(query, updates);
//       res.send(result).status(200);
//       } catch (err) {
//         console.error(err);
//         res.status(500).send("Error updating record");
//       } 
// });
router.patch("/:id", async (req, res) => {
    try {
      const query = { _id: new ObjectId(req.params.id) };
      const updates = {
        $set: {
          asset_name: req.body.asset_name,
          software_owner: {
            name: '',
            e_mail: '',
            position: '',
            department: '',
          },
          asset_description: req.body.asset_description,
          additional_notes: req.body.additional_notes,
          personal_data_cat: req.body.personal_data_cat,
          confidential_business_data_cat: req.body.confidential_business_data_cat,
          no_data_cat: req.body.no_data_cat,
          userkind: req.body.userkind,
          shared_user: req.body.shared_user,
          usercred: req.body.usercred,
          password_complex: req.body.password_complex,
          mfa_opt: req.body.mfa_opt,
          mfa_use: req.body.mfa_use,
          mfa_name: req.body.mfa_name,
          passwd_change: req.body.passwd_change,
          passwdmng_use: req.body.passwdmng_use,
          passwdmg_name: req.body.passwdmg_name,
        },
      };
  
      let collection = await db.collection("records");
      let result = await collection.updateOne(query, updates);
      res.send(result).status(200);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error updating record");
    }
  });

export default router;