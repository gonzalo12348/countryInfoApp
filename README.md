Environment Variables Setup
To run this project, you need to configure environment variables for both the frontend and backend. Follow the steps below to set them up:

1. Create the .env file
In the root of the project, create two .env files — one for the frontend (client/.env) and one for the backend (api/.env). These files will store sensitive information like API URLs and ports.

2. Required Variables
For the Frontend (React):
In the .env file inside the client folder, add the following variable:

env
Copy code
# Frontend settings
REACT_APP_BACKEND_URL=http://localhost:5000/api
This variable stores the backend API URL that the frontend will use to make requests.

For the Backend (Node.js):
In the .env file inside the api folder, add the following variables:

env
Copy code
# Backend API settings
PORT=5000
COUNTRY_API_URL=https://date.nager.at/api/v3
POPULATION_API_URL=https://countriesnow.space/api/v0.1/countries/population
FLAG_API_URL=https://countriesnow.space/api/v0.1/countries/flag/images
These variables configure the backend, including the port and the API URLs for fetching country and population data.

3. Install Dependencies
For the backend, make sure to install the dotenv package to load the environment variables:

bash
Copy code
npm install dotenv
In your backend code (typically in the main server file), load the variables:

javascript
Copy code
require('dotenv').config();

const port = process.env.PORT;
const countryApiUrl = process.env.COUNTRY_API_URL;
const populationApiUrl = process.env.POPULATION_API_URL;
const flagApiUrl = process.env.FLAG_API_URL;
For the frontend (React), any variables prefixed with REACT_APP_ will be automatically available to the client-side.

4. Add .env to .gitignore
To keep your sensitive data secure, do not commit your .env files to the repository. Ensure that .env is added to your .gitignore file in both the frontend and backend folders:

gitignore

# Ignore environment variables files
client/.env
api/.env
