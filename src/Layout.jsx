import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const Layout = ({
  darkMode,
  toggleDarkMode,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">

      {/* ================= SIDEBAR ================= */}

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* ================= MAIN AREA ================= */}

      <div className="flex min-w-0 flex-1 flex-col">

        {/* ================= NAVBAR ================= */}

        <header className="z-40 shrink-0 bg-gray-100 px-4 pt-4 dark:bg-gray-900 sm:px-6 lg:px-8">

          <Navbar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            onOpenSidebar={() => setSidebarOpen(true)}
          />

        </header>


        {/* ================= SCROLLABLE CONTENT ================= */}

        <main className="min-h-0 flex-1 overflow-y-auto">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default Layout;