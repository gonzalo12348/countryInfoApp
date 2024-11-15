import axios from 'axios';
import { Link } from 'react-router-dom'; // We are using Link from react-router-dom
import { useEffect, useState } from 'react';
import './countries.css'; // Import the CSS file

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch the list of countries from the backend
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/countries`)
      .then((response) => {
        setCountries(response.data); // Set the response data to the state
      })
      .catch((error) => {
        /* eslint-disable no-console */
        console.error('Error fetching countries:', error); // Log error if the fetch fails
      });
  }, []);

  return (
    <div className="countries-container">
      <h1 className="title">Country List</h1>
      <ul className="countries-list">
        {countries.map((country) => (
          <li key={country.countryCode} className="country-item">
            <Link
              to={`/country?iso2=${country.countryCode}&name=${country.name}`}
              className="country-link"
            >
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
