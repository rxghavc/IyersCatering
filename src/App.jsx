import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import MenuPage from './pages/Menu';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <Router>
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;