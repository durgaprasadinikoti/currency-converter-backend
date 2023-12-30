const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON requests
app.use(express.json());

// Routes
const greetRoutes = require('./app/routes/currencyConverterRoutes');
app.use('/api', greetRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
