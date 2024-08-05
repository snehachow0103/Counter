import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import DetailPage from './Pages/DetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/detail">Detail</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="*" element={<div className="Page"><h1>404 Not Found</h1></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
