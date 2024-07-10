// backend/routes/gis.js
const express = require('express');

const router = express.Router();

// Example GIS route
router.get('/locations', (req, res) => {
    // Placeholder data
    const locations = [
        { name: 'City Center', coordinates: [-15.7861, 35.0058] },
        // Add more locations as needed
    ];
    res.json(locations);
});

module.exports = router;
