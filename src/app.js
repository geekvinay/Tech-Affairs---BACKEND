const express = require('express');
const { dirname } = require('path');
const path = require('path');
const hbs = require('hbs');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

// Connecting to the database
require('./database/app');

// Importing routers from utilities
const events = require('./routes/events/app');
const alerts = require('./routes/alerts/app');

app.use(cors());
app.use(express.json());
app.use(events);
app.use(alerts);

app.get('*', (req, res) => {
  res.status(404).send('Error!!!!!');
});

app.listen(port, () => {
  console.log('Listening on port ', port);
});
