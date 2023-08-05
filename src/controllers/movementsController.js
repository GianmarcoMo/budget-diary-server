function getAllMovements() {
    return [
        {
            id: 1,
            name: "test"
        }
    ];
}

function getMovementById(id) {
    throw new Error("Movement's id not found!");
}

module.exports = { getAllMovements, getMovementById };