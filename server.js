import express from 'express';
import routes from './routes/index';

// Initialize the Express app
const app = express();

// Set up the port from the environment or default to 5000
const PORT = process.env.PORT || 5000;

// Load all routes from routes/index.js
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
