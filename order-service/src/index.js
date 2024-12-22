const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use('/orders', require('./routes/orderRoutes'));

app.listen(process.env.PORT, () => {
    console.log(`Order service running on port ${process.env.PORT}`);
});
