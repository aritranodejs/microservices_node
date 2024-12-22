const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

app.use('/users', require('./routes/userRoutes'));

app.listen(process.env.PORT, () => {
    console.log(`User service running on port ${process.env.PORT}`);
});
