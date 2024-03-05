const { insertEntity } = require("../services/tableService");

async function postApiTest(context, req) {
    try {

        if(!req.body) {
            context.res = {
                status: 400,
                body: "Please pass a request body",
            };
        }

        //change those attributes
        const {blog, title, content} = req.body;

        if(!blog || !title || !content) {
            context.res = {
                status: 400,
                body: "Please pass a valid blog, title and content",
            };
        }

        const entity = {
            //asset_name and e-mail are together unique identifiers
            PartitionKey: {'_': blog}, //change this to asset_name
            RowKey: { '_': new Date().getTime().toString() }, //change this to e-mail
            title: {'_': title},
            content: {'_': content},
        }

        const result = await insertEntity("Posts", entity);

        context.res = {
            body: result,
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: error.message,
        }
    }

}

module.exports = postApiTest;