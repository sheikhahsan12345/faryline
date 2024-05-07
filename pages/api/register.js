// pages/api/register.js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, password } = req.body;

      // Connection URI for MongoDB
      // const uri = 'mongodb+srv://muhammadkhan747474:7hHyo5uSLj5RqgI2@cluster0.hwozelo.mongodb.net/';
      const uri = 'mongodb://localhost:27017/';
      const client = new MongoClient(uri);
       
      // Connect to MongoDB
      await client.connect();

      console.log('Connected to MongoDB database!');
      const data = req.body; 
      // Access the database and collection
      const database = client.db('register');
      const collection = database.collection('registerlist');

      // Insert data into the registerlist collection
      const result = await collection.insertOne({ name, email, password });
      console.log('Data inserted into the registerlist collection:');
      // Close the connection when done with it
      await client.close();

      res.status(200).json({ success: true, message: 'Data inserted successfully',result });
    } catch (error) {
      console.error('Error registering user:', error.message);
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
