const express = require('express');
const itemRoutes = require('./routes/itemRoutes');
const authRoutes = require('./routes/authRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());

// Public auth routes
app.use('/auth', authRoutes);

// Protected item routes
app.use('/items', itemRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use(errorMiddleware);

module.exports = app;