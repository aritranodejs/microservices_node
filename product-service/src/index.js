const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use('/products', require('./routes/productRoutes'));

app.listen(process.env.PORT, () => {
    console.log(`Product service running on port ${process.env.PORT}`);
});
