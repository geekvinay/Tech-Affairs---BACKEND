const express = require('express');
const alertRouter = express.Router();
const Alert = require('../../models/alerts');

alertRouter.get('/alerts', async (req, res) => {
  const tempAlert = await Alert.findOne();
  res.send(tempAlert);
});

alertRouter.post('/alerts', (req, res) => {
  const newAlert = new Alert(req.body);
  try {
    newAlert.save().then(() => {
      res.status(201).send('Successfully added the alert to list');
    });
  } catch (error) {
    console.error(error);
    res.status(400).send('Error!!!! Please try again');
  }
});

module.exports = alertRouter;
