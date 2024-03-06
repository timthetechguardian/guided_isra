import { MongoClient } from "mongodb";
const connectionString = process.env.DATABASE_URL;
const client = new MongoClient(connectionString);
let conn;
async function connect() {
    try {
        conn = await client.connect();
        // database and collection
        const db = client.db('quest-app-db');
        const coll = db.collection('questionnaires');

        // find code goes here
        const assets = await coll.find({}, { asset_name: 1 }).toArray();
        console.log(assets);

    } catch (e) {
        console.error(e);
    } finally {
        // Client must close when finished/error
        await client.close();
    }
}
run().catch(console.dir);