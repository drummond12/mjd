// server/server.js
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const noteRoutes = require('./routes/noteRouter');

dotenv.config();  // Load environment variables
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Root route handler
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use('/api/notessss', noteRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
