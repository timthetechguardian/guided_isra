import { MongoClient } from "mongodb";

export async function main() {
    const connectionString = "mongodb://1l33s0n:bgH70lyLs3I5dt6k@ac-hatlohx-shard-00-00.d0zrn5y.mongodb.net:27017,ac-hatlohx-shard-00-01.d0zrn5y.mongodb.net:27017,ac-hatlohx-shard-00-02.d0zrn5y.mongodb.net:27017/?replicaSet=atlas-9u5y8t-shard-0&ssl=true&authSource=admin"
    const client = new MongoClient(connectionString);
    try {
        await client.connect();
        await findAllEntries(client);
    } catch (e) {
        console.error(e);
    } finally {
        // Client must close when finished/error
        // await client.close();
    }
}

main().catch(console.error);

async function findAllEntries(client) {
    const result = await client.db("quest-app-db").collection("questionnaires").find({}).toArray();
    if (result.length > 0) {
        const sanitizedData = result.map(item => ({
            _id: item._id,
            asset_name: item.asset_name,
            email: item.software_owner['e-mail']
          }));
         console.log(sanitizedData);
    } else {
        console.log("No entries found");
    }
}


// app.get('/profile', async (req, res) => {
//     const data = await main();
//         res.json(data);
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
