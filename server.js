const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, User, Meeting, Tutor } = require('./models/index');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send('All fields are required');
  }

  try {
    await User.create({ username, email, password });
    res.status(201).send('User signed up successfully');
  } catch (error) {
    res.status(400).send('Error signing up user: ' + error.message);
  }
});

app.post('/schedule-meeting', async (req, res) => {
  const { title, start, end, tutorId } = req.body;

  if (!title || !start || !end || !tutorId) {
    return res.status(400).send('All fields are required');
  }

  try {
    await Meeting.create({ title, start, end, TutorId: tutorId });
    res.status(201).send('Meeting scheduled successfully');
  } catch (error) {
    res.status(400).send('Error scheduling meeting: ' + error.message);
  }
});

app.get('/meetings', async (req, res) => {
  try {
    const meetings = await Meeting.findAll();
    res.json(meetings);
  } catch (error) {
    res.status(500).send('Error fetching meetings: ' + error.message);
  }
});

app.get('/tutors', async (req, res) => {
  try {
    const tutors = await Tutor.findAll();
    res.json(tutors);
  } catch (error) {
    res.status(500).send('Error fetching tutors: ' + error.message);
  }
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});