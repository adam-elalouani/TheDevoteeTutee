const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


let events = [
    {
        id: 1,
        title: 'Tutoring Session',
        start: '2024-05-01T10:00:00',
        end: '2024-05-01T12:00:00'
    },
    {
        id: 2,
        title: 'Tutee Meeting',
        start: '2024-05-02T14:00:00',
        end: '2024-05-01T16:00:00'
    }
];


app.get('/api/events', (req, res) => {
    res.json(events);
});


app.post('/api/events', (req, res) => {
    const newEvent = req.body;
    newEvent.id = events.length + 1;
    events.push(newEvent);
    res.status(201).json(newEvent);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});