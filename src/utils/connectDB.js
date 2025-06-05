const { MongoClient, ObjectId } = require('mongodb');

//change to env or connection string
const client  = new MongoClient('mongodb://localhost:27017')