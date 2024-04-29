const express = require('express');
const router = express.Router();
const calendarAPI = require('./calenderapi.js');

router.post('/scheduleEvent', (req, res) => {
    const { eventName, eventDate } = req.body;
    calendarAPI.scheduleEvent(eventName, eventDate)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error));
});

router.get('/getEvents', (req, res) => {
    calendarAPI.getEvents()
        .then(events => res.json(events))
        .catch(error => res.status(500).json(error));
});

module.exports = {
    router
};