// models/Product.js
const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    inventory_count: { type: Number, default: 0, min: 0 },
    cost: { type: Number, required: true, min: 0 },
    selling_price: { type: Number, required: true, min: 0 },
    supplier_id: { type: Schema.Types.ObjectId, ref: 'Supplier', default: null },
  },
  { timestamps: true }
);

module.exports = model('Product', productSchema);
