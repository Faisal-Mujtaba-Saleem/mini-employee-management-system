const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('Initializing MongoDB connection...');
    // console.log(`MongoDB URI: ${process.env.MONGODB_URI}`);
    
    const db = await mongoose.connect(process.env.MONGODB_URI);

    if (!db.connection.readyState === 1 || !db.connection.readyState === 2) {
      throw new Error('MongoDB connection failed');
    }
    if (db.connection.readyState === 2) {
      console.warn('MongoDB connection is in the process of being established');
    }

    console.log(`MongoDB connected: ${db.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
}

module.exports = connectDB;