const express = require('express');
const router = express.Router();
const axios = require('axios');

// Helpers
const { jsonResponse } = require('/app/shared/utils/response.js');

// url of product-service
const productServiceUrl = process.env.PRODUCT_SERVICE_URL || 'http://product-service:3002/products';

// Dynamic proxy for all routes
router.all('*', async (req, res) => {
    try {
        const apiResponse = await axios({
            method: req.method,
            url: `${productServiceUrl}${req.url}`,
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
