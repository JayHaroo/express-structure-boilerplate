const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

//change to env or connection string
const MONGO_URI = process.env.MONGO_URI
const client  = new MongoClient(MONGO_URI);


//Set the collection name
let nameCollection;


exports.connectDB = async () => {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB');

        // Select the database and collection
        const db = client.db('userDB');
        nameCollection = db.collection('users');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}