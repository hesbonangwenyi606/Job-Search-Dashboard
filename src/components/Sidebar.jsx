import React from "react";
import { NavLink } from "react-router-dom";

import { CgNotes } from "react-icons/cg";
import { FaRegHeart, FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LuNotepadText } from "react-icons/lu";
import { PiNotepadLight } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { FiUser, FiSettings } from "react-icons/fi";

const Sidebar = ({
  isOpen = false,
  onClose = () => {},
}) => {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <RxDashboard size={20} />,
    },
    {
      name: "Find Jobs",
      path: "/find-jobs",
      icon: <IoSearch size={20} />,
    },
    {
      name: "Saved Jobs",
      path: "/saved-jobs",
      icon: <FaRegHeart size={18} />,
    },
    {
      name: "Applications",
      path: "/applications",
      icon: <LuNotepadText size={20} />,
    },
    {
      name: "Interviews",
      path: "/interviews",
      icon: <PiNotepadLight size={20} />,
    },
    {
      name: "Resume",
      path: "/resume",
      icon: <CgNotes size={20} />,
    },
  ];


  const accountItems = [
    {
      name: "Profile",
      path: "/profile",
      icon: <FiUser size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FiSettings size={20} />,
    },
  ];


  const linkClasses = ({ isActive }) =>
    `
      flex
      items-center
      gap-3
      rounded-lg
      px-4
      py-3
      text-sm
      font-medium
      transition

      ${
        isActive
          ? "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
      }
    `;


  return (
    <>

      {/* ================= MOBILE OVERLAY ================= */}

      {isOpen && (
        <div
          onClick={onClose}
          className="
            fixed
            inset-0
            z-40
            bg-black/40
            lg:hidden
          "
        />
      )}


      {/* ================= SIDEBAR ================= */}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          flex
          h-screen
          w-64
          flex-col
          overflow-hidden
          border-r
          border-gray-100
          bg-white
          transition-transform
          duration-300
          dark:border-gray-700
          dark:bg-gray-800

          lg:static
          lg:translate-x-0

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* ================= LOGO ================= */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-gray-100
            px-6
            py-5
            dark:border-gray-700
          "
        >

          <div>

            <h1 className="text-2xl font-bold text-purple-600">
              JobSphere
            </h1>

            <p className="mt-0.5 text-xs text-gray-400">
              Career Dashboard
            </p>

          </div>


          {/* MOBILE CLOSE */}

          <button
            onClick={onClose}
            className="
              text-gray-500
              hover:text-gray-900
              dark:text-gray-300
              dark:hover:text-white
              lg:hidden
            "
          >
            <FaTimes size={20} />
          </button>

        </div>


        {/* ================= SCROLLABLE MENU ================= */}

        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            px-4
            py-6
          "
        >

          {/* MENU */}

          <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Menu
          </p>

          <nav className="space-y-1">

            {menuItems.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}
                onClick={onClose}
                className={linkClasses}
              >

                {item.icon}

                <span>
                  {item.name}
                </span>

              </NavLink>

            ))}

          </nav>


          {/* ACCOUNT */}

          <p className="mb-3 mt-8 px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Account
          </p>

          <nav className="space-y-1">

            {accountItems.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}
                onClick={onClose}
                className={linkClasses}
              >

                {item.icon}

                <span>
                  {item.name}
                </span>

              </NavLink>

            ))}

          </nav>

        </div>


        {/* ================= FOOTER ================= */}

        <div
          className="
            hidden
            shrink-0
            border-t
            border-gray-100
            px-6
            py-4
            dark:border-gray-700
            sm:block
          "
        >

          <p className="text-xs text-gray-400">
            JobSphere
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Find your next opportunity.
          </p>

        </div>

      </aside>

    </>
  );
};

export default Sidebar;