from app import app, createDB

if __name__ == "__main__":
    result = createDB()
    app.run()
