const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, default: 0 },
    inventory: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Product || mongoose.model('Product', productSchema);
