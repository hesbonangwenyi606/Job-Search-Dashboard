import React from "react";
import { FaBuilding } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import StatusBadge from "./StatusBadge";

const RecentActivity = ({ applications = [] }) => {
  const navigate = useNavigate();

  // Get the latest 5 applications
  const recentApplications = applications.slice(-5).reverse();

  // Create activity information from applications
  const activities = recentApplications.map((application) => {
    let action = "Applied for this job";

    if (application.applicationStatus === "Interview") {
      action = "Application moved to interview";
    }

    if (application.applicationStatus === "Under Review") {
      action = "Application is under review";
    }

    if (application.applicationStatus === "Selected") {
      action = "Application was selected";
    }

    if (application.applicationStatus === "Rejected") {
      action = "Application was rejected";
    }

    return {
      id: application.id,
      company:
        application.company?.display_name ||
        "Company not available",
      action,
      status:
        application.applicationStatus ||
        "Applied",
      time: "Recently",
    };
  });

  return (
    <div
      className="
        w-full
        rounded-lg
        bg-white
        p-4
        shadow-sm
        sm:p-6
      "
    >

      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between gap-3">

        <h2 className="font-bold text-black">
          Recent Activity
        </h2>

        <button
          onClick={() => navigate("/applications")}
          className="
            shrink-0
            cursor-pointer
            text-sm
            font-bold
            text-purple-600
            transition
            hover:text-purple-700
          "
        >
          View All
        </button>

      </div>


      {/* ================= EMPTY STATE ================= */}

      {activities.length === 0 ? (

        <div
          className="
            mt-6
            rounded-lg
            bg-gray-50
            p-6
            text-center
            sm:p-8
          "
        >

          <p className="font-medium text-gray-600">
            No recent activity
          </p>

          <p className="mt-1 text-sm text-gray-400">
            Your job application activity will appear here.
          </p>

        </div>

      ) : (

        /* ================= ACTIVITY LIST ================= */

        <div className="mt-5 sm:mt-6">

          {activities.map((activity) => (

            <div
              key={activity.id}
              className="
                flex
                items-start
                gap-3
                border-b
                border-gray-100
                py-4
                last:border-none
                sm:items-center
                sm:gap-4
              "
            >

              {/* ================= COMPANY ICON ================= */}

              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-purple-100
                  text-purple-600
                  sm:h-10
                  sm:w-10
                "
              >
                <FaBuilding size={15} />
              </div>


              {/* ================= TEXT ================= */}

              <div className="min-w-0 flex-1">

                <p
                  className="
                    truncate
                    text-sm
                    font-semibold
                    text-gray-800
                  "
                >
                  {activity.company}
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-gray-500
                    sm:text-sm
                  "
                >
                  {activity.action}
                </p>

              </div>


              {/* ================= STATUS + TIME ================= */}

              <div
                className="
                  flex
                  shrink-0
                  flex-col
                  items-end
                  gap-1.5
                  sm:gap-2
                "
              >

                <StatusBadge
                  status={activity.status}
                />

                <span className="text-xs text-gray-400">
                  {activity.time}
                </span>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default RecentActivity;