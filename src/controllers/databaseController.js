const { MongoClient } = require('mongodb');
const URI_DB = process.env.URI_MONGODB_ATLAS;

const client = new MongoClient(URI_DB);
const { isEmpty } = require("../controllers/utils/stringUtils");

async function createConnectionToDB() {
  try {
    await client.connect();
  } catch (error) {
    console.error("Error: ", error);
  }
}

async function closeConnectionToDB() {
  try {
    await client.close();  
  } catch (error) {
    console.error("Error to close connection: ", error)
  }
}

function getCollection(dbName, collectionName) {
  try {
    if (isEmpty(dbName) || isEmpty(collectionName)) {
      console.error(`The name of db or collection is empty. - dbName: ${dbName} - collectionName: ${collectionName}`);
      
    }
    const collection = client.db(dbName).collection(collectionName);
    return collection;
  } catch (error) {
    console.error("Impossible to get the collection");
  }
}

module.exports = {createConnectionToDB, getCollection, closeConnectionToDB}