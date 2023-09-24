const { createConnectionToDB, getCollection, writeSingleDocument } = require("./databaseController.js")
const mongo = require('mongodb');

async function getMovementById(documentId) {
    await createConnectionToDB();
    const movementsCollection = getCollection(process.env.DATABASE_NAME, "movements");

    try {
        const options = {
            projection: { _id: 0, description: 1 },
        };
        const document = await movementsCollection.findOne({ _id: mongo.ObjectId(documentId)}, options);

        if (document === null) {
            return -1;
        }
        console.log(document);
        return document;
    } catch (error) {
        console.error(error);
        throw new error;
    }

}

async function saveDocument(dataToWrite) {
    await createConnectionToDB();
    const movementsCollection = getCollection(process.env.DATABASE_NAME, "movements");
    
    try {
        const idOfDocumentInserted = writeSingleDocument(dataToWrite, movementsCollection);
        return idOfDocumentInserted;
    } catch (error) {
        console.log(error);
        return -1;
    }
    
}

module.exports = { getMovementById, saveDocument };