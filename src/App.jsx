import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Recipespage from './pages/Recipespage';

const App = () => {
  return (
    <Router>
      <div className="text-blue-500">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/recipes" element={<Recipespage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
