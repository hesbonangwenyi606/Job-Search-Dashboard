import React, { useEffect, useState } from "react";

import {
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";

import {
  IoSearch,
} from "react-icons/io5";

import {
  FiChevronDown,
  FiMenu,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

const Navbar = ({
  darkMode,
  toggleDarkMode,
  onOpenSidebar,
}) => {

  const [search, setSearch] = useState("");

  const [profile, setProfile] = useState({
    name: "",
    role: "",
  });

  const navigate = useNavigate();


  // ================= LOAD PROFILE =================

  useEffect(() => {

    const loadProfile = () => {

      const savedProfile =
        localStorage.getItem("JobSphereProfile");

      if (savedProfile) {

        const parsedProfile =
          JSON.parse(savedProfile);

        setProfile({
          name: parsedProfile.name || "",
          role: parsedProfile.role || "",
        });

      }

    };

    loadProfile();

    window.addEventListener(
      "profileUpdated",
      loadProfile
    );

    return () => {

      window.removeEventListener(
        "profileUpdated",
        loadProfile
      );

    };

  }, []);


  // ================= SEARCH =================

  const handleSearch = () => {

    if (!search.trim()) {
      return;
    }

    navigate(
      `/find-jobs?search=${encodeURIComponent(
        search.trim()
      )}`
    );

  };


  // ================= ENTER SEARCH =================

  const handleKeyDown = (e) => {

    if (e.key === "Enter") {
      handleSearch();
    }

  };


  // ================= PROFILE INITIAL =================

  const profileInitial = profile.name
    ? profile.name.charAt(0).toUpperCase()
    : "U";


  return (

    <nav
      className="
        flex
        items-center
        justify-between
        gap-3
        rounded-xl
        bg-white
        px-4
        py-3
        shadow-sm
        dark:bg-gray-800
        sm:px-6
        sm:py-4
      "
    >

      {/* ================= HAMBURGER ================= */}

      <button
        onClick={onOpenSidebar}
        className="
          shrink-0
          text-gray-600
          transition
          hover:text-gray-900
          dark:text-gray-300
          dark:hover:text-white
          lg:hidden
        "
      >
        <FiMenu size={24} />
      </button>


      {/* ================= SEARCH ================= */}

      <div className="relative w-full max-w-[500px]">

        <IoSearch
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-400
          "
          size={20}
        />

        <input
          type="text"
          placeholder="Search jobs, companies, roles..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          onKeyDown={handleKeyDown}
          className="
            w-full
            rounded-lg
            border
            border-gray-200
            bg-gray-50
            py-2.5
            pl-11
            pr-16
            text-sm
            text-gray-700
            outline-none
            transition
            focus:border-purple-400
            focus:ring-2
            focus:ring-purple-100

            dark:border-gray-600
            dark:bg-gray-700
            dark:text-gray-100

            sm:py-3
            sm:pr-20
          "
        />

        <button
          onClick={handleSearch}
          className="
            absolute
            right-2
            top-1/2
            -translate-y-1/2
            rounded-md
            bg-purple-600
            px-2.5
            py-1.5
            text-xs
            font-semibold
            text-white
            transition
            hover:bg-purple-700
          "
        >

          <IoSearch
            className="sm:hidden"
            size={14}
          />

          <span className="hidden sm:inline">
            Search
          </span>

        </button>

      </div>


      {/* ================= RIGHT SIDE ================= */}

      <div className="flex shrink-0 items-center gap-3 sm:gap-6">

        {/* ================= DARK MODE ================= */}

        <button
          onClick={toggleDarkMode}
          className="
            text-gray-500
            transition
            hover:text-gray-900
            dark:text-gray-300
            dark:hover:text-white
          "
          title={
            darkMode
              ? "Switch to Light Mode"
              : "Switch to Dark Mode"
          }
        >

          {darkMode ? (
            <MdLightMode size={23} />
          ) : (
            <MdDarkMode size={23} />
          )}

        </button>


        {/* ================= PROFILE ================= */}

        <div
          className="
            flex
            cursor-pointer
            items-center
            gap-3
          "
          onClick={() => navigate("/profile")}
        >

          {/* PROFILE INITIAL */}

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-purple-100
              font-semibold
              text-purple-700
            "
          >
            {profileInitial}
          </div>


          {/* NAME + ROLE */}

          <div className="hidden sm:block">

            <h3
              className="
                text-sm
                font-semibold
                text-gray-900
                dark:text-white
              "
            >
              {profile.name || "User"}
            </h3>

            <p
              className="
                text-xs
                text-gray-500
                dark:text-gray-300
              "
            >
              {profile.role || "Your Role"}
            </p>

          </div>


          {/* DROPDOWN */}

          <FiChevronDown
            size={17}
            className="
              hidden
              text-gray-400
              sm:block
            "
          />

        </div>

      </div>

    </nav>
  );
};

export default Navbar;