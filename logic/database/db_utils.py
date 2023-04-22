from pymongo import MongoClient
import os
from dotenv import load_dotenv


load_dotenv()


def create_connection():
    URI_DB = os.getenv("URI_MONGODB")
    print(URI_DB)
    try:
        # connection to local mongodb server
        conn = MongoClient(URI_DB)
        return conn
    except:
        return "Error while connecting to database"


def create_database(conn, db_name):
    try:
        # create database
        db = conn[db_name]
        return db
    except:
        return "Error while creating database"


def create_collection(db, collection_name):
    try:
        # create collection
        collection = db[collection_name]
        return collection
    except:
        return "Error while creating collection"
