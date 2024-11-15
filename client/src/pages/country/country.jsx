import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PopulationChart from '../../components/PopulationChart'; // Check if the path is correct

import './country.css'; // Make sure to import the CSS

export default function CountryInfo() {
  const [countryInfo, setCountryInfo] = useState(null); // State for the country information
  const location = useLocation();

  // Get query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const iso2Code = queryParams.get('iso2');
  const countryName = queryParams.get('name');

  useEffect(() => {
    if (iso2Code && countryName) {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/country`, {
        params: {
          iso2: iso2Code,
          name: countryName,
        }
      })
        .then(response => {
          setCountryInfo(response.data); // Store response data in `countryInfo`
        })
        .catch(error => {
          console.error("Error fetching country information:", error);
        });
    }
  }, [iso2Code, countryName]);

  if (!countryInfo) return <p className="loading-message">Loading country information...</p>;

  return (
    <div className="country-info-container">
      {/* Link to go back to the countries list */}
      <Link to="/" className="back-to-list-link">
        <h3>← Back to country list</h3>
      </Link>

      <h1 className="country-name">{countryInfo.name || countryInfo.name.officialName}</h1>
      <img 
        className="country-flag" 
        src={countryInfo.flag} 
        alt={`Flag of ${countryInfo.name.commonName}`} 
      />

      <h2>Bordering Countries:</h2>
      <ul className="borders-list">
        {countryInfo.borders.map(borderCountry => (
          <Link to={`/country?iso2=${borderCountry.countryCode}&name=${borderCountry.commonName}`} className="border-country-link" key={borderCountry.countryparam}>
            <li className="border-country-item">
              {borderCountry.commonName || borderCountry.officialName}
            </li>
          </Link>
        ))}
      </ul>

      <h2>Population Over Time:</h2>
      {countryInfo.populationHistory && (
        <div className="population-chart-container">
          <PopulationChart data={countryInfo.populationHistory} />
        </div>
      )}
    </div>
  );
}
