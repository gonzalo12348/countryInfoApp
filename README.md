# 🌎 Country Info App

Country Info App is a full-stack application that provides detailed information about countries, including population statistics, flags, and general data. It uses a React frontend and a Node.js/Express backend to deliver a seamless user experience.

## 🔧 Technologies Used
- Frontend: React, Axios

- Backend: Node.js, Express, dotenv

- APIs:
   - Nager.Date API for country data
   - CountriesNow API for population and flag data

## 📂 Environment Variables Setup

To properly run this project, you need to configure environment variables for both the frontend and backend. Follow these steps to set them up:

#### 1. Create .env Files

You need two separate .env files:

- One for the frontend: client/.env.
- One for the backend: api/.env.
  These files will store sensitive information, such as API URLs and ports.

#### 2. Define Required Variables

- Frontend (client/.env):

Add the following variable to the .env file inside the client folder:

```bash
# Frontend Configuration
REACT_APP_BACKEND_URL=http://localhost:5000/api
```

This variable defines the backend API URL that the frontend will use to make HTTP requests.

- Backend (api/.env):

Add the following variables to the .env file inside the api folder:

```bash
# Backend Configuration
PORT=5000
COUNTRY_API_URL=https://date.nager.at/api/v3
POPULATION_API_URL=https://countriesnow.space/api/v0.1/countries/population
FLAG_API_URL=https://countriesnow.space/api/v0.1/countries/flag/images
```

These variables specify:

The port on which the backend will run.
API URLs for country data, population data, and flags.

#### 3. Install Dependencies

Once the .env files are created, you need to install the project dependencies. This can be done with npm install in both the frontend (client) and backend (api) directories:

- Backend (api):

Go to the api folder and run:

```bash
npm install
```

- Frontend (client):

Go to the client folder and run:

```bash
npm install
```

This will install all required dependencies in both parts of the project.

#### 4. Running the Project

After setting up the .env files and installing dependencies, you can run the project locally.

- Backend (API):

In the api directory, start the backend server:

```bash
npm start
```

The backend will run on http://localhost:5000.

- Frontend (Client):

In the client directory, start the React development server:

```bash
npm start
```

The frontend will run on http://localhost:3000 (by default).

Once both servers are running, you should be able to access the application by navigating to http://localhost:3000 in your browser.

## 📚 Additional Information:

1. Documentation of APIs Used:

Nager.Date API: For general country data such as names and borders.
CountriesNow API: For historical population data and flags.

2. Project Structure:

Frontend (client/): Contains the React client code.
Backend (api/): Contains the Express server code.
Directories are separated for easy development and deployment.

3. Code Quality:

Tools such as ESLint and Prettier were implemented to ensure that the code is consistent and follows good practices.
Before each commit, files were reviewed and formatted correctly.

4. Project Purpose:

This project was undertaken as part of a technical challenge for a Full-Stack JS Engineer position. The challenge involved building a full-stack application within a 7-hour time limit, demonstrating both frontend and backend skills.

6. Server Parallelism:

The frontend and backend are designed to run simultaneously on different ports, allowing seamless communication and ensuring an efficient development experience.
