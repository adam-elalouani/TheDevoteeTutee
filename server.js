const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mount routes
app.use('/auth', require('./authRoutes'));
app.use('/events', require('./eventRoutes'));
app.use('/media', require('./mediaRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});