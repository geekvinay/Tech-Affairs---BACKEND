const mongoose = require('mongoose');

const Event = mongoose.model('Event', {
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  club: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    require: true,
    trim: true,
  },
  hyperLink: {
    type: Date,
    require: true,
  },
});

module.exports = Event;
