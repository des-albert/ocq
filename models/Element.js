const mongoose = require('mongoose');

const ElementSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true
  },
  selector: {
    type: String,
    required: true
  },
  options: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Element', ElementSchema);
