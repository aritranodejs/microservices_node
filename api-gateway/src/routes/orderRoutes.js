const express = require('express');
const router = express.Router();
const axios = require('axios');

// Helpers
const { jsonResponse } = require('/app/shared/utils/response.js');

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
        return jsonResponse(res, apiResponse.data, 'Request forwarded successfully', apiResponse.status);
    } catch (error) {
        const status = error.response?.status || 500;
        const message = error.response?.data?.error || error.message;
        return jsonResponse(res, null, message, status);
    }
});

module.exports = router;

