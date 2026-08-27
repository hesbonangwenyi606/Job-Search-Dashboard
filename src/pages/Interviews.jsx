import React from "react";

const Interviews = ({ applications = [] }) => {

  const interviewJobs = applications.filter(
    (application) =>
      application.applicationStatus === "Interview"
  );

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
          Interviews
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
          Keep track of your upcoming interviews.
        </p>

      </div>


      {/* ================= INTERVIEW COUNT ================= */}

      <div className="mt-6">

        <p
          className="
            text-sm
            text-gray-500
            dark:text-gray-400
          "
        >
          Upcoming Interviews
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
          {interviewJobs.length}
        </h2>

      </div>


      {/* ================= EMPTY STATE ================= */}

      {interviewJobs.length === 0 ? (

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
            📅
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
            No interviews yet
          </h2>

          <p
            className="
              mx-auto
              mt-2
              max-w-md
              text-sm
              text-gray-500
              dark:text-gray-400
            "
          >
            Applications marked as "Interview" will
            appear here.
          </p>

        </div>

      ) : (

        /* ================= INTERVIEW LIST ================= */

        <div className="mt-6 space-y-4 sm:mt-8">

          {interviewJobs.map((job) => (

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


                {/* Interview Badge */}

                <span
                  className="
                    w-fit
                    rounded-full
                    bg-purple-100
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-purple-600
                    sm:text-sm
                  "
                >
                  Interview
                </span>

              </div>


              {/* ================= INTERVIEW INFORMATION ================= */}

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
                  📅 Interview date not added
                </span>

              </div>


              {/* ================= BOTTOM ================= */}

              <div
                className="
                  mt-5
                  border-t
                  border-gray-100
                  pt-4
                  dark:border-gray-700
                  sm:mt-6
                "
              >

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

export default Interviews;