# TMDB Task

## Pre-requisites
- NodeJS
- NPM

## Start the backend

- Go to /backend folder
```
cd backend
```

- Get Env file from the admin or just copy paste from .env.example and put your own OMDB API KEY
```
OMDB_API_KEY=<your API key here>
PORT=5000
```

- Install Dependencies
```
npm install
```

- Start the server
```
npm run dev
```

The development server for backend will start at localhost:5000

## Backend App features
🌟 Features

- Search Movies: Retrieve a list of movies by title with pagination support.
- Fetch Movie Details: Get detailed information about a specific movie using its IMDb ID.
- Cross-Origin Resource Sharing: CORS enabled for all origins.

🛠️ Built With

- Express.js: Fast and lightweight Node.js framework.
- CORS: Middleware to handle Cross-Origin Resource Sharing.
- Node Fetch: For making HTTP requests to the OMDB API.
- Nodemon: Automatically restarts the server during development.

## Start the frontend

- Go to /frontend folder
```
cd frontend
```

- Copy the env file from .env.example OR just copy paste this
```
VITE_BACKEND_URL=http://localhost:5000
```

- Start the Development Server
```
npm run dev
```

The dev server will start at localhost:5173

## Frontend Application Features
🌟 Features

- Search Movies: Search for movies by entering a keyword.
- Infinite Scrolling: Scroll through a never-ending list of movies.
-Detailed Information: View comprehensive details about a selected movie, including actors, director, plot, ratings, and more.
-Responsive Design: Fully optimized for mobile, tablet, and desktop views.

## Technology Stack

- React.js: Frontend framework for building user interfaces.
- TypeScript: For static type checking.
- TailwindCSS: For responsive and modern UI design.
- Axios: For making HTTP requests.
- React Infinite Scroll Component: To implement infinite scrolling.
- React Spinners: For loading indicators.

## Development Machine Specs
- MacOS Sonoma
- NodeJS v20.17