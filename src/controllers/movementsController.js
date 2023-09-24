const {createConnectionToDB, getCollection} = require("./databaseController.js")

async function getAllMovements() {
    try {
        await createConnectionToDB();
        const movementsCollection = getCollection(process.env.DATABASE_NAME, "movements");
        const allMovemnets = movementsCollection.find();
        
        return allMovemnets;
    } catch (error) {
        throw new Error("Movements not found!");
    }

}


module.exports = { getAllMovements };