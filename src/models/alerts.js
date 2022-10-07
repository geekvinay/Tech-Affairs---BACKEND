const mongoose = require('mongoose');

const Alert = mongoose.Model('Alert', {
  message: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  hyperlink: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = Alert;
