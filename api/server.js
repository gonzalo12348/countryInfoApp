require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const countryRoutes = require('./routes/countries'); // Asegúrate de la ruta correcta
const PORT = process.env.PORT || 5000;

// Habilitar CORS para todos los dominios
app.use(cors());

// Usa el router para las rutas de países, con una ruta base opcional
app.use('/api', countryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
