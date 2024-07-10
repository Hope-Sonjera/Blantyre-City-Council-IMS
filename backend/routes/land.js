// backend/routes/land.js
const express = require('express');
const Land = require('../models/Land');

const router = express.Router();

// Register new land
router.post('/register', async (req, res) => {
    const { plotNumber, location, size, owner } = req.body;
    try {
        const land = new Land({ plotNumber, location, size, owner });
        await land.save();
        res.status(201).json({ message: 'Land registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering land', error });
    }
});

// Search for land
router.get('/search', async (req, res) => {
    const { query } = req.query;
    try {
        const lands = await Land.find({
            $or: [
                { plotNumber: new RegExp(query, 'i') },
                { location: new RegExp(query, 'i') },
                { owner: new RegExp(query, 'i') },
            ],
        });
        res.status(200).json(lands);
    } catch (error) {
        res.status(500).json({ message: 'Error searching land', error });
    }
});

module.exports = router;
