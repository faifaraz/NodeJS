const mongoose = require('mongoose');
const Product = require('../model/model');

// Create
exports.createProduct = async (req, res) => {
  try {
    const { name, price, inventory } = req.body || {};
    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'name is required' });
    }
    const prod = await Product.create({ name: name.trim(), price, inventory });
    return res.status(201).json(prod);
  } catch (err) {
    console.error('POST /api/products error:', err);
    return res.status(500).json({ error: 'Server error', detail: String(err) });
  }
};

// Read all
exports.getProducts = async (_req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }).lean();
    return res.json(products);
  } catch (err) {
    console.error('GET /api/products error:', err);
    return res.status(500).json({ error: 'Server error', detail: String(err) });
  }
};

// Read by id
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ error: 'Invalid product id' });
    }
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    return res.json(product);
  } catch (err) {
    console.error('GET /api/products/:id error:', err);
    return res.status(500).json({ error: 'Server error', detail: String(err) });
  }
};

// Update by id
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ error: 'Invalid product id' });
    }
    const { name, price, inventory } = req.body || {};
    const payload = { name, price, inventory };

    const updated = await Product.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });

    if (!updated) return res.status(404).json({ error: 'Product not found' });
    return res.json(updated);
  } catch (err) {
    console.error('PUT /api/products/:id error:', err);
    return res.status(500).json({ error: 'Server error', detail: String(err) });
  }
};

// Delete by id
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ error: 'Invalid product id' });
    }
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Product not found' });
    return res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('DELETE /api/products/:id error:', err);
    return res.status(500).json({ error: 'Server error', detail: String(err) });
  }
};
