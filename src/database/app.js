const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://geekvinay002:<password>@cluster0.gkwn94o.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  }
);
