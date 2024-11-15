const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/countries', async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.COUNTRY_API_URL}/AvailableCountries`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching countries', error: error });
  }
});

// Ruta en el backend para obtener la información completa de un país
// Ruta en el backend para obtener la información completa de un país
router.get('/country', async (req, res) => {
  const { iso2, name } = req.query;
  // console.log("lollll", lol);

  try {
    // Realiza las llamadas a las APIs externas
    const [borderRes, popRes, flagRes] = await Promise.all([
      axios.get(`${process.env.COUNTRY_API_URL}/CountryInfo/${iso2}`),
      axios.post(
        `${process.env.POPULATION_API_URL}`,
        { country: name }, // Enviamos el código ISO2 en el cuerpo de la solicitud POST
        { headers: { 'Content-Type': 'application/json' } } // Aseguramos el encabezado correcto
      ),
      axios.post(
        `${process.env.FLAG_API_URL}`,
        { iso2: iso2 }, // Enviamos el código ISO2 en el cuerpo de la solicitud POST
        { headers: { 'Content-Type': 'application/json' } } // Aseguramos el encabezado correcto
      ),
    ]);

    // Procesar la respuesta de los países fronterizos
    const borders = borderRes.data?.borders || [];
    const borderCountries = borders.map((border) => ({
      commonName: border.commonName,
      officialName: border.officialName,
      countryCode: border.countryCode,
      region: border.region,
    }));

    // Obtener información de población y bandera
    const populationData = popRes.data?.data?.populationCounts || [];
    const populationHistory = populationData.map((item) => ({
      year: item.year,
      population: item.value,
    }));

    const flagUrl = flagRes.data?.data?.flag || ''; // Extrae la URL de la bandera desde la respuesta

    // Armar el objeto de respuesta
    const countryData = {
      name: borderRes.data?.commonName || 'Unknown',
      flag: flagUrl,
      borders: borderCountries,
      populationHistory,
    };

    // Enviar la respuesta al frontend
    res.json(countryData);
  } catch (error) {
    console.error('Error al obtener la información del país:', error);
    res
      .status(500)
      .json({ message: 'Error al obtener la información del país' });
  }
});

module.exports = router;
