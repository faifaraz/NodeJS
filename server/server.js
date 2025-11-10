// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const productRoutes = require('./routes/products');

const app = express();
app.use(express.json());

// Simple healthcheck
app.get('/health', (_, res) => res.json({ ok: true }));

// Routes
app.use('/api/products', productRoutes);

// Start
const port = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
  } catch (err) {
    console.error('Failed to start:', err.message);
    process.exit(1);
  }
})();
