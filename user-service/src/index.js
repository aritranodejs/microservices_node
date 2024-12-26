const express = require('express');
const { connectDB } = require('./config/db');
const app = express();

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
connectDB();

app.use(express.json());

app.use('/users', require('./routes/userRoutes'));

app.listen(process.env.PORT, () => {
    console.log(`User service running on port ${process.env.PORT}`);
});
