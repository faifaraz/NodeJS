// db/connect.js
const mongoose = require('mongoose');

async function connectDB(uri) {
  mongoose.set('strictQuery', true);

  // Optional: useful connection logs
  mongoose.connection.on('connected', () => console.log('✅ MongoDB connected'));
  mongoose.connection.on('error', (err) => console.error('❌ MongoDB error:', err.message));
  mongoose.connection.on('disconnected', () => console.warn('⚠️ MongoDB disconnected'));

  // Connect
  return mongoose.connect(uri, {
    // These are generally sensible defaults with modern Mongoose
    autoIndex: true,
    serverSelectionTimeoutMS: 10000, // fail fast if cluster unreachable
  });
}

module.exports = connectDB;
