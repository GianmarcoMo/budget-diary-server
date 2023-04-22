from logic.database.db_utils import (
    create_collection,
    create_connection,
    create_database,
)


def insert_one_movement(collection, movement):
    collection.insert_one(movement)


def insert_many_movements(collection, movements):
    collection.insert_many(movements)


connection = create_connection()
db = create_database(connection, "budget-diary-db")
collection = create_collection(db, "expenses")


# result = insert_many_movements(collection, movements)
