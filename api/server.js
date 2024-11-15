require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const countryRoutes = require('./routes/countries'); // Make sure you are on the right path
const PORT = process.env.PORT || 5000;

// Enable CORS for all domains
app.use(cors());

// Use the router for country routes, with an optional base route
app.use('/api', countryRoutes);

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Server running on port ${PORT}`);
});
