const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.use(cors({ origin: 'http://localhost:3000'}))
//Define Routes
app.use('/api/logs', require('./routes/log'));
app.use('/api/techs', require('./routes/tech'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));