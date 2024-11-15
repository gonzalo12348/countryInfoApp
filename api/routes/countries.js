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

// Route in the backend to get the complete information of a country
router.get('/country', async (req, res) => {
  const { iso2, name } = req.query;

  try {
    // Make calls to external APIs
    const [borderRes, popRes, flagRes] = await Promise.all([
      axios.get(`${process.env.COUNTRY_API_URL}/CountryInfo/${iso2}`),
      axios.post(
        `${process.env.POPULATION_API_URL}`,
        { country: name },
        { headers: { 'Content-Type': 'application/json' } }
      ),
      axios.post(
        `${process.env.FLAG_API_URL}`,
        { iso2: iso2 },
        { headers: { 'Content-Type': 'application/json' } }
      ),
    ]);

    // Process the response from bordering countries
    const borders = borderRes.data?.borders || [];
    const borderCountries = borders.map((border) => ({
      commonName: border.commonName,
      officialName: border.officialName,
      countryCode: border.countryCode,
      region: border.region,
    }));

    // Get population and flag information
    const populationData = popRes.data?.data?.populationCounts || [];
    const populationHistory = populationData.map((item) => ({
      year: item.year,
      population: item.value,
    }));

    const flagUrl = flagRes.data?.data?.flag || ''; // Extract the flag URL from the response

    // Build the response object
    const countryData = {
      name: borderRes.data?.commonName || 'Unknown',
      flag: flagUrl,
      borders: borderCountries,
      populationHistory,
    };

    res.json(countryData);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error getting country information', error });
  }
});

module.exports = router;
