import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ArticlePage from './ArticlePage';
import NoFound from "./NoFound"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </Router>
  );
}

export default App;
