import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, MovieDetail } from './pages/';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:imdbID" element={<MovieDetail />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
