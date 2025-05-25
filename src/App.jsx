import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <Router>
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<MenuPlaceholder />} />
        {/* Add more routes for Contact, etc. */}
      </Routes>
    </Router>
  );
}

// Simple placeholder components for Menu and About
function MenuPlaceholder() {
  return <div style={{padding:'4rem',textAlign:'center'}}><h1>Menu Page Coming Soon</h1></div>;
}

export default App;