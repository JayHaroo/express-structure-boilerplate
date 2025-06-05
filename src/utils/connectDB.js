const { MongoClient, ObjectId } = require('mongodb');

//change to env or connection string
const client  = new MongoClient('mongodb://localhost:27017');


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