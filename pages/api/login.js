// pages/api/login.js
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
    
      // Connection URI for MongoDB
      // const uri = 'mongodb+srv://muhammadkhan747474:7hHyo5uSLj5RqgI2@cluster0.hwozelo.mongodb.net/';
      const uri = 'mongodb://localhost:27017/';
      const client = new MongoClient(uri);
      // Connect to MongoDB
      await client.connect();

      console.log('Connected to MongoDB database!');

      // Access the database and collection
      const database = client.db('register');
      const collection = database.collection('registerlist');

      // Find user by email
      const user = await collection.findOne({ email });

      if (!user) {
        // User not found
        res.status(404).json({ success: false, message: 'User not found' });
        return;
      }

      // Compare hashed password
      const isPasswordMatch = await bcrypt.hash(password, 8);
    //   const hashedPassword = await bcrypt.hash(password, 10);

      if (!isPasswordMatch) {
        // Passwords don't match
        res.status(401).json({ success: false, message: 'Invalid password' });
        return;
      }

      // Passwords match, login successful
      // Set up session or JWT token for authentication

      // Close the connection when done with it
      await client.close();

      res.status(200).json({ success: true, message: 'Login successful', user });
    } catch (error) {
      console.error('Error logging in user:', error.message);
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
