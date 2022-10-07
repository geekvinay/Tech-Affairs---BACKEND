const express = require('express');
const eventsRouter = express.Router();
const Event = require('../../models/events');

eventsRouter.get('/events', async (req, res) => {
  // limit = 2;
  // if (req.query.limit) {
  //   limit = req.query.limit;
  // }

  // ################   Add population limit here

  // const tempEvents = await Event.find().populate({
  //   path: 'description',
  //   options: {
  //     limit: 2,
  //     sort: { date: 1 },
  //   },
  // });
  const tempEvents = await Event.find();
  res.send(tempEvents);
});

eventsRouter.post('/events', (req, res) => {
  console.log(new Date(req.body.date));
  const newEvent = new Event({
    description: req.body.description,
    club: req.body.club,
    date: new Date(req.body.date),
    hyperlink: req.body.hyperlink,
  });
  try {
    newEvent.save().then(() => {
      res.status(201).send('Successfully added the event to the event list');
    });
  } catch (error) {
    console.error(error);
    res.status(400).send('Error!!!! Please try again');
  }
});

module.exports = eventsRouter;
