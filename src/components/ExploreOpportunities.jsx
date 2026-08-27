import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiCode,
  FiLayers,
  FiMonitor,
  FiDatabase,
} from "react-icons/fi";

const ExploreOpportunities = () => {
  const navigate = useNavigate();

  const opportunities = [
    {
      title: "Frontend Developer",
      description: "Build modern web experiences",
      icon: <FiCode size={20} />,
      search: "Frontend Developer",
    },
    {
      title: "React Developer",
      description: "Create applications with React",
      icon: <FiLayers size={20} />,
      search: "React Developer",
    },
    {
      title: "UI Developer",
      description: "Design beautiful user interfaces",
      icon: <FiMonitor size={20} />,
      search: "UI Developer",
    },
    {
      title: "Full Stack Developer",
      description: "Build complete web applications",
      icon: <FiDatabase size={20} />,
      search: "Full Stack Developer",
    },
  ];

  const handleExplore = (role) => {
    navigate(
      `/find-jobs?search=${encodeURIComponent(role)}`
    );
  };

  return (
    <div
      className="
        w-full
        rounded-xl
        bg-white
        p-4
        shadow-sm
        sm:p-6
      "
    >

      {/* ================= HEADER ================= */}

      <div>

        <div className="flex items-center gap-3">

          {/* Header Icon */}

          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-purple-100
              text-purple-600
              sm:h-10
              sm:w-10
            "
          >
            <FiLayers size={18} />
          </div>


          {/* Title */}

          <h2
            className="
              text-sm
              font-bold
              text-gray-900
              sm:text-base
            "
          >
            Explore Your Next Opportunity
          </h2>

        </div>


        {/* Description */}

        <p className="
          mt-2
          text-xs
          leading-5
          text-gray-500
          sm:text-sm
        ">
          Find roles that match your career goals.
        </p>

      </div>


      {/* ================= OPPORTUNITIES ================= */}

      <div className="mt-5 space-y-3 sm:mt-6">

        {opportunities.map((opportunity) => (

          <button
            key={opportunity.title}
            onClick={() =>
              handleExplore(opportunity.search)
            }
            className="
              group
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              border
              border-gray-100
              bg-gray-50
              p-3
              text-left
              transition
              hover:border-purple-200
              hover:bg-purple-50
              sm:gap-4
              sm:p-4
            "
          >

            {/* ================= ICON ================= */}

            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-white
                text-purple-600
                shadow-sm
                transition
                group-hover:bg-purple-100
                sm:h-10
                sm:w-10
              "
            >
              {opportunity.icon}
            </div>


            {/* ================= TEXT ================= */}

            <div className="min-w-0 flex-1">

              <h3
                className="
                  truncate
                  text-xs
                  font-semibold
                  text-gray-800
                  group-hover:text-purple-700
                  sm:text-sm
                "
              >
                {opportunity.title}
              </h3>

              <p
                className="
                  mt-1
                  truncate
                  text-xs
                  text-gray-500
                "
              >
                {opportunity.description}
              </p>

            </div>


            {/* ================= ARROW ================= */}

            <FiArrowRight
              size={17}
              className="
                shrink-0
                text-gray-400
                transition
                group-hover:translate-x-1
                group-hover:text-purple-600
              "
            />

          </button>

        ))}

      </div>

    </div>
  );
};

export default ExploreOpportunities;