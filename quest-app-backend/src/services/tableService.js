const azure = require('azure-storage');

const tableSvc = azure.createTableService(
    "restapistoragequest", 
    process.env.AZURE_STORAGE_ACCESS_KEY
);

const insertEntity = (tableName, entity) => {
    return new Promise((resolve, reject) => {
        tableSvc.insertEntity(tableName, entity, {echoContent: true, payloadFormat:"application/json;odata=nometadata"},
        (error, result, response) => {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    });
}

exports.insertEntity = insertEntity;