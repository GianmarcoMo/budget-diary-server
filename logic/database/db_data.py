import pymongo


def get_all_movements(collection):
    movements = []
    result_query = collection.find().sort("date", pymongo.DESCENDING)

    for movement in result_query:
        print(movement)
        movements.append(movement)

    print(movements)

    return movements
