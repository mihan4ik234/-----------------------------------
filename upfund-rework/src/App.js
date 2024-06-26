import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import AddProject from './pages/AddProject';
import Project from './pages/Project';
import Header from './components/Header';
import UserProfile from './pages/UserProfile'; // Импортируйте новую страницу

function App() {
  const [showHeader, setShowHeader] = useState(true);
  return (
    <div>
      <Router>
        <Header showHeader={showHeader} setShowHeader={setShowHeader} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth setShowHeader={setShowHeader} />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/projects/:_id" element={<Project />} />
          <Route path="/user" element={<UserProfile />} /> {/* Добавьте маршрут */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;