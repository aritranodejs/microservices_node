const express = require('express');
const router = express.Router();
const axios = require('axios');

// url of order-service
const orderServiceUrl = process.env.ORDER_SERVICE_URL || 'http://order-service:3003/orders';

// Dynamic proxy for all routes
router.all('*', async (req, res) => {
    try {
        const apiResponse = await axios({
            method: req.method,
            url: `${orderServiceUrl}${req.url}`,
            data: req.body,
            headers: req.headers,
        });
        res.status(apiResponse.status).json(apiResponse.data);
    } catch (error) {
        const status = error.response?.status || 500;
        const message = error.response?.data?.error || error.message;
        res.status(status).json({ success: false, message });
    }
});

module.exports = router;

