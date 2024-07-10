// backend/models/Land.js
const mongoose = require('mongoose');

const landSchema = new mongoose.Schema({
    plotNumber: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    size: { type: String, required: true },
    owner: { type: String, required: true },
});

const Land = mongoose.model('Land', landSchema);

module.exports = Land;
