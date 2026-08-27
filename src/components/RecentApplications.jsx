import React from "react";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import StatusBadge from "./StatusBadge";

const RecentApplications = ({ applications = [] }) => {
  const navigate = useNavigate();

  // Show latest 5 applications
  const recentApplications = applications.slice(-5).reverse();

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-sm sm:p-6">

      {/* ================= HEADER ================= */}

      <div className="flex items-start justify-between gap-3">

        <div className="min-w-0">

          <h2 className="font-bold text-black">
            Recent Applications
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your latest job applications
          </p>

        </div>


        {/* View All */}

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

      {recentApplications.length === 0 ? (

        <div className="mt-6 rounded-lg bg-gray-50 p-6 text-center sm:p-8">

          <p className="font-medium text-gray-600">
            No applications yet
          </p>

          <p className="mt-1 text-sm text-gray-400">
            Jobs you apply for will appear here.
          </p>

        </div>

      ) : (

        <>
          {/* ================= DESKTOP / TABLET TABLE ================= */}

          <div className="mt-6 hidden overflow-x-auto md:block">

            <table className="w-full min-w-[650px]">

              {/* Table Header */}

              <thead>

                <tr className="border-b border-gray-100">

                  <th className="pb-4 text-left text-xs font-semibold uppercase text-gray-400">
                    Company
                  </th>

                  <th className="pb-4 text-left text-xs font-semibold uppercase text-gray-400">
                    Role
                  </th>

                  <th className="pb-4 text-left text-xs font-semibold uppercase text-gray-400">
                    Status
                  </th>

                  <th className="pb-4 text-left text-xs font-semibold uppercase text-gray-400">
                    Applied On
                  </th>

                  <th className="pb-4 text-right text-xs font-semibold uppercase text-gray-400">
                    Actions
                  </th>

                </tr>

              </thead>


              {/* Table Body */}

              <tbody>

                {recentApplications.map((application) => (

                  <tr
                    key={application.id}
                    className="
                      border-b
                      border-gray-50
                      text-gray-700
                      last:border-none
                    "
                  >

                    {/* Company */}

                    <td className="py-4">
                      <span className="block max-w-[150px] truncate">
                        {application.company?.display_name ||
                          "Company not available"}
                      </span>
                    </td>


                    {/* Role */}

                    <td className="py-4">
                      <span className="block max-w-[180px] truncate">
                        {application.title ||
                          "Role not available"}
                      </span>
                    </td>


                    {/* Status */}

                    <td className="py-4">
                      <StatusBadge
                        status={
                          application.applicationStatus ||
                          "Applied"
                        }
                      />
                    </td>


                    {/* Date */}

                    <td className="py-4 text-sm text-gray-500">
                      Applied recently
                    </td>


                    {/* Action */}

                    <td className="py-4 text-right">

                      <button
                        onClick={() =>
                          window.open(
                            application.redirect_url,
                            "_blank"
                          )
                        }
                        className="
                          inline-flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-gray-200
                          text-gray-500
                          transition
                          hover:border-purple-300
                          hover:text-purple-600
                        "
                        aria-label="View application"
                      >
                        <FiEye size={16} />
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* ================= MOBILE CARDS ================= */}

          <div className="mt-5 space-y-3 md:hidden">

            {recentApplications.map((application) => (

              <div
                key={application.id}
                className="
                  rounded-lg
                  border
                  border-gray-100
                  bg-gray-50
                  p-4
                "
              >

                {/* Top Row */}

                <div className="flex items-start justify-between gap-3">

                  <div className="min-w-0">

                    {/* Company */}

                    <p className="
                      truncate
                      text-sm
                      font-semibold
                      text-gray-900
                    ">
                      {application.company?.display_name ||
                        "Company not available"}
                    </p>


                    {/* Role */}

                    <p className="
                      mt-1
                      truncate
                      text-sm
                      text-gray-500
                    ">
                      {application.title ||
                        "Role not available"}
                    </p>

                  </div>


                  {/* View Button */}

                  <button
                    onClick={() =>
                      window.open(
                        application.redirect_url,
                        "_blank"
                      )
                    }
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gray-200
                      bg-white
                      text-gray-500
                      transition
                      hover:border-purple-300
                      hover:text-purple-600
                    "
                    aria-label="View application"
                  >
                    <FiEye size={16} />
                  </button>

                </div>


                {/* Bottom Row */}

                <div className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  gap-3
                ">

                  <StatusBadge
                    status={
                      application.applicationStatus ||
                      "Applied"
                    }
                  />

                  <span className="text-xs text-gray-400">
                    Applied recently
                  </span>

                </div>

              </div>

            ))}

          </div>

        </>

      )}

    </div>
  );
};

export default RecentApplications;