// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Calculus from './components/Calculus';
import PreAlgebra from './components/PreAlgebra';
import Algebra from './components/Algebra';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/calculus' element={<Calculus />} />
          <Route path='/prealgebra' element={<PreAlgebra />} />
          <Route path='/algebra' element={<Algebra />} />

          {/* Add additional routes here for other components */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;