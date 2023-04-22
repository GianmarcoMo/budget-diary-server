import pymongo


def get_all_movements(collection):
    movements = []
    for movement in collection.find().sort("date", pymongo.DESCENDING):
        movements.append(movement)
    return movements
