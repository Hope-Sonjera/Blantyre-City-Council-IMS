// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import routes
const authRoutes = require('./routes/auth');
const landRoutes = require('./routes/land');
const gisRoutes = require('./routes/gis');
const payrollBillingRoutes = require('./routes/payrollBilling');
const financeRoutes = require('./routes/finance');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/land', landRoutes);
app.use('/api/gis', gisRoutes);
app.use('/api/payroll', payrollBillingRoutes);
app.use('/api/finance', financeRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Connection error', error);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
