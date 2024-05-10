const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


let users = [];
app.use(express.json());
app.use(bodyParser.json());

app.use('/auth', require('./authRoutes'));
app.use('/events', require('./eventRoutes'));
app.use('/media', require('./mediaRoutes'));
app.use('/search', require('./search'))

app.post('/signup', (req, res) => {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    if (users.some(user => user.email === email)) {
        return res.status(400).json({ message: 'User with this email already exists.' });
    }
    users.push({ fullName, email, password });
    res.redirect('/'); //route for index.html
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});