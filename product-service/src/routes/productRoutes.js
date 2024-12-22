const express = require('express');
const group = require('express-group-routes');

// Helpers
const { jsonResponse } = require('/app/shared/utils/response.js');

// Controllers

// Router
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    try {
        return jsonResponse(res, req.body, 'Welcome Product API', 200);
    } catch (error) {
        return jsonResponse(res, req.body, error.message, 500);
    }
});

module.exports = router;
