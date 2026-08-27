import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const SavedJobs = ({
  savedJobs = [],
  removeSavedJob,
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
          Saved Jobs
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
          Jobs you've saved for later.
        </p>

      </div>


      {/* ================= EMPTY STATE ================= */}

      {savedJobs.length === 0 ? (

        <div
          className="
            mt-8
            rounded-xl
            bg-white
            p-8
            text-center
            shadow-sm
            dark:bg-gray-800
            sm:p-10
          "
        >

          <div
            className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-purple-50
            "
          >
            <FaRegHeart
              className="text-purple-300"
              size={26}
            />
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
            No saved jobs yet
          </h2>

          <p
            className="
              mx-auto
              mt-2
              max-w-md
              text-sm
              leading-5
              text-gray-500
              dark:text-gray-400
            "
          >
            Save jobs from Find Jobs and they'll appear
            here.
          </p>

        </div>

      ) : (

        /* ================= SAVED JOBS ================= */

        <div className="mt-6 space-y-4 sm:mt-8">

          {savedJobs.map((job) => (

            <div
              key={job.id}
              className="
                w-full
                rounded-xl
                bg-white
                p-4
                shadow-sm
                transition
                hover:shadow-md
                dark:bg-gray-800
                sm:p-6
              "
            >

              {/* ================= TOP ================= */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >

                {/* Job Information */}

                <div className="min-w-0 flex-1">

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


                {/* Remove Saved Job */}

                <button
                  onClick={() =>
                    removeSavedJob(job.id)
                  }
                  aria-label="Remove saved job"
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-purple-50
                    text-purple-600
                    transition
                    hover:bg-red-50
                    hover:text-red-500
                  "
                >
                  <FaHeart size={18} />
                </button>

              </div>


              {/* ================= JOB INFORMATION ================= */}

              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  gap-x-4
                  gap-y-2
                  text-xs
                  text-gray-500
                  dark:text-gray-400
                  sm:text-sm
                "
              >

                {/* Location */}

                <span className="max-w-full break-words">
                  📍{" "}
                  {job.location?.display_name ||
                    "Location unavailable"}
                </span>


                {/* Salary */}

                {job.salary_min && (
                  <span>
                    ₹ {job.salary_min}+
                  </span>
                )}

              </div>


              {/* ================= DESCRIPTION ================= */}

              <p
                className="
                  mt-4
                  line-clamp-3
                  text-xs
                  leading-5
                  text-gray-500
                  dark:text-gray-400
                  sm:text-sm
                "
              >
                {job.description}
              </p>


              {/* ================= APPLY ================= */}

              <div className="mt-5">

                <a
                  href={job.redirect_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    rounded-lg
                    bg-purple-600
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-purple-700
                    sm:w-auto
                  "
                >
                  Apply Now
                </a>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default SavedJobs;