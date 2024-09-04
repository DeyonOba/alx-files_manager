import { MongoClient } from 'mongodb';

// Extract environment variables or default values
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
const DB_DATABASE = process.env.DB_DATABASE || 'files_manager';

class DBClient {
  constructor() {
    // MongoDB connection URL
    const url = `mongodb://${DB_HOST}:${DB_PORT}`;

    // Initialize the MongoDB client
    this.client = new MongoClient(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    // Connect to the server
    this.client.connect((err) => {
      if (err) console.error('Failed to connect to server');
      this.db = this.client.db(`${DB_DATABASE}`);
    });
  }

  // Check if MongoDB client is connected
  isAlive() {
    return this.client.isConnected();
  }

  // Get the number of documents in the collection `users`
  async nbUsers() {
    return this.db.collection('users').countDocuments();
  }

  // Get the number of documents in the collection `files`
  async nbFiles() {
    return this.db.collection('files').countDocuments();
  }
}

const dbClient = new DBClient();
export default dbClient;
