const express = require('express');
const { connectDB } = require('./config/db');
const app = express();

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
connectDB();

app.use(express.json());

app.use('/products', require('./routes/orderRoutes'));

app.listen(process.env.PORT, () => {
    console.log(`Product service running on port ${process.env.PORT}`);
});
