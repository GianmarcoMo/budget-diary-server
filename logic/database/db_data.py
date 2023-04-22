import pymongo


def get_all_movements(collection):
    movements = []
    result_query = collection.find().sort("date", pymongo.DESCENDING)

    print(result_query)
    for movement in result_query:
        movements.append(movement)

    print(movements)

    return movements
