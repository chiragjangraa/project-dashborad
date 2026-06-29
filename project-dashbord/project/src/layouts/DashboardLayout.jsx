import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function DashboardLayout({ isAdmin = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background dark:bg-dark-bg">
      {/* Gradient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 gradient-hero dark:opacity-0" />
        <div className="absolute inset-0 gradient-mesh-dark opacity-0 dark:opacity-100" />
      </div>

      <Sidebar isAdmin={isAdmin} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Main Content */}
      <div className="lg:ml-[260px] xl:ml-[280px] transition-all duration-300 relative z-10">
        <Navbar onMenuClick={() => setMobileOpen(true)} isAdmin={isAdmin} />
        <main className="p-4 lg:p-6 xl:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
