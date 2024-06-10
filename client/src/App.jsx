import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<SearchBooks />} />
            <Route path="saved" element={<SavedBooks />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
};

export default App;