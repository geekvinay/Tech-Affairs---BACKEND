const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/techaffairs-backend', {
  useNewUrlParser: true,
});
