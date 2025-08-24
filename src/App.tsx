import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Quiz from './pages/Quiz';
import DecisionTree from './pages/DecisionTree';
import Result from './pages/Result';

function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/decision-tree" element={<DecisionTree />} />
          <Route path="/result/:packageId" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;