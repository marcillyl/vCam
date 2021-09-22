const mongoose = require('mongoose');

const cameraSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  lenses: { type: [String], required: true },
  imageUrl: {
    type: String,
    required: true,
    default: 'http://127.0.0.1:3000/assets/images/Black.png',
  },
});

module.exports = mongoose.model('Camera', cameraSchema);
