import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* ...existing or future page content... */}
    </>
  );
}

export default App;