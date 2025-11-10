require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/route');

const app = express();
app.use(express.json());

// API routes
app.use('/api/products', productRoutes);

// Start server only after DB connects
const PORT = process.env.PORT || 4000;
(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  }
})();
