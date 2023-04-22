from bson import ObjectId
from flask import Flask, request
from flask_cors import CORS
from insert_movements import insert_one_movement
from logic.database.db_data import get_all_movements
from bson.json_util import dumps


from logic.database.db_utils import (
    create_collection,
    create_connection,
    create_database,
)

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


def createDB():
    try:
        connection = create_connection()
        db = create_database(connection, "budget-diary-db")
        create_collection(db, "expenses")

        connection.close()
        return {"message": "Created database with collections"}
    except:
        return {"message": "Error while connecting to database"}


@app.get("/get_movements")
def allMovements():
    try:
        connection = create_connection()
        db = create_database(connection, "budget-diary-db")
        collection = create_collection(db, "expenses")

        movements = get_all_movements(collection)

        print(movements)
        connection.close()
        return dumps(movements)
    except:
        return {"message": "Error while connecting to database"}


@app.post("/add_movement")
def addMovement():
    data = request.get_json(silent=True)
    try:
        connection = create_connection()
        db = create_database(connection, "budget-diary-db")
        collection = create_collection(db, "expenses")

        result = insert_one_movement(collection, data)

        print(result)

        connection.close()
        return {"message": "Added movement"}
    except:
        return {"message": "Error while connecting to database"}


@app.post("/delete_movement")
def deleteMovement():
    data = request.get_json(silent=True)
    try:
        connection = create_connection()
        db = create_database(connection, "budget-diary-db")
        collection = create_collection(db, "expenses")

        id_movement = data["_id"]
        collection.delete_one({"_id": ObjectId(id_movement)})

        connection.close()
        return {"message": "Deleted movement"}
    except:
        return {"message": "Error while connecting to database"}
