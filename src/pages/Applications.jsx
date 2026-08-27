import React from "react";

const Applications = ({
  applications = [],
  updateApplicationStatus,
}) => {
  return (
    <div
      className="
        min-h-screen
        bg-gray-100
        p-4
        dark:bg-gray-900
        sm:p-6
        lg:p-8
      "
    >

      {/* ================= HEADER ================= */}

      <div>

        <h1
          className="
            text-2xl
            font-bold
            text-gray-900
            dark:text-white
            sm:text-3xl
          "
        >
          Applications
        </h1>

        <p
          className="
            mt-2
            text-sm
            text-gray-500
            dark:text-gray-400
            sm:text-base
          "
        >
          Track the jobs you've applied for.
        </p>

      </div>


      {/* ================= APPLICATION COUNT ================= */}

      <div className="mt-6">

        <p
          className="
            text-sm
            text-gray-500
            dark:text-gray-400
          "
        >
          Total Applications
        </p>

        <h2
          className="
            mt-1
            text-2xl
            font-bold
            text-gray-900
            dark:text-white
          "
        >
          {applications.length}
        </h2>

      </div>


      {/* ================= EMPTY STATE ================= */}

      {applications.length === 0 ? (

        <div
          className="
            mt-8
            rounded-2xl
            border
            border-gray-100
            bg-white
            p-8
            text-center
            shadow-sm
            dark:border-gray-700
            dark:bg-gray-800
            sm:p-10
          "
        >

          <div
            className="
              mx-auto
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-purple-100
              text-purple-600
            "
          >
            ✓
          </div>

          <h2
            className="
              mt-4
              text-base
              font-semibold
              text-gray-700
              dark:text-gray-200
              sm:text-lg
            "
          >
            No applications yet
          </h2>

          <p
            className="
              mt-2
              text-sm
              text-gray-500
              dark:text-gray-400
            "
          >
            Jobs you apply for will appear here.
          </p>

        </div>

      ) : (

        /* ================= APPLICATIONS LIST ================= */

        <div className="mt-6 space-y-4 sm:mt-8">

          {applications.map((job) => (

            <div
              key={job.id}
              className="
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-4
                shadow-sm
                transition
                hover:shadow-md
                dark:border-gray-700
                dark:bg-gray-800
                sm:p-6
              "
            >

              {/* ================= TOP SECTION ================= */}

              <div
                className="
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  sm:items-start
                  sm:justify-between
                "
              >

                {/* Job Information */}

                <div className="min-w-0">

                  <h2
                    className="
                      break-words
                      text-base
                      font-bold
                      text-gray-900
                      dark:text-white
                      sm:text-lg
                    "
                  >
                    {job.title}
                  </h2>

                  <p
                    className="
                      mt-1
                      break-words
                      text-sm
                      text-gray-600
                      dark:text-gray-300
                    "
                  >
                    {job.company?.display_name ||
                      "Company not available"}
                  </p>

                </div>


                {/* ================= STATUS ================= */}

                <select
                  value={
                    job.applicationStatus ||
                    "Applied"
                  }
                  onChange={(e) =>
                    updateApplicationStatus(
                      job.id,
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    px-3
                    py-2
                    text-sm
                    font-medium
                    text-gray-700
                    outline-none
                    focus:border-purple-400
                    focus:ring-2
                    focus:ring-purple-100
                    dark:border-gray-600
                    dark:bg-gray-700
                    dark:text-gray-100
                    sm:w-auto
                  "
                >

                  <option value="Applied">
                    Applied
                  </option>

                  <option value="Under Review">
                    Under Review
                  </option>

                  <option value="Interview">
                    Interview
                  </option>

                  <option value="Selected">
                    Selected
                  </option>

                  <option value="Rejected">
                    Rejected
                  </option>

                </select>

              </div>


              {/* ================= JOB INFORMATION ================= */}

              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  gap-x-6
                  gap-y-2
                  text-xs
                  text-gray-500
                  dark:text-gray-400
                  sm:text-sm
                "
              >

                <span className="break-words">
                  📍{" "}
                  {job.location?.display_name ||
                    "Location unavailable"}
                </span>

                <span>
                  📅 Applied recently
                </span>

              </div>


              {/* ================= BOTTOM SECTION ================= */}

              <div
                className="
                  mt-5
                  flex
                  flex-col
                  gap-3
                  border-t
                  border-gray-100
                  pt-4
                  dark:border-gray-700
                  sm:mt-6
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >

                <p
                  className="
                    text-xs
                    text-gray-400
                    sm:text-sm
                  "
                >
                  Application submitted
                </p>


                <button
                  onClick={() =>
                    window.open(
                      job.redirect_url,
                      "_blank"
                    )
                  }
                  className="
                    w-full
                    rounded-lg
                    bg-gray-900
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-gray-800
                    sm:w-auto
                  "
                >
                  View Job
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default Applications;