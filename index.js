const express = require('express');
const connectDB = require('./db');
const addSettings = require('./routes/api/addSettings');
const settings = require('./routes/api/settings');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// app.use('/', (req, res) => res.send('API Running'));

app.use('/api/settings', settings);
// app.use('/api/nationality');
// app.use('/api/state');
app.use('/api/addSettings', addSettings);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
