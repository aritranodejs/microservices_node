const express = require('express');
const router = express.Router();
const axios = require('axios');

// Helpers
const { jsonResponse } = require('/app/shared/utils/response.js');

// url of user-service
const userServiceUrl = process.env.USER_SERVICE_URL || 'http://user-service:3001/users';

// Dynamic proxy for all routes
router.all('*', async (req, res) => {
    try {
        const apiResponse = await axios({
            method: req.method,
            url: `${userServiceUrl}${req.url}`,
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
