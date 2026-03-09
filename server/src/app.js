const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const carsRoutes = require('./routes/cars');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');   

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '../public/images')));

// Routes
app.use('/api/cars', carsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);   

// Root test
app.get('/', (req, res) => {
  res.send('Server concessionaria attivo');
});

module.exports = app;